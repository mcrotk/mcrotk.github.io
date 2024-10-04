(function() {
    const localHosts = ['localhost', '127.0.0.1', '192.168.68.112'];
    const productionDomain = 'mcrotk.github.io';
    console.log("Executing `base_url.js` script.")
    
    // Detect environment and set base URL
    let basePath;
    if (window.location.protocol === 'file:') {
        // local file system; using production links
        console.log("Local file system detected.");
        basePath = 'https://' + productionDomain;
    } else if (localHosts.includes(window.location.hostname)) {
        // Local development server
        console.log("Local development server detected.");
        basePath = '/';
    } else {
        // production
        console.log("Production environment detected.");
        basePath = 'https://' + productionDomain;
    }
    console.log(`Base path set to: "${basePath}".`);

    // Function to update absolute links
    function updateAbsoluteLinks() {
        const links = document.querySelectorAll('a[href^="/"]');
        links.forEach(link => {
            if (!link.getAttribute('data-original-href')) {
                link.setAttribute('data-original-href', link.getAttribute('href'));
            }
            link.href = basePath + link.getAttribute('data-original-href');
        });
    }

    // Run the function when the DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', updateAbsoluteLinks);
    } else {
        updateAbsoluteLinks();
    }

})();
