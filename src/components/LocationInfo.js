import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import ResidentInfo from "./ResidentInfo";

let LocationInfo = () => {

    let Random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    const [location, setLocation] = useState({});

    useEffect(() => {
     axios.get(`https://rickandmortyapi.com/api/location/${Random(1,126)}`)
          .then(res => setLocation(res.data))
          .catch(error => console.log(error))
     }, []);

     return (
         <>
            <SearchBox setLocation={setLocation}/>
                <section className="aboutUbication">
                    <h3>{location.name}</h3>
                    <p><b>type:</b> {location.type}</p>
                    <p><b>dimencion:</b> {location.dimension}</p>
                    <p><b>population:</b> {location.residents?.length}</p>
                </section>
                <section className="residents" key={location.id}>
                    {
                        location.residents?.map((resident) => <ResidentInfo data={resident} key={resident}/>)
                    }
                </section>
        </>
     )

}

export default LocationInfo;