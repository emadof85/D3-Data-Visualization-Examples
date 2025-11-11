// Load and process the data
d3.csv('../../Examples_1/data/vancouver_trails.csv')
    .then(data => {
        // Count trails by difficulty
        const difficultyCounts = d3.rollup(
            data,
            v => v.length,
            d => d.difficulty
        );
        console.log(difficultyCounts);
        // Convert to array for D3
        const difficultyData = Array.from(difficultyCounts, ([difficulty, count]) => ({
            difficulty,
            count
        }));

        // Create the bar chart
        createBarChart(difficultyData);
    })
    .catch(error => {
        console.error('Error loading data:', error);
        document.querySelector('.container').innerHTML += '<p style="color: red; text-align: center;">Error loading data. Please check the console for details.</p>';
    });

function createBarChart(data) {
    const margin = {top: 40, right: 40, bottom: 60, left: 60};
    const width = 800 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    // Create SVG
    const svg = d3.select('#barchart')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    // Scales
    const xScale = d3.scaleBand()
        .domain(data.map(d => d.difficulty))
        .range([0, width])
        .padding(0.1);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.count)])
        .range([height, 0]);

    // Color scale
    const colorScale = d3.scaleOrdinal()
        .domain(['Easy', 'Intermediate', 'Difficult'])
        .range(['#d3eecd', '#7bc77e', '#2a8d46']);

    // Add X axis
    svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(xScale))
        .selectAll('text')
        .style('text-anchor', 'middle');

    // Add Y axis
    svg.append('g')
        .call(d3.axisLeft(yScale));

    // Add Y axis label
    svg.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('x', -height / 2)
        .attr('y', -40)
        .attr('fill', 'black')
        .attr('text-anchor', 'middle')
        .style('font-size', '14px')
        .text('Number of Trails');

    // Add bars
    svg.selectAll('.bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', d => xScale(d.difficulty))
        .attr('y', d => yScale(d.count))
        .attr('width', xScale.bandwidth())
        .attr('height', d => height - yScale(d.count))
        .attr('fill', d => colorScale(d.difficulty))
        .attr('stroke', '#333')
        .attr('stroke-width', 1);

    // Add value labels on bars
    svg.selectAll('.label')
        .data(data)
        .enter()
        .append('text')
        .attr('class', 'label')
        .attr('x', d => xScale(d.difficulty) + xScale.bandwidth() / 2)
        .attr('y', d => yScale(d.count)-5)
        .attr('text-anchor', 'middle')
        .style('font-size', '12px')
        .style('fill', '#333')
        .text(d => d.count);
}