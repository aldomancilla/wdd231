const obtenerDatosPais = function (pais) {
    fetch(`https://restcontries.com/v2/name/${pais}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        }); {
    
};

obtenerDatosPais('guatemala');

