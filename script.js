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

    /** IMAGE SLIDESHOW **/
        let currentProject = ""; // Default project when page loads
        let slideIndex = 0; // Start at first slide
    
        // Project-specific content storage for pop-up
        const projectData = {
            project1: {
                title: "Groomed for Success: A Pet Salon Rebrand",
                background: "A local pet grooming salon named “For Pet’s Sake Grooming” near my previous home, had a website dedicated to showcase their services. Their audience was local, and loyal to the groomers there. They didn’t have a working logo, and their branding was not very present. ",
                problem: "The current site was not responsive and rendered incorrectly, especially on smaller devices. This site was slow, had too much information on it and wasn’t entirely readable.",
                process: "I first realized what needed to be the priorities for the site. Taking all of the text and cutting it down to only what is necessary, along with putting it all in the right navigation links. Second, was looking at the colors and deciding what would match the feeling they wanted to convey; cute, fun, and high-energy. Last, was adding final user-friendly touches to make the site experience better.",
                result: "I created a site that was easier to navigate, read, and use. I also made a logo for the team that is recognizable and eye-catching. With a focus on a responsive, mobile-first design, I fixed how the site resizes according to what size screen the customer is on.",
                images: ["Images/groom1.png", "Images/groom2.png", "Images/groom3.png", "Images/groom4.png"],
                texts: [
                    "The original design for the site was a bit of an eye-sore. ",
                    "I started my design with wireframe templates of what the new vision was for the site.",
                    "The new mobile version is brighter, more readable, and catches the user’s attention.",
                    "The new home page, scaled up, has navigation links on the top of the screen. "
                ]
            },
            project2: {
                title: "Street Tacos Recipes Goes Digital",
                background: "A local chef wanted to create a site for their recipes. With a south western background, they wanted colors that reminded them of the desert. His main requests were to make it reflect the laid-back but eccentric feeling of their food, and to make it user friendly and accessible. ",
                problem: "Their followers were asking about recipes, and the chef didn’t have time to make videos for every request. He needed a site to give to his following, and to gain more attention.",
                process: "The client gave me a template to use with orange and teal as the main colors. He wanted to make sure there was a sign in/up tab so he could send email lists. First I worked on the mobile version and worked my way up to the desk-top version.",
                result: "I created a user-friendly site with his vision in mind. With features like print options to put in your recipe books, a sharing option to increase networking, and tabs for every topic the chef specialized in. ",
                images: ["Images/taco1.png", "Images/taco2.png", "Images/taco3.png"],
                texts: [
                    "Planning began with setting a color pallet for the site and structuring it into hierarchical and chronological order.",
                    "Responsive design ensures the navigation fits seamlessly across any device. ",
                    "Directions section, let the reader know how long the prep and cook time are."
                ]
            },
            project3: {
                title: "Wunderlust Travel—How I Brought Their Brand to Life",
                background: "Wunderlust Travel is a travel group that wanted a site to build their brand and attract more clients. They had a strong vision but needed an online presence to bring it to life.",
                problem: "They didn’t have a website, which meant they were missing out on potential travelers. Without a central place to promote their destinations and services, it was harder to build trust and connect with their audience. They needed a site that not only looked good, but also made it easy for visitors to explore and book their next adventure.",
                process: "The client came to me with wireframes that outlined what they wanted. From there, I took a mobile-first approach, making sure the site was user-friendly and responsive. Since most people browse travel sites on their phones, I focused on seamless navigation, high-quality visuals, and a clean design with destination highlights.",
                result: "The final site stayed true to the client’s vision while making their brand feel professional. It helped them establish a real online presence, attract new travelers, and create a seamless experience for people looking to book trips.",
                images: ["Images/travel1.png", "Images/travel2.png", "Images/travel3.png"],
                texts: [
                    "Bold, warm colors capture the spirit of street food.",
                    "Simple, intuitive navigation makes finding recipes easy.",
                    "Social sharing features increased engagement.",
                    "SEO optimization brought more organic traffic."
                ]
            }
        };
    
        /** ADD EVENT LISTENERS TO "SEE MORE" BUTTONS **/
        document.querySelectorAll(".see-more-btn").forEach(button => {
            button.addEventListener("click", function () {
                let projectKey = this.getAttribute("data-project");
                openProjectPopup(projectKey);
            });
        });
    
        /** OPEN POP-UP & DISPLAY PROJECT DETAILS **/
        function openProjectPopup(projectKey) {
            if (!projectData[projectKey]) return;
            currentProject = projectKey;
    
            // Update pop-up content
            document.getElementById("popup-title").textContent = projectData[projectKey].title;
            document.getElementById("popup-background").textContent = projectData[projectKey].background;
            document.getElementById("popup-problem").textContent = projectData[projectKey].problem;
            document.getElementById("popup-process").textContent = projectData[projectKey].process;
            document.getElementById("popup-result").textContent = projectData[projectKey].result;
    
            // Create dots dynamically
            let dotsContainer = document.getElementById("popup-dots");
            dotsContainer.innerHTML = ""; // Clear existing dots
            projectData[projectKey].images.forEach((_, i) => {
                let dot = document.createElement("span");
                dot.classList.add("dot");
                dot.setAttribute("onclick", `currentPopupSlide(${i})`);
                dotsContainer.appendChild(dot);
            });
    
            // Initialize the first image in the pop-up
            slideIndex = 0;
            showPopupSlides(slideIndex, currentProject);
    
            // Show the pop-up
            document.getElementById("project-pop-up").style.display = "flex";
        }
    
        /** CLOSE POP-UP **/
        document.getElementById("popup-close-btn").addEventListener("click", function () {
            document.getElementById("project-pop-up").style.display = "none";
        });
        document.getElementById("popup-close-btn2").addEventListener("click", function () {
            document.getElementById("project-pop-up").style.display = "none";
        });
    
        /** SWITCH TO NEXT PROJECT **/
        document.getElementById("popup-next-btn").addEventListener("click", function () {
            let projectKeys = Object.keys(projectData);
            let currentIndex = projectKeys.indexOf(currentProject);
            let nextIndex = (currentIndex + 1) % projectKeys.length; // Loop back to first project
            openProjectPopup(projectKeys[nextIndex]);
        });
    
        /** IMAGE SLIDER FUNCTION INSIDE POP-UP **/
        function plusPopupSlides(n) {
            showPopupSlides(slideIndex += n, currentProject);
        }
    
        function currentPopupSlide(n) {
            showPopupSlides(slideIndex = n, currentProject);
        }
    
        function showPopupSlides(n, projectKey) {
            let project = projectData[projectKey];
    
            if (n >= project.images.length) slideIndex = 0;
            if (n < 0) slideIndex = project.images.length - 1;
    
            // Update the image and text inside the pop-up
            document.getElementById("popup-img").src = project.images[slideIndex];
            document.getElementById("popup-slide-text").textContent = project.texts[slideIndex];
    
            // Highlight the active dot
            let dots = document.getElementsByClassName("dot");
            Array.from(dots).forEach(dot => dot.classList.remove("active"));
            dots[slideIndex].classList.add("active");
        }
    
        // Add event listeners for navigation
        document.getElementById("popup-prev").addEventListener("click", function () {
            plusPopupSlides(-1);
        });
    
        document.getElementById("popup-next").addEventListener("click", function () {
            plusPopupSlides(1);
        });
    });
    
    