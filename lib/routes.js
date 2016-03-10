FlowRouter.route('/',{
    name: 'home',
    action() {
        BlazeLayout.render('LandingPage');
    }
});


FlowRouter.route('/jobboard', {
    name: 'jobboard',
    action() {
        BlazeLayout.render('MainLayout', {main: 'JobBoard'});
    }
});
