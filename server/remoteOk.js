SyncedCron.start();

SyncedCron.add({
    name: "get RemoteOk Jobs for DB",

    schedule: function(parser){
        return parser.text('every  1 minutes');
    },
    job: function(){
        return Meteor.call("remoteOkJobs");
    }
});

Meteor.methods({
    remoteOkJobs: function(){
        var result = Meteor.http.get('https://remoteok.io/index.json');
        var data = result.data;

        for(var i = 0; i < data.length; i++){
            var job = data[i];

            var jobAttribues = {
                url: job.url,
                createdAt: job.date,
                title: job.position,
                company: job.company,
                summary: job.description
            };
            var jobWithSameLink = Jobs.findOne({url: jobAttribues.url});
            var url = jobAttribues.url;
            if(url && jobAttribues.url && jobWithSameLink){
                // throw new Meteor.error(302, "This job is already posted", jobWithSameLink._id);
            } else {
                Jobs.insert(jobAttribues);
            }
        }
        return data;
    }
});
