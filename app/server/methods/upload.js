Meteor.methods({
	addChallenge: function (domain, subdomain, level, section, title, problem, code) {
		if (! Meteor.userId()) {
			throw new Meteor.Error("not-authorized");
		}
		
		Challenge.insert( {
			domain: domain,
			subdomain: subdomain,
			level: level,
			section: section,
			title: title,
			problem: problem,
			code: code,
			createdAt: new Date() // current time
		});
		console.log("Challenge inserted");
	}
});