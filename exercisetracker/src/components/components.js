// Dashboard component
const Dashboard = () => {
    React.useEffect(() => {
        const ctx = document.getElementById('activityChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [
                    {
                        label: 'Calories',
                        data: [2400, 1398, 9800, 3908, 4800, 3800, 4300],
                        borderColor: '#8884d8',
                    },
                    {
                        label: 'Steps',
                        data: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
                        borderColor: '#82ca9d',
                    }
                ]
            },
            options: {
                responsive: true,
            }
        });
    }, []);

    return React.createElement('div', { className: "grid grid-cols-1 md:grid-cols-2 gap-6" },
        React.createElement('div', { className: "bg-white p-6 rounded-lg shadow" },
            React.createElement('h2', { className: "text-xl font-semibold mb-4" }, "Weekly Activity"),
            React.createElement('canvas', { id: "activityChart", width: "400", height: "200" })
        ),
        React.createElement('div', { className: "bg-white p-6 rounded-lg shadow" },
            React.createElement('h2', { className: "text-xl font-semibold mb-4" }, "Today's Summary"),
            React.createElement('ul', { className: "space-y-4" },
                React.createElement('li', { className: "flex justify-between items-center" },
                    React.createElement('span', null, "Steps"),
                    React.createElement('span', { className: "font-semibold" }, "8,432")
                ),
                React.createElement('li', { className: "flex justify-between items-center" },
                    React.createElement('span', null, "Calories Burned"),
                    React.createElement('span', { className: "font-semibold" }, "1,200")
                ),
                React.createElement('li', { className: "flex justify-between items-center" },
                    React.createElement('span', null, "Active Minutes"),
                    React.createElement('span', { className: "font-semibold" }, "45")
                )
            )
        )
    );
};

// ExerciseTutorial component
const ExerciseTutorial = () => {
    const exercises = [
        { name: 'Push-ups', description: 'Great for chest, arms, and core strength.', videoUrl: 'https://example.com/pushups' },
        { name: 'Squats', description: 'Builds lower body strength and improves balance.', videoUrl: 'https://example.com/squats' },
        { name: 'Planks', description: 'Strengthens core and improves posture.', videoUrl: 'https://example.com/planks' },
    ];

    return React.createElement('div', { className: "space-y-6" },
        exercises.map((exercise, index) =>
            React.createElement('div', { key: index, className: "bg-white p-6 rounded-lg shadow" },
                React.createElement('h2', { className: "text-xl font-semibold mb-2" }, exercise.name),
                React.createElement('p', { className: "mb-4" }, exercise.description),
                React.createElement('div', { className: "aspect-w-16 aspect-h-9" },
                    React.createElement('img', { src: "/api/placeholder/640/360", alt: `${exercise.name} tutorial`, className: "rounded-lg" })
                ),
                React.createElement('a', { href: exercise.videoUrl, className: "mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" }, "Watch Tutorial")
            )
        )
    );
};

// MyFitnessPlan component
const MyFitnessPlan = () => {
    const fitnessPlans = [
        { day: 'Monday', activities: ['30 min jogging', '3 sets of push-ups', '3 sets of squats'] },
        { day: 'Tuesday', activities: ['45 min cycling', '3 sets of pull-ups', '3 sets of lunges'] },
        { day: 'Wednesday', activities: ['Rest day', 'Light stretching'] },
        { day: 'Thursday', activities: ['30 min swimming', '3 sets of bench press', '3 sets of deadlifts'] },
        { day: 'Friday', activities: ['45 min HIIT', '3 sets of shoulder press', '3 sets of leg press'] },
        { day: 'Saturday', activities: ['1 hour hiking', 'Core workout'] },
        { day: 'Sunday', activities: ['Rest day', 'Yoga session'] },
    ];

    return React.createElement('div', { className: "bg-white p-6 rounded-lg shadow" },
        React.createElement('h2', { className: "text-2xl font-semibold mb-6" }, "Weekly Fitness Plan"),
        React.createElement('div', { className: "space-y-4" },
            fitnessPlans.map((plan, index) =>
                React.createElement('div', { key: index, className: "border-b pb-4 last:border-b-0" },
                    React.createElement('h3', { className: "text-lg font-semibold mb-2" }, plan.day),
                    React.createElement('ul', { className: "list-disc list-inside" },
                        plan.activities.map((activity, actIndex) =>
                            React.createElement('li', { key: actIndex }, activity)
                        )
                    )
                )
            )
        )
    );
};

// WorkoutTracker component
const WorkoutTracker = () => {
    const [workouts, setWorkouts] = React.useState([
        { id: 1, date: '2024-10-01', type: 'Cardio', duration: 30, calories: 300 },
        { id: 2, date: '2024-10-02', type: 'Strength', duration: 45, calories: 200 },
        { id: 3, date: '2024-10-03', type: 'Yoga', duration: 60, calories: 150 },
    ]);
    const [newWorkout, setNewWorkout] = React.useState({ date: '', type: '', duration: '', calories: '' });

    const handleInputChange = (e) => {
        setNewWorkout({ ...newWorkout, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setWorkouts([...workouts, { ...newWorkout, id: workouts.length + 1 }]);
        setNewWorkout({ date: '', type: '', duration: '', calories: '' });
    };

    return React.createElement('div', { className: "space-y-6" },
        React.createElement('div', { className: "bg-white p-6 rounded-lg shadow" },
            React.createElement('h2', { className: "text-xl font-semibold mb-4" }, "Add New Workout"),
            React.createElement('form', { onSubmit: handleSubmit, className: "space-y-4" },
                React.createElement('input', { type: "date", name: "date", value: newWorkout.date, onChange: handleInputChange, className: "w-full p-2 border rounded", required: true }),
                React.createElement('input', { type: "text", name: "type", value: newWorkout.type, onChange: handleInputChange, placeholder: "Workout Type", className: "w-full p-2 border rounded", required: true }),
                React.createElement('input', { type: "number", name: "duration", value: newWorkout.duration, onChange: handleInputChange, placeholder: "Duration (minutes)", className: "w-full p-2 border rounded", required: true }),
                React.createElement('input', { type: "number", name: "calories", value: newWorkout.calories, onChange: handleInputChange, placeholder: "Calories Burned", className: "w-full p-2 border rounded", required: true }),
                React.createElement('button', { type: "submit", className: "w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" }, "Add Workout")
            )
        ),
        React.createElement('div', { className: "bg-white p-6 rounded-lg shadow" },
            React.createElement('h2', { className: "text-xl font-semibold mb-4" }, "Workout History"),
            React.createElement('table', { className: "w-full" },
                React.createElement('thead',
                    React.createElement('tr',
                        React.createElement('th', { className: "text-left" }, "Date"),
                        React.createElement('th', { className: "text-left" }, "Type"),
                        React.createElement('th', { className: "text-left" }, "Duration"),
                        React.createElement('th', { className: "text-left" }, "Calories")
                    )
                ),
                React.createElement('tbody',
                    workouts.map((workout) =>
                        React.createElement('tr', { key: workout.id },
                            React.createElement('td', null, workout.date),
                            React.createElement('td', null, workout.type),
                            React.createElement('td', null, `${workout.duration} min`),
                            React.createElement('td', null, workout.calories)
                        )
                    )
                )
            )
        )
    );
};

// Add components to window object
window.Dashboard = Dashboard;
window.ExerciseTutorial = ExerciseTutorial;
window.MyFitnessPlan = MyFitnessPlan;
window.WorkoutTracker = WorkoutTracker;