import React from 'react'
import * as fS from '../styles/footer.module.css'
import footerVk from '../img/footer-vk.svg'
import footerInst from '../img/footer-inst.svg'
import footerTg from '../img/footer-tg.svg'
import footerGit from '../img/footer-git.svg'

const Footer = () => {
    return (
        <footer className={fS.footer}>

            <ul className={fS.list}>
                <li className={fS.item}>
                    <a href="https://vk.com/adilsatiev">
                        <img className={fS.img} src={footerVk} alt='icon'></img>
                    </a>
                </li>
                <li className={fS.item}>
                    <a href="https://instagram.com/adilsatiev">
                        <img className={fS.img} src={footerInst} alt='icon'></img>
                    </a>
                    </li>
                <li className={fS.item}>
                    <a href="https://tg.com/adilsatiev">
                        <img className={fS.img} src={footerTg} alt='icon'></img>
                    </a>
                </li>
                <li className={fS.item}>
                    <a href="https://github.com/adilsatiev">
                        <img className={fS.img} src={footerGit} alt='icon'></img>
                    </a>
                </li>
            </ul>

            <span className={fS.copy}>Copyright ©2021 All rights reserved </span>
            <span className={fS.creator}>Created by Adil. Powered by <a href='https://gatsbyjs.com'>Gatsby</a> </span>

        </footer>
    )
}

export default Footer