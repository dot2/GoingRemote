Meteor.call("getArticles", function(error, result) {
    if (error) {
        console.log("error", error);
    }
    console.log(result);
});

Template.ArticleBoard.helpers({
    articles: ()=> {
        return Articles.find({});
    }
});
