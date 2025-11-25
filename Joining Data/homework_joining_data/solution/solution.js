// Homework Solution: Joining Data with Transitions

const svg = d3.select('svg');
const width = 800;
const height = 400;
const margin = { top: 20, right: 20, bottom: 40, left: 40 };
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

// Load the CSV data
d3.csv('../../../Examples_1/data/vancouver_trails.csv').then(data => {
    // Process the data to count trails by difficulty
    const difficultyCounts = d3.rollup(
        data,
        v => v.length,
        d => d.difficulty
    );

    const processedData = Array.from(difficultyCounts, ([difficulty, count]) => ({
        difficulty,
        count
    }));

    // Initial visualization with all data
    updateChart(processedData);

    // Add event listeners to buttons
    document.getElementById('all').addEventListener('click', () => updateChart(processedData));
    document.getElementById('easy').addEventListener('click', () => updateChart(processedData.filter(d => d.difficulty === 'Easy')));
    document.getElementById('intermediate').addEventListener('click', () => updateChart(processedData.filter(d => d.difficulty === 'Intermediate')));
    document.getElementById('difficult').addEventListener('click', () => updateChart(processedData.filter(d => d.difficulty === 'Difficult')));
});

function updateChart(data) {
    // Create scales
    const xScale = d3.scaleBand()
        .domain(data.map(d => d.difficulty))
        .range([0, innerWidth])
        .padding(0.1);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.count)])
        .range([innerHeight, 0]);

    // Create axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    // Select the inner chart area
    const g = svg.selectAll('.chart-group').data([null]);
    const gEnter = g.enter().append('g').attr('class', 'chart-group')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    gEnter.merge(g)
        .transition().duration(500)
        .call(yAxis);

    gEnter.append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0,${innerHeight})`)
        .call(xAxis);

    // Update bars with join and transitions
    gEnter.merge(g).selectAll('rect')
        .data(data, d => d.difficulty)
        .join(
            enter => enter.append('rect')
                .attr('x', d => xScale(d.difficulty))
                .attr('y', innerHeight)
                .attr('width', xScale.bandwidth())
                .attr('height', 0)
                .attr('fill', 'green')
                .transition()
                .duration(1000)
                .attr('y', d => yScale(d.count))
                .attr('height', d => innerHeight - yScale(d.count))
                .attr('fill', 'steelblue'),
            update => update
                .transition()
                .duration(1000)
                .attr('x', d => xScale(d.difficulty))
                .attr('y', d => yScale(d.count))
                .attr('width', xScale.bandwidth())
                .attr('height', d => innerHeight - yScale(d.count))
                .attr('fill', 'steelblue'),
            exit => exit
                .transition()
                .duration(1000)
                .attr('fill', 'red')
                .attr('y', innerHeight)
                .attr('height', 0)
                .remove()
        );

    // Update x-axis
    gEnter.merge(g).select('.x-axis')
        .transition().duration(500)
        .call(xAxis);
}