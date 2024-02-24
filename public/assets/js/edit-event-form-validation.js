'use strict';
/**
 * Form Validation (https://formvalidation.io/guide/examples)
 * ? Primary form validation plugin for this template
 * ? In this example we've try to covered as many form inputs as we can.
 * ? Though If we've miss any 3rd party libraries, then refer: https://formvalidation.io/guide/examples/integrating-with-3rd-party-libraries
 */
//------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function (e) {
    (function () {
        const formValidationExamples = document.getElementById(
            'formValidationExamples',
        );

        const fv = FormValidation.formValidation(formValidationExamples, {
            fields: {
                eventName: {
                    validators: {
                        notEmpty: {
                            message: 'Vui lòng nhập tên sự kiện',
                        },
                    },
                },
                eventCode: {
                    validators: {
                        notEmpty: {
                            message: 'Vui lòng nhập mã sự kiện',
                        },
                    },
                },
                startDate: {
                    validators: {
                        notEmpty: {
                            message: 'Vui lòng nhập ngày bắt đầu',
                        },
                        // date: {
                        //     format: 'd-m-y',
                        //     message: 'Giá trị ngày tháng không hơp lệ',
                        // },
                    },
                },
                startTime: {
                    validators: {
                        notEmpty: {
                            message: 'Vui lòng nhập thời gian bắt đầu',
                        },
                    },
                },
                endDate: {
                    validators: {
                        notEmpty: {
                            message: 'Vui lòng chọn ngày kết thúc',
                        },
                        // date: {
                        //     format: 'd-m-y',
                        //     message: 'Giá trị ngày tháng không hơp lệ',
                        // },
                    },
                },
                endTime: {
                    validators: {
                        notEmpty: {
                            message: 'Vui lòng nhập thời gian kết thúc',
                        },
                        validateTime: {
                            message: 'Giờ kết thúc phải lớn hơn giờ bắt đầu',
                        },
                    },
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                bootstrap5: new FormValidation.plugins.Bootstrap5({
                    // Use this for enabling/changing valid/invalid class
                    // eleInvalidClass: '',
                    eleValidClass: '',
                }),
                submitButton: new FormValidation.plugins.SubmitButton(),
                // Submit the form when all fields are valid
                defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
                autoFocus: new FormValidation.plugins.AutoFocus(),
                startEndDate: new FormValidation.plugins.StartEndDate({
                    format: 'DD-MM-YYYY',
                    startDate: {
                        field: 'startDate',
                        message: 'Ngày bắt đầu phải nhỏ hơn ngày kết thúc',
                    },
                    endDate: {
                        field: 'endDate',
                        message: 'Ngày kết thúc phải lớn hơn ngày bắt đầu',
                    },
                }),
            },
        }).registerValidator('validateTime', validateTimeDate);
    })();
});

function validateTimeDate() {
    const timStart = $('#flatpickr-start-time').val();
    const timEnd = $('#flatpickr-end-time').val();
    const startDate = $('#flatpickr-start-date').val();
    const endDate = $('#flatpickr-end-date').val();

    return {
        validate: function (input) {
            if (startDate.trim().length === 0 || endDate.trim().length === 0) {
                return {
                    valid: true,
                };
            }

            const splitStart = startDate.split('-');
            const newStartDate =
                splitStart[1] + '/' + splitStart[0] + '/' + splitStart[2];

            const splitEnd = endDate.split('-');
            const newEndDate =
                splitEnd[1] + '/' + splitEnd[0] + '/' + splitEnd[2];

            const start = newStartDate + ' ' + timStart + ':00';
            const end = newEndDate + ' ' + timEnd + ':00';

            if (new Date(start) >= new Date(end)) {
                return {
                    valid: false,
                };
            }

            return {
                valid: true,
            };
        },
    };
}
