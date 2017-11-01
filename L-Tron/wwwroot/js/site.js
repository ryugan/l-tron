var CONST = {};
CONST.TRON_GAME = "TRON";
CONST.SNAKE_GAME = "SNAKE";
CONST.TRON_TITLE = "L - Tron";
CONST.SNAKE_TITLE = "R - Snake";

$(document).keydown(function (event) {
    var mainpress = $(".main-press");
    var value = mainpress.val();
    var keyCode = event.keyCode;

    if (mainpress.length > 0 && value != undefined && keyCode != undefined) {
        if (value.length > 5) {
            value = value.substr(1, 5);
        }

        if (keyCode > 64 && keyCode < 91 || keyCode > 96 && keyCode < 123) {
            value += String.fromCharCode(keyCode);
            value.toUpperCase();
            mainpress.val(value);

            var body = $("body");
            var title = $("#header-title");
            var subTitle = $("#header-subtitle");
            var menu = $("#menu");
            var btnMenu = $(".btn-menu");

            if (body.length > 0 && title.length > 0 && subTitle.length > 0 && menu.length > 0 && btnMenu.length > 0) {

                if (value.indexOf(CONST.TRON_GAME) != -1) {
                    title[0].innerText = CONST.TRON_TITLE;

                    body.removeClass("snake-body").addClass("tron-body");
                    title.removeClass("snake-header-title").addClass("tron-header-title");
                    subTitle.removeClass("snake-header-subtitle").addClass("tron-header-subtitle");
                    menu.removeClass("snake-menu").addClass("tron-menu");
                    btnMenu.removeClass("snake-btn").addClass("tron-btn");

                } else if (value.indexOf(CONST.SNAKE_GAME) != -1) {
                    title[0].innerText = CONST.SNAKE_TITLE;

                    body.removeClass("tron-body").addClass("snake-body");
                    title.removeClass("tron-header-title").addClass("snake-header-title");
                    subTitle.removeClass("tron-header-subtitle").addClass("snake-header-subtitle");
                    menu.removeClass("tron-menu").addClass("snake-menu");
                    btnMenu.removeClass("tron-btn").addClass("snake-btn");
                }
            }
        }
    }
});

$(document).ready(function () {
    var title = $("#header-title");

    if (title.length > 0) {
        $("#header-title")[0].innerText = CONST.TRON_TITLE;
    }  
});
