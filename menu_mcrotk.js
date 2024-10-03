(function() {
    const menuWidth = '250px';  // Width of the menu
    const contentLeftPadding = '20px';  // Space between menu and content
    const contentTopPadding = '20px';  // Space above the content
    const menuTopPadding = '0px';  // Space above the menu

    function createMenuAndWrapContent() {
        // Create menu content
        const menuHtml = `
            <table border="0" cellpadding="30" cellspacing="0" height="100%">
                <tr valign="top">
                    <td class="menu">
                        <div class="menuitem">
                            <a href="/index.html" target="_top">Home</a>
                        </div>
                        <div class="menuitem">
                            <a href="/positions/positions.html" target="_top">Positions and Education</a>
                        </div>
                        <div class="menuitem">
                            <a href="/publications.html" target="_top">Publications</a>
                        </div>
                        <div class="menuitem">
                            <a href="/awards.html" target="_top">Honors and Awards</a>
                        </div>
                        <div class="menuitem">
                            <a href="/talks.html" target="_top">Talks</a>
                        </div>
                        <div class="menuitem">
                            <a href="/courses/courses_main.html" target="_top">Teaching</a>
                        </div>
                        <div class="menuitem">
                            <a href="/prospectives.html" target="_top">Working with me</a>
                        </div>
                    </td>
                </tr>
            </table>
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

        // Apply styles and add to DOM
        requestAnimationFrame(() => {
            contentWrapper.style.cssText = 'display: flex; width: 100%;';
            menuElement.style.cssText = `flex: 0 0 ${menuWidth}; padding-top: ${menuTopPadding};`;
            existingContentContainer.style.cssText = `flex: 1; padding-left: ${contentLeftPadding}; padding-top: ${contentTopPadding};`;

            document.body.appendChild(contentWrapper);
        });
    }

    // Run the function when the DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createMenuAndWrapContent);
    } else {
        createMenuAndWrapContent();
    }
})();
