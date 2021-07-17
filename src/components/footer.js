import React from 'react'
import * as fS from '../styles/footer.module.css'
import footerVk from '../img/footer-vk.svg'
import footerInst from '../img/footer-inst.svg'
import footerTg from '../img/footer-tg.svg'
import footerGit from '../img/footer-git.svg'

const Footer = () => {
    return (
        <footer>
            <ul className={fS.List}>
                <li className={fS.item}>
                    <a href="https://vk.com/adilsatiev">
                        <img src={footerVk} alt='icon'></img>
                    </a>
                </li>
                <li className={fS.item}>
                    <a href="https://instagram.com/adilsatiev">
                        <img src={footerInst} alt='icon'></img>
                    </a>
                    </li>
                <li className={fS.item}>
                    <a href="https://tg.com/ad1ls">
                        <img src={footerTg} alt='icon'></img>
                    </a>
                </li>
                <li className={fS.item}>
                    <a href="https://github.com/adilsatiev">
                        <img src={footerGit} alt='icon'></img>
                    </a>
                </li>
            </ul>
            <p>Created by Adil Satiev, C 2021</p>
        </footer>
    )
}

export default Footer