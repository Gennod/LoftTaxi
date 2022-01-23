export const drawRoute = (map, coordinates) => {

    let mapLayer = map.getLayer('route');

    if(typeof mapLayer !== 'undefined') {
      map.removeLayer('route').removeSource('route');
    }

    map.flyTo({
        center: coordinates[0],
        zoom: 15,
    });

    map.addLayer({
        id: "route",
        type: "line",
        source: {
            type: "geojson",
            data: {
                type: "Feature",
                properties: {},
                geometry: {
                    type: "LineString",
                    coordinates,
                },
            },
        },
        layout: {
            "line-join": "round",
            "line-cap": "round",
        },
        paint: {
            "line-color": "#8B0000",
            "line-width": 8,
        },
    });
};
