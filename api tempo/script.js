/*function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = '936aa3b6ed7a8fb5f218a950bacdf2c9';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Deu RUim Familha");
            }
        })
        .then(data => {
            const divResultado = document.getElementById('divResultado');
            divResultado.innerHTML = `
            <h2>Previsão para ${city}<h2/>
            <p>Tempo: ${data.weather[0].description}<p/>
            <p>Tempo: ${data.main.temp}<p/>
            <p>Tempo: ${data.main.humidity}<p/>
            <p>Tempo: ${data.wind.speed}<p/>
            `;
            alert(data);
        })
        .catch(error => {
            console.error('Erro ao obter previsão do tempo:', error);
            const weatherResult = document.getElementById('weather-result');
            weatherResult.innerHTML = '<p>Não foi possível obter a previsão do tempo. Verifique se o nome da cidade está correto.</p>';
        });
}*/
