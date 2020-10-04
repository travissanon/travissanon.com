import React from "react"
import "../stylesheets/about.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About Me" />
    <div className="about">
      <div className="about__image-container">
        <img
          src="https://i.ibb.co/VpFSVGB/IMG-1090.jpg"
          className="about__image"
        />
        <div className="about__image-meta">
          <strong>🏖</strong>
        </div>
      </div>
      <h1 className="about__header">About.</h1>
      <div className="about__container">
        <div className="about__description">
          <p>
            ( ￣ー￣)σ I'm <strong>Travis</strong>, and im a{" "}
            <strong>front-end developer</strong> and semicolon slinger currently
            focusing on building things for the web. I learn new things and use
            that knowledge to build stuff from scratch. I'm also interested in{" "}
            creating and <strong>sharing web development knowledge</strong> that
            makes sense.
          </p>
          <p>
            I found my way into the dev realm from figuring out what I wanted to
            do with my life after high school. In 2016, I started{" "}
            <strong>learning the basics</strong> from sites like FreeCodeCamp
            and Pluralsight (CodeSchool), and then eventually started{" "}
            <strong>building my own stuff from scratch</strong> – which opened
            the doors to the tech industry.
          </p>
          <p>
            Formerly, I was an <strong>Apprentice at Sparkbox</strong> where I
            learned how to design for the web and build responsive,
            content-focused, and well-crafted websites and apps from some of the
            best in the industry.
          </p>
          <p>
            Now I spend my time <strong>working at Teikametrics</strong>{" "}
            delivering a SaaS product that helps people optimize their ecommerce
            businesses.
          </p>
        </div>
        <div className="about__skills-container">
          <div className="about__skills">
            <h4 className="about__skills-title">Skills.</h4>
            <ul className="about__skills-list">
              <li>Javascript</li>
              <li>Typescript</li>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>SQL</li>
              <li>OOP</li>
              <li>TDD</li>
              <li>FP</li>
            </ul>
          </div>
          <div className="about__skills">
            <h4 className="about__skills-title">Interests.</h4>
            <ul className="about__skills-list">
              <li>Motorcycles</li>
              <li>Reading (?)</li>
              <li>Essentialism</li>
              <li>Youtube</li>
              <li>Hiking</li>
            </ul>
          </div>
          <div className="about__skills">
            <h4 className="about__skills-title">Fave Chars.</h4>
            <ul className="about__skills-list">
              <li>Spike Spiegel</li>
              <li>Kakashi Hatake</li>
              <li>Shōtarō Kaneda</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default About
