// Homework Solution: Dynamic Teams Board

const leaderboard = d3.select('#leaderboard');

// Initial teams data
let teams = [
    { name: 'Real Madrid', points: 15, goalsFor: 20, goalsAgainst: 5 },
    { name: 'Barcelona', points: 12, goalsFor: 18, goalsAgainst: 7 },
    { name: 'Manchester City', points: 10, goalsFor: 16, goalsAgainst: 6 },
    { name: 'Bayern Munich', points: 9, goalsFor: 14, goalsAgainst: 8 },
    { name: 'Liverpool', points: 8, goalsFor: 12, goalsAgainst: 9 }
];

function updateBoard(data) {
    // Sort data by points descending, then goal difference
    data.sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        return (b.goalsFor - b.goalsAgainst) - (a.goalsFor - a.goalsAgainst);
    });

    // Use selectAll.data().join() for enter-update-exit
    const teamsSelection = leaderboard.selectAll('.team')
        .data(data, d => d.name)
        .join(
            enter => enter.append('div')
                .attr('class', 'team entering')
                .style('opacity', 0)
                .style('transform', 'scale(0.8)')
                .transition()
                .duration(800)
                .style('opacity', 1)
                .style('transform', 'scale(1)')
                .selection(),
            update => update
                .attr('class', 'team updating')
                .transition()
                .duration(800)
                .style('transform', `translateY(0px)`)
                .transition()
                .delay(200)
                .duration(300)
                .style('background-color', 'white')
                .on('end', function() { d3.select(this).attr('class', 'team'); }),
            exit => exit
                .attr('class', 'team exiting')
                .transition()
                .duration(800)
                .style('opacity', 0)
                .style('transform', 'scale(0.8)')
                .remove()
        );

    // Update content
    teamsSelection.html(d => `
        <div class="position">${data.indexOf(d) + 1}</div>
        <div class="name">${d.name}</div>
        <div class="points">${d.points}</div>
        <div class="gd">${d.goalsFor - d.goalsAgainst}</div>
    `);
}

function updateData() {
    // Randomly increase points for some teams (increased probability)
    teams.forEach(team => {
        if (Math.random() < 0.5) {
            team.points += Math.floor(Math.random() * 5) + 1;
        }
    });

    // Occasionally add new team (increased probability)
    if (Math.random() < 0.2 && teams.length < 10) {
        const newTeams = ['PSG', 'Chelsea', 'Juventus', 'Atletico Madrid', 'Dortmund'];
        const available = newTeams.filter(t => !teams.find(team => team.name === t));
        if (available.length > 0) {
            const newTeam = available[Math.floor(Math.random() * available.length)];
            teams.push({
                name: newTeam,
                points: Math.floor(Math.random() * 5),
                goalsFor: Math.floor(Math.random() * 10),
                goalsAgainst: Math.floor(Math.random() * 10)
            });
        }
    }

    // Occasionally remove team (increased probability)
    if (Math.random() < 0.1 && teams.length > 3) {
        teams.splice(Math.floor(Math.random() * teams.length), 1);
    }
}

// Set interval to update data faster (every 1 second)
setInterval(() => {
    updateData();
    updateBoard(teams);
}, 1000);

// Initial call
updateBoard(teams);