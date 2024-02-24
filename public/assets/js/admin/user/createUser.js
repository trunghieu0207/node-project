const $form = $('form[name="createUserForm"]')
const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

$form.find('input[name="email"]').on('input', function (event) {
    const email = event.target.value;

    if (!String(email).toLowerCase().match(regex)) {
        $(this).addClass('is-invalid')
    } else {
        $(this).removeClass('is-invalid')
    }
})

$form.find('.btn-submit').on('click', function () {
    const $emailInput = $form.find('input[name="email"]');
    const email = String($emailInput.val()).toLowerCase()

    if (String(email).toLowerCase().match(regex) || email.trim().length === 0) {
        $emailInput.removeClass('is-invalid')
        $form.submit();
    } else {
        $emailInput.addClass('is-invalid')
    }
})

/**
 * Form Layout Vertical
 */
'use strict';

(function () {
    const phoneMaskList = document.querySelectorAll('.phone-mask'),
        creditCardMask = document.querySelector('.credit-card-mask'),
        expiryDateMask = document.querySelector('.expiry-date-mask'),
        cvvMask = document.querySelector('.cvv-code-mask'),
        datepickerList = document.querySelectorAll('.dob-picker'),
        formCheckInputPayment = document.querySelectorAll('.form-check-input-payment');

    const flatpickrDueDate = document.querySelector('#due-date')

    // Phone Number
    if (phoneMaskList) {
        phoneMaskList.forEach(function (phoneMask) {
            new Cleave(phoneMask, {
                phone: true,
                phoneRegionCode: 'US'
            });
        });
    }

    // Credit Card
    if (creditCardMask) {
        new Cleave(creditCardMask, {
            creditCard: true,
            onCreditCardTypeChanged: function (type) {
                if (type != '' && type != 'unknown') {
                    document.querySelector('.card-type').innerHTML =
                        '<img src="' + assetsPath + 'img/icons/payments/' + type + '-cc.png" height="28"/>';
                } else {
                    document.querySelector('.card-type').innerHTML = '';
                }
            }
        });
    }

    // Expiry Date Mask
    if (expiryDateMask) {
        new Cleave(expiryDateMask, {
            date: true,
            delimiter: '/',
            datePattern: ['m', 'y']
        });
    }

    // CVV
    if (cvvMask) {
        new Cleave(cvvMask, {
            numeral: true,
            numeralPositiveOnly: true
        });
    }

    // Flat Picker Birth Date
    if (flatpickrDueDate) {
        flatpickrDueDate.flatpickr({
            enableTime: true,
            time_24hr: true,
            monthSelectorType: 'static',
            dateFormat: 'd-m-Y H:i',
            locale: 'vi',
        });
    }

    // Toggle CC Payment Method based on selected option
    if (formCheckInputPayment) {
        formCheckInputPayment.forEach(function (paymentInput) {
            paymentInput.addEventListener('change', function (e) {
                const paymentInputValue = e.target.value;
                if (paymentInputValue === 'credit-card') {
                    document.querySelector('#form-credit-card').classList.remove('d-none');
                } else {
                    document.querySelector('#form-credit-card').classList.add('d-none');
                }
            });
        });
    }
})();

// select2 (jquery)
$(function () {
    // Form sticky actions
    var topSpacing;
    const stickyEl = $('.sticky-element');

    // Init custom option check
    window.Helpers.initCustomOptionCheck();

    // Set topSpacing if the navbar is fixed
    if (Helpers.isNavbarFixed()) {
        topSpacing = $('.layout-navbar').height() + 7;
    } else {
        topSpacing = 0;
    }

    // sticky element init (Sticky Layout)
    if (stickyEl.length) {
        stickyEl.sticky({
            topSpacing: topSpacing,
            zIndex: 9
        });
    }

    // Select2 Country
    var select2Ward = $('#ward');
    if (select2Ward.length) {
        select2Ward.each(function () {
            var $this = $(this);
            $this.wrap('<div class="position-relative"></div>').select2({
                placeholder: 'Chọn',
                dropdownParent: $this.parent(),
                escapeMarkup: function (es) {
                    return es;
                }
            });
        });
    }

    var select2District = $('#district');
    if (select2District.length) {

        select2District.each(function () {
            var $this = $(this);
            $this.wrap('<div class="position-relative"></div>').select2({
                placeholder: 'Chọn',
                dropdownParent: $this.parent(),
                escapeMarkup: function (es) {
                    return es;
                }
            });
        });
    }

    var select2Province = $('#province');
    if (select2Province.length) {

        select2Province.each(function () {
            var $this = $(this);
            $this.wrap('<div class="position-relative"></div>').select2({
                placeholder: 'Chọn',
                dropdownParent: $this.parent(),
                escapeMarkup: function (es) {
                    return es;
                }
            });
        });
    }

    const district_code =$("#province option:first").attr('selected','selected');

    $('#province').on('change', function () {
        const province_code = $('#province').find(":selected").val();

        changeDistrictFollowProvinceCode(province_code);
    })

    $('#district').on('change', function () {
        const district_code = $('#district').find(":selected").val();

        changeWardsFollowDistrictCode(district_code);
    })

    function changeDistrictFollowProvinceCode(provinceCode) {
        $.ajax({
            url: `/ajax-get-district?provinceCode=${provinceCode}`,
            type: 'GET',
            success: function (response) {
                var option = '';
                const firstCode = response[0].code
                response.forEach(function (district) {
                    option += `<option value="${district.code}">${district.name}</option>`
                })
                $('#district').html(option)
                changeWardsFollowDistrictCode(firstCode);
                $("#district option:first").attr('selected','selected');
            }
        })
    }

    function changeWardsFollowDistrictCode(districtCode) {
        $.ajax({
            url: `/ajax-get-ward?districtCode=${districtCode}`,
            type: 'GET',
            success: function (response) {
                var option = '';
                response.forEach(function (ward) {
                    option += `<option value="${ward.code}">${ward.name}</option>`
                })
                $('#ward').html(option)
                $("#ward option:first").attr('selected','selected');
            }
        })
    }
});

