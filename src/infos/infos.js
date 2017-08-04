import React from 'react'
import ScriptInjector from '../helpers/Injector';
import { For } from 'jsx-control-statements';

class InfosComponent extends React.Component {
	construct() {
		this.super();
	}

	_getStore() {
		const injector = new ScriptInjector();
		injector.injectFromFile("./infos/injects/getStore.js");
	}

	render() {
		const infos = [
			{ label: "Version", value: "1.46.0.1" },
			{ label: "FNA Id", value: 17 },
			{ label: "Current user", value: "Fna sfl en" }
		];

		return (
			<div>
				<h4>Application Infos</h4>
				<ul>
					<For each="info" of={ infos }>
						<li>
							<label>{ info.label }:</label>
							<span> { info.value }</span>
						</li>
					</For>
				</ul>
			</div>
		);
	}
}

export default InfosComponent;