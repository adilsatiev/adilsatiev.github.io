import React from "react"
import * as fS from "../styles/components/footer.module.css"
import pixel from "../img/pixel.png"

const Footer = () => {
    return (
        <footer className={fS.footer}>
            <ul className={fS.list}>
                <li className={fS.item}>
                    <a className={fS.link} href="https://vk.com/adilsatiev">
                        <img className={`${fS.icon} ${fS.ivk}`} src={pixel} alt="Icon"></img>
                    </a>
                </li>
                <li className={fS.item}>
                    <a className={fS.link} href="https://instagram.com/adilsatiev">
                        <img className={`${fS.icon} ${fS.iinst}`} src={pixel} alt="Icon"></img>
                    </a>
                </li>
                <li className={fS.item}>
                    <a className={fS.link} href="https://tg.com/adilsatiev">
                        <img className={`${fS.icon} ${fS.itg}`} src={pixel} alt="Icon"></img>
                    </a>
                </li>
                <li className={fS.item}>
                    <a className={fS.link} href="https://github.com/adilsatiev">
                        <img className={`${fS.icon} ${fS.igit}`} src={pixel} alt="Icon"></img>
                    </a>
                </li>
            </ul>

            <span className={fS.copy}>Copyright ©2021 All rights reserved </span>
            <span className={fS.creator}>
                Created by Adil Satiev 
            </span>
        </footer>
    )
}

export default Footer
