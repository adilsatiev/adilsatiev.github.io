import React from 'react'
import * as wS from '../styles/works.module.css'
import workImgOne from '../img/work-img1.png'
import workImgTwo from '../img/work-img2.png'
import workImgThree from '../img/work-img3.png'

const Works = () => {
    return (
        <div className={wS.container}>

            <h2 className={wS.h2}>Featured works</h2>

            <ul className={wS.list}>

                <li className={wS.item}>
                    <div><img src={workImgOne} alt='Work Image'></img></div>
                    <div>
                        <h3 className={wS.title}>Designing Dashboards</h3>
                        <div className={wS.key}>
                            <span className={wS.data}>2021</span>
                            <span className={wS.topic}>Dashboard</span>
                        </div>
                        <p className={wS.text}>
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam c
                            onsequat sunt nostrud amet.
                        </p>
                    </div>
                </li>
                
                <li className={wS.item}>
                    <div><img src={workImgTwo} alt='Work Image'></img></div>
                    <div>
                        <h3 className={wS.title}>Vibrant Portraits of 2020</h3>
                        <div className={wS.key}>
                            <span className={wS.data}>2021</span>
                            <span className={wS.topic}>Illustration</span>
                        </div>
                        <p className={wS.text}>
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam c
                            onsequat sunt nostrud amet.
                        </p>
                    </div>
                </li>

                <li className={wS.item}>
                    <div><img src={workImgThree} alt='Work Image'></img></div>
                    <div>
                        <h3 className={wS.title}>36 Days of Malayalam type</h3>
                        <div className={wS.key}>
                            <span className={wS.data}>2021</span>
                            <span className={wS.topic}>Typography</span>
                        </div>
                        <p className={wS.text}>
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam c
                            onsequat sunt nostrud amet.
                        </p>
                    </div>
                </li>

            </ul>
        </div>
    )
}

export default Works