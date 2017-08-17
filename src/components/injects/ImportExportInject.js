switch(data.action) {
	case 'import':
		try {
			console.log(data);
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
