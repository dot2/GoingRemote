//calls the get job function from the server
Meteor.call("getJob", function(error, result) {
if (error) {
    console.log("error", error);
}
console.log(result);
});

// Meteor.call("last_action",function(err,result){
//     console.log(result); } );
// Meteor.call('getJobData', function(error, result) {
//     if (error) {
//         console.log("error", error);
//     }
//
//     console.log(result);
// });

Template.JobBoard.helpers({
    // jobs: function() {
    //     return Jobs.find().fetch();
    // }
    jobs: ()=> {
    return Jobs.find({});
}
});
