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

            if (value.indexOf(CONST.TRON_GAME) != -1) {
                initTron();
            } else if (value.indexOf(CONST.SNAKE_GAME) != -1) {
                initSnake();
            }
        }
    }
});

$(document).ready(function () {
    initMenuButtons();
    initSnake();//initTron();
});

function initMenuButtons() {
    var btnOnePlayer = $("#btn-one-player");
    var btnMultiLocal = $("#btn-multi-local");
    var btnMultiOnline = $("#btn-multi-online");
    var btnOption = $("#btn-option");
    var btnExit = $("#btn-exit");

    var gameType = title.length > 0 ? title[0].innerText : "";
    var dataRequest = JSON.stringify({ "data": gameType });

    if (btnOnePlayer.length > 0) {
        btnOnePlayer.addClass("disabled");
        btnOnePlayer.prop("disabled", true);

        btnOnePlayer.click(function () {
            var title = $("#header-title");
            
            $.ajax({
                type: 'POST',
                url: '/Home/OnePlayer/',
                dataType: 'json',
                contentType: 'application/json; charset=UTF-8',
                data: dataRequest
            }).success(function (result, status) {

            }).error(function (result, status, error) {

            }).complete(function (result, status) {

            });
        });
    }

    if (btnMultiLocal.length > 0) {
        btnMultiLocal.addClass("disabled");
        btnMultiLocal.prop("disabled", true);

        btnMultiLocal.click(function () {
            var title = $("#header-title");

            $.ajax({
                type: 'POST',
                url: '/Home/MultiLocal/',
                dataType: 'json',
                contentType: 'application/json; charset=UTF-8',
                data: dataRequest
            }).success(function (result, status) {

            }).error(function (result, status, error) {

            }).complete(function (result, status) {

            });
        });
    }

    if (btnMultiOnline.length > 0) {
        btnMultiOnline.addClass("disabled");
        btnMultiOnline.prop("disabled", true);

        btnMultiOnline.click(function () {
            var title = $("#header-title");

            $.ajax({
                type: 'POST',
                url: '/Home/MultiOnline/',
                dataType: 'json',
                contentType: 'application/json; charset=UTF-8',
                data: dataRequest
            }).success(function (result, status) {

            }).error(function (result, status, error) {

            }).complete(function (result, status) {

            });
        });
    }

    if (btnOption.length > 0) {
        btnOption.addClass("disabled");
        btnOption.prop("disabled", true);

        btnOption.click(function () {
            var title = $("#header-title");

            $.ajax({
                type: 'POST',
                url: '/Home/Option/',
                dataType: 'json',
                contentType: 'application/json; charset=UTF-8',
                data: dataRequest
            }).success(function (result, status) {

            }).error(function (result, status, error) {

            }).complete(function (result, status) {

            });
        });
    }

    if (btnExit.length > 0) {
        btnExit.click(function () {
            window.close();
        });
    }
}

function initTron() {
    var body = $("body");
    var title = $("#header-title");
    var subTitle = $("#header-subtitle");
    var menu = $("#menu");
    var btnMenu = $(".btn-menu");
    var btnOnePlayer = $("#btn-one-player");

    if (body.length > 0) {
        body.removeClass("snake-body").addClass("tron-body");
    }

    if (title.length > 0) {
        title[0].innerText = CONST.TRON_TITLE;
        title.removeClass("snake-header-title").addClass("tron-header-title");
    }

    if (subTitle.length > 0) {
        subTitle.removeClass("snake-header-subtitle").addClass("tron-header-subtitle");
    }

    if (menu.length > 0) {
        menu.removeClass("snake-menu").addClass("tron-menu");
    }

    if (btnMenu.length > 0) {
        btnMenu.removeClass("snake-btn").addClass("tron-btn");
    }

    if (btnOnePlayer.length > 0) {
        btnOnePlayer.addClass("disabled");
        btnOnePlayer.prop("disabled", true);
    }
}

function initSnake() {
    var body = $("body");
    var title = $("#header-title");
    var subTitle = $("#header-subtitle");
    var menu = $("#menu");
    var btnMenu = $(".btn-menu");
    var btnOnePlayer = $("#btn-one-player");

    if (body.length > 0) {
        body.removeClass("tron-body").addClass("snake-body");
    }

    if (title.length > 0) {
        title[0].innerText = CONST.TRON_TITLE;
        title.removeClass("tron-header-title").addClass("snake-header-title");
    }

    if (subTitle.length > 0) {
        subTitle.removeClass("tron-header-subtitle").addClass("snake-header-subtitle");
    }

    if (menu.length > 0) {
        menu.removeClass("tron-menu").addClass("snake-menu");
    }

    if (btnMenu.length > 0) {
        btnMenu.removeClass("tron-btn").addClass("snake-btn");
    }

    if (btnOnePlayer.length > 0) {
        btnOnePlayer.removeClass("disabled");
        btnOnePlayer.prop("disabled", false);
    }
}