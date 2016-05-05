Template.JobDetails.onCreated(function() {
    var self = this;
    self.autorun(function() {
        var id = FlowRouter.getParam('id');
        self.subscribe('jobpostdetails', id);
    });
    self.autorun(function() {
        var id = FlowRouter.getParam('id');
        self.subscribe('featuredpostdetails', id);
    });
});

//grabs the id of the card user clicks on and show the data
Template.JobDetails.helpers({
    job: ()=> {
        var id = FlowRouter.getParam('id');
        return Jobs.findOne({_id: id});
    },
    featured: ()=>{
        var id = FlowRouter.getParam('id');
        return Featured.findOne({_id: id});
    }
});

// Template.JobDetials.rendered = function () {
//   ! function (d, s, id) {
//     var js, fjs = d.getElementsByTagName(s)[0];
//     if (!d.getElementById(id)) {
//       js = d.createElement(s);
//       js.id = id;
//       js.src = "//platform.twitter.com/widgets.js";
//       fjs.parentNode.insertBefore(js, fjs);
//     }
//   }(document, "script", "twitter-wjs");
// };
