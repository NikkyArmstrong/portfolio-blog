import React from 'react'
import { navigate } from 'gatsby'
import { ReCAPTCHA } from 'react-google-recaptcha'
import Metadata from '../components/metadata'
import Layout from '../components/layout'
import * as contactStyles from '../styles/contact.module.scss'

const RECAPTCHA_KEY = process.env.GATSBY_APP_SITE_RECAPTCHA_KEY
if (typeof RECAPTCHA_KEY === 'undefined') {
  throw new Error(`
  Env var GATSBY_APP_SITE_RECAPTCHA_KEY is undefined!
  `)
}

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Contact({location}) {
  const [state, setState] = React.useState({})
  const recaptchaRef = React.createRef()

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const recaptchaValue = recaptchaRef.current.getValue()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        'g-recaptcha-response': recaptchaValue,
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  return (
    <Layout>
      <Metadata title="Contact"
                description="Nikky Armstrong | Contact"
                pathname={location.pathname} />
      <h1>Nikky Armstrong</h1>
      <form
        name="contact-form"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-recaptcha="true"
        onSubmit={handleSubmit}>
        <noscript>
          <p>My contact form won't work with JavaScript disabled.</p>
        </noscript>
        <p className={contactStyles.inputBlock}>
          <label htmlFor="nameField">Name</label>
          <input className={contactStyles.shortField} id="nameField" type="text" name="name" onChange={handleChange} required />
        </p>
        <p className={contactStyles.inputBlock}>
          <label htmlFor="email">Email</label>
          <input className={contactStyles.shortField} id="email" type="email" name="email" pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" onChange={handleChange} required />
        </p>
        <p className={contactStyles.inputBlock}>
          <label htmlFor="message">Message</label>
          <textarea className={contactStyles.textField} id="message" name="message" onChange={handleChange} required />
        </p>
        <ReCAPTCHA ref={recaptchaRef} sitekey={RECAPTCHA_KEY} />
        <p>
          <button className={contactStyles.button} type="submit">Send</button>
        </p>
      </form>
    </Layout>
  )
}