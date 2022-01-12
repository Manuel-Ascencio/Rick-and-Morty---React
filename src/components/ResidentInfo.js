import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";


let ResidentInfo = ({data}) => {

    const [ residentInfo, setResidentInfo ] = useState({});

    useEffect(() => {
        axios.get(data)
            .then(res => setResidentInfo(res.data))
            .catch(error => console.log(error))
    }, [])

    return(
            <section className="resident">
                <div>
                    <img src={residentInfo.image} alt="" width="100%" className="residentImage"/>
                </div>
                <div className="info">
                    <h3>{residentInfo.name}</h3>
                    <p>{residentInfo.status} : {residentInfo.species}</p>
                    <p><b>Origin: <i>{residentInfo.origin?.name}</i></b></p>
                    <p><b>Episodes where appear: <i>{residentInfo.episode?.length}</i></b></p>
                </div>
            </section>
    )

}

export default ResidentInfo;