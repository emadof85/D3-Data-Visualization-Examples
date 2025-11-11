// Load and process the data
d3.csv('../../Examples_1/data/vancouver_trails.csv')
    .then(data => {
        // Count trails by region
        const regionCounts = d3.rollup(
            data,
            v => v.length,
            d => d.region
        );

        // Convert to array for D3
        const regionData = Array.from(regionCounts, ([region, count]) => ({
            region,
            count
        }));

        // Create the pie chart
        createPieChart(regionData);
    })
    .catch(error => {
        console.error('Error loading data:', error);
        document.querySelector('.container').innerHTML += '<p style="color: red; text-align: center;">Error loading data. Please check the console for details.</p>';
    });

function createPieChart(data) {
    const width = 800;
    const height = 600;
    const radius = Math.min(width, height) / 2 - 40;

    // Create SVG
    const svg = d3.select('#piechart')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2},${height / 2})`);

    // Color scale
    const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

    // Create pie generator
    const pie = d3.pie()
        .value(d => d.count)
        .sort(null);

        
    // Create arc generator
    const arc = d3.arc()
        .innerRadius(radius/2)  // For a donut chart, set innerRadius > 0
        .outerRadius(radius);

    // Create arcs
    const arcs = svg.selectAll('.arc')
        .data(pie(data))
        .enter()
        .append('g')
        .attr('class', 'arc');

    // Add path for each arc
    arcs.append('path')
        .attr('d', arc)
        .attr('fill', (d, i) => colorScale(i))
        .attr('stroke', 'white')
        .style('stroke-width', '2px');

    // Add percentage labels inside slices
    arcs.append('text')
        .attr('transform', d => `translate(${arc.centroid(d)})`)
        .attr('text-anchor', 'middle')
        .style('font-size', '12px')
        .style('fill', 'white')
        .style('font-weight', 'bold')
        .text(d => {
            const percentage = ((d.data.count / d3.sum(data, d => d.count)) * 100).toFixed(1);
            return percentage + '%';
        });

    // Create legend
    const legend = d3.select('.container')
        .append('div')
        .attr('class', 'legend');

    const legendItems = legend.selectAll('.legend-item')
        .data(data)
        .enter()
        .append('div')
        .attr('class', 'legend-item');

    legendItems.append('div')
        .attr('class', 'legend-color')
        .style('background-color', (d, i) => colorScale(i));

    legendItems.append('span')
        .text(d => `${d.region}: ${d.count} trails`);
}