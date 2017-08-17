import React, { Component } from 'react';
import { ButtonToolbar, Button, Panel } from 'react-bootstrap';
import ScriptInjector from '../helpers/Injector';

class ImportExport extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			showing_results_section: false
		};
		this.injector = new ScriptInjector();

		this.exportToJSON = this.exportToJSON.bind(this);
		this.requestImport = this.requestImport.bind(this);
	}

	handleAction(data) {
		this.injector.injectFromFile("./components/injects/ImportExportInject.js", data);
	}

	requestImport() {
		const input = document.createElement('input');
		let json = '';
		input.type = 'file';
		input.onchange = () => {
			const reader = new FileReader();
			reader.onload = event => {
				$('#fnaChromePluginData').text(event.target.result);
				this.handleAction({ action: 'import' });
			};
			reader.readAsText(input.files[0]);
		};
		input.click();
	}

	exportToJSON() {
		this.handleAction({ action: 'export' });
	}

	render() {
		return (
			<Panel header={ <h4>Import/Export</h4> }>
				<ButtonToolbar>
					<Button bsStyle="primary" onClick={this.requestImport}>Importer un ABF</Button>
					<Button bsStyle="primary" onClick={this.exportToJSON}>Exporter au format JSON</Button>
				</ButtonToolbar>
			</Panel>
		);
	}
}

export default ImportExport;
