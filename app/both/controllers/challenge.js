ChallengeController = AppController.extend({
  // layoutTemplate: 'appLayout',
  template: 'challenge',

  waitOn: function() {
      this.subscribe('userData');
    return this.subscribe('challenge', this.params._id);
  },
  data: function() {
    return { challenge: Challenge.find({ _id: this.params._id}),
             allChallenges: Challenge.find({}),
             completion: function(){
                    //  return Meteor.call('progress', this.params._id)
                    var curr = Challenge.find({ _id: Session.get('game_id') }).fetch();
                    var challenges = Challenge.find({ domain: curr[0].domain, level: curr[0].level }).fetch();

                    var userCompleted = Meteor.user().completedLevels;


                    challenges = _.pluck(challenges, '_id');

                    var count = 0;

                    for(var i=0; i<userCompleted.length; i++){
                        console.log(userCompleted[i]);
                        if (_.contains(challenges, userCompleted[i]))
                            count ++;
                    }


                    return (count/challenges.length) * 100;
                 },
            }
    // challenge : Challenge.find({ domain: 'Sorting'}),
  },
  onBeforeAction: function (pause) {
    AccountsTemplates.ensureSignedIn.call(this, pause);
    Session.set('game_id', this.params._id);
  },
  onAfterAction: function () {
    Meta.setTitle('Challenge');
  }
});

ChallengeController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});



// // *
// // Calculate user progress
// // ========================
// function progress(challenge){
//     var userCompleted = Meteor.user().completedLevels;
//
//
//     challenges = _.pluck(challenge, '_id');
//
//     var count = 0;
//
//     for(var i=0; i<userCompleted.length; i++){
//         console.log(userCompleted[i]);
//         if (_.contains(challenges, userCompleted[i]))
//             count ++;
//     }
//
//
//     return (count/challenges.length) * 100;
// }
