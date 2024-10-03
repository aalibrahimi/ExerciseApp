// page.js

// Function to create the fitness program page
function createFitnessProgramPage() {
    // Create main container
    const container = document.createElement('div');
    container.id = 'fitness-program-container';
    container.style.padding = '20px';
    container.style.fontFamily = 'Arial, sans-serif';

    // Create header
    const header = document.createElement('h1');
    header.innerText = 'My Fitness Program';
    container.appendChild(header);

    // Create description
    const description = document.createElement('p');
    description.innerText = 'Welcome to your personalized fitness program. Track your exercises and stay fit!';
    container.appendChild(description);

    // Create exercise list
    const exerciseList = document.createElement('ul');
    exerciseList.id = 'exercise-list';
    container.appendChild(exerciseList);

    // Add some sample exercises
    const exercises = ['Push-ups', 'Squats', 'Lunges', 'Plank'];
    exercises.forEach(exercise => {
        const listItem = document.createElement('li');
        listItem.innerText = exercise;
        exerciseList.appendChild(listItem);
    });

    // Append the container to the body
    document.body.appendChild(container);
}

// Call the function to create the page
createFitnessProgramPage();