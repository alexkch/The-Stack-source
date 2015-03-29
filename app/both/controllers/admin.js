AdminController = RouteController.extend({
    waitOn: function() {

    },
    data: {

    },
    onBeforeAction: function (pause) {
        if (!Meteor.user()) {                                                                                           // 169
            AccountsTemplates.setPrevPath(Router.current().url);                                                        // 170
            AccountsTemplates.setState(AccountsTemplates.options.defaultState, function(){                              // 171
                var err = AccountsTemplates.texts.errors.mustBeLoggedIn;                                                // 172
                AccountsTemplates.state.form.set("error", [err]);                                                       // 173
            });                                                                                                         // 174
            AccountsTemplates.avoidRedirect = true;                                                                     // 175
            // render the login template but keep the url in the browser the same                                       // 176
                                                                                                                        // 177
            var options = AccountsTemplates.routes["ensureSignedIn"];                                                   // 178
                                                                                                                        // 179
            // Determines the template to be rendered in case no specific one was configured for ensureSignedIn         // 180
            var signInRouteTemplate = AccountsTemplates.routes.signIn && AccountsTemplates.routes.signIn.template;      // 181
            var template = (options && options.template) || signInRouteTemplate || "fullPageAtForm";                    // 182
                                                                                                                        // 183
            // Determines the layout to be used in case no specific one was configured for ensureSignedIn               // 184
            var defaultLayout = AccountsTemplates.options.defaultLayout || Router.options.layoutTemplate;               // 185
            var layoutTemplate = (options && options.layoutTemplate) || defaultLayout;                                  // 186
                                                                                                                        // 187
            this.layout(layoutTemplate);                                                                                // 188
            this.render(template);                                                                                      // 189
            this.renderRegions();                                                                                       // 190
        } else {
            // if (!Roles.userIsInRole(this.userId, ['admin'])){
            //     AccountsTemplates.setPrevPath(Router.current().url);                                                        // 170
            //     AccountsTemplates.setState(AccountsTemplates.options.defaultState, function(){                              // 171
            //         var err = AccountsTemplates.texts.errors.mustBeLoggedIn;                                                // 172
            //         AccountsTemplates.state.form.set("error", [err]);                                                       // 173
            //     });                                                                                                         // 174
            //     AccountsTemplates.avoidRedirect = true;                                                                     // 175
            //     // render the login template but keep the url in the browser the same                                       // 176
            //                                                                                                                 // 177
            //     var options = AccountsTemplates.routes["ensureSignedIn"];                                                   // 178
            //                                                                                                                 // 179
            //     // Determines the template to be rendered in case no specific one was configured for ensureSignedIn         // 180
            //     var signInRouteTemplate = AccountsTemplates.routes.signIn && AccountsTemplates.routes.signIn.template;      // 181
            //     var template = (options && options.template) || signInRouteTemplate || "fullPageAtForm";                    // 182
            //                                                                                                                 // 183
            //     // Determines the layout to be used in case no specific one was configured for ensureSignedIn               // 184
            //     var defaultLayout = AccountsTemplates.options.defaultLayout || Router.options.layoutTemplate;               // 185
            //     var layoutTemplate = (options && options.layoutTemplate) || defaultLayout;                                  // 186
            //                                                                                                                 // 187
            //     this.layout(layoutTemplate);                                                                                // 188
            //     this.render(template);                                                                                      // 189
            //     this.renderRegions();
            // } else {
                this.next();
            // }                                                                                       // 191                                                                                           // 192
        }



    },
    onAfterAction: function () {
      Meta.setTitle('Dashboard');
    },
    layoutTemplate: 'appLayout'
});

AdminController.events({
  'click [data-action=logout]' : function() {
    AccountsTemplates.logout();
  }
});
