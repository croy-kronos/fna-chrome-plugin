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
		chrome.runtime.onMessage.addListener(
			function(request, sender, sendResponse) {
				console.log(JSON.parse(request.data));
			});
	}

	render() {
		return (
			<div style={{ width: '400px', height: '400px' }}>
				<PanelGroup>
					<InfosComponent />
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
