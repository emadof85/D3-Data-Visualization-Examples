// Homework: Dynamic Teams Board

const leaderboard = d3.select('#leaderboard');

// TODO: Define initial teams data
// Array of objects: {name: 'Team A', points: 10, goalsFor: 20, goalsAgainst: 5}

// TODO: Function to update the board
function updateBoard(data) {
    // TODO: Sort data by points descending, then goal difference

    // TODO: Use selectAll.data().join() for enter-update-exit
    // Enter: new teams slide in
    // Update: teams move to new positions, update scores
    // Exit: teams slide out

    // TODO: For each team div, set position, name, points, gd
}

// TODO: Function to simulate data changes
function updateData() {
    // TODO: Randomly increase points for some teams
    // TODO: Occasionally add new team or remove existing team
}

// TODO: Set interval to update data every 2-3 seconds
// setInterval(() => { updateData(); updateBoard(currentData); }, 2000);

// TODO: Initial call to updateBoard