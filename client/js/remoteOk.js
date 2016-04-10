Meteor.call("remoteOkJobs", function (error, result) {
   if (error) {
     console.log("error in remoteOkJobs", error);
   }else{
    console.log("remoteOkJobs res", result);
   }
  });
