Meteor.methods({
  'Items.insert': function (params) {
    Items.insert(params);
},
  setCompleted: function (_id){
      // var _id = Session.get('game_id');

      // set completed for this user
      Meteor.users.update(Meteor.userId(), {$addToSet: {'completedLevels': _id}});
      //

  },
});
