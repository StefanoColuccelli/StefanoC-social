import React, { useContext, useEffect, useState } from "react";
import './style.css';
import { AppContext, IAppContext } from "../../context/AppContext";

function Content() {
const {jsonData} = useContext(AppContext) as IAppContext

    return (
        <div className="content">
            {jsonData?.slice().reverse().map((item) => (
                <div className="post">
                    <p className="id">{item.id}</p>
                    <p className="titolo">{item.title}</p>
                    <p className="body">{item.body}</p>
                </div>
            ))
            }
        </div>
    )
}

export default Content;