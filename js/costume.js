$(function () {
    $('#nav-icon3').click(function () {
        $(this).toggleClass('open');
    });
});

$(document).on('change', '[data-offer]', function () {
    $.ajax({
        type: "GET",
        url: window.location.href,
        data: {offer_id: $(this).attr('data-offer')},
        success: function (data) {
            $('.tq-cart-res .tq-price-res').html($(data).find('.tq-price-res').html());
            $('.tq-cart-res .cart-info').html($(data).find('.cart-info').html());
        }
    });
});

$(document).on('click', '.popup-open', function () {
    event.preventDefault()
    $('.overlay, ' + $(this).attr('href')).fadeIn();
})

$('.pop-enter').on('click', function (event) {

})
if ($("#price-slider").length > 0) {

    $("#price-slider").ionRangeSlider({
        type: "double",
        min: $('#arrFilter_P1_MIN').data('min'),
        max: $('#arrFilter_P1_MAX').data('min'),
        grid: true,
        from: $('#arrFilter_P1_MIN').val(),
        to: $('#arrFilter_P1_MAX').val(),
        onChange: function (data) {
            console.log(data);
            $('#arrFilter_P1_MAX').val(data.to);
            $('#arrFilter_P1_MIN').val(data.from);
        }
    });

}

$(document).on('change', '[name="sort"]', function () {
    $(this).parents('form').submit();
})

/*Личный кабинет Start*/

$(document).on('submit', '[name=card-activate]', function () {
    const form = this;
    const formData = new FormData(this);
    BX.ajax.runComponentAction('sp:personal',
        'cardActivate', {
            mode: 'class',
            data: formData,
        })
        .then(function (response) {
            $('.active-cart').find('.notify').html(response.data.msg);
        }, function (response) {
        });
    return false;
});
$(document).on('click', '[data-red]', function () {

    const input = $(this).closest('.inp').find('[data-input]');
    input.prop('disabled', false);
    $(this).parent().html(
        '<a href="" class="save" data-save>Сохранить</a><a href="" class="del" data-del>Отмена</a>'
    );
    return false;
});
$(document).on('click', '[data-del]', function () {

    const input = $(this).closest('.inp').find('[data-input]');
    input.prop('disabled', true);
    $(this).parent().html(
        '<a href="" class="red" data-red>Редактировать</a>'
    );
    return false;
});
$(document).on('click', '[data-save]', function () {
    const input = $(this).closest('.inp').find('[data-input]');
    const $el = $(this);
    BX.ajax.runComponentAction('sp:personal',
        'updateUser', {
            mode: 'class',
            data: {name: input.attr('name'), value: input.val()},
        })
        .then(function (response) {
            if (response.data.status) {
                input.prop('disabled', true);
                $el.parent().html(
                    '<a href="" class="red" data-red>Редактировать</a>'
                );
            } else {
                callPopup('Не возможно отредактировать поле');
            }
        }, function (response) {
            callPopup('Не возможно отредактировать поле');
        });
    return false;
});
$(document).on('change', '[data-subscribe-cabinet]', function () {
    const checkbox = $(this);
    BX.ajax.runComponentAction('sp:personal',
        'updateUser', {
            mode: 'class',
            data: {name: checkbox.attr('name'), value: (checkbox.prop('checked')) ? 1 : 0},
        })
        .then(function (response) {
            if (response.data.status) {
                $text = (checkbox.prop('checked')) ? "Вы подписаны  на  рассылку" : "Вы отписались от рассылки";
                callPopup($text);
            } else {
                callPopup('Не возможно отредактировать поле');
            }
        }, function (response) {
            callPopup('Не возможно отредактировать поле');
        });
});
$(document).on('click', '.stars li', function () {
    let curIndex = $(this).index();
    $(this).parent().find('li').each(function (index, el) {
        if (index <= curIndex) {
            $(el).addClass('active');
            $(el).find('img').attr('src', '/local/templates/template/img/sta.svg');
        } else {
            $(el).removeClass('active');
            $(el).find('img').attr('src', '/local/templates/template/img/sta3.svg');
        }
    });
    return false;
})
$(document).on('submit', '[data-form-review]', function () {
    const form = this;
    const formData = new FormData(this);
    formData.append('RATE', $(this).closest('[data-review-wrapper]').find('.stars li.active').length);
    BX.ajax.runComponentAction('sp:feedback',
        'send', {
            mode: 'class',
            signedParameters: defaultReviewParams.signedParameters,
            data: formData,
        })
        .then(function (response) {
            callPopup("Ваш отзыв успешно отправлен!", '<p>И будет опубликован после модерации</p>');
        }, function (response) {
            callPopup('Ошибка');
        });
    return false;
});
$(document).on('click', '[data-order-tab]', function () {
    const curTab = $(this).data('order-tab');
    $('[data-order-tab]').removeClass('act');
    $('[data-order-tab-content]').removeClass('active');
    $(this).addClass('act');
    $('[data-order-tab-content=' + curTab + ']').addClass('active');
    return false;
});
$(document).on('click', '[data-cancel]', function () {
    const orderId = $(this).data('cancel');
    $('.popup').fadeOut();
    $('.overlay, .popup-order-cancel').fadeIn();
    $('.popup-order-cancel').find('[name=orderId]').val(orderId);
    return false;
});
$(document).on('submit', '[data-cancel-order]', function () {
    const form = this;
    const formData = new FormData(this);
    BX.ajax.runAction('sp:tools.OrderController.cancel', {
        data: formData,
    }).then(function (response) {
        callPopup(response.data.msg);
    }, function (response) {
    });
    return false;
});
$(document).on('click', '[data-order-review]', function () {
    const orderId = $(this).data('order-review');
    $('.popup').fadeOut();
    $('.overlay, .popup-order-review').fadeIn();
    $('.popup-order-review').find('[name=ORDER_ID]').val(orderId);
    return false;
});
$(document).on('submit', '[data-review-order]', function () {
    const orderId = $(this).find('[name=ORDER_ID]').val();
    const form = this;
    const formData = new FormData(this);
    formData.append('RATE', $(this).closest('[data-review-wrapper]').find('.stars li.active').length);
    BX.ajax.runComponentAction('sp:feedback',
        'send', {
            mode: 'class',
            signedParameters: defaultOrderModalParams.signedParameters,
            data: formData,
        })
        .then(function (response) {
            callPopup("Ваш отзыв успешно отправлен!", '<p>И будет опубликован после модерации</p>');
            $('[data-order-review=' + orderId + ']').remove();
        }, function (response) {
            callPopup('Ошибка');
        });
    return false;
});

