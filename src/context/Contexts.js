import React, { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';

const Appcontext = createContext();
const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=love`;

const AppProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setdata] = useState([]);
    const [isError, setError] = useState({ show: "false", msg: "" });
    const getmovie = async (url) => {
        try {
            const datas = await axios.get(url);
            if (datas.data.Response === 'True') {
                setLoading(false);
                setdata(datas.data.Search);
            }
            else {
                setError({
                    show: true,
                    msg: data.error,
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getmovie(url);
    }, [])

    return (
        <Appcontext.Provider value={{ data, isError, isLoading }}>
            {children}
        </Appcontext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(Appcontext);
}

export { Appcontext, AppProvider, useGlobalContext };
