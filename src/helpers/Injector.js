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

	injectFromFile(file, requestType, data = {}, callback = () => {}){
		this.fetchFileContent(file, js_code => {
			const oneLineData = JSON.stringify(data).replace(/\s+/g, ' ').replace(/"/g, '\'').trim();
			const oneLineJavascript = js_code.replace(/\s+/g, ' ').trim();
			const injection =
				"var previousNode = document.getElementById('injectedScript');\
				var previousDataNode = document.getElementById('fnaChromePluginData');\
				if(previousNode){\
					document.head.removeChild(previousNode);\
				}\
				if(previousDataNode){\
					document.getElementsByTagName('body')[0].removeChild(previousDataNode);\
				}\
				var dataContainer = document.createElement('div');\
				dataContainer.setAttribute('id', 'fnaChromePluginData');\
				document.getElementsByTagName('body')[0].appendChild(dataContainer);\
				var script = document.createElement('script');\
				script.setAttribute('id', 'injectedScript');\
				script.setAttribute('type', 'text/javascript');\
				script.textContent = \"(function() {\
					const data = " + oneLineData + "; " + oneLineJavascript + "})();\";\
				document.head.appendChild(script);\
				chrome.runtime.sendMessage({ type: " + requestType + ", data: document.getElementById('fnaChromePluginData').textContent }, function(response) { \
					\
				});";
			this._injector(callback, injection);
		});
	}
}

export default ScriptInjector;
