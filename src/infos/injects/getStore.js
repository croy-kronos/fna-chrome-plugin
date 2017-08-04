console.log(data);
chrome.runtime.sendMessage(data.id, { greeting: data.myTextFromData });