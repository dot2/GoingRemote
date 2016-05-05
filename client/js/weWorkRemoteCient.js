//calls the get job function from the server
// Meteor.call("getJob", function(error, result) {
// if (error) {
//     console.log("error", error);
// }
// console.log(result);
// });

Template.JobBoard.onCreated(function () {
    var self= this;
    self.autorun(function() {
        self.subscribe('jobs');
        self.subscribe('featured');
    });
});


Template.JobBoard.helpers({
    jobs: ()=> {
        return Jobs.find({}, {sort: {createdAt: -1}});
    },
    featured: ()=>{
        return Featured.find({},{sort: {createdAt: -1}});
    }
});

// Template.JobBoard. = function() {
//         return Jobs.find().fetch().reverse();
// };
