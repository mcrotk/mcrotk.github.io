(function() {
    function createMenuAndWrapContent() {
        const menuHtml = `
            <nav class="menu">
                <a href="/index.html">Home</a>
                <a href="/positions/positions.html">Positions and Education</a>
                <a href="/publications.html">Publications</a>
                <a href="/awards.html">Honors and Awards</a>
                <a href="/talks.html">Talks</a>
                <a href="/courses/courses_main.html">Teaching</a>
                <a href="/prospectives.html">Working with me</a>
            </nav>
        `;

        // Prepare DOM elements
        const contentWrapper = document.createElement('div');
        const menuElement = document.createElement('div');
        const existingContentContainer = document.createElement('div');

        // Set up menu
        menuElement.innerHTML = menuHtml.trim();

        // Move existing content
        while (document.body.firstChild) {
            existingContentContainer.appendChild(document.body.firstChild);
        }

        // Assemble new structure
        contentWrapper.appendChild(menuElement);
        contentWrapper.appendChild(existingContentContainer);

        // Add classes
        contentWrapper.className = 'content-wrapper';
        menuElement.className = 'menu-container';
        existingContentContainer.className = 'content-container';

        // Add to DOM
        document.body.appendChild(contentWrapper);
    }

    // Run the function when the DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createMenuAndWrapContent);
    } else {
        createMenuAndWrapContent();
    }
})();
