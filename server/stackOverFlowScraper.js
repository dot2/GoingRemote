 Meteor.startup(function () {
       //init cheerio
        var cheerio = require('cheerio');
       Meteor.methods({
           stackOverFlowJobs: function () {
               result = Meteor.http.get("http://stackoverflow.com/jobs?allowsremote=true");
               $ = cheerio.load(result.content);
               var jobResult = [ ];
               //function to scan and gather data from website
               var LatestJob = $('.listResults.list > .listResults > .-item').each(function(i, element) {
                   //Selects each job
                   var a = $(this);
                   //gets the job position
                   var title = a.find('.-title > h1 > a').text();
                   //gets company image
                   var company = a.find('.metadata > .employer').text();
                   //get date posted
                   var createdAt =  new Date();
                   //gets the url for the job post
                   var url = a.find('.-title > h1 > a').attr('href');
                //    var homeUrl = 'http://stackoverflow.com/jobs';
                   //gathers data to push to array
                   var metadata = {
                       createdAt: createdAt,
                       title: title,
                       company: company,
                       url: url
                    //    homeUrl: homeUrl
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
                           createdAt: jobPost.createdAt
                        //    homeUrl: jobPost.homeUrl
                   };
                   //checks to see if job is already in db based on url
                   var jobWithSameLink = Jobs.findOne({url: jobAttribues.url});
                   var url = jobAttribues.url;
                   if (url && jobAttribues.url &&  jobWithSameLink) {
                       throw new Meteor.Error(302,
                           'This link as already been posted',
                               jobWithSameLink._id);
                    } else {
                         //inserts new jobs into db
                         Jobs.insert(jobAttribues);
                    }

               }
               //^End of for loop
               return LatestJob;
           }
           //^End of getJob Function
       });
       //^End of Meteor Method
   });
