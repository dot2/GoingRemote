Template.JobDetails.onCreated(function() {
    var self = this;
    self.autorun(function() {
        var id = FlowRouter.getParam('id');
        self.subscribe('jobpostdetails', id);
    });
});

//grabs the id of the card user clicks on and show the data
Template.JobDetails.helpers({
    job: ()=> {
        var id = FlowRouter.getParam('id');
        return Jobs.findOne({_id: id});
    }
});
