/*$(document).ready(function () {
    function init() {
        if (localStorage["contragent"]) {
            $('#contragent').val(localStorage["contragent"]);
        }
        
    }
    init();
});

$('.stored').keyup(function () {
    localStorage[$(this).attr('contragent')] = $(this).val();
});

$('#localStorageTest').submit(function() {
    localStorage.clear();
});*/

/*var inputContragent= document.getElementById("contragent");
localStorage.setItem("contragent", inputContragent.value);*/

// http://www.thomashardy.me.uk/using-html5-localstorage-on-a-form


/*function store(){
     var inputContragent= document.getElementById("contragent");
     localStorage.setItem("contragent", inputContragent.value);
    }*/

function store(){
     var contragent= document.getElementById("contragent");
     localStorage.setItem("contragent", contragent.value);
    }