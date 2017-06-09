import React from 'react'
import ReactDOM from 'react-dom'

class InfosComponent extends React.Component {
	_injectConsoleLog(message){
		chrome.tabs.executeScript(null, {
			code: 'console.log("'+message+'")'
		})
	}

	_getStore() {

		chrome.tabs.executeScript(null, {
			file: './src/infos/injects/getStore.js'
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