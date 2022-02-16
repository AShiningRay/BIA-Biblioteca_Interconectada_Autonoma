$(document).on('click', '#mapsbutton', function () {
        if ($(".mapsframe").css("display") == "none") {
            $(".mapsframe").css("display", "block");
            window.scrollTo(0, 999999); // Scroll to the bottom of the page.
        } else {
            $(".mapsframe").css("display", "none");
        }
    });