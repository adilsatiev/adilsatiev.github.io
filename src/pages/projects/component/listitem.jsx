import React from "react"

import { Link } from "gatsby"
import * as pS from "../../../styles/pages/project.module.css"


const ListItem = props => {
    return (
        <li className={pS.item}>
            <div>
                <img className={pS.img} src={props.imagesrc} alt="Work"></img>
            </div>
            <div className={pS.wrapper}>
                <h3 className={pS.title}>
                    <Link className={pS.link} to={props.link}>
                        {props.title}
                    </Link>
                </h3>
                <div className={pS.key}>
                    <span className={pS.data}>{props.data}</span>
                    <span className={pS.topic}>{props.topic}</span>
                </div>
                <p className={pS.text}>
                    {props.description}
                </p>
            </div>
        </li>
    )
}


export default ListItem