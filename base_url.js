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
        
    // Function to set base href
    function setBaseHref(url) {
        var baseTag = document.querySelector('base');
        if (baseTag) {
            baseTag.href = url;
        } else {
            baseTag = document.createElement('base');
            baseTag.href = url;
            document.head.appendChild(baseTag);
        }
        console.log("Base href set to: " + url);
    }

    // Set base href when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setBaseHref(baseUrl);
        });
    } else {
        setBaseHref(baseUrl);
        console.log("Base href set to: " + baseUrl);
    }
})();
