//the following two functions were inspired from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp not all code was copied. Author unkown.

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
        document.getElementById("topButton").style.display = "block";
    } else {
        document.getElementById("topButton").style.display = "none";
    }
}
//
function toTop(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
