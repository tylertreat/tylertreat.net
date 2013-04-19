(function($) {
    $.fn.goTo = function() {
        // Temporarily disable waypoints
        setWaypoints('disable');
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, {
            duration: 'fast',
            complete: function() {
                // Re-enable waypoints
                setWaypoints('enable');
            }
        });
        return this;
    }
})(jQuery);

function menuSelect(selected, selectedMenu) {
    menuHighlight(selectedMenu);
    selected.goTo();
}

function menuHighlight(selectedMenu) {
    $('#menu').find('a').each(function(i) { 
        $(this).removeAttr('class');
    });
    selectedMenu.attr('class', 'selected');
}

function setWaypoints(option) {
    $('#home').waypoint(option);
    $('#about-me').waypoint(option);
    $('#professional').waypoint(option);
    $('#academic').waypoint(option);
}

$(document).ready(function() {
    $('#home').waypoint(function(direction) {
        menuHighlight($('#home-link'));
    }, {offset: -1});
    $('#about-me').waypoint(function(direction) {
        menuHighlight($('#about-link'));
    });
    $('#professional').waypoint(function(direction) {
        menuHighlight($('#professional-link'));
    });
    $('#academic').waypoint(function(direction) {
        menuHighlight($('#academic-link'));
    });
});