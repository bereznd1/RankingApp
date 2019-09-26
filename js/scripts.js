
$(document).ready(function () {


    function selectChoice() {
        // $('.selection').on("click", function (e) {
        $(this).closest('p').hide();
        $(this).hide();
        console.log($(this));
        // });
    }




    var itemsEntered = [];

    $("#submit-raw-list").on("click", function (e) {
        e.preventDefault();


        // MAKE IT SO IF ANY FIELDS ARE LEFT BLANK, IT DOESNT GO THRU, GIVES ERROR MESSAGE
        // ADD BACK BUTTON AFTER THEY HAVE SUBMITTED

        $("input[name='item']").each(function (index, value) {

            itemsEntered.push($(this).val());

        });

        $(".form-entry").hide();

        $(".main-wrap").append($("<div class='questions'></div>"));




        for (i = 0; i < itemsEntered.length; i++) {

            if (i == 0) {
                continue;


            }

            else {
                //console.log(itemsEntered[i] + "vs" + itemsEntered[i - 1])
                $(".questions").append("<p><a class='selection' onclick='selectChoice()'>" + itemsEntered[i] + "</a> vs. <a class='selection'>" + itemsEntered[i - 1] + "</a></p>");
                return;

            }


        }







        console.log(itemsEntered);

    });




});

