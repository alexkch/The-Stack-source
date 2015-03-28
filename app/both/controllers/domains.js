DomainsController = AppController.extend({
  waitOn: function() {
    return this.subscribe('challenge');
  },
  data: {
    // Sorting
    sortingOne: Challenge.find({ domain: 'Sorting', level: 1} , {sort: {section: 1}}),
    sortingTwo: Challenge.find({ domain: 'Sorting', level: 2}, {sort: {section: 1}}),
    sortingThree: Challenge.find({ domain: 'Sorting', level: 3}, {sort: {section: 1}}),
    sortingFour: Challenge.find({ domain: 'Sorting', level: 4}, {sort: {section: 1}}),
    sortingOneCompletion: function(){
        var challenges = Challenge.find({ domain: 'Sorting', level: 1});



    },

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
