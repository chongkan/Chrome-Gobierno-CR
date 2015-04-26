chrome.browserAction.onClicked.addListener(function(tab) { // Fired when User

	chrome.tabs.executeScript(null, {
		file : "jquery-2.1.1.min.js"
	}, function() {
		chrome.tabs.executeScript(null, {
			file : "remove.js"
		});
	});

	console.log("Script Executed .. "); // Notification on Completion
});
