import React from "react";
import axios from "axios";
import { useState } from "react";


const SearchBox = ({setLocation}) => {

    const [ id, setId ] = useState("");

    const search = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${id}`)
        .then(res => setLocation(res.data))
        .catch(error => console.log(error))
    }

    return(
        <div className="contentSearch">
            <input 
                type="text" 
                placeholder="type a location id" 
                className="input" 
                onChange={e => setId(e.target.value)}
                value={id} 
            />
            <button onClick={search}>Search</button>
        </div>
    )
}

export default SearchBox;