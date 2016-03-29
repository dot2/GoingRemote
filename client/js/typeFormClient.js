Meteor.call("getTypeForm", function(error,result) {
    if (error) {
        console.log("error", error);
    }
    console.log(result);
});
