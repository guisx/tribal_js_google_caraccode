jQuery(document).ready(function() {
    function close_accordion_section() {
        jQuery('.accordion .accordion-section-title').removeClass('active');
        jQuery('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }
    jQuery('.accordion-section-title').click(function(e) {
        var currentAttrValue = jQuery(this).attr('href');
        if(jQuery(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
            jQuery(this).addClass('active');
            jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
        e.preventDefault();
    });
});


function copy(id){
    var copyDiv = document.getElementById('textcopy' + id);
    copyDiv.focus();
    document.execCommand('SelectAll');
    document.execCommand("Copy", false, null);
}
document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll('.copy');
    
    Array.prototype.forEach.call(elems, function(elem) {
        elem.addEventListener('click', function() {
            copy(this.getAttribute("data-id"));
        }, false);
    });
});