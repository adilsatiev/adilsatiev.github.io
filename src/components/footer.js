import React from 'react'
import * as fS from '../styles/footer.module.css'

const Footer = () => {
    return (
        <footer>
            <ul className={fS.List}>
                <li className={fS.item}><a href="https://vk.com/adilsatiev">vk</a></li>
                <li className={fS.item}><a href="https://instagram.com/adilsatiev">inst</a></li>
                <li className={fS.item}><a href="https://tg.com/ad1ls">tg</a></li>
                <li className={fS.item}><a href="https://github.com/adilsatiev">git</a></li>
            </ul>
            <p>Created by Adil Satiev, C 2021</p>
        </footer>
    )
}

export default Footer