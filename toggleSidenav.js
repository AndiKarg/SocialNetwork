$(document).ready(function() {

    $("#hideMenu").click(function() {
            hide();
    })

    $("#showMenu").click(function() {
            show();
    });

    var arr = [];
    arr.forEach(function(e, i) {
        
    });

    function hide() {
        $('.navheader').css("display", "none");
        $('.navitems').css("display", "none");
        $('.navfooter').css("display", "none");
        $('.hideMenu').css("display", "none");
        $('#hideMenu').css("display", "none");
        $('#showMenu').css("display", "block");
        $(".sidenav").css("width", "40px");
        $(".sidenavitem").css("width", "40px");
        
    }

    function show() {
        $(".sidenav").css("width", "30%");
        $(".sidenavitem").css("width", "27.5%");
        $('.navheader').css("display", "block");
        $('.navitems').css("display", "block");
        $('.navfooter').css("display", "block");
        $('.hideMenu').css("display", "block");
        $('#showMenu').css("display", "none");
        $('#hideMenu').css("display", "block");
    }
});