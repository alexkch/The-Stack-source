Template.admin.events({
	"submit .new-question": function (event) {
		event.preventDefault();
		console.log("Yes the event gets called");
		var domain = parseInt(event.target.domain.value, 10);
		var subdomain = parseInt(event.target.subdomain.value, 10);
		var level = parseInt(event.target.level.value, 10);
		var section = parseInt(event.target.section.value, 10);
		var title = event.target.title.value;
		var problem = event.target.problem.value;
		var code = event.target.code.value.split("\n");

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

		//clear fields
		event.target.domain.value = "";
		event.target.subdomain.value = "";
		event.target.level.value = "";
		event.target.section.value = "";
		event.target.title.value = "";
		event.target.problem.value = "";
		event.target.code.value = "";

		console.log("New question inserted into database.");
		return false;
	}
});
