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
        <h2>5th of April 2020 (version 0.2.0)</h2>
        <p>This privacy notice tells you about the information we collect from you when you use our website. In collecting this information, we are acting as a data controller and, by law, we are required to provide you with information about us, about why and how we use your data, and about the rights you have over your data.</p>
        <h2>Who are we?</h2>
        <p>We are Code for Faith. You can contact us by email at <a href="mailto:contact@codeforfaith.com">contact@codeforfaith.com</a>.</p>
        <h2>How we use your information</h2>
        <ul>
            <li><a href="#when-you-use-our-website">When you use our website</a></li>
            <li><a href="#your-rights-as-a-data-subject">Your rights as a data subject</a></li>
            <li><a href="#liability">Liability</a></li>
            <li><a href="#updates-to-this-privacy-policy">Updates to this privacy policy</a></li>
        </ul>

        <h2 name="when-you-use-our-website">When you use our website</h2>
        <p>When you use our website we do not collect any data from you without your consent. We are not tracking you or using any third party service such as Google Analytics. And we are not going to share or sell your data.</p>
        <p>However we may collect personal information from you such as your name or email address. For example, you may voluntarily contact us by email at <a href="mailto:contact@codeforfaith.com">contact@codeforfaith.com</a>.</p>
        <p>Through this website you are able to link to other websites which are not under the control of codeforfaith.com. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.</p>
        <p>We do not use any cookies to run this website.</p>
        {/* <p>The only cookies that we use are strictly necessary. For more information about our use of cookies, please see our <a href="/cookie-policy">cookie policy</a>.</p> */}
        
        <h2 name="your-rights-as-a-data-subject">Your rights as a data subject</h2>
        <p>The following section will detail your rights as a data subject (someone using our website). Here is what you can require of us concerning your data:</p>
        <p>By law, you can ask us what information we hold about you, and you can ask us to correct it if it is inaccurate. If we have asked for your consent to process your personal data, you may withdraw that consent at any time.</p>
        <p>If we are processing your personal data for reasons of consent or to fulfil a contract, you can ask us to give you a copy of the information in a machine-readable format so that you can transfer it to another provider.</p>
        <p>If we are processing your personal data for reasons of consent or legitimate interest, you can request that your data be erased.</p>
        <p>You have the right to ask us to stop using your information for a period of time if you believe we are not doing so lawfully.</p>
        <p>Finally, in some circumstances you can ask us not to reach decisions affecting you using automated processing or profiling.</p>
        <p>To submit a request regarding your personal data please contact us at this email: <a href="mailto:contact@codeforfaith.com">contact@codeforfaith.com</a>.</p>
        
        <h2 name="liability">Liability</h2>
        <p>You are free to use our website or not. When reading our content and using our services you do so at your own risk.</p>
        <p>We are not liable for any special, incidental, or consequential damages resulting from the use of this website.</p>
        
        <h2 name="updates-to-this-privacy-policy">Updates to this privacy policy</h2>
        <p>We regularly review and, if appropriate, update this privacy policy from time to time, and as our services and use of personal data evolves. If we want to make use of your personal data in a way that we haven’t previously identified, we will contact you to provide information about this and, if necessary, to ask for your consent.</p>
        <p>We will update the version number and date of this document each time it is changed.</p>
      </article>
    </Layout>
  )
}

export default PrivacyPolicyPage
