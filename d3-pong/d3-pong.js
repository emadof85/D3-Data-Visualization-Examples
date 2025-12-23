window.addEventListener('DOMContentLoaded', function() {
    const width = 800;
    const height = 600;
    const margin = {top: 10, right: 10, bottom: 10, left: 10};
    const paddleWidth = 10;
    const paddleHeight = 80;
    const ballRadius = 10;
    const paddleSpeed = 5;
    const ballSpeed = 5;

    const svg = d3.select("main")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    // Paddles
    const leftPaddle = svg.append("rect")
        .attr("x", margin.left)
        .attr("y", height / 2 - paddleHeight / 2)
        .attr("width", paddleWidth)
        .attr("height", paddleHeight)
        .attr("fill", "white");

    const rightPaddle = svg.append("rect")
        .attr("x", width - margin.right - paddleWidth)
        .attr("y", height / 2 - paddleHeight / 2)
        .attr("width", paddleWidth)
        .attr("height", paddleHeight)
        .attr("fill", "white");

    // Ball
    const ball = svg.append("circle")
        .attr("cx", width / 2)
        .attr("cy", height / 2)
        .attr("r", ballRadius)
        .attr("fill", "white");

    // Scores
    const leftScore = svg.append("text")
        .attr("x", width / 4)
        .attr("y", margin.top + 30)
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        .attr("font-size", "24px")
        .text("0");

    const rightScore = svg.append("text")
        .attr("x", 3 * width / 4)
        .attr("y", margin.top + 30)
        .attr("text-anchor", "middle")
        .attr("fill", "white")
        .attr("font-size", "24px")
        .text("0");

    // Middle line
    svg.append("line")
        .attr("x1", width / 2)
        .attr("y1", margin.top)
        .attr("x2", width / 2)
        .attr("y2", height - margin.bottom)
        .attr("stroke", "white")
        .attr("stroke-width", 2)
        .attr("stroke-dasharray", "5,5");

    // Game state
    let leftScoreValue = 0;
    let rightScoreValue = 0;
    let ballX = width / 2;
    let ballY = height / 2;
    let ballDX = ballSpeed * (Math.random() > 0.5 ? 1 : -1);
    let ballDY = ballSpeed * (Math.random() - 0.5) * 2;
    let leftPaddleY = height / 2 - paddleHeight / 2;
    let rightPaddleY = height / 2 - paddleHeight / 2;

    // Keys
    const keys = {};
    d3.select("body").on("keydown", function(event) {
        keys[event.key] = true;
    });
    d3.select("body").on("keyup", function(event) {
        keys[event.key] = false;
    });

    // Drag for paddles
    const dragLeft = d3.drag()
        .on("drag", function(event) {
            leftPaddleY = Math.max(margin.top, Math.min(event.y - paddleHeight / 2, height - margin.bottom - paddleHeight));
            leftPaddle.attr("y", leftPaddleY);
        });

    const dragRight = d3.drag()
        .on("drag", function(event) {
            rightPaddleY = Math.max(margin.top, Math.min(event.y - paddleHeight / 2, height - margin.bottom - paddleHeight));
            rightPaddle.attr("y", rightPaddleY);
        });

    leftPaddle.call(dragLeft);
    rightPaddle.call(dragRight);

    // Game loop
    d3.interval(function() {
        // Move paddles with keys
        if (keys["w"] || keys["W"]) {
            leftPaddleY = Math.max(margin.top, leftPaddleY - paddleSpeed);
        }
        if (keys["s"] || keys["S"]) {
            leftPaddleY = Math.min(height - margin.bottom - paddleHeight, leftPaddleY + paddleSpeed);
        }
        if (keys["ArrowUp"]) {
            rightPaddleY = Math.max(margin.top, rightPaddleY - paddleSpeed);
        }
        if (keys["ArrowDown"]) {
            rightPaddleY = Math.min(height - margin.bottom - paddleHeight, rightPaddleY + paddleSpeed);
        }

        leftPaddle.attr("y", leftPaddleY);
        rightPaddle.attr("y", rightPaddleY);

        // Move ball
        ballX += ballDX;
        ballY += ballDY;

        // Bounce off top and bottom
        if (ballY - ballRadius < margin.top || ballY + ballRadius > height - margin.bottom) {
            ballDY = -ballDY;
        }

        // Bounce off paddles
        if (ballX - ballRadius < margin.left + paddleWidth && ballY > leftPaddleY && ballY < leftPaddleY + paddleHeight) {
            ballDX = Math.abs(ballDX);
        }
        if (ballX + ballRadius > width - margin.right - paddleWidth && ballY > rightPaddleY && ballY < rightPaddleY + paddleHeight) {
            ballDX = -Math.abs(ballDX);
        }

        // Score
        if (ballX < 0) {
            rightScoreValue++;
            rightScore.text(rightScoreValue);
            resetBall();
        }
        if (ballX > width) {
            leftScoreValue++;
            leftScore.text(leftScoreValue);
            resetBall();
        }

        // Update ball position
        ball.attr("cx", ballX).attr("cy", ballY);
    }, 16);

    function resetBall() {
        ballX = width / 2;
        ballY = height / 2;
        ballDX = ballSpeed * (Math.random() > 0.5 ? 1 : -1);
        ballDY = ballSpeed * (Math.random() - 0.5) * 2;
    }
});
