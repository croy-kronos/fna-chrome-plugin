import React from 'react'
import ScriptInjector from '../helpers/Injector';
import { For } from 'jsx-control-statements';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

class InfosComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	_getStore() {
		const injector = new ScriptInjector();
		injector.injectFromFile("./infos/injects/getStore.js");
	}

	render() {
		const infos = [
			{ label: "Version", value: "1.46.0.1" },
			{ label: "FNA Id", value: 17 },
			{ label: "Utilisateur courant", value: "Fna sfl en" }
		];

		return (
			<Panel header={ <h4>Informations</h4> }>
				<ListGroup fill>
					<For each="info" of={ infos }>
						<ListGroupItem>
							<label>{ info.label }:</label>
							<span> { info.value }</span>
						</ListGroupItem>
					</For>
				</ListGroup>
			</Panel>
		);
	}
}

export default InfosComponent;