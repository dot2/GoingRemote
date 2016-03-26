//calls the get job function from the server
Meteor.call("getJob", function(error, result) {
if (error) {
    console.log("error", error);
}
console.log(result);
});

Template.JobBoard.onCreated(function () {
    var self= this;
    self.autorun(function() {
        self.subscribe('jobs');
    });
});

Template.JobBoard.helpers({
    // jobs: function() {
    //     return Jobs.find().fetch();
    // }
    jobs: ()=> {
    return Jobs.find({});
}
});
