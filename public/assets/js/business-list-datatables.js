/**
 * DataTables Basic
 */

'use strict';

// datatable (jquery)
$(function () {
    var dt_basic_table = $('.datatables-basic'),
        dt_basic;

    // DataTable with buttons
    // --------------------------------------------------------------------

    if (dt_basic_table.length) {
        dt_basic = dt_basic_table.DataTable({
            ajax: domainUrl + '/admin/ajax/user/get-business/all',
            language: {
                url: '//cdn.datatables.net/plug-ins/1.13.6/i18n/vi.json',
            },
            columns: [
                { data: '' },
                { data: 'id' },
                { data: 'id' },
                { data: 'businessName' },
                { data: 'businessCode' },
                { data: 'startDate' },
                { data: 'businessConfirmation' },
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
                    targets: 2,
                    searchable: false,
                    visible: false,
                },
                {
                    // Label
                    targets: -2,
                    render: function (data, type, full, meta) {
                        var $status_number = full['businessConfirmation'];
                        var $status = {
                            0: {
                                title: 'Chờ xác nhận',
                                class: 'bg-label-warning',
                            },
                            1: {
                                title: 'Đã xác nhận',
                                class: 'bg-label-success',
                            },
                            2: { title: 'Từ chối', class: ' bg-label-danger' },
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
                            return data['businessName'];
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
});
