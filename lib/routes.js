// FlowRouter.route('/',{
//     name: 'home',
//     action() {
//         BlazeLayout.render('LandingPage');
//     }
// });


FlowRouter.route('/', {
    name: 'jobboard',
    action() {
        BlazeLayout.render('MainLayout', {main: 'JobBoard'});
    }
});

FlowRouter.route('/postjob', {
    name: 'PostJob',
    action() {
        BlazeLayout.render('PostJob');
    }
});
