import React from 'react'
import ReactDOM from 'react-dom'

class MasterComponent extends React.Component {
	render() {
		return (
			<div>
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