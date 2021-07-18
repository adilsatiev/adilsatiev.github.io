import React from 'react'
import * as rS from '../styles/recent.styles.css'

const Recent = () => {
    return (
        <div className={rS.recent}>
            <div className={rS.wrapper}>
                <h2 className={rS.h2}>
                    Recent Posts
                </h2>
                <div className={rS.container}>

                    <div className={rS.post}>
                        <h3 className={rS.title}>Making a desing system from scratch</h3>
                        <div className={rS.key}>
                            <span className={rS.data}>12 Jul 2021</span>
                            <span className={rS.topic}>Design, Pattern</span>
                        </div>
                        <p className={rS.description}>
                            Amet minim mollit non deserunt ullamco est sit aliqua
                            dolor do amet sint. Velit officia consequat durS enim
                            velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>

                    <div className={rS.post}>
                        <h3 className={rS.title}>Creating pixel perfect icons in Figma</h3>
                        <div className={rS.key}>
                            <span className={rS.data}>05 May 2021</span>
                            <span className={rS.topic}>Figma, Design</span>
                        </div>
                        <p className={rS.description}>
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