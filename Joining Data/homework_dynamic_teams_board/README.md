# Homework: Dynamic Teams Board

## Objective
Create a dynamic leaderboard for Champions League teams that updates continuously using D3.js data joining with Enter-Update-Exit patterns and smooth transitions.

## Requirements

### Step 1: Set Up the Project
- Create an HTML file (`index.html`) with a container for the leaderboard.
- Include D3.js library.
- Create a CSS file (`style.css`) for styling the board.
- Create a JavaScript file (`teams.js`) for the visualization logic.

### Step 2: Data Structure
- Each team has: name, points, goalsFor, goalsAgainst.
- Start with initial data for 5-10 teams.
- Simulate data changes: teams gain points, new teams enter, existing teams exit.

### Step 3: Create the Leaderboard
- Display teams in a ranked list (table or divs).
- Show position, team name, points, goal difference.
- Use SVG or HTML elements for the board.

### Step 4: Implement Dynamic Updates
- Use `setInterval` to update data every 2-3 seconds.
- Randomly: increase points for some teams, add new teams, remove teams.
- Use the `join()` method for data binding.

### Step 5: Enter-Update-Exit with Transitions
- **Enter**: New teams slide in from the side or fade in.
- **Update**: Existing teams smoothly move to new positions, update scores.
- **Exit**: Exiting teams slide out or fade out.
- Use color coding: green for entering, blue for updating, red for exiting.

### Step 6: Sorting and Positioning
- Sort teams by points (descending), then by goal difference.
- Animate position changes smoothly.

## Implementation Guidelines
- Use D3's `join()` for efficient DOM updates.
- Implement transitions with `.transition()` and durations.
- Handle data sorting and positioning.
- Make the board visually appealing with proper styling.

## Expected Output
A web page showing a dynamic leaderboard that updates automatically, with smooth animations showing teams entering, updating positions, and exiting the board.

## Files to Modify
- `index.html`: HTML structure
- `style.css`: Styling
- `teams.js`: Main visualization code

## Submission
Ensure the leaderboard updates dynamically and demonstrates the Enter-Update-Exit pattern effectively.