Meteor.publish('articles', function() {
    return Articles.find({});
});

Meteor.publish('jobs', function() {
    return Jobs.find({});
});
