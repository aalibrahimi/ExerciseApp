document.addEventListener('DOMContentLoaded', function () {
    // Define routes
    const routes = {
        'dashboard': { title: 'Dashboard', component: Dashboard },
        'exercise-tutorial': { title: 'Exercise Tutorial', component: ExerciseTutorial },
        'my-fitness-plan': { title: 'My Fitness Plan', component: MyFitnessPlan },
        'workout-tracker': { title: 'Workout Tracker', component: WorkoutTracker }
    };

    // Function to render content based on route
    function renderContent(route) {
        const { title, component: Component } = routes[route];
        const pageTitle = document.getElementById('page-title');
        const pageContent = document.getElementById('page-content');
        
        if (pageTitle) pageTitle.textContent = title;
        
        if (Component && pageContent) {
            ReactDOM.render(React.createElement(Component), pageContent);
        } else {
            console.error(`Component for route "${route}" is undefined or page-content element not found`);
        }
    }

    // Function to handle navigation
    function handleNavigation() {
        const hash = window.location.hash.slice(1) || 'dashboard';
        if (routes[hash]) {
            renderContent(hash);
        } else {
            console.error(`Route "${hash}" not found`);
            renderContent('dashboard'); // Default to dashboard if no valid route
        }
    }

    // Set up navigation event listeners
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const route = this.getAttribute('href').slice(1);
            window.location.hash = route;
        });
    });

    // Handle navigation
    window.addEventListener('hashchange', handleNavigation);
    handleNavigation(); // Initial render

    // Profile dropdown functionality
    const profileButton = document.getElementById('user-menu-button');
    const dropdownMenu = document.querySelector('[role="menu"]');

    if (profileButton && dropdownMenu) {
        profileButton.addEventListener('click', function () {
            dropdownMenu.classList.toggle('hidden');
        });

        // Hide dropdown when clicking outside of it
        document.addEventListener('click', function (event) {
            if (!profileButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
                dropdownMenu.classList.add('hidden');
            }
        });
    }
});
// Remove Service Worker registration for now
// Service Worker registration
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/sw.js')
//         .then(() => console.log('Service Worker registered'))
//         .catch(error => console.error('Service Worker registration failed:', error));
// }