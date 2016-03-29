Meteor.startup(function() {
    var apiUrl = 'https://api.typeform.com/v1/form/QZodTN?key=4b516f3431fb345d3a9edce85e41f599422505fe&completed=true';

    var result = Meteor.http.get(apiUrl);

    // if(result.statusCode==200) {
    //     var respJson = JSON.parse(result.content);
    //     console.log("response received");
    //     return respJson;
    // } else {
    //     console.log("result issue: ", result.statusCode);
    //     var errorJson = JSON.parse(result.content);
    // }
    var data = JSON.parse(result.content);
    var answers = data.responses;
    




    // var result = HTTP.call('GET', 'https://api.typeform.com/v1/form/QZodTN?key=4b516f3431fb345d3a9edce85e41f599422505fe&completed=true', { } );
    // console.log(result);
});
