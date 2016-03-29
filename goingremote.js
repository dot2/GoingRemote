// Jobs = new Meteor.Collection('jobs');
// 
// if (Meteor.isClient) {
//     Meteor.call("removeAllJobs");
//
// }
//
// if (Meteor.isServer) {
//     //check to see if post are older than 90 days
//     var clear = function() {
//         var min = new Date(new Date() - 1);
//         Jobs.remove({
//             createdAt: {$lt: min}
//         });
//     };
//     Meteor.startup(function() {
//         clear();
//         Meteor.setInterval(clear, 1000000);
//
//
//
//
//
//         // return Meteor.methods({
//         //     removeAllJobs: function() {
//         //         return Jobs.remove({createdAt: {$lt: -10}});
//         //     }
//         // });
//     });
//
// }
