var check = false;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  		console.log("Heloo");
  		check = !check;

  		if(check) {
  			$('img').addClass('blackswan-imageenlarger');
  		}
  		else {
  			$('img').removeClass('blackswan-imageenlarger')
  		}
});