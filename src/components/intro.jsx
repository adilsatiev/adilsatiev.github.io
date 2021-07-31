import React from "react"
import Typical from "react-typical"
import introPhoto from "../img/intro-photo.png"
import * as iS from "../styles/components/intro.module.css"

export default function Intro() {
    return (
        <div className={iS.wrapper}>
            <div className={iS.main}>
                <div className={iS.box}>
                    <h1 className={iS.header}>
                        Hey! My name is Adil and I'm a {""}
                        <Typical
                            loop={Infinity}
                            wrapper="b"
                            steps={[
                                "developer 😎",
                                3000,
                                "student 😵",
                                3000,
                                "designer 🤠",
                                3000,
                                "... 🥴",
                                3000,
                            ]}
                        ></Typical>
                    </h1>

                    <p className={iS.text}>
                        I'm Adil Satiev. From Kazan, Russia. I'm web developer. On this site you
                        could read my blog or check my works. If you want to check my CV, so
                        download button is below! Want to look over my social media accounts? Links
                        at the bottom of the site.
                    </p>

                    <button className={iS.button}>Download Resume</button>
                </div>

                <div>
                    <img className={iS.photo} src={introPhoto} alt="introPhoto"></img>
                </div>
            </div>

            <svg className={iS.wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    className={iS.wavePath}
                    fill="#0099ff"
                    fill-opacity="1"
                    d="M0,128L48,117.3C96,107,192,85,288,80C384,75,480,85,576,117.3C672,149,768,203,864,197.3C960,192,1056,128,1152,101.3C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
            <svg className={iS.topwave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    className={iS.topwavePath}
                    fill="#0099ff"
                    fill-opacity="1"
                    d="M0,128L48,117.3C96,107,192,85,288,80C384,75,480,85,576,117.3C672,149,768,203,864,197.3C960,192,1056,128,1152,101.3C1248,75,1344,85,1392,90.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
        </div>
    )
}
