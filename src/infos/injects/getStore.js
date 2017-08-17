var fnaModel = Store.getModel();
var appData = $.app;
$('#fnaChromePluginData').text(JSON.stringify(
	{
		app_version: appData._application_version,
		fna_id: fnaModel.id,
		user_email: appData.userEmail,
		user_name: appData.userName
	}
));