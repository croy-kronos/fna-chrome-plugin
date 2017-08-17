import React from 'react'
import ScriptInjector from '../helpers/Injector';
import { For } from 'jsx-control-statements';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

class InfosComponent extends React.Component {
	constructor(props) {
		super(props);

		const injector = new ScriptInjector();
		injector.injectFromFile('./infos/injects/getInformations.js', 'infos');
	}

	render() {
		const { infos } = this.props;
		const labeledInfo = [
			{ label: 'Version', value: infos.app_version },
			{ label: 'FNA Id', value: infos.fna_id },
			{ label: 'Utilisateur courant', value: `${infos.user_name} (${infos.user_email})` }
		];

		return (
			<Panel header={ <h4>Informations</h4> }>
				<ListGroup fill>
					<For each="info" of={ labeledInfo }>
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