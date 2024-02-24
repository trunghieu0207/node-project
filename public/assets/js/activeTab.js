var href = window.location.href;
path = new URL(href);
paths = path.pathname.split('/');
application = paths[1];
$nav = $('.js-nav');

switch (application) {
    case 'user': {
        if (paths[2] === 'profile') {
            $nav.find('.account-nav').addClass('active');
        } else if (paths[2] === 'profile-security') {
            $nav.find('.security-nav').addClass('active');
        }
        break;
    }
}
