SyncedCron.start();

SyncedCron.add({
    name: "get RemoteOk Jobs for DB",

    schedule: function(parser){
        return parser.text('every 1 minutes');
    },
    job: function(){
        return Meteor.call("remoteOkJobs");
    }
});

Meteor.methods({
    remoteOkJobs: function(){
        var result = Meteor.http.get('https://remoteok.io/index.json');
        var data = result.data;
        console.log(data[0].position);


        Jobs.insert({
            createdAt: data[0].date,

            title: data[0].position,
            company: data[0].company,
            summaryData: data[0].description,
            url: data[0].url
        });

        return data;
    }
});
