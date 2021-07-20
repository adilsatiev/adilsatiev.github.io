import React from 'react'
import { Link } from 'gatsby'
import * as rS from '../styles/recent.module.css'

const Recent = () => {
    return (
        <div className={rS.recent}>
            <div className={rS.wrapper}>
                <h2 className={rS.h2}>
                    Recent Posts
                </h2>
                <div className={rS.container}>

                    <div className={rS.post}>
                        <h3 className={rS.title}>

                            <Link className={rS.link} to='/'>Making a desing system from scratch</Link>

                        </h3>
                        <div className={rS.key}>
                            <span className={rS.data}>12 Jul 2021</span>
                            <span>Design, Pattern</span>
                        </div>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua
                            dolor do amet sint. Velit officia consequat durS enim
                            velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>

                    <div className={rS.post}>
                        <h3 className={rS.title}>

                            <Link className={rS.link} to='/'>Creating pixel perfect icons in Figma</Link>

                        </h3>
                        <div className={rS.key}>
                            <span className={rS.data}>05 May 2021</span>
                            <span>Figma, Design</span>
                        </div>
                        <p>
                            Amet minim mollit non deserunt ullamco est sit aliqua
                            dolor do amet sint. Velit officia consequat duis enim
                            velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recent