function callPopup($title, $text = '') {
    $('.popup').fadeOut();
    $('.overlay, .popup-notify').fadeIn();
    $('.popup-notify').find('.h3').html($title);
    $('.popup-notify').find('.pop-call-bx').append($text);
}

/*Личный кабинет End*/

/*Оформление заказа*/
$(document).on('click', '[data-set-tab]', function () {
    const formData = new FormData($('[data-step-form]')[0]);
    BX.ajax.runComponentAction('2quick:order',
        'stepOrder', {
            mode: 'class',
            data: formData,
        })
        .then(function (response) {
            $('[data-delivery-payment]').html(response.data.deliveryPaymentBlock);
            $('[data-price-block]').html(response.data.priceBlock);
            $('[data-price-total]').html(response.data.totalBlock);
            const tabs = $('[data-order-create-tab]');
            tabs.hide();
            $('[data-order-create-tab=confirm]').show();
            $('.basket-menu .bt').removeClass('act');
            $('.basket-menu .bt[data-id=orderConfirm]').addClass('act');
        }, function (response) {
            callPopup('Ошибка перехода на подтверждение заказа');
        });
    return false;
});
$(document).on('submit', '[data-step-form]', function () {
    const form = this;
    const formData = new FormData(this);
    formData.append('policy', $('[name=confirm]').prop('checked'));
    BX.ajax.runComponentAction('2quick:order',
        'saveOrder', {
            mode: 'class',
            data: formData,
        })
        .then(function (response) {

            if (response.data.status == 'e') {
                callPopup('Ошибка', response.data.html);
            } else {
                location.href = '/order/?ID=' + response.data.id;
            }
        }, function (response) {
            callPopup('Ошибка перехода на подтверждение заказа');
        });
    return false;
});
$(document).on('click', '[data-order-save]', function () {
    $('[data-step-form]').trigger('submit');
    return false;
})
$(document).on('click', '.basket-menu .bt.act', function () {
    return false;
})

/*Оформление заказа End*/

$(document).on('click','.reloadCaptcha',function(){
    let $this = $(this);
    BX.showWait();
    BX.ajax.runComponentAction('2quick:tq_registration',
        'updateCaptcha', { // Вызывается без постфикса Action
            mode: 'class',
            data: {form:$(this).serializeArray()}, // ключи объекта data соответствуют параметрам метода
        })
        .then(function(response) {
            $this.parents('form').find('.captcha-img').attr('src','/bitrix/tools/captcha.php?captcha_sid='+response.data);
            $this.parents('form').find('.captcha_sid').val(response.data);
            BX.closeWait();
        });
    return false;
});
