document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector('.hamburger .icon');
    const menuLinks = document.getElementById("myLinks");

    // Toggle menu when clicking the hamburger icon
    menuIcon.addEventListener('click', function (event) {
        menuIcon.classList.toggle("active-menu");
        menuLinks.classList.toggle("active");

        // Prevent click event from bubbling to the document
        event.stopPropagation();
    });

    // Close menu when clicking anywhere outside of it
    document.addEventListener('click', function (event) {
        if (!menuLinks.contains(event.target) && !menuIcon.contains(event.target)) {
            closeMenu();
        }
    });

    // Close menu when clicking a menu item
    menuLinks.querySelectorAll("a").forEach(item => {
        item.addEventListener('click', function () {
            closeMenu();
        });
    });

    // Close menu when the user scrolls
    window.addEventListener("scroll", function () {
        closeMenu();
    });

    // Function to close the menu
    function closeMenu() {
        menuIcon.classList.remove("active-menu");
        menuLinks.classList.remove("active");
    }
});

