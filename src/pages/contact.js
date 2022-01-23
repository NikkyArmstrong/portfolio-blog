import React from 'react'
import Metadata from '../components/metadata'
import Layout from '../components/layout'
import * as contactStyles from '../styles/contact.module.scss'

export default function Contact({location}) {

  return (
    <Layout>
      <Metadata title="Contact"
                description="Nikky Armstrong | Contact"
                pathname={location.pathname} />
      <h1>Nikky Armstrong</h1>
      <form
        name="contact-form"
        method="post"
        action="/thanks"
        data-netlify="true"
        data-netlify-honeypot="bot-field">
        <noscript>
          <p>My contact form won't work with JavaScript disabled.</p>
        </noscript>
        <input type="hidden" name="form-name" value="contact-form" />
        <input type="hidden" className={contactStyles.shortField} name="bot-field" />
        <p className={contactStyles.inputBlock}>
          <label htmlFor="nameField">Name</label>
          <input className={contactStyles.shortField} id="nameField" type="text" name="name" required />
        </p>
        <p className={contactStyles.inputBlock}>
          <label htmlFor="email">Email</label>
          <input className={contactStyles.shortField} id="email" type="email" name="email" pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" required />
        </p>
        <p className={contactStyles.inputBlock}>
          <label htmlFor="message">Message</label>
          <textarea className={contactStyles.textField} id="message" name="message" required />
        </p>
        <p>
          <button className={contactStyles.button} type="submit">Send</button>
        </p>
      </form>
    </Layout>
  )
}