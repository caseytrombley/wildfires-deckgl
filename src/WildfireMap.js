import React from 'react';
import DeckGL from '@deck.gl/react';
import { Map } from '@vis.gl/react-maplibre';
import maplibregl from 'maplibre-gl';
import { GeoJsonLayer } from '@deck.gl/layers';

// Initial map view (centered over the U.S.)
const INITIAL_VIEW_STATE = {
    longitude: -100,
    latitude: 40,
    zoom: 4,
    pitch: 0,
    bearing: 0
};

function WildfireMap({ data }) {
    const wildfireLayer = new GeoJsonLayer({
        id: 'wildfire-layer',
        data,
        pickable: true,
        getRadius: f => f.properties?.FRP || 10,
        pointRadiusMinPixels: 2,
        pointRadiusScale: 200,
        getFillColor: [255, 140, 0, 180], // orange/yellow fill
    });

    return (
        <DeckGL
            initialViewState={INITIAL_VIEW_STATE}
            controller={true}
            layers={[wildfireLayer]}
        >
            <Map
                reuseMaps
                mapLib={maplibregl}
                mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
                style={{ width: '100%', height: '100%' }}
            />
        </DeckGL>
    );
}

export default WildfireMap;
