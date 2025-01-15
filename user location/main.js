const findMyState = () => {
    const status = document.querySelector('.status');
    const loadingElement = document.querySelector('.loading');

    const showLoading = () => {
        loadingElement.style.display = 'flex';
    };

    const hideLoading = () => {
        loadingElement.style.display = 'none';
    };

    const success = async (position) => {
        try {
            showLoading();
            const { latitude, longitude } = position.coords;
            const geoAPIURL = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

            const response = await fetch(geoAPIURL);
            if (!response.ok) {
                throw new Error('Failed to fetch location data');
            }

            const data = await response.json();
            const locationInfo = `
                <h1>Continent: ${data.continent}</h1>
                <h1>Country: ${data.countryName}</h1>
                <h1>Country Code: ${data.countryCode}</h1>
                <h1>Province: ${data.principalSubdivision}</h1>
                <h1>Province Code: ${data.principalSubdivisionCode}</h1>
                <h1>Latitude: ${data.latitude.toFixed(6)}</h1>
                <h1>Longitude: ${data.longitude.toFixed(6)}</h1>
            `;
            
            status.innerHTML = locationInfo;
        } catch (error) {
            status.innerHTML = `<h1 style="color: red;">Error: ${error.message}</h1>`;
        } finally {
            hideLoading();
        }
    };

    const error = () => {
        hideLoading();
        status.innerHTML = '<h1 style="color: red;">Unable to retrieve your location. Please ensure location services are enabled.</h1>';
    };

    try {
        showLoading();
        if (!navigator.geolocation) {
            throw new Error('Geolocation is not supported by your browser');
        }
        navigator.geolocation.getCurrentPosition(success, error);
    } catch (error) {
        hideLoading();
        status.innerHTML = `<h1 style="color: red;">Error: ${error.message}</h1>`;
    }
};

document.querySelector('.find-state').addEventListener('click', findMyState);