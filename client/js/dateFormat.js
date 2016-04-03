//Formats date to display on job post
Template.registerHelper('formatDate', function(date) {
    return moment(date).format("MMM Do");
});
