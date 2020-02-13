$(document).ready(function() {		
    $('.js-lang-cur').click(function(){
        $(this).siblings('.js-lang-pop').fadeIn();
    });
    $('.js-lang-pop a').click(function(){
        $(this).siblings('.js-lang-pop').fadeOut();
    });
    $(window).on("load",function(){
        $(".js-mCSB").mCustomScrollbar();
    });

    $(document).mouseup(function(e){
        var curTarget = $('.js-lang-pop');
        if(!curTarget.is(e.target) && curTarget.has(e.target).length === 0){
            $('.js-lang-pop').fadeOut();
        }
    });

    $('.js-form button').click(function(e){
        e.preventDefault();
        var form = $(this).closest('.js-form');
        var isErrors = false;
        form.find('.js-validation').removeClass('error');
        form.find('.js-validation').each(function(){
            if($(this).val() == '') {
                $(this).addClass('error');
                isErrors = true;
            }
        });
        if(isErrors){
            return false;
        }
        else {
            form.submit();
        }
    });

    $('.js-menu-but').click(function(){
        $('.js-menu').slideToggle();
    })


    $('.js-val-cur').click(function(){
        $(this).siblings('.js-val-pop').fadeIn();
    });
    $('.js-val-pop a').click(function(){
        $(this).siblings('.js-val-pop').fadeOut();
    });

    $(document).mouseup(function(e){
        $('.js-val-pop').fadeOut();
    });

    $('.js-val-sel').click(function(e){
        e.preventDefault();
        $(this).siblings('.js-val-sel').removeClass('current')
        $(this).addClass('current');
        $('.js-val-cur').text($(this).attr('data-value'));
    });

    $('.iswifi').change(function(){
        if($(this).prop('checked')) {
            $('.js-scheme-img').css('visibility', 'hidden');
            $('.js-scheme-img2').css('visibility', 'visible');
        }
        else {
            $('.js-scheme-img').css('visibility', 'visible');
            $('.js-scheme-img2').css('visibility', 'hidden');
        }
        $('.js-iswifi-change').each(function(){
            if($('.iswifi').prop('checked')) {
                $(this).text($(this).attr('data-ifis'));
            }
            else {
                $(this).text($(this).attr('data-ifnone'));
            }
        });
    });
    $('.isexit').change(function(){
        $('.js-isexit-change-img').each(function(){
            if($('.isexit').prop('checked')) {
                $(this).find('img').attr('src', $(this).attr('data-ifis'));
            }
            else {
                $(this).find('img').attr('src', $(this).attr('data-ifnone'));
            }
        });
        $('.js-isexit-change-txt').each(function(){
            if($('.isexit').prop('checked')) {
                $(this).text($(this).attr('data-ifis'));
            }
            else {
                $(this).text($(this).attr('data-ifnone'));
            }
        });
    });
});
