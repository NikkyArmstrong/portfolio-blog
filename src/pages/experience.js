import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStream } from '@fortawesome/free-solid-svg-icons'
import * as experienceStyles from "../styles/experience.module.scss"

export default function Experience({location}) {
  return (
    <Layout>
      <Metadata title="Experience"
                description="Nikky Armstrong | Work History and Experience"
                pathname={location.pathname} />
      <h1>Nikky Armstrong</h1>
      <p>I joined the games industry in March 2020 with a promotion from my role in Australia as Intermediate level Software Engineer to Senior Gameplay Programmer at Ubisoft Reflections. I quickly showed that as a programmer, the difference between the tech and games industries is easily bridgeable, making myself an invaluable member of the team. By July 2021, I had been offered the position of Lead Programmer at Silver Rain Games, where I am able to not only use my strong technical skills, but also my love of mentoring, and my love of planning spreadsheets.</p>

      <p>The following lists selected parts of my career that I think are worth highlighting. For the full details of everything I've done since graduating, visit my <OutboundLink href="https://www.linkedin.com/in/nikky-armstrong/" target="_blank" rel="noreferrer">LinkedIn</OutboundLink>.</p>

      <h2>Experience</h2>
      <section className={experienceStyles.experienceBlock}>
        <span className={experienceStyles.title}>Lead Programmer</span>
        <span className={experienceStyles.company}><OutboundLink href="https://silverraingames.com" target="_blank" rel="noreferrer">Silver Rain Games</OutboundLink></span>
        <span className={experienceStyles.year}>2021-</span>
        <span className={experienceStyles.extraInfo}>
          I was brought on as Lead Programmer for Silver Rain's existing programming team of three developers, who had until then been operating without a Lead. My initial steps were to instate a formal code review process, review the coding standards, start a fortnightly knowledge share meeting, and add sprint retrospectives to our agile process. I also set to work planning a full project backlog for the programming team representing all currently known work yet to be completed for the team, and assigning that work to approximate milestones. I formalised the daily standups, ensuring the team was keeping task tracking up to date so I could assist with scheduling work and setting expectations with the rest of the studio about what we can realistically deliver. I have worked with my team to ensure that we operate internally and with other disciplines respectfully, and that we are always growing together to improve our coding skills. Code-wise, I have made expansive changes to our internal tools so they meet the needs of the rest of the studio, and contributed to gameplay and engine improvements.
        </span>
      </section>

      <div className={experienceStyles.dividerDiv}>
        <FontAwesomeIcon className={experienceStyles.divider} aria-label='divider' title='divider' icon={faStream} />
      </div>

      <section className={experienceStyles.experienceBlock}>
        <span className={experienceStyles.title}>Senior Gameplay Programmer</span>
        <span className={experienceStyles.company}><OutboundLink href="https://reflections.ubisoft.com" target="_blank" rel="noreferrer">Ubisoft Reflections</OutboundLink></span>
        <span className={experienceStyles.year}>2020-2021</span>
        <span className={experienceStyles.extraInfo}>
          At Ubisoft I was a Senior member of the AI Team owning the ambient dialogue system, all pre-combat AI behaviours, and was main point of contact for the navmesh and navigation tech. I mentored and supported more junior members of the team, helping them learn programming, AI, and Agile concepts. While at Ubisoft, I founded a cross-discipline C++ Discussion Group to ensure all programmers of all levels could help each other to learn and grow, as well as a networking group for women on the gameplay programming teams.
        </span>
      </section>

      <div className={experienceStyles.dividerDiv}>
        <FontAwesomeIcon className={experienceStyles.divider} aria-label='divider' title='divider' icon={faStream} />
      </div>

      <section className={experienceStyles.experienceBlock}>
        <span className={experienceStyles.title}>Software Engineer IV</span>
        <span className={experienceStyles.company}><OutboundLink href="https://www.immersivetechnologies.com/" target="_blank" rel="noreferrer">Immersive Technologies</OutboundLink></span>
        <span className={experienceStyles.year}>2016-2020</span>
        <span className={experienceStyles.extraInfo}>
          While only employed as an Intermediate level programmer, I planned and lead multiple projects from end to end, including gathering requirements, creating and estimating the project backlog, planning sprints, and communicating and demong the project progress to internal and external stakeholders. As well as project planning I was responsible for a number of interesting technical solutions. These include the AI for our new simulation for Komatsu's Autonomous Haul Trucks, optimising our simulators' startup cycle from cold boot of the hardware through to beginning the training program, and implementation of the "Immersive Package Manager", software responsible for rolling our live updates of our products to the customers' simulators. Throughout my time at Immersive I gained a reputation for being able to debug and fix complex issues in any of our products quickly and effectively, regardless of whether I had worked in that code before.
        </span>
      </section>

      <h2>Volunteering</h2>
      <section className={experienceStyles.experienceBlock}>
        <span className={experienceStyles.title}>Mentor</span>
        <span className={experienceStyles.company}><OutboundLink href="https://www.limitbreak.co.uk/" target="_blank" rel="noreferrer">Limit Break</OutboundLink></span>
        <span className={experienceStyles.year}>2020, 2021</span>
        <span className={experienceStyles.extraInfo}>
          Limit Break is a six month mentoring relationship with a person from an underrepresented group working in the UK games industry. In 2020 I was paired with a person in their final year of university wanting to pursue a career in games. We met together every 2-3 weeks for a video call, and I continued these meetings beyond the initial six months so that I could support them through the end of their degree. In 2021 I volunteered again, taking on two mentees, and I am looking forward to the 2022 intake.
        </span>
      </section>

      <div className={experienceStyles.dividerDiv}>
        <FontAwesomeIcon className={experienceStyles.divider} aria-label='divider' title='divider' icon={faStream} />
      </div>

      <section className={experienceStyles.experienceBlock}>
        <span className={experienceStyles.title}>Mentor</span>
        <span className={experienceStyles.company}><OutboundLink href="https://www.thegirlsnetwork.org.uk/" target="_blank" rel="noreferrer">The Girls' Network</OutboundLink></span>
        <span className={experienceStyles.year}>2021</span>
        <span className={experienceStyles.extraInfo}>
          Through the Girls Network program I am mentoring a high school aged girl. The program aims to provide work and life skills to mentees, for example confidence, communication, personal finance, wellbeing, and to connect them with opportunities to pursue their goals.
        </span>
      </section>

      <h2>Education</h2>
      <section className={experienceStyles.experienceBlock}>
        <span className={experienceStyles.title}>Bachelor of Computer Science (Hons. First class)</span>
        <span className={experienceStyles.company}><OutboundLink href="https://www.adelaide.edu.au/" target="_blank" rel="noreferrer">The University of Adelaide</OutboundLink></span>
        <span className={experienceStyles.year}>2007 - 2010</span>
        <span className={experienceStyles.extraInfo}>
          I graduated in 2009 with a Bachelor of Computer Science (Software Engineering) with a minor in pure mathematics. In 2010 I graduated with First Class Honours, having completed a research thesis considering the application of unit tests and formal verification to video games.
        </span>
      </section>

    </Layout>
  )
}
