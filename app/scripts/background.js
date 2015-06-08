'use strict';

chrome.tabs.getSelected(null, function(tab) {
  // Send a request to the content script.
  chrome.tabs.sendRequest(tab.id, {action: "getDOM"}, function(response) {

  });
});

chrome.webRequest.onBeforeSendHeaders.addListener(function(details) {
    var requestHeaders = details.requestHeaders;
    for (var i=0; i<requestHeaders.length; ++i) {
        if (requestHeaders[i].name.toLowerCase() === 'referer') {
            // The request was certainly not initiated by a Chrome extension...
            return;
        }
    }
    // Set Referer
    requestHeaders.push({
        name: 'referer',
        // Host must match the domain in your Typekit kit settings
        value: 'https://gbcfmamgpdegdnahnmnnacjnkhehpelp/'
    });
    return {
        requestHeaders: requestHeaders
    };
}, {
    urls: ['*://use.typekit.net/*'],
    types: ['stylesheet']
}, ['requestHeaders','blocking']);

console.log('\'Allo \'Allo! Event Page for Browser Action');
