switch(data.action) {
	case 'import':
		try {
			const json_fna = $('#fnaChromePluginData').text();
			Store.createFna(JSON.parse(json_fna), { debug: true });
		}
		catch(error) {
			console.error('Invalid JSON format: ' + error.message);
		}
		break;

	case 'export':
		Store.exportAnonymizedModelToFile();
		break;

	default:
		console.warn(data);
		console.warn('Action not implemented.');
		break;
}
