import React from 'react'
import ScriptInjector from '../helpers/Injector';

class InfosComponent extends React.Component {
	_getStore() {
		const data = {
			myTextFromData: 'This is my text'
		};
		const injector = new ScriptInjector();
		injector.injectFromFile("./infos/injects/getStore.js", data, function(code){
			chrome.tabs.executeScript(null, {
				code: code
			});
		});
	}

	render() {
		return (
			<div>
				Application Infos
				<button onClick={() => this._getStore()}>Send nudes!</button>
			</div>
		);
	}
}

export default InfosComponent;