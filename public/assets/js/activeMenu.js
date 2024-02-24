var href = window.location.href;
path = new URL(href);
paths = path.pathname.split('/');
application = paths[2];
$menu = $('.menu-inner');
switch (application) {
    case 'user': {
        $menu.find('.user-menu').addClass('active');
        break;
    }

    case 'business': {
        $menu.find('.business-menu').addClass('active');
        break;
    }

    case 'post': {
        $menu.find('.post-menu').addClass('active');
        break;
    }
    case 'event': {
        $menu.find('.event-menu').addClass('open');
        if (
            paths[3] === 'list' ||
            paths[3] === 'detail' ||
            paths[3] === 'create' ||
            paths[3] === 'edit'
        ) {
            $menu.find('.event-menu').find('.event-list').addClass('active');
        }
        if (paths[3] === 'register') {
            $menu
                .find('.event-menu')
                .find('.event-register')
                .addClass('active');
        }
        break;
    }
}
