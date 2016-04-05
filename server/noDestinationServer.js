Meteor.startup(function () {
    //init cheerio
    var cheerio = require('cheerio');

    Meteor.methods({
        nomadicMatt: function () {
            result = Meteor.http.get("http://www.nomadicmatt.com/travel-blog/");
            $ = cheerio.load(result.content);

            var articleResult = [ ];
            //function to collect articles
            var latestArticles = $('.content > article').each(function (i, element) {
                //selects each articles row
                var a = $(this);
                //gets the article title
                var title = a.find('.entry-header > .entry-title > a').text();
                //gets article date and author
                var info = a.find('.entry-meta').text();
                //gets article excerpt
                var excerpt = a.find('.entry-content > p').text();
                //get article image
                var image = a.find('.entry-content > a > img').attr('src');
                //gets article url
                var url = a.find('.entry-content > a').attr('href');
                //gathers all data to push to array
                var metadata = {
                    url: url,
                    title: title,
                    info: info,
                    excerpt: excerpt,
                    image: image
                };
                //pushes info to array
                articleResult.push(metadata);
            });
            //loops through articles
            for(var i = 0; i < 1000; i++) {
                var articlePost = articleResult[i];

                var articleAttribues = {
                        url: articlePost.url,
                        title: articlePost.title,
                        info: articlePost.info,
                        excerpt: articlePost.excerpt,
                        image: articlePost.image
                };
                var articleWithSameLink = Articles.findOne({url: articleAttribues.url});
                if (articleAttribues.url && articleWithSameLink) {
                    throw new Meteor.Error(302,
                    'This post is already posted',
                        articleWithSameLink._id);
                }
                Articles.insert(articleAttribues);
            }
            return latestArticles;
        }
    });
});
