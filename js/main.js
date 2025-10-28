var svg = d3.select("#d3-container") // Select an existing element, e.g., the body
			.append("svg")   // Append an SVG element
			.attr("width", 500)
			.attr("height", 300);
				
var circle = svg.append("circle");
var rectangle = svg.append("rect");

circle.attr("cx", 100) // X-coordinate of the center
	  .attr("cy", 150) // Y-coordinate of the center
	  .attr("r", 50)   // Radius
	  .attr("fill", "steelblue") // Fill color
	  .attr("stroke", "black")  // Border color
	  .attr("opacity", 0.7);  // Opacity
	  
rectangle.attr("x", 10)
	.attr("y", 10)
	.attr("width", 100)
	.attr("height", 75)
	.attr("fill", "steelblue")
	.attr("stroke", "black")
	.attr("stroke-width", 2);	  
	
// Create a symbol generator for a triangle
const triangleSymbol = d3.symbol()
  .type(d3.symbolTriangle) // Specify the symbol type as triangle
  .size(2000); // Set the size of the triangle

// Append a path element and apply the symbol generator
svg.append("path")
  .attr("d", triangleSymbol) // Use the symbol generator to define the path
  .attr("fill", "steelblue")
  .attr("stroke", "black")
  .attr("transform", "translate(250, 100)"); // Position the triangle

var svg = d3.select("#dataviz_area")
svg.append("circle")
  .attr("cx", 2).attr("cy", 2).attr("r", 40).style("fill", "blue");
svg.append("circle")
  .attr("cx", 140).attr("cy", 70).attr("r", 40).style("fill", "red");
svg.append("circle")
  .attr("cx", 300).attr("cy", 100).attr("r", 40).style("fill", "green");