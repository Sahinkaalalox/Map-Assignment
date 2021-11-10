function updateMap() {
    console.log("updating map with real time data")
    fetch("https://carbon-intensity.github.io/api-definitions/#get-regional-regionid-regionid")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            data.array.forEach(element => {
                forecast = element.forecast
                if (forecast > 200) { color = "red" }
                else {
                    color = "green"
                }



                // mark in the map

                new mapboxgl.Marker({

                    draggable: false,
                    color: color
                })

                    .addTo(map)


            });
        })
}
let interval = 1800000;
setInterval(updateMap, interval);