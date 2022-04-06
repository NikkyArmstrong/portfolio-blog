import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStream } from '@fortawesome/free-solid-svg-icons'
import * as experienceStyles from "../styles/experience.module.scss"

export default function Speaking({location}) {
  return (
    <Layout>
      <Metadata title="Speaking"
                description="Nikky Armstrong | Speaking"
                pathname={location.pathname} />
      <h1> </h1>
      <p>I am always looking for opportunities to encourage and empower people from traditionally underrepresented groups into jobs in tech and games. As well as my involvement with mentoring programs, which can be found on my <Link href="/experience">Experience</Link> page, this page lists details of events I have been invited to be a part of.</p>
      <p>I enjoy public speaking, and my first talk in the UK games industry at Develop:Brighton 2021 received fantastic feedback. As a result, I was invited to give this talk again at an internal event for a large UK based studio. I have been invited back to Develop in 2022, and have a couple more talks lined up this year as well.</p>
      <p>If you would like to talk to me about your event, feel free to get in touch via <OutboundLink href="https://twitter.com/nikkyarmstrong" target="_blank" rel="noreferrer">Twitter</OutboundLink>, <OutboundLink href="https://www.linkedin.com/in/nikky-armstrong/" target="_blank" rel="noreferrer">LinkedIn</OutboundLink>, or my <Link to="/contact">Contact page</Link>.</p>

      <h2>Talks</h2>

      <section className={experienceStyles.experienceBlock}>
        <span className={experienceStyles.title}>
          Develop:Brighton 2021
        </span>
        <span className={experienceStyles.talklink}>
          <OutboundLink href="https://www.developconference.com/" target="_blank" rel="noreferrer">
          Test Driven Development: A Mindset to Develop Games from the Start, Middle, or End
          </OutboundLink>
        </span>
        <span className={experienceStyles.extraInfo}>
          In October 2021, my Test Driven Development talk was accepted for the Develop:Brighton Conference. This talk has roots in my Honours' Thesis, and combines that with the 10+ years of industry experience I have enjoyed since then. Where TDD is most often focussed on discrete unit tests written at the beginning of a new project, my talk recognises that it is hard to reconcile that knowledge with your legacy, completely untested codebase, and with the many variables and interconnected systems that make up game development. I give an overview of TDD from the point of view of utilising it as a mindset, rather than a set of prescriptive rules. The talk uses real world examples to explain the value that TDD brings specifically into the games development environment, showing how this mindset will impact and improve your implementations, stability, and communication between disciplines.
        </span>
      </section>

      <div className={experienceStyles.dividerDiv}>
        <FontAwesomeIcon className={experienceStyles.divider} aria-label='divider' title='divider' icon={faStream} />
      </div>

      <section className={experienceStyles.experienceBlock}>
        <span className={experienceStyles.title}>
          Sega Dev Day, March 2022
        </span>
        <span className={experienceStyles.talklink}>
          <OutboundLink href="https://twitter.com/CAGames/status/1499408212650512389?s=20&t=X8Wi0ZUjZjTkWEF5kI5u9g" target="_blank" rel="noreferrer">
          TDD as a Mindset: Make Test-First Development a Reality
          </OutboundLink>
        </span>
        <span className={experienceStyles.extraInfo}>
          In March 2022, I was invited to give an expanded version of the talk I gave at Develop for Creative Assembly and other Sega Studios as part of their Sega Dev Day sessions.
        </span>
      </section>

      <h2>Panels & Interviews</h2>

      <section className={experienceStyles.experienceBlock}>
        <span className={experienceStyles.title}>She Plays Games Podcast</span>
        <span className={experienceStyles.talklink}><OutboundLink href="https://www.sheplaysgames.co/episodes/nikky-armstrong-michelle-snowball" target="_blank" rel="noreferrer">
          Podcast Episode #47
        </OutboundLink></span>
        <span className={experienceStyles.extraInfo}>
          I was welcomed as a guest on Episode 47 of the She Plays Games podcast, along with my Limit Break mentee from 2020, Michelle. We spoke about our mentoring journey, as well as advice for programmers in the games industry.
        </span>
      </section>

      <div className={experienceStyles.dividerDiv}>
        <FontAwesomeIcon className={experienceStyles.divider} aria-label='divider' title='divider' icon={faStream} />
      </div>

      <section className={experienceStyles.experienceBlock}>
        <span className={experienceStyles.title}>BAFTA Young Game Designers</span>
        <span className={experienceStyles.talklink}><OutboundLink href="https://www.youtube.com/watch?v=yxXjAcrZigo" target="_blank" rel="noreferrer">
          YGD Masterclass: Programming
        </OutboundLink></span>
        <span className={experienceStyles.infoWithPicture}>
          <iframe src="https://www.youtube.com/embed/yxXjAcrZigo?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <span className={experienceStyles.infoDesc}>I appeared on the panel for this masterclass, answering pre-written and live questions about careers in programming in the games industry.</span>
        </span>
      </section>

      <div className={experienceStyles.dividerDiv}>
        <FontAwesomeIcon className={experienceStyles.divider} aria-label='divider' title='divider' icon={faStream} />
      </div>

      <section className={experienceStyles.experienceBlock}>
        <span className={experienceStyles.title}>Careers Talks</span>
        <span className={experienceStyles.talklink}><OutboundLink href="https://youtu.be/tFIRqBHg-v0?t=870" target="_blank" rel="noreferrer">Ukie</OutboundLink> & <OutboundLink href="https://youtu.be/Rh5qXr_s0Y0?t=392" target="_blank" rel="noreferrer">Games Jobs Live</OutboundLink></span>
        <span className={experienceStyles.extraInfo}>Links to a couple of careers talks I have given recently. I'm always excited to speak to people considering a career in the games industry about potential pathways into programming.</span>
      </section>

      <h2>Upcoming</h2>
      <section className={experienceStyles.experienceBlock}>
        <span className={experienceStyles.title}>Women in Tech Global Conference, June 2022</span>
        <span className={experienceStyles.talklink}>
          <OutboundLink href="https://www.womentech.net/speaker/Nikky/Armstrong/68943" target="_blank" rel="noreferrer">
            Software as a Service: Cultivating a respectful programming team in a multi-discipline games studio
          </OutboundLink>
        </span>
        <span className={experienceStyles.extraInfo}>
          When part of a code team in a games studio, you operate in service of the other disciplines creating the game. The code team's customers are not just the end users, the players, but also the other teams in the studio. From putting requested features into the game, to completing tasks which unblock other disciplines' work, to creating tools which improve the pipelines of the rest of the studio, our work is varied and needs careful communication. Part of creating a respectful environment includes understanding how to plan and schedule all the interlocking tasks in order to balance your own team goals with the dreams and vision of the Design team and with pre-requisite work required by other disciplines such as Artists and Animators. This talk will outline some strategies I've employed as Lead of the code team at Silver Rain Games to help us serve the studio.
        </span>
      </section>

      <div className={experienceStyles.dividerDiv}>
        <FontAwesomeIcon className={experienceStyles.divider} aria-label='divider' title='divider' icon={faStream} />
      </div>

      <section className={experienceStyles.experienceBlock}>
        <span className={experienceStyles.title}>Cheltenham Science Festival, June 2022</span>
        <span className={experienceStyles.talklink}>
          <OutboundLink href="https://www.cheltenhamfestivals.com/science-/whats-on/2022/games-dev-live-how-to-make-a-game-/" target="_blank" rel="noreferrer">
            Games Dev Live: How To Make A Game
          </OutboundLink>
          </span>
          <span className={experienceStyles.extraInfo}>
            Ever wondered what it takes to bring a game concept to life? Or what makes a successful game? In this dynamic event join us to see how a game idea develops live on our stage. Corey Brotherson and Nikky Armstrong from independent games development studio Silver Rain Games come together with presenter Alysia Judge to brainstorm an idea around our theme 'Be The Change'. They'll delve into why their ideas may work, how they could be best executed and the ways that the process could develop. Prepare for an exciting insight into games development.
          </span>
      </section>

      <div className={experienceStyles.dividerDiv}>
        <FontAwesomeIcon className={experienceStyles.divider} aria-label='divider' title='divider' icon={faStream} />
      </div>

      <section className={experienceStyles.experienceBlock}>
        <span className={experienceStyles.title}>
          Develop:Brighton, July 2022
        </span>
        <span className={experienceStyles.talklink}>
          <OutboundLink href="https://www.developconference.com/whats-on/speakers/speaker-detail/nikky-armstrong" target="_blank" rel="noreferrer">
          Is Your Code Working For You?
          </OutboundLink>
        </span>
        <span className={experienceStyles.extraInfo}>
          Is your code working for you, or are you working for your code? Are you writing the same code you've always written, and are worried whether it's the best way to do things? Are you following "best practice" advice, but want to understand why those are the rules? Game development is its own ball game, and there are sometimes unwritten rules about which language best practices are applicable. Sometimes a language evolves, or we switch languages, and the best practices we used to swear by now don't make sense. Sometimes we're confident we know exactly what a code snippet will do, and when we run it - it doesn't quite do what we expect. This talk will present tips and tricks for games programming, from beginner to advanced, C++, C#, and beyond. It will present the good, the bad, and the sometimes hilarious of games programming, using real examples and code snippets, and provide tools and exercises to take you beyond this talk to explore deeper into the code you write every day.
        </span>
      </section>
    </Layout>
  )
}
