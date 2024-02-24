'use strict';

(function () {
    // Init custom option check
    window.Helpers.initCustomOptionCheck();

    // Bootstrap validation example
    //------------------------------------------------------------------------------------------
    // const flatPickrEL = $('.flatpickr-validation');
})();
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
                firstName: {
                    validators: {
                        notEmpty: {
                            message: 'Vui lòng nhập tên',
                        },
                        stringLength: {
                            min: 1,
                            max: 30,
                            message: 'Tên nên từ 1 đến 30 kí tự',
                        },
                    },
                },
                lastName: {
                    validators: {
                        notEmpty: {
                            message: 'Vui lòng nhập họ',
                        },
                        stringLength: {
                            min: 2,
                            max: 20,
                            message: 'Họ nên từ 2 đến 20 kí tự',
                        },
                    },
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'Vui lòng nhập email',
                        },
                        emailAddress: {
                            message: 'Email không hợp lệ',
                        },
                    },
                },
                username: {
                    validators: {
                        notEmpty: {
                            message: 'Vui lòng nhập username',
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9]+$/,
                            message:
                                'Tên chỉ chứa các tự alphabet không bao gồm khoảng trắng',
                        },
                    },
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: 'Vui lòng nhập mật khẩu',
                        },
                        stringLength: {
                            min: 8,
                            message: 'Mật khẩu phải từ 8 kí tự',
                        },
                    },
                },
                confirmPassword: {
                    validators: {
                        notEmpty: {
                            message: 'Vui lòng nhập xác nhận mật khẩu',
                        },
                        identical: {
                            compare: function () {
                                return formValidationExamples.querySelector(
                                    '[name="password"]',
                                ).value;
                            },
                            message: 'Xác nhận mật khẩu không giống nhau',
                        },
                    },
                },

                city: {
                    validators: {
                        notEmpty: {
                            message: 'Vui lòng chọn tỉnh thành',
                        },
                    },
                },
                district: {
                    validators: {
                        notEmpty: {
                            message: 'Vui lòng chọn quận huyện',
                        },
                    },
                },
                ward: {
                    validators: {
                        notEmpty: {
                            message: 'Vui lòng chọn phường xã',
                        },
                    },
                },
                formValidationAddress: {
                    validators: {
                        notEmpty: {
                            message: 'Vui lòng nhập địa chỉ cụ thể',
                        },
                    },
                },
                formValidationPhone: {
                    validators: {
                        notEmpty: {
                            message: 'Vui lòng nhập số điện thoại',
                        },
                    },
                },
                formValidationGender: {
                    validators: {
                        notEmpty: {
                            message: 'Vui lòng chọn giới tính',
                        },
                    },
                },
                formValidationDob: {
                    validators: {
                        notEmpty: {
                            message: 'Vui lòng chọn ngày tháng năm sinh',
                        },
                        date: {
                            format: 'DD/MM/YYYY',
                            message: 'Giá trị ngày tháng không hơp lệ',
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
                    rowSelector: function (field, ele) {
                        // field is the field name & ele is the field element
                        switch (field) {
                            case 'formValidationName':
                            case 'formValidationEmail':
                            case 'formValidationPass':
                            case 'formValidationConfirmPass':
                            case 'formValidationFile':
                            case 'formValidationDob':
                            case 'formValidationBio':
                            case 'formValidationGender':
                                return '.col-md-6';
                            case 'formValidationPlan':
                                return '.col-xl-3';
                            case 'formValidationSwitch':
                            case 'formValidationCheckbox':
                                return '.col-12';
                            default:
                                return '.row';
                        }
                    },
                }),
                submitButton: new FormValidation.plugins.SubmitButton(),
                // Submit the form when all fields are valid
                defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
                autoFocus: new FormValidation.plugins.AutoFocus(),
            },
        }).registerValidator('validateUserWithData', validateUserWithData);
    })();
});

function validateUserWithData() {
    return {
        validate: function (input) {
            const value = input.value;
            console.log(value);
            return {
                valid: false,
            };
        },
    };
}
