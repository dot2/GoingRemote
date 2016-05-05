SyncedCron.start();

SyncedCron.add({
    name: "delete old jobs from DB",

    schedule: function(parser){
        return parser.text('every 24 hours');
    },
    job: function(){
        return Meteor.call("deleteJobs");
    }
});

Meteor.methods({
    deleteJobs: function(){
        var today = new Date();
        var targetDate = new Date();

        targetDate.setDate(today.getDate() - 60);
        targetDate.setHours(0);
        targetDate.setMinutes(0);
        targetDate.setSeconds(0);

        //Remove matching documents
        Jobs.remove({createdAt: {$lt: targetDate}});
        Featured.remove({createdAt: {$lt: targetDate}});
    }
});
