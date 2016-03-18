Jobs = new Meteor.Collection('jobs');

if (Meteor.isClient) {

    Meteor.call('getJobData', function(error, result) {
        if (error) {
            console.log("error", error);
        }

        console.log(result);
    });

    Template.JobBoard.helpers({
        // jobs: function() {
        //     return Jobs.find().fetch();
        // }
    });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
      var cheerio = require('cheerio');

      Meteor.methods({
          getJobData: function() {
              result = Meteor.http.get("https://www.planetremote.co/");
              $ = cheerio.load(result.content);

              //html structure to get job data
              var headers = $('.row > a > .col > h3')
                .clone() //clone the element
                .children() //select all the children
                .remove() //remove all the children
                .end() //again go back to selected element
                .text()
                .split(" / ");

            var data = $('.row > a > .col > h3')
                .map(function (i) {
                    var row = {};
                    $(this).find('a').each(function (i) {
                        var rowName = headers[i];
                        row[rowName] = $(this).text();
                    });
                    Jobs.insert(row);
                    return row;
                }).get();

                return data;
          },
      });
  });
}
