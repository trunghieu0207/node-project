/**
 * DataTables Basic
 */

'use strict';

let fv, offCanvasEl;

// datatable (jquery)
$(function () {
    var dt_basic_table = $('.datatables-basic'),
        dt_basic;

    // DataTable with buttons
    // --------------------------------------------------------------------

    if (dt_basic_table.length) {
        dt_basic = dt_basic_table.DataTable({
            ajax: '/admin/ajax/fetch-all-user',
            language: {
                url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/vi.json',
            },
            columns: [
                { data: '' },
                { data: 'id' },
                { data: 'full_name' },
                { data: 'email' },
                { data: 'start_date' },
                { data: 'status' },
                { data: '' },
            ],
            columnDefs: [
                {
                    // For Responsive
                    className: 'control',
                    orderable: false,
                    searchable: false,
                    responsivePriority: 2,
                    targets: 0,
                    render: function (data, type, full, meta) {
                        return '';
                    },
                },
                {
                    // For Checkboxes
                    targets: 1,
                    orderable: false,
                    searchable: false,
                    responsivePriority: 3,
                    // checkboxes: true,
                    // render: function () {
                    //     return '<input type="checkbox" class="dt-checkboxes form-check-input">';
                    // },
                    // checkboxes: {
                    //     selectAllRender:
                    //         '<input type="checkbox" class="form-check-input">',
                    // },
                },
                {
                    targets: 2,
                    searchable: false,
                    visible: false,
                },
                {
                    // Avatar image/badge, Name and post
                    targets: 3,
                    responsivePriority: 1,
                    render: function (data, type, full, meta) {
                        var $user_img = full['avatar'],
                            $name = full['full_name'],
                            $role = full['role'];
                        if ($user_img) {
                            // For Avatar image
                            var $output =
                                '<img src="' +
                                domainUrl +
                                'img/avatars/' +
                                $user_img +
                                '" alt="Avatar" class="rounded-circle">';
                        } else {
                            // For Avatar badge
                            var stateNum = Math.floor(Math.random() * 6);
                            var states = [
                                'success',
                                'danger',
                                'warning',
                                'info',
                                'primary',
                                'secondary',
                            ];
                            var $state = states[stateNum],
                                $name = full['full_name'],
                                $initials = $name.match(/\b\w/g) || [];
                            $initials = (
                                ($initials.shift() || '') +
                                ($initials.pop() || '')
                            ).toUpperCase();
                            $output =
                                '<span class="avatar-initial rounded-circle bg-label-' +
                                $state +
                                '">' +
                                $initials +
                                '</span>';
                        }
                        // Creates full output for row
                        var $row_output =
                            '<div class="d-flex justify-content-start align-items-center user-name">' +
                            '<div class="avatar-wrapper">' +
                            '<div class="avatar me-2">' +
                            $output +
                            '</div>' +
                            '</div>' +
                            '<div class="d-flex flex-column">' +
                            '<span class="emp_name text-truncate">' +
                            $name +
                            '</span>' +
                            '<small class="emp_post text-truncate text-muted">' +
                            $role +
                            '</small>' +
                            '</div>' +
                            '</div>';
                        return $row_output;
                    },
                },
                {
                    // Label
                    targets: -2,
                    render: function (data, type, full, meta) {
                        var $status_number = full['status'];
                        var $status = {
                            1: {
                                title: 'Hoạt động',
                                class: 'bg-label-primary',
                            },
                            2: {
                                title: 'Professional',
                                class: ' bg-label-success',
                            },
                            3: { title: 'Rejected', class: ' bg-label-danger' },
                            4: {
                                title: 'Resigned',
                                class: ' bg-label-warning',
                            },
                            5: { title: 'Applied', class: ' bg-label-info' },
                        };
                        if (typeof $status[$status_number] === 'undefined') {
                            return data;
                        }
                        return (
                            '<span class="badge ' +
                            $status[$status_number].class +
                            '">' +
                            $status[$status_number].title +
                            '</span>'
                        );
                    },
                },
                {
                    // Actions
                    targets: -1,
                    title: 'Hành động',
                    orderable: false,
                    searchable: false,
                    render: function (data, type, full, meta) {
                        return (
                            '<div class="d-inline-block">' +
                            '<a href="javascript:;" class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="text-primary ti ti-dots-vertical"></i></a>' +
                            '<ul class="dropdown-menu dropdown-menu-end m-0">' +
                            '<li><a href="/admin/user/detail/' +
                            full['id'] +
                            '" class="dropdown-item">Chi tiết</a></li>' +
                            '</ul>' +
                            '</div>' +
                            '<a href="/admin/user/edit/' +
                            full['id'] +
                            '" class="btn btn-sm btn-icon item-edit"><i class="text-primary ti ti-pencil"></i></a>'
                        );
                    },
                },
            ],
            order: [[2, 'desc']],
            // dom: '<"card-header flex-column flex-md-row"<"head-label text-center"><"dt-action-buttons text-end pt-3 pt-md-0"B>><"row"<"col-sm-12 col-md-6"l><"col-sm-12 col-md-6 d-flex justify-content-center justify-content-md-end"f>>t<"row"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',
            displayLength: 7,
            lengthMenu: [7, 10, 25, 50, 75, 100],
            buttons: [
                {
                    text: '<i class="ti ti-plus me-sm-1"></i> <span class="d-none d-sm-inline-block">Thêm người dùng</span>',
                    className: 'create-new btn btn-primary btn-add-user',
                },
            ],
            responsive: {
                details: {
                    display: $.fn.dataTable.Responsive.display.modal({
                        header: function (row) {
                            var data = row.data();
                            return data['full_name'];
                        },
                    }),
                    type: 'column',
                    renderer: function (api, rowIdx, columns) {
                        var data = $.map(columns, function (col, i) {
                            return col.title !== '' // ? Do not show row in modal popup if title is blank (for check box)
                                ? '<tr data-dt-row="' +
                                      col.rowIndex +
                                      '" data-dt-column="' +
                                      col.columnIndex +
                                      '">' +
                                      '<td>' +
                                      col.title +
                                      ':' +
                                      '</td> ' +
                                      '<td>' +
                                      col.data +
                                      '</td>' +
                                      '</tr>'
                                : '';
                        }).join('');

                        return data
                            ? $('<table class="table"/><tbody />').append(data)
                            : false;
                    },
                },
            },
        });
        $('div.head-label').html(
            '<h5 class="card-title mb-0">Danh sách người dùng</h5>',
        );
    }

    // Add New record
    // ? Remove/Update this code as per your requirements
    var count = 101;
    // On form submit, if form is valid
    fv.on('core.form.valid', function () {
        var $new_name = $('.add-new-record .dt-full-name').val(),
            $new_post = $('.add-new-record .dt-post').val(),
            $new_email = $('.add-new-record .dt-email').val(),
            $new_date = $('.add-new-record .dt-date').val(),
            $new_salary = $('.add-new-record .dt-salary').val();

        if ($new_name != '') {
            dt_basic.row
                .add({
                    id: count,
                    full_name: $new_name,
                    post: $new_post,
                    email: $new_email,
                    start_date: $new_date,
                    salary: '$' + $new_salary,
                    status: 5,
                })
                .draw();
            count++;

            // Hide offcanvas using javascript method
            offCanvasEl.hide();
        }
    });

    // Delete Record
    $('.datatables-basic tbody').on('click', '.delete-record', function () {
        dt_basic.row($(this).parents('tr')).remove().draw();
    });

    // Complex Header DataTable
    // ------------------------------------------------------------------
});
