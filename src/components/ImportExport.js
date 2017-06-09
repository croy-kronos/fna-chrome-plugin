import React, { Component } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

class ImportExport extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			showing_results_section: false
		};

		this.requestImport = this.requestImport.bind(this);
	}

	componentWilMount() {
		document.addEventListener("message", (e) => {
			console.log(e.data.text);
		});
	}

	requestImport() {
		chrome.tabs.executeScript(null, {file: './src/helpers/ImportExportHelper.js'});
	}

	render() {
		return (
			<ButtonToolbar>
				<Button bsStyle="primary" onClick={this.requestImport}>Import FNA</Button>
				<Button bsStyle="primary">Export to JSON</Button>
			</ButtonToolbar>
		);
	}
}

export default ImportExport;