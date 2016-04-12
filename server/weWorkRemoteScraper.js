SyncedCron.start();

SyncedCron.add({
    name: "get WeWorkRemotely Jobs for DB",

    schedule: function(parser){
        return parser.text('every 1 hours');
    },
    job: function(){
        return Meteor.call("getJob")
    }
});

var cheerio = require('cheerio');
Meteor.methods({
 getJob: function () {
     result = Meteor.http.get("https://weworkremotely.com/categories/2-programming/jobs#intro");
     $ = cheerio.load(result.content);
     var jobResult = [ ];
     //function to scan and gather data from website
     var LatestJob = $('ul > li > a').each(function(i, element) {
         //Selects each job
         var a = $(this);
         //gets the job position
         var title = a.find('.title').text();
         //gets company image
         var company = a.find('.company').text();
         //get date posted
         var createdAt = new Date();
         //gets the url for the job post
         var url = a.attr('href');
         var homeUrl = 'https://weworkremotely.com';
         //takes url to get summary
         summaryInfo = Meteor.http.get(homeUrl + url);
         load = cheerio.load(summaryInfo.content);
         var summary = load('.listing-container').text();
         //gathers data to push to array
         var metadata = {
             createdAt: createdAt,
             title: title,
             company: company,
             url: url,
             homeUrl: homeUrl,
             summary: summary
         };
         jobResult.push(metadata);
         //insert metadata into mongodb to display to user
         // Jobs.insert(metadata);
         // return metadata;
     });
     //display only 2000 job posts
     for (var i = 0; i < 2000; i++) {
         var jobPost = jobResult[i];

         var jobAttribues = {
             url: jobPost.url,
             title: jobPost.title,
             company: jobPost.company,
             createdAt: jobPost.createdAt,
             homeUrl: jobPost.homeUrl,
             summary: jobPost.summary
         };
         //checks to see if job is already in db based on url
         var jobWithSameLink = Jobs.findOne({url: jobAttribues.url});
         var url = jobAttribues.url;
         if (url && jobAttribues.url &&  jobWithSameLink) {
             throw new Meteor.Error(302,
                 'This link as already been posted',
                     jobWithSameLink._id);
         }
      //    if(jobAttribues.url === "#intro ") {
      //        throw new Meteor.Error(302,
      //         'This is a blank post');
      //    } else {
      //        Jobs.insert(jobAttribues);
      //    }

         //inserts new jobs into db
         Jobs.insert(jobAttribues);
     }
     //^End of for loop
     return LatestJob;
 }
 //^End of getJob Function
});
