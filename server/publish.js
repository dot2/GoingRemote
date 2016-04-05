Meteor.publish('articles', function() {
    return Articles.find({});
});

Meteor.publish('jobs', function() {
    return Jobs.find({ }, {sort: {createdAt: -1}, limit: 60});
});

Meteor.publish('jobpostdetails',  function(id) {
    check(id, String);
    return Jobs.find({_id: id});
});
