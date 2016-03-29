Meteor.startup(function () {
    var cheerio = require('cheerio');

    Meteor.methods({
        workingNomadJob: function () {
            result = Meteor.http.get("https://authenticjobs.com/");
            $ = cheerio.load(result.content);
            var jobResult = [ ];
            var LatestJob = $('#jobs > #listings > li > a ').each(function (i, element) {
                var a = $(this);
                var title = a.find('.details > h3').text();
                var company = a.find('.details > h4').attr('title');
                var location = a.find('.etc > .location ').text();
                var image = a.find('img').attr('src');
                var url = a.attr('href');
                var homeUrl = 'https://authenticjobs.com';
                var createdAt =  new Date();
                var metadata = {
                    createdAt: createdAt,
                    title: title,
                    company: company,
                    url: url,
                    location: location,
                    homeUrl: homeUrl,
                    image: image
                };
                jobResult.push(metadata);
            });
            for (var i = 0; i <2000; i++) {
                var jobPost = jobResult[i];

                var jobAttribues = {
                    createdAt: jobPost.createdAt,
                    url: jobPost.url,
                    title: jobPost.title,
                    company: jobPost.company,
                    location: jobPost.location,
                    homeUrl: jobPost.homeUrl,
                    image: jobPost.image
                };
                //checks to see if job is already in db based on url
                var jobWithSameLink = Jobs.findOne({url: jobAttribues.url});
                var url = jobAttribues.url;
                if (url && jobAttribues.url && jobWithSameLink) {
                    throw new Meteor.Error(302, 'This link is already used', jobWithSameLink._id);
                }
                //checks to see if position is remote
                var jobNotRemote = Jobs.findOne({location: jobAttribues.location});
                if(jobAttribues.location === "Anywhere") {
                    Jobs.insert(jobAttribues);
                }
                // Jobs.insert(jobAttribues);
            }


            return LatestJob;
        }
    });
});
