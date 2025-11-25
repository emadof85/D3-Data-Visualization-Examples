const svg = d3.select('svg');
const duration = 2000;
function updateChart(data) {
  svg.selectAll('circle')
    .data(data)
    .join(
      enter => enter.append('circle')
        .attr('cx', (d, i) => (i * 80) + 50)
        .attr('cy', 80)
        .attr('fill', 'green')
        .attr('opacity', 0)
        .attr('r', 0)
        .transition()
        .duration(duration)
        .attr('r', d => d)
        .attr('opacity', 1),
      update => update
        .transition()
        .duration(duration)
        .attr('fill', 'blue')
        .attr('r', d => d)
        .attr('cx', (d, i) => (i * 80) + 50)
        .attr('cy', 80),
      exit => exit
        .transition()
        .duration(duration)
        .attr('fill', 'red')
        .attr('opacity', 0)
        .attr('r', 0)
        .remove()
    );
}

// Event listeners for buttons
document.getElementById('dataset1').addEventListener('click', () => updateChart([5, 10, 15]));
document.getElementById('dataset2').addEventListener('click', () => updateChart([20, 30]));
document.getElementById('dataset3').addEventListener('click', () => updateChart([8, 12, 16, 24]));

// Start with an empty chart
updateChart([]);