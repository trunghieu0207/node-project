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
        const formValidationExamples =
            document.getElementById('formValidationExamples');

        const fv = FormValidation.formValidation(formValidationExamples, {
            fields: {
                firstName: {
                    validators: {
                        notEmpty: {
                            message: 'First name is required',
                        },
                        stringLength: {
                            min: 1,
                            max: 30,
                            message: 'Firstname should be from 1 to 30 characters',
                        },
                    },
                },
                lastName: {
                    validators: {
                        notEmpty: {
                            message: 'Last name is required',
                        },
                        stringLength: {
                            min: 2,
                            max: 20,
                            message: 'Last name should be from 1 to 30 characters',
                        },
                    },
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'Email is required',
                        },
                        emailAddress: {
                            message: 'Email invalid',
                        },
                    },
                },
                username: {
                    validators: {
                        notEmpty: {
                            message: 'Username is required',
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9]+$/,
                            message:
                                'Username should contains alphabets, not include space character',
                        },
                    },
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: 'Password is required',
                        },
                        stringLength: {
                            min: 8,
                            message: 'The password should be more than 8 characters',
                        },
                    },
                },
                confirmPassword: {
                    validators: {
                        notEmpty: {
                            message: 'Confirm password is required',
                        },
                        identical: {
                            compare: function () {
                                return formValidationExamples.querySelector(
                                    '[name="password"]',
                                ).value;
                            },
                            message: 'The password and confirm password not match',
                        },
                    },
                },

                // city: {
                //     validators: {
                //         notEmpty: {
                //             message: 'Vui lòng chọn tỉnh thành',
                //         },
                //     },
                // },
                // district: {
                //     validators: {
                //         notEmpty: {
                //             message: 'Vui lòng chọn quận huyện',
                //         },
                //     },
                // },
                // ward: {
                //     validators: {
                //         notEmpty: {
                //             message: 'Vui lòng chọn phường xã',
                //         },
                //     },
                // },
                // formValidationAddress: {
                //     validators: {
                //         notEmpty: {
                //             message: 'Vui lòng nhập địa chỉ cụ thể',
                //         },
                //     },
                // },
                formValidationPhone: {
                    validators: {
                        notEmpty: {
                            message: 'Phone is required',
                        },
                    },
                },
                formValidationGender: {
                    validators: {
                        notEmpty: {
                            message: 'Gender is required',
                        },
                    },
                },
                formValidationDob: {
                    validators: {
                        notEmpty: {
                            message: 'Please choose the DoB',
                        },
                        date: {
                            format: 'DD/MM/YYYY',
                            message: 'The format invalid',
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
            },
        });
    })();
});
