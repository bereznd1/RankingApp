
$(document).ready(function () {

    var itemsEntered = [];

    $("#submit-raw-list").on("click", function (e) {
        e.preventDefault();


        $("input[name='item']").each(function (index, value) {

            itemsEntered.push($(this).val());

        });

        $(".form-entry").hide();

        $(".main-wrap").append($("<div class='questions'></div>"));

        console.log(itemsEntered);

    });

});

