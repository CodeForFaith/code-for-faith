import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

//for more information
//https://certikit.com/terms-conditions/privacy-policy/
//https://certikit.com/cookie-policy/

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <SEO title="Privacy Policy" />
      <article className="privacy-policy">
        <h1>Code for Faith Privicy Policy</h1>
        <h2>5th January 2020</h2>
        <p>This privacy notice tells you about the information we collect from you when you use our website. In collecting this information, we are acting as a data controller and, by law, we are required to provide you with information about us, about why and how we use your data, and about the rights you have over your data.</p>
        <h2>Who are we?</h2>
        <p>We are Code for Faith. You can contact us by email at <a href="mailto:codeforfaith@gmail.com">codeforfaith@gmail.com</a>.</p>
        <h2>How we use your information</h2>
        <ul>
            <li><a href="#when-you-use-our-website">When you use our website</a></li>
            <li><a href="#your-rights-as-a-data-subject">Your rights as a data subject</a></li>
            <li><a href="#your-right-to-complain">Your right to complain</a></li>
            <li><a href="#updates-to-this-privacy-policy">Updates to this privacy policy</a></li>
        </ul>
        <h2 name="when-you-use-our-website">When you use our website</h2>
        <h2 name="your-rights-as-a-data-subject">Your rights as a data subject</h2>
        <h2 name="your-right-to-complain">Your right to complain</h2>
        <h2 name="updates-to-this-privacy-policy">Updates to this privacy policy</h2>
      </article>
    </Layout>
  )
}

export default PrivacyPolicyPage
