// Function to fetch user data from the JSONPlaceholder API
async function fetchUserData(userIds) {
    const userPromises = userIds.map(id =>
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error fetching user with ID ${id}: ${response.statusText}`);
                }
                return response.json();
            })
    );

    // Wait for all user fetch promises to resolve
    return Promise.all(userPromises);
}

// Function to display user data
function displayUserData(users) {
    users.forEach(user => {
        console.log(`Name: ${user.name}`);
        console.log(`Email: ${user.email}`);
        console.log(`Company: ${user.company.name}`);
        console.log('-------------------');
    });
}

// Main function to execute fetching and displaying user data
async function main() {
    const userIds = [1, 2, 3, 4, 5]; // Example user IDs
    try {
        const users = await fetchUserData(userIds);
        displayUserData(users);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

// Execute the main function
main();
