 Meteor.startup(function () {
       //init cheerio
        var cheerio = require('cheerio');
        var count = Jobs.count(jobAttribues);
        console.log(count);
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
                   var date = a.find('.date').text();
                   //gets the url for the job post
                   var url = a.attr('href');
                   var homeUrl = 'https://weworkremotely.com';
                   var time = new Date();
                   //gathers data to push to array
                   var metadata = {
                       date: date,
                       title: title,
                       company: company,
                       url: url,
                       homeUrl: homeUrl,
                       time: time
                   };
                   jobResult.push(metadata);
                   //insert metadata into mongodb to display to user
                   // Jobs.insert(metadata);
                   // return metadata;
               });
               //display only 100 job posts
               for (var i = 0; i < 1000; i++) {
                   var jobPost = jobResult[i];

                   var jobAttribues = {
                           url: jobPost.url,
                           title: jobPost.title,
                           company: jobPost.company,
                           date: jobPost.date,
                           homeUrl: jobPost.homeUrl,
                           time: jobPost.time
                   };
                   //checks to see if job is already in db based on url
                   var jobWithSameLink = Jobs.findOne({url: jobAttribues.url});
                   if (jobAttribues.url &&  jobWithSameLink) {
                       throw new Meteor.Error(302,
                           'This link as already been posted',
                               jobWithSameLink._id);
                   }
                   //inserts new jobs into db
                   Jobs.insert(jobAttribues);
               }
               //^End of for loop
               return LatestJob;
           }
           //^End of getJob Function
       });
       //^End of Meteor Method
   });
