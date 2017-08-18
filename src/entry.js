import React from 'react'
import ReactDOM from 'react-dom'
import { PanelGroup } from 'react-bootstrap';
import InfosComponent from './infos/infos.js'
import DebugComponent from './debug/debug.js';
import ImportExport from './components/ImportExport.js';
import FNAPreset from './components/FNAPreset.js';

class MasterComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			infos: {}
		};

		chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
			const data = JSON.parse(request.data);
			switch(request.type){
				case 'infos':
					this.setState({ infos: data });
					break;
				case 'debug':
				case 'presets':
				case 'importExport':
				break;
			}
		});
	}

	componentWillMount() {
		chrome.tabs.executeScript({
			code:	"const previousDataNode = document.getElementById('fnaChromePluginData');\
					if(previousDataNode){\
						document.getElementsByTagName('body')[0].removeChild(previousDataNode);\
					}\
					const dataContainer = document.createElement('div');\
					dataContainer.setAttribute('id', 'fnaChromePluginData');\
					dataContainer.setAttribute('style', 'display: none;');\
					document.getElementsByTagName('body')[0].appendChild(dataContainer);"
		});
	}

	componentWillUnmount() {
		chrome.tabs.executeScript({
			code:	"const previousDataNode = document.getElementById('fnaChromePluginData');\
					if(previousDataNode){\
						document.getElementsByTagName('body')[0].removeChild(previousDataNode);\
					}"
		});
	}

	render() {
		return (
			<div style={{ width: '400px', height: '400px' }}>
				<PanelGroup>
					<InfosComponent infos={this.state.infos} />
					<DebugComponent />
					<ImportExport />
					<FNAPreset />
				</PanelGroup>
			</div>
		);
	}
}

// Entry point for the React injection into the web app
(function() {
	ReactDOM.render(
		<MasterComponent />,
		document.getElementById('react-anchor')
	)
})();
