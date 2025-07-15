import React from 'react';
import DeckGL from '@deck.gl/react';
import { BitmapLayer } from '@deck.gl/layers';
import { GeoJsonLayer } from '@deck.gl/layers';
import { TileLayer } from '@deck.gl/geo-layers';

const INITIAL_VIEW_STATE = {
    longitude: -100,
    latitude: 40,
    zoom: 4,
    pitch: 0,
    bearing: 0,
};

function WildfireMap({ data }) {
    const tileLayer = new TileLayer({
        id: 'osm-tiles',
        data: 'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png',
        minZoom: 0,
        maxZoom: 19,
        tileSize: 256,
        renderSubLayers: ({ tile }) => {
            const { west, south, east, north } = tile.bbox;
            return new BitmapLayer({
                id: `tile-bitmap-${tile.x}-${tile.y}-${tile.z}`,
                image: tile.data, // this is the tile URL
                bounds: [west, south, east, north]
            });
        }
    });

    const wildfireLayer = new GeoJsonLayer({
        id: 'wildfire-points',
        data,
        pickable: true,
        pointRadiusMinPixels: 2,
        pointRadiusScale: 200,
        getPointRadius: f => f.properties.FRP || 10,
        getFillColor: [255, 140, 0, 200],
        getLineColor: [255, 100, 0],
        lineWidthMinPixels: 1
    });

    return (
        <DeckGL
            initialViewState={INITIAL_VIEW_STATE}
            controller={true}
            layers={[tileLayer, wildfireLayer]}
            style={{ position: 'absolute', width: '100%', height: '100%' }}
        />
    );
}

export default WildfireMap;
