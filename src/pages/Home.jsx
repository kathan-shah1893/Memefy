import React, { useEffect, useState } from 'react';
import Carddata from '../Component/Card.jsx';
import { allmeme } from '../api/data.js';

export default function Home(props) {
    const [getdata, setgetdata] = useState([]);

    useEffect(() => {
        allmeme().then((data) => {
            setgetdata(data.data.memes);
        });
    }, []);
    return (
        <div className="container">
            <div className="row">
                {getdata.map((el, index) => (
                    <div className="col-md-4" key={index}>
                        <Carddata img={el.url} title={el.name} className="shadow-lg"/>
                    </div>
                ))}
            </div>
        </div>
    );
}
