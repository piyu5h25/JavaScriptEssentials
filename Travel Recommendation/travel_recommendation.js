document.addEventListener('DOMContentLoaded', () => {
    fetch('travel_recommendationjson')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Display recommendations
        })
        .catch(error => console.error('Error fetching data:', error));
});
document.getElementById('search-btn').addEventListener('click', () => {
    const keyword = document.getElementById('search-input').value.toLowerCase();
    // Filter and display results based on the keyword
});
function displayRecommendations(keyword) {
    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            const filteredData = data.filter(item =>
                item.name.toLowerCase().includes(keyword) ||
                item.description.toLowerCase().includes(keyword)
            );
            // Code to display filteredData
        });
}
document.getElementById('reset-btn').addEventListener('click', () => {
    document.getElementById('search-input').value = '';
    // Clear displayed results
});
function displayTimeInCountry(timeZone) {
    const options = {
        timeZone: timeZone,
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    const localTime = new Date().toLocaleTimeString('en-US', options);
    console.log(`Current time in ${timeZone}: ${localTime}`);
}
