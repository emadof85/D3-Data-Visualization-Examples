// Load and process the data
d3.csv('../../Examples_1/data/vancouver_trails.csv')
    .then(data => {
        // Convert strings to numbers
        data.forEach(d => {
            d.time = +d.time;
        });

        // Create the histogram
        createHistogram(data);
    })
    .catch(error => {
        console.error('Error loading data:', error);
        document.querySelector('.container').innerHTML += '<p style="color: red; text-align: center;">Error loading data. Please check the console for details.</p>';
    });

function createHistogram(data) {
    const margin = {top: 40, right: 40, bottom: 60, left: 60};
    const width = 800 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    // Create SVG
    const svg = d3.select('#histogram')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    // Create histogram bins
    const histogram = d3.histogram()
        .value(d => d.time)
        .domain(d3.extent(data, d => d.time))
        .thresholds(20); // Number of bins

    const bins = histogram(data);

    // Scales
    const xScale = d3.scaleLinear()
        .domain([d3.min(bins, d => d.x0), d3.max(bins, d => d.x1)])
        .range([0, width]);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(bins, d => d.length)])
        .range([height, 0]);

    // Add X axis
    svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(xScale).ticks(10))
        .append('text')
        .attr('x', width / 2)
        .attr('y', 40)
        .attr('fill', 'black')
        .attr('text-anchor', 'middle')
        .style('font-size', '14px')
        .text('Time (hours)');

    // Add Y axis
    svg.append('g')
        .call(d3.axisLeft(yScale))
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('x', -height / 2)
        .attr('y', -40)
        .attr('fill', 'black')
        .attr('text-anchor', 'middle')
        .style('font-size', '14px')
        .text('Number of Trails');

    // Add bars
    svg.selectAll('.bar')
        .data(bins)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', d => xScale(d.x0))
        .attr('y', d => yScale(d.length))
        .attr('width', d => xScale(d.x1) - xScale(d.x0) - 1)
        .attr('height', d => height - yScale(d.length))
        .attr('fill', '#69b3a2')
        .attr('stroke', '#333')
        .attr('stroke-width', 1);

    // Add value labels on bars (only for bars with height > 20 to avoid clutter)
    svg.selectAll('.label')
        .data(bins.filter(d => height - yScale(d.length) > 20))
        .enter()
        .append('text')
        .attr('class', 'label')
        .attr('x', d => xScale(d.x0) + (xScale(d.x1) - xScale(d.x0)) / 2)
        .attr('y', d => yScale(d.length) - 5)
        .attr('text-anchor', 'middle')
        .style('font-size', '10px')
        .style('fill', '#333')
        .text(d => d.length);
}