import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import QrCode from '../images/qr-code-for-faith.svg'

const QrPage = () => {

  return (
  <Layout>
    <SEO title="QR" />
    <article className="qr">
        <img
          src={QrCode}
          alt="Code for Faith's QR Code"
        />
        <p><a href="/">https://codeforfaith.com</a></p>
        {/*<!-- This QR Code was generated with this API: https://api.qrserver.com/v1/create-qr-code/?format=svg&size=300&qzone=1&data=https://codeforfaith.com -->*/}
      </article>
  </Layout>
)};

export default QrPage
