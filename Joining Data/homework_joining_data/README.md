# Homework: Joining Data with Transitions

## Objective
Create an interactive data visualization using D3.js that demonstrates the Enter-Update-Exit pattern with smooth transitions. You will work with the Vancouver Trails dataset located at `../../Examples_1/data/vancouver_trails.csv`.

## Requirements

### Step 1: Set Up the Project
- Create an HTML file (`index.html`) with a basic structure including an SVG element.
- Include D3.js library (use the version from `../../Examples_1/js/d3.v7.min.js`).
- Create a CSS file (`style.css`) for basic styling.
- Create a JavaScript file (`homework.js`) for the visualization logic.

### Step 2: Load and Process Data
- Use `d3.csv()` to load the Vancouver Trails data.
- Process the data to create a summary (e.g., count trails by difficulty level or region).
- Handle the data loading asynchronously.

### Step 3: Create the Visualization
- Use SVG to create a bar chart or similar visualization.
- Implement the Enter-Update-Exit pattern using the `join()` method.
- Add smooth transitions for entering, updating, and exiting elements:
  - Entering elements should fade in and grow.
  - Updating elements should smoothly change position/size/color.
  - Exiting elements should fade out and shrink before removal.

### Step 4: Add Interactivity
- Add buttons or dropdowns to filter the data (e.g., by difficulty: Easy, Intermediate, Difficult).
- When filters change, update the visualization with transitions showing which bars enter, update, or exit.

### Step 5: Styling and Polish
- Style the visualization to be visually appealing.
- Ensure the transitions are smooth and informative.
- Add labels, axes, and a title.

## Implementation Guidelines
- Use the `join()` method for data binding.
- Implement transitions using `.transition()` with appropriate durations.
- Follow D3.js best practices for data joins.
- Comment your code clearly.

## Files to Modify
- `index.html`: HTML structure
- `style.css`: Styling
- `homework.js`: Main visualization code

## Expected Output
An interactive web page that loads trail data, displays it as animated bars, and allows filtering with smooth transitions demonstrating the Enter-Update-Exit pattern.

## Submission
Ensure all files are in this folder and the visualization works when opening `index.html` in a browser.