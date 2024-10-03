(function() {
    var baseUrl;
    const localHosts = ['localhost', '127.0.0.1', '192.168.68.112'];
    console.log("Script `base_url.js` is executing.");
    
    // detect environment and set base URL
    if (window.location.protocol === 'file:') {
        // local file system; using production links
        console.log("Local file system detected.");
        baseUrl = 'https://mcrotk.github.io/';
    } else if (localHosts.includes(window.location.hostname)) {
        // local development server
        console.log("Local development server detected.");
        baseUrl = '/';
    } else {
        // production
        console.log("Production environment detected.");
        baseUrl = 'https://mcrotk.github.io/';
    }
        
    // Function to set base href
    function setBaseHref(url) {
        var baseTag = document.querySelector('base');
        if (baseTag) {
            console.log("Existing <base> tag found. Updating href.");
            baseTag.href = url;
        } else {
            console.log("No existing <base> tag found. Creating a new one.");
            baseTag = document.createElement('base');
            baseTag.href = url;
            document.head.appendChild(baseTag);
        }
    }

    // set base href when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setBaseHref(baseUrl);
            console.log(`Base href set to: "${baseUrl}" after waiting for DOMContentLoaded event.`);
        });
    } else {
        setBaseHref(baseUrl);
        console.log(`Base href set to: "${baseUrl}" after finding that DOM was done loading.`);
    }
    
})();
