import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import ScriptInjector from '../helpers/Injector';

class ImportExport extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			showing_results_section: false
		};
		this.injector = new ScriptInjector();

		this.requestImport = this.requestImport.bind(this);
	}

	requestImport() {
		const data = {
			action: 'import'
		};
		this.injector.injectFromFile("./components/injects/ImportExportInject.js", data);
	}

	render() {
		return (
			<ButtonToolbar>
				<Button bsStyle="primary" onClick={this.requestImport}>Importer un ABF</Button>
				<Button bsStyle="primary">Exporter au format JSON</Button>
			</ButtonToolbar>
		);
	}
}

export default ImportExport;
