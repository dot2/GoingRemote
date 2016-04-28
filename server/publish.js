Meteor.publish('articles', function() {
    return Articles.find({}, {sort: {createdAt: -1}, limit: 15});
});

Meteor.publish('jobs', function() {
    return Jobs.find({ }, {sort: {createdAt: -1}});
});
Meteor.publish('paidjobs', function() {
    return PaidJobs.find({ }, {sort: {createdAt: -1}});
});

Meteor.publish('jobpostdetails',  function(id) {
    check(id, String);
    return Jobs.find({_id: id});
});
