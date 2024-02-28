// JavaScript Document
var Arr=["page-home","page-about","page-blog","page-contact"];

var PageIndex = 0;

var isScrolling = false;

window.addEventListener('wheel', function(event) {

	if (isScrolling == true)
		return;
	
    isScrolling = true;
	
	if (event.deltaY > 0) {
        PageIndex++;
    }
	else{
       PageIndex--;
    }
	
    PageIndex = Math.max(0, Math.min(PageIndex, Arr.length - 1));
    document.getElementById(Arr[PageIndex]).scrollIntoView({ behavior: 'smooth' });
	
	
	setTimeout(function() {
        isScrolling = false;
    }, 800);
       event.preventDefault();
    });