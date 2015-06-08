'use strict';


var images = [];
for(var i = 0; i < document.images.length; i++){
  images.push(document.images[i].src);
}

var price = "30";

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
 if (request.action == "getImages")
  sendResponse({images});
 else
  sendResponse({});
});

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
 if (request.action == "getPrice")
  sendResponse({price});
 else
  sendResponse({});
});