FlowRouter.route('/', {
    name: 'jobboard',
    action() {
        BlazeLayout.render('MainLayout', {main: 'JobBoard'});
    }
});

FlowRouter.route('/join', {
    name: 'Join',
    action() {
        BlazeLayout.render('join');
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

FlowRouter.route('/admin2008jobpost', {
    name: 'admin',
    action() {
        BlazeLayout.render('Admin');}
});
//Shows details for individual job post.
FlowRouter.route('/jobpost/:id' , {
    name: 'jobpost',
    action() {
        BlazeLayout.render('MainLayout', {main: 'JobDetails'});
    }
});
