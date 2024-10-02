(function() {
    var baseUrl;
    console.log("base_url.js is executing");
    if (window.location.protocol === 'file:') {
        // local file system; using production links
        console.log("Local file system detected");
        baseUrl = 'https://mcrotk.github.io/';
    } else if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        // local development server
        console.log("Local development server detected");
        baseUrl = '/';
    } else {
        // production
        console.log("Production detected");
        baseUrl = 'https://mcrotk.github.io/';
    }
    document.write('<base href="' + baseUrl + '">');
    console.log("Base href set to: " + baseUrl);
})();
