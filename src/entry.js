import React from 'react'
import ReactDOM from 'react-dom'
import InfosComponent from './infos/infos.js'
import DebugComponent from './debug/debug.js';

import ImportExport from './components/ImportExport.js';

class MasterComponent extends React.Component {
	render() {
		return (
			<div style={{ width: '400px', height: '400px' }}>
				<InfosComponent />
				<DebugComponent />
				{/* INSERT COMPONENTS HERE */}
				<ImportExport />
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