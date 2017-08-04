class ScriptInjector {
	constructor() {
		this._injector = function(callback, code_to_inject) {
			chrome.tabs.executeScript(null, {
				code: code_to_inject
			});
			callback();
		};
	}

	fetchFileContent(file, callback){
		const rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, true);
		rawFile.onreadystatechange = event => {
			if(event.target.readyState === 4) {
				callback(event.target.responseText);
			}
		};
		rawFile.send();
	}

	injectFromFile(file, data, callback = () => {}){
		this.fetchFileContent(file, js_code => {
			const oneLineData = JSON.stringify(data).replace(/\s+/g, ' ').replace(/"/g, '\'').trim();
			const oneLineJavascript = js_code.replace(/\s+/g, ' ').trim();
			const injection =
				"var script = document.createElement('script');" +
				"script.setAttribute('type', 'text/javascript');" +
				"script.textContent = \"(function() { const data = " + oneLineData + "; " + oneLineJavascript + " })();\";" +
				"document.head.appendChild(script);"
			this._injector(callback, injection);
		});
	}
}

export default ScriptInjector;
