// JavaScript Document

jQuery(document).ready(function($) {
    // This is shoes zoomer
    $('#etalage').etalage({
        thumb_image_width: 300,
        thumb_image_height: 400,
        source_image_width: 900,
        source_image_height: 1000,
        show_hint: true,
        click_callback: function(image_anchor, instance_id) {
            alert('Callback example:\nYou clicked on an image with the anchor: "' + image_anchor + '"\n(in Etalage instance: "' + instance_id + '")');
        }
    });
    // This is for the dropdown list example:
    $('.dropdownlist').change(function() {
        etalage_show($(this).find('option:selected').attr('class'));
    });
    // range bar
    $('.range-slider').jRange({
        from: 0,
        to: 100,
        step: 1,
        scale: [0, 20, 40, 60, 80, 100],
        showLabels: true,
        format: '%s shoes',
        width: 250,
        isRange: true
    });
    // rating star
    $('.rating ul li').click(function() {
        $('.rating ul li').css('background-position', 'right top');
        for (var i = 1; i < $(this).index() + 2; i++) {
            $('.rating ul li:nth-child(' + i + ')').css('background-position', 'left top');
        }
    });


});
