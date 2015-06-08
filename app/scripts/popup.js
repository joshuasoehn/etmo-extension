'use strict';

console.log('\'Allo \'Allo! Popup');

chrome.tabs.getSelected(null, function(tab) {

  chrome.tabs.sendRequest(tab.id, {action: "getDOM"}, function(response) {
    $.each( response.images, function( key, value ) {
      $(".images").append("<img src='" + value + "'/>");
    });
    $(".images img").each( function() {
      if ( $(this).get(0).naturalWidth < 250 ) {
        $(this).remove();
      }
    });
  });

  $(".product_name").val(tab.title);
  $(".product_url").val(tab.url);

});

$(function(){

  $(".images").delegate('img', 'click', function() {
    if (!$(this).hasClass("selected")) {
      $("img.selected").removeClass("selected");
      $(this).addClass("selected");
    }
    $(".product_image").val(this.src);
  });

});