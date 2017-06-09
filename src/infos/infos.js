import React from 'react'
import ScriptInjector from '../helpers/Injector';

class InfosComponent extends React.Component {
	_getStore() {
		const injector = new ScriptInjector();
		injector.injectFromFile("./infos/injects/getStore.js", function(code){
			console.log(code);
			chrome.tabs.executeScript(null, {
				code: code
			});
		});
	}

	render() {
		console.log();

		return (
			<div>
				Application Infos
				<button onClick={() => this._getStore()}>Send nudes!</button>
			</div>
		);
	}
}

export default InfosComponent;