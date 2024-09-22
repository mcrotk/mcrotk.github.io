(function() {
    var baseUrl;
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        // local development
        baseUrl = '/Users/mcrotk/udocs/private_html/mcrotk.github.io/';
    } else {
        // production
        baseUrl = 'https://mcrotk.github.io/';
    }
    document.write('<base href="' + baseUrl + '">');
})();
