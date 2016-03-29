Jobs = new Meteor.Collection('jobs');

Jobs.allow({
    insert: function(){
        return true;
    }
});



JobSchema = new SimpleSchema({
    title: {
        type: String,
        label: 'Title'
    },
    company: {
        type: String,
        label: "Company"
    },
    jobDescription: {
        type: String,
        label: "Job Description"
    },
    applyInstruction: {
        type: String,
        label: "How do people apply"
    },
    companyEmail: {
        type: String,
        label: "company email"
    },
    tags: {
        type: String,
        label: "Tags"
    },
    homeUrl: {
        type: String,
        label: "HomeUrl"
    },
    url: {
        type: String,
        label: "url"
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            return new Date();
        },
        autoform: {
            type: "hidden"
        }
    }
});

Jobs.attachSchema(JobSchema);
