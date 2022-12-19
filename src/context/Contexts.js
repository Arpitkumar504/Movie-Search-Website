import React, { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';

const Appcontext = createContext();
const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const AppProvider = ({ children }) => {
    const [data, setdata] = useState([]);
    const [query, setquery] = useState("titanic");
    const [isLoading, setLoading] = useState(true);
    const getmovie = async (url) => {
        try {
            const datas = await axios.get(url);
            if (datas.data.Response === 'True') {
                setdata(datas.data.Search);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        let timeout = setTimeout(() => {
            getmovie(`${url}&s=${query}`);
            setLoading(true);
        }, 1000);
        return () => clearTimeout(timeout);
    }, [query])

    return (
        <Appcontext.Provider value={{ data, isLoading, query, setquery }}>
            {children}
        </Appcontext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(Appcontext);
}

export { Appcontext, AppProvider, useGlobalContext, url };
