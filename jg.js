var ctx = document.getElementById('myChart').getContext('2d');

// Data trigonometri
var data = {
    labels: [],
    datasets: [
        {
            label: 'Sinus',
            data: [],
            fill: false,
            borderColor: 'blue',
            borderWidth: 1
        }
    ]
}
// Isi data
for (var i = 0; i <= 360; i += 30) {
    data.labels.push(i + '°');
    data.datasets[0].data.push(Math.sin((i * Math.PI) / 180));

// Konfigurasi chart
var config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Sudut (derajat)'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Nilai Sinus'
                }
            }
        }
    }
}
// Buat chart
var myChart = new Chart(ctx, config);