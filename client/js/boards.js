// // Meteor.Spinner.options = {
// //   lines: 13, // The number of lines to draw
// //     length: 10, // The length of each line
// //     width: 5, // The line thickness
// //     radius: 15, // The radius of the inner circle
// //     corners: 0.7, // Corner roundness (0..1)
// //     rotate: 0, // The rotation offset
// //     direction: 1, // 1: clockwise, -1: counterclockwise
// //     color: '#fff', // #rgb or #rrggbb
// //     speed: 1, // Rounds per second
// //     trail: 60, // Afterglow percentage
// //     shadow: true, // Whether to render a shadow
// //     hwaccel: false, // Whether to use hardware acceleration
// //     className: 'spinner', // The CSS class to assign to the spinner
// //     zIndex: 2e9, // The z-index (defaults to 2000000000)
// //     top: 'auto', // Top position relative to parent in px
// //     left: 'auto' // Left position relative to parent in px
// //
// // };
//
// Template.JobBoard.events({
//     'click .load-more': function(event, instance){
//         event.preventDefault();
//
//         var limit = instance.limit.get();
//
//         limit += 5;
//         instance.limit.set(limit);
//     }
// });
// //
// Template.JobBoard.helpers({
//     jobs: function(){
//         return Template.instance().jobs();
//     },
//     hasMoreJobs: function(){
//         return Template.instance().jobs().count() >= Template.instance().limit.get();
//     }
// });
// //
// Template.jobs.onCreated(function() {
//     var instance = this;
//
//     instance.loaded = new ReactiveVar(0);
//     instance.limit = new ReactiveVar(5);
//
//     instance.autorun(function() {
//         console.log("Asking for "+limit+" jobs..");
//
//         // var subscription = instance.subscribe('jobs', limit);
//         if(subscription.ready()){
//             console.log("> Received "+limit+" jobs. \n\n");
//             instance.loaded.set(limit);
//         }else {
//             console.log("> Subscription is not ready yet. \n\n");
//         }
//     });
//     instance.JobBoard = function() {
//         return Jobs.find({}, {limit: instance.loaded.get()});
//     };
// });
