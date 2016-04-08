Jobs = new Meteor.Collection('jobs');

// JobIndex = new EasySearch.Index({
//     collection: Jobs,
//     fields: ['title', 'company'],
//     engine: new EasySearch.Minimongo()
// });

// JobIndex = new EasySearch.Index({
//     engine: new EasySearch.MongoDB({
//         sort: function () {
//             return {createdAt: -1};
//         }
//     }),
//     collection: Jobs,
//     fields: ['_id','title', 'company'],
//     defaultSearchOption: {
//         limit: 10
//     }
// });


Jobs.allow({
    insert: function(){
        return true;
    }
});



JobSchema = new SimpleSchema({
    title: {
        type: String,
        optional: true,
        label: 'Title'
    },
    company: {
        type: String,
        optional: true,
        label: "Company"
    },
    jobDescription: {
        type: String,
        optional: true,
        label: "Job Description"
    },
    applyInstruction: {
        type: String,
        optional: true,
        label: "How do people apply"
    },
    companyEmail: {
        type: String,
        optional: true,
        label: "company email",
        autoform: {
            afFieldInput: {
                type: "email"
            }
        }
    },
    tags: {
        type: String,
        optional: true,
        label: "Tags"
    },
    homeUrl: {
        type: String,
        optional: true,
        label: "HomeUrl",
        autoform: {
            afFieldInput: {
                type: "url"
            }
        }
    },
    url: {
        type: String,
        optional: true,
        label: "url",
        autoform: {
            afFieldInput: {
                type: 'url'
            }
        }
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
