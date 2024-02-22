// JavaScript code 
document.onkeydown=function(e)
{
    if(event.keyCode == 123)
    {
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode =='I'.charCodeAt(0))
    {
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode =='J'.charCodeAt(0))
    {
        return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0))
    {
        return false;
    }
}


AOS.init();
// Aos
AOS.init({
    delay: 1, // values from 0 to 3000, with step 50ms
    duration: 500, // values from 0 to 3000, with step 50ms
    easing: 'linear'
});

// jQurey Code
$(document).ready(function () {
 // Preloader
 $.fakeLoader({
    timeToHide:2000,
    spinner: 'spinner5',
    bgColor:" #FFC61A"
  });

    $(".count").each(function () {
        $(this)
            .prop("Counter", 0)
            .animate(
                {
                    Counter: $(this).text(),
                },
                {
                    duration: 9000,
                    offset: 120,
                    easing: "swing",
                    step: function (now) {
                        now = Number(Math.ceil(now)).toLocaleString('en');
                        $(this).text(now);
                    },
                }
            );
    });
});