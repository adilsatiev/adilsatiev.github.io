import React from "react"
import Head from "../components/head"
import Layout from "../components/layout"
import * as cS from "../styles/pages/contact.module.css"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <div className={cS.container}>
        <h1 className={cS.header}>Contact</h1>
        <div className={cS.social}>
          <div className={cS.mail}>
            <span className={cS.find}>
              You could find me in social media or just send me a letter
            </span>
            <a className={cS.gmail} href="mailto:theabsolutemadm4n@gmail.com">
              theabsolutemadm4n@gmail.com
            </a>
          </div>
          <ul className={cS.list}>
            <li className={cS.item}>
              <a href="https://t.me/adilsatiev" className={cS.link}>
                t.me/<span className={cS.dedicated}>adilsatiev</span>
              </a>
            </li>
            <li className={cS.item}>
              <a href="https://vk.com/adilsatiev" className={cS.link}>
                vk.com/<span className={cS.dedicated}>adilsatiev</span>
              </a>
            </li>
            <li className={cS.item}>
              <a href="https://github.com/adilsatiev" className={cS.link}>
                github.com/<span className={cS.dedicated}>adilsatiev</span>
              </a>
            </li>
            <li className={cS.item}>
              <a href="https://instagram.com/adilsatiev" className={cS.link}>
                instagram.com/<span className={cS.dedicated}>adilsatiev</span>
              </a>
            </li>
            <li className={cS.item}>
              <a href="https://linkedin.com/in/adilsatiev" className={cS.link}>
                linkedin.com/in/<span className={cS.dedicated}>adilsatiev</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
