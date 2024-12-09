
import React from 'react'
import { useContext } from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api';

const Gifcontext = React.createContext();


const GifProvider = ({ children }) => {
     
    const [gifs, setGifs] = React.useState([]);
    const [filters, setFilters] = React.useState("gifs");
    const [favories, setFavories] = React.useState([]);
    const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_KEY);

    return <Gifcontext.Provider value={{ gf, gifs, setGifs, filters, setFilters, favories }}>
        {children}
    </Gifcontext.Provider>;
};
export const GifState = () => useContext(Gifcontext);

export default GifProvider;