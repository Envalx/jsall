$(document).ready(function () {

    $.post( "/local/templates/template/ajax/favorite.php", {
        action : 'check'
    }, function( data ) {
        setActiveFavorite(data);
    }, 'json');
})

$(document).on('change', '[data-favorite]' , function () {
    if(!$(this).prop('checked')) {
        $(this).parents('.canRemove').remove();
    }
    $.post( "/local/templates/template/ajax/favorite.php", {
        action : 'update',
        id: $(this).data('favorite')
    }, function( data ) {
        setActiveFavorite(data);
    }, 'json');
})

$(document).on('click', '.minus', function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$(document).on('click', '.plus', function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});

$(document).on('click', '[data-add-to-basket]', function () {
    let $this = $(this);
    BX.ajax.runAction('sp:tools.BasketController.add', {
        data: {
            productId: $this.data('id'),
            quantity: $this.parents('.sp-card-body').find('.catalog-item-quantity').val(),
        },
    }).then(function (response) {
        $('#basket-added .addition-result').html(response.data.message);
        $('.overlay, #basket-added').fadeIn();
        BX.onCustomEvent('OnBasketChange');
    }, function (response) {
    });
})

$(document).on('input', '#header-search-input', function () {
    $.get( "/local/templates/template/ajax/catalog_search.php", {
        q : $(this).val()
    }, function( data ) {
        $('.search-result-bx').html($(data).html()).addClass('show');
    });
})

$( ".search-result-bx" )
    .on( "mouseenter", function() {
      // console.log(1);
    } )
    .on( "mouseleave", function() {
        $( ".search-result-bx" ).removeClass('show');
    } );


$(document).on('change', '[data-basket-update]', function () {
    let $this = $(this);
    BX.ajax.runAction('sp:tools.BasketController.update', {
        data: {
            productId: $this.data('id'),
            quantity: $this.val(),
        },
    }).then(function (response) {
        $('.basket-result-list').html($(response.data));
        BX.onCustomEvent('OnBasketChange');
    }, function (response) {
    });
})

$(document).on('click', '[data-basket-delete]', function () {
    let $this = $(this);
    BX.ajax.runAction('sp:tools.BasketController.delete', {
        data: {
            productId: $this.data('id'),
        },
    }).then(function (response) {
        $('.basket-result-list').html($(response.data));
        BX.onCustomEvent('OnBasketChange');
    }, function (response) {
    });
})
$(document).on('click','.js-clear-basket',function(){
    BX.ajax.runAction('sp:tools.BasketController.clear').then(function (response) {
       location.reload();
    }, function (response) {
    });
    return false;
});

$(document).on('submit', '#promo_form', function () {
    let $this = $(this);
    BX.ajax.runAction('sp:tools.BasketController.setCoupon', {
        data: {
            coupon: $this.find('[name="coupon"]').val(),
        },
    }).then(function (response) {
        $('.basket-result-list').html($(response.data.basket));
    }, function (response) {
    });

    return false;
})

function setActiveFavorite(data = []) {

    $('[data-favorite]').prop('checked', false);
    $(data).each(function (i,v){
        $('[data-favorite="'+v+'"]').prop('checked', true);
    });
    BX.onCustomEvent('OnBasketChange');
}
