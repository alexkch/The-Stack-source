Meteor.methods({
        progress: function(id){
                var curr = Challenge.find({ _id: id }).fetch();
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
                // console.log((count/challenges.length) * 100);
                // return 100;

        },
});
