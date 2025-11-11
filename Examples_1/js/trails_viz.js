// Load and process the data
d3.csv('data/vancouver_trails.csv')
    .then(data => {
        // Convert strings to numbers
        data.forEach(d => {
            d.time = +d.time;
            d.distance = +d.distance;
        });

        // Calculate statistics
        const totalTrails = data.length;
        const avgTime = d3.mean(data, d => d.time).toFixed(1);
        const avgDistance = d3.mean(data, d => d.distance).toFixed(1);
        const easyTrails = data.filter(d => d.difficulty === 'Easy').length;

        // Update stats display
        document.getElementById('total-trails').textContent = totalTrails;
        document.getElementById('avg-time').textContent = avgTime;
        document.getElementById('avg-distance').textContent = avgDistance;
        document.getElementById('easy-trails').textContent = easyTrails;

        // Create the scatter plot
        createScatterPlot(data);
    })
    .catch(error => {
        console.error('Error loading data:', error);
        document.querySelector('.container').innerHTML += '<p style="color: red; text-align: center;">Error loading data. Please check the console for details.</p>';
    });

function createScatterPlot(data) {
    const margin = {top: 40, right: 40, bottom: 60, left: 60};
    const width = 1000 - margin.left - margin.right;
    const height = 600 - margin.top - margin.bottom;

    // Create SVG
    const svg = d3.select('#scatterplot')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    // Create tooltip
    const tooltip = d3.select('body').append('div')
        .attr('class', 'tooltip');

    // Color scale
    const colorScale = d3.scaleOrdinal()
        .domain(['Easy', 'Intermediate', 'Difficult'])
        .range(['#d3eecd', '#7bc77e', '#2a8d46']);

    // Scales
    const xScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.time)])
        .range([0, width]);

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.distance)])
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
        .call(d3.axisLeft(yScale).ticks(10))
        .append('text')
        .attr('transform', 'rotate(-90)')
        .attr('x', -height / 2)
        .attr('y', -40)
        .attr('fill', 'black')
        .attr('text-anchor', 'middle')
        .style('font-size', '14px')
        .text('Distance (km)');

    // Add grid lines
    svg.append('g')
        .attr('class', 'grid')
        .attr('opacity', 0.8)
        .call(d3.axisBottom(xScale).ticks(10).tickSize(height).tickFormat(''/*d => `${d}h`*/))
        .selectAll('line')
        .attr('stroke', '#ddd');

    svg.append('g')
        .attr('class', 'grid')
        .attr('opacity', 0.8)
        .call(d3.axisLeft(yScale).ticks(10).tickSize(-width).tickFormat(''))
        .selectAll('line')
        .attr('stroke', '#ddd');

    // Add dots
    svg.selectAll('.dot')
        .data(data)
        .enter()
        .append('circle')
        .attr('class', 'dot')
        .attr('cx', d => xScale(d.time))
        .attr('cy', d => yScale(d.distance))
        .attr('r', 6)
        .attr('fill', d => colorScale(d.difficulty))
        .attr('stroke', '#333')
        .attr('stroke-width', 1)
        .style('cursor', 'pointer')
        .on('mouseover', function(event, d) {
            d3.select(this)
                .attr('r', 8)
                .attr('stroke-width', 2);

            tooltip
                .style('opacity', 1)
                .html(`
                    <strong>${d.trail}</strong><br>
                    Region: ${d.region}<br>
                    Difficulty: ${d.difficulty}<br>
                    Time: ${d.time} hours<br>
                    Distance: ${d.distance} km<br>
                    Season: ${d.season}
                `)
                .style('left', (event.pageX + 10) + 'px')
                .style('top', (event.pageY - 10) + 'px');
        })
        .on('mouseout', function() {
            d3.select(this)
                .attr('r', 6)
                .attr('stroke-width', 1);

            tooltip.style('opacity', 0);
        });
}