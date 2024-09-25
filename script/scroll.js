// JavaScript Document
var Arr=["page-home","page-about","page-blog","page-contact"];

var PageIndex = 0;

var isScrolling = false;

document.addEventListener('wheel', function(event) {
    if (isScrolling) return;

    isScrolling = true;
    PageIndex = (event.deltaY > 0) ? Math.min(PageIndex + 1, Arr.length - 1) : Math.max(PageIndex - 1, 0);
    document.getElementById(Arr[PageIndex]).scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => { isScrolling = false; }, 800);
});


