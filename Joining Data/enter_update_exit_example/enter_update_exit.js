const svg = d3.select('svg');

// Traditional method: enter, merge, exit
function updateChartTraditional(data) {
  // Data-join (circle now contains the update selection)
  let circle = svg.selectAll('circle')
      .data(data);

  // Enter (initialize the newly added elements)
  let circleEnter = circle.enter().append('circle')
      .attr('fill', '#707086');

  // Enter and Update (set the dynamic properties of the elements)
  circleEnter.merge(circle)
      .attr('r', d => d)
      .attr('cx', (d, index) => (index * 80) + 50)
      .attr('cy', 80);

  // Exit
  circle.exit().remove();
}

// Join shortcut method
function updateChartJoin(data) {
  svg.selectAll('circle')
    .data(data)
    .join('circle') 
        .attr('fill', '#707086') 
        .attr('r', d => d) 
        .attr('cx', (d,index) => (index * 80) + 50) 
        .attr('cy', 80); 
}

// Wrapper function to choose method
function updateChart(data) {
  const method = document.querySelector('input[name="method"]:checked').value;
  if (method === 'traditional') {
    updateChartTraditional(data);
  } else {
    updateChartJoin(data);
  }
}

// Event listeners for buttons
document.getElementById('dataset1').addEventListener('click', () => updateChart([5, 10, 15]));
document.getElementById('dataset2').addEventListener('click', () => updateChart([20, 30]));
document.getElementById('dataset3').addEventListener('click', () => updateChart([8, 12, 16, 24]));

// Start with an empty chart
updateChart([]);