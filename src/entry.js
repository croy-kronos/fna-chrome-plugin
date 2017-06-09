import React from 'react'
import ReactDOM from 'react-dom'
import InfosComponent from './infos/infos.js'

class MasterComponent extends React.Component {
	render() {
		return (
			<div>
				<InfosComponent />
				{/* INSERT COMPONENTS HERE */}
				Hello World!
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