/**
 * Created by jsgarneau on 17-06-09.
 */
class ScriptInjector {
	fetchFileContent(file, callback){
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, true);
		rawFile.onreadystatechange = function (event)
		{
			if(event.target.readyState === 4)
			{
				var allText = event.target.responseText;
				callback(allText);
			}
		};
		rawFile.send();
	}

	injectFromFile(file, data, callback){
		this.fetchFileContent(file, function(javascript){
			var oneLineData = JSON.stringify(data).replace(/\s+/g, ' ').trim();
			var oneLineJavascript = javascript.replace(/\s+/g, ' ').trim();
			var injection =
				`var script = document.createElement('script');
				script.setAttribute('type', 'text/javascript');
				script.textContent = '(function() { const data = ${oneLineData}; ${oneLineJavascript} })();';
				document.head.appendChild(script);`;
			callback(injection);
		});
	}
}

export default ScriptInjector;