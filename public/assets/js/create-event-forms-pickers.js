/**
 * Form Picker
 */

'use strict';

(function () {
    // Flat Picker
    // --------------------------------------------------------------------
    const flatpickrStartDate = document.querySelector('#flatpickr-start-date'),
        flatpickrEndDate = document.querySelector('#flatpickr-end-date'),
        flatpickrStartTime = document.querySelector('#flatpickr-start-time'),
        flatpickrEndTime = document.querySelector('#flatpickr-end-time');

    // Date
    if (flatpickrStartDate) {
        flatpickrStartDate.flatpickr({
            monthSelectorType: 'static',
            dateFormat: 'd-m-Y',
            locale: 'vn',
        });
    }

    if (flatpickrEndDate) {
        flatpickrEndDate.flatpickr({
            monthSelectorType: 'static',
            dateFormat: 'd-m-Y',
            locale: 'vn',
        });
    }

    // Time
    if (flatpickrStartTime) {
        flatpickrStartTime.flatpickr({
            enableTime: true,
            noCalendar: true,
            time_24hr: true,
        });
    }

    if (flatpickrEndTime) {
        flatpickrEndTime.flatpickr({
            enableTime: true,
            noCalendar: true,
            time_24hr: true,
        });
    }
})();
