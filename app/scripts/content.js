'use strict';

var firstHref = $("a[href^='http']").eq(0).attr("href");

var images = [];
for(var i = 0; i < document.images.length; i++){
  images.push(document.images[i].src);
}

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
 if (request.action == "getDOM")
  sendResponse({images});
 else
  sendResponse({}); // Send nothing..
});