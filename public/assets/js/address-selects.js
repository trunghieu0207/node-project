/**
 * Selects & Tags
 */

'use strict';

$(function () {
    const select2 = $('.select2'),
        selectDistrict = $('.selectDistrict'),
        selectWard = $('.selectWard'),
        select2Icons = $('.select2-icons');

    // Select2
    // --------------------------------------------------------------------

    // Default
    if (select2.length) {
        select2.each(function () {
            var $this = $(this);
            $this.wrap('<div class="position-relative"></div>').select2({
                placeholder: 'Select value',
                dropdownParent: $this.parent(),
            });
        });
    }

    if (selectDistrict.length) {
        selectDistrict.each(function () {
            var $this = $(this);
            $this.wrap('<div class="position-relative"></div>').select2({
                placeholder: 'Select value',
                dropdownParent: $this.parent(),
            });
        });
    }

    if (selectWard.length) {
        selectWard.each(function () {
            var $this = $(this);
            $this.wrap('<div class="position-relative"></div>').select2({
                placeholder: 'Select value',
                dropdownParent: $this.parent(),
            });
        });
    }

    function render() {
        fetch('https://provinces.open-api.vn/api/')
            .then(function (res) {
                return res.json();
            })
            .then(function (res) {
                var html = '';
                for (const [key, value] of Object.entries(res)) {
                    html += `<option value="${value.codename}-${value.code}-${value.name}" data-province-code="${value.code}">${value.name}</option>`;
                }
                $('.js-province').append(html);

                // Get Default District
                fetch(`https://provinces.open-api.vn/api/p/${1}?depth=2`)
                    .then(function (res) {
                        return res.json();
                    })
                    .then(function (res) {
                        var html = '';
                        $('.js-district').html('');
                        for (const [key, value] of Object.entries(
                            res.districts,
                        )) {
                            html += `<option value="${value.codename}-${value.code}-${value.name}" data-district-code="${value.code}">${value.name}</option>`;
                        }
                        $('.js-district').append(html);

                        // Get Default Ward
                        fetch(
                            `https://provinces.open-api.vn/api/d/${1}?depth=2`,
                        )
                            .then(function (res) {
                                return res.json();
                            })
                            .then(function (res) {
                                var html = '';
                                $('.js-ward').html('');
                                for (const [key, value] of Object.entries(
                                    res.wards,
                                )) {
                                    html += `<option value="${value.codename}-${value.code}-${value.name}" data-district-code="${value.code}">${value.name}</option>`;
                                }
                                $('.js-ward').append(html);
                            });
                    });
            });
    }

    render();

    $('#select2Basic').on('change', function () {
        var provinceCode = $(this).find(':selected').data('province-code');
        fetch(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`)
            .then(function (res) {
                return res.json();
            })
            .then(function (res) {
                var html = '';
                $('.js-district').html('');
                for (const [key, value] of Object.entries(res.districts)) {
                    html += `<option value="${value.codename}-${value.code}-${value.name}" data-district-code="${value.code}">${value.name}</option>`;
                }
                $('.js-district').append(html);
                $('.js-ward').html('');

                // Get ward
                var districtCode = $('#selectDistrict')
                    .find(':selected')
                    .data('district-code');
                fetch(
                    `https://provinces.open-api.vn/api/d/${districtCode}?depth=2`,
                )
                    .then(function (res) {
                        return res.json();
                    })
                    .then(function (res) {
                        var html = '';
                        var skipSelected = false;
                        $('.js-ward').html('');
                        for (const [key, value] of Object.entries(res.wards)) {
                            if (!skipSelected) {
                                html += `<option value="${value.codename}-${value.code}-${value.name}" selected data-district-code="${value.code}">${value.name}</option>`;
                                skipSelected = true;
                            } else {
                                html += `<option value="${value.codename}-${value.code}-${value.name}" data-district-code="${value.code}">${value.name}</option>`;
                            }
                        }
                        $('.js-ward').append(html);
                    });
            });
    });

    $('#selectDistrict').on('change', function () {
        var districtCode = $(this).find(':selected').data('district-code');
        fetch(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`)
            .then(function (res) {
                return res.json();
            })
            .then(function (res) {
                var html = '';
                $('.js-ward').html('');
                for (const [key, value] of Object.entries(res.wards)) {
                    html += `<option value="${value.codename}-${value.code}-${value.name}" data-district-code="${value.code}">${value.name}</option>`;
                }
                $('.js-ward').append(html);
            });
    });

    // Select2 Icons
    if (select2Icons.length) {
        // custom template to render icons
        function renderIcons(option) {
            if (!option.id) {
                return option.text;
            }
            var $icon =
                "<i class='" +
                $(option.element).data('icon') +
                " me-2'></i>" +
                option.text;

            return $icon;
        }
        select2Icons.wrap('<div class="position-relative"></div>').select2({
            dropdownParent: select2Icons.parent(),
            templateResult: renderIcons,
            templateSelection: renderIcons,
            escapeMarkup: function (es) {
                return es;
            },
        });
    }
});
