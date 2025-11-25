// Homework: Joining Data with Transitions

const svg = d3.select('svg');
const width = 800;
const height = 400;
const margin = { top: 20, right: 20, bottom: 40, left: 40 };
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

// TODO: Load the CSV data using d3.csv()
// Hint: Use '../../Examples_1/data/vancouver_trails.csv'
d3.csv('../../Examples_1/data/vancouver_trails.csv').then(data => {
    // TODO: Process the data to count trails by difficulty
    // Create an array of objects like [{difficulty: 'Easy', count: 10}, ...]

    // Initial visualization with all data
    updateChart(data);

    // TODO: Add event listeners to buttons to filter data
    // For example, filter data where difficulty === 'Easy'
    // Then call updateChart with filtered data
});

function updateChart(data) {
    // TODO: Implement the join method with transitions
    // Use svg.selectAll('rect').data(data).join(
    //   enter => ... with transition for entering bars
    //   update => ... with transition for updating bars
    //   exit => ... with transition for exiting bars
    // )

    // TODO: Set attributes for bars: x, y, width, height
    // Add transitions for smooth animations
}

// TODO: Add scales for x and y axes
// const xScale = d3.scaleBand()...
// const yScale = d3.scaleLinear()...

// TODO: Add axes to the SVG