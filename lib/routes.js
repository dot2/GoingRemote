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

FlowRouter.route('/articles', {
    name: 'articleboard',
    action() {
        BlazeLayout.render('MainLayout', {main: 'ArticleBoard'});
    }
});

FlowRouter.route('/admin', {
    name: 'admin',
    action() {
        BlazeLayout.render('Admin');}
});
