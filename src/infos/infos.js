document.addEventListener('DOMContentLoaded', function() {
	const button = document.getElementById('sendNudes');
	var currentTab;

	chrome.tabs.query({
		active: true,
		currentWindow: true
	}, function (tabs) {
		currentTab = tabs[0];
	});

	button.addEventListener('click', function(){
		console.log(chrome.extension.getBackgroundPage());
		chrome.tabs.executeScript(currentTab.id, {
			code: 'console.log("pewpew")'
		})
	});
});