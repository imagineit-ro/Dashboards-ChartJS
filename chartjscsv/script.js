// Function to create the chart
function createChart(labels, data) {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Weeks at #1',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Weeks'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Player'
                    }
                }
            }
        }
    });
}

// Load and process CSV data
d3.csv('data.csv').then(function(csvData) {
    console.log(csvData); // Add this line to check the data
    const labels = csvData.map(row => row.Name);
    const data = csvData.map(row => parseInt(row.Weeks));
    createChart(labels, data);
});