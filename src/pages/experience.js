import { OutboundLink } from "gatsby-plugin-google-gtag"
import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as experienceStyles from "../styles/experience.module.scss"

export default function About({location}) {
  return (
    <Layout>
      <Metadata title="Experience"
                description="Nikky Armstrong | Work History and Experience"
                pathname={location.pathname} />
      <h1>Nikky Armstrong</h1>
      <p>I joined the games industry in March 2020 with a promotion from my role in Australia as Intermediate level Software Engineer to Senior Gameplay Programmer at Ubisoft Reflections. I quickly showed that as a programmer, the difference between the tech and games industries is easily bridgeable, making myself an invaluable member of the team. By July 2021, I had been offered the position of Lead Programmer at Silver Rain Games, where I am able to not only use my strong technical skills, but also my love of mentoring, and my love of planning spreadsheets.</p>
      
      <p>The following lists selected parts of my career that I think are worth highlighting. For the full details of everything I've done since graduating, visit my <OutboundLink href="https://www.linkedin.com/in/nikky-armstrong/">LinkedIn</OutboundLink>.</p>

      {/* <h2>Experience</h2>
      <section className={experienceStyles.experienceBlock}>
        <span className={experienceStyles.title}>Lead Programmer</span>
        <span className={experienceStyles.company}><OutboundLink href="https://silverraingames.com">Silver Rain Games</OutboundLink></span>
        <span className={experienceStyles.year}>2021-</span>
        <span className={experienceStyles.extraInfo}>At SRG I've transformed the code team from being absolute cowboys to adhering to a coding standard, using code reviews, sharing knowledge, having a study group, having a backlog, and a team expectations document, basically trying to get the team to operate as respectfully and inclusively as possible internally and also when interacting with other disciplines while also moving forward together towards improving our coding skills. Also at SRG I've improved a bunch of tools to help the rest of the team and am basically always being helpdesk ahah, and have given up a lot of my coding time to make sure I'm available for the team</span>
      </section>

      <section className={experienceStyles.experienceBlock}>
        <span className={experienceStyles.title}>Senior Gameplay Programmer</span>
        <span className={experienceStyles.company}><OutboundLink href="https://reflections.ubisoft.com">Ubisoft Reflections</OutboundLink></span>
        <span className={experienceStyles.year}>2020-2021</span>
        <span className={experienceStyles.extraInfo}>Information about how great I was at Ubisoft. Founded and ran C++ and women group</span>
      </section>

      <FontAwesomeIcon aria-label="divider" title="divider" icon={['fab', 'square']} />

      <section className={experienceStyles.experienceBlock}>
        <span className={experienceStyles.title}>Software Engineer IV</span>
        <span className={experienceStyles.company}><OutboundLink href="https://www.immersivetechnologies.com/">Immersive Technologies</OutboundLink></span>
        <span className={experienceStyles.year}>2016-2020</span>
        <span className={experienceStyles.extraInfo}>Information about how great I was at Immersive.</span>
      </section>

      <h2>Volunteering</h2>
      <section className={experienceStyles.experienceBlock}>
        <span className={experienceStyles.title}>Mentor</span>
        <span className={experienceStyles.company}><OutboundLink href="https://www.limitbreak.co.uk/">Limit Break</OutboundLink></span>
        <span className={experienceStyles.year}>2020, 2021</span>
        <span className={experienceStyles.extraInfo}>Limit break info</span>
      </section>

      <section className={experienceStyles.experienceBlock}>
        <span className={experienceStyles.title}>Mentor</span>
        <span className={experienceStyles.company}><OutboundLink href="https://www.thegirlsnetwork.org.uk/">The Girls' Network</OutboundLink></span>
        <span className={experienceStyles.year}>2021</span>
        <span className={experienceStyles.extraInfo}>Girls' Net info</span>
      </section>

      <h2>Education</h2>
      <section className={experienceStyles.experienceBlock}>
        <span className={experienceStyles.title}>Bachelor of Computer Science (Hons. First className)</span>
        <span className={experienceStyles.company}><OutboundLink href="https://www.adelaide.edu.au/">The University of Adelaide</OutboundLink></span>
        <span className={experienceStyles.year}>2007 - 2010</span>
        <span className={experienceStyles.extraInfo}>Thesis Topic: Test-Driven Development for Video Games</span>
      </section>
 */}

    </Layout>
  )
}
