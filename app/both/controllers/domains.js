DomainsController = AppController.extend({
  waitOn: function() {
     this.subscribe('userData');
    return this.subscribe('challenge');
  },
  data: {
    // Sorting
    sortingOne: Challenge.find({ domain: 'Sorting', level: 1} , {sort: {section: 1}}),
    sortingTwo: Challenge.find({ domain: 'Sorting', level: 2}, {sort: {section: 1}}),
    sortingThree: Challenge.find({ domain: 'Sorting', level: 3}, {sort: {section: 1}}),
    sortingFour: Challenge.find({ domain: 'Sorting', level: 4}, {sort: {section: 1}}),
    sortingOneCompletion: function(){
        var challenges = Challenge.find({ domain: 'Sorting', level: 1}).fetch();

        return progress(challenges);
    },
    sortingTwoCompletion: function(){
        var challenges = Challenge.find({ domain: 'Sorting', level: 2}).fetch();

        return progress(challenges);
    },
    sortingThreeCompletion: function(){
        var challenges = Challenge.find({ domain: 'Sorting', level: 3}).fetch();

        return progress(challenges);
    },
    sortingFourCompletion: function(){
        var challenges = Challenge.find({ domain: 'Sorting', level: 4}).fetch();

        return progress(challenges);
    }

    // Dynamic Programming





  },
  onBeforeAction: function (pause) {
    AccountsTemplates.ensureSignedIn.call(this, pause);
  },
  onAfterAction: function () {
    Meta.setTitle('Domains');
  }
});

DashboardController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});


function progress(challenge){
    var userCompleted = Meteor.user().completedLevels;


    challenges = _.pluck(challenge, '_id');

    var count = 0;

    for(var i=0; i<userCompleted.length; i++){
        console.log(userCompleted[i]);
        if (_.contains(challenges, userCompleted[i]))
            count ++;
    }


    return (count/challenges.length) * 100;
}
