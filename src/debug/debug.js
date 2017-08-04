import React from 'react'
import ScriptInjector from '../helpers/Injector';
import { Button } from 'react-bootstrap';

class DebugComponent extends React.Component {
	_toggleDebug() {
		const injector = new ScriptInjector();
		injector.injectFromFile("./debug/injects/toggleDebug.js", null, function(code){
			chrome.tabs.executeScript(null, {
				code: code
			});
		});
	}

	render() {
		return (
			<div>
				<h4>Debug ABF</h4>
				<Button bsStyle="primary" onClick={() => this._toggleDebug()}>Toggle DEBUG</Button>
			</div>
		);
	}
}

export default DebugComponent;