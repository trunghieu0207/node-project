$(function () {
    var template = `<div class="col-md-1 text-center js-step-number">Step 1</div>
                                    <div class="col-md-6" style="margin-right: 15px">
                                        <input
                                                class="form-control"
                                                type="email"
                                                id="formValidationUsername"
                                                name="username"
                                                placeholder="Step name" />
                                    </div>
                                    <div class="col-md-5">
                                        <button type="button" class="btn js-add-step btn-primary me-sm-3 me-1 waves-effect waves-light">Add +</button>
                                        <button type="button" class="btn js-remove-step btn-warning me-sm-3 me-1 waves-effect waves-light">Remove</button>
                                    </div>`

    handleClick();
    handleRemove();

    function handleClick() {
        $('.js-add-step').on('click', function () {
            var $stepContainer = $('.js-step');
            var length = $stepContainer.children().length;
            var $wrapper = $(`<div class="js-step-${length + 1}" style="display: flex; align-items: center"></div>`)
            var $template = $(template);
            $wrapper.html($template)
            $wrapper.find('.js-step-number').html(`Step ${length + 1}`)
            $stepContainer.append($wrapper)
            for (var i = 1; i <= length;  i ++) {
                $(`.js-step-${i}`).find('.col-md-5').remove();
            }
            handleClick()
            handleRemove();
        })
    }
    function handleRemove() {
        $('.js-remove-step').on('click', function () {
            $(this).parent().parent().prev().append(`<div class="col-md-5">
                                        <button type="button" class="btn js-add-step btn-primary me-sm-3 me-1 waves-effect waves-light">Add +</button>
                                        <button type="button" class="btn js-remove-step btn-warning me-sm-3 me-1 waves-effect waves-light">Remove</button>
                                    </div>`)
            $(this).parent().parent().remove()
            handleClick()
            handleRemove();
        })
    }
})