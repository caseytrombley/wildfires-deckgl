import React from 'react';
import DeckGL from '@deck.gl/react';
import { Map } from 'react-map-gl'; // ✅ New-style Map component
import { GeoJsonLayer } from '@deck.gl/layers';

const INITIAL_VIEW_STATE = {
    longitude: -100,
    latitude: 40,
    zoom: 4,
    pitch: 0,
    bearing: 0,
};

function WildfireMap({ data }) {
    const wildfireLayer = new GeoJsonLayer({
        id: 'wildfires',
        data,
        pickable: true,
        filled: true,
        pointRadiusMinPixels: 2,
        pointRadiusScale: 200,
        getPointRadius: f => f.properties.FRP || 10,
        getFillColor: [255, 140, 0, 180],
    });

    return (
        <DeckGL
            initialViewState={INITIAL_VIEW_STATE}
            controller={true}
            layers={[wildfireLayer]}
        >
            <Map
                mapLib={import('maplibre-gl')}
                mapStyle="https://api.maptiler.com/maps/basic/style.json?key=GaQIJz1q05ls14zjjf0m"
                attributionControl={true}
            />

        </DeckGL>
    );
}

export default WildfireMap;
