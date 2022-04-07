import React from 'react'

import developerToolsImage from '../images/developerTools.jpg'
import Layout from '../components/layout'
import BackLinkWebsite from '../components/BackLinkWebsite'

const DeveloperToolsBlogPost = () => (
  <Layout>
    <BackLinkWebsite />
    <h2>My MUST HAVE developer tools</h2>
    <span className="image main">
      <img src={developerToolsImage} alt="" />
      <p>
        Photo by{' '}
        <a href="https://unsplash.com/@wocintechchat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Christina @ wocintechchat.com
        </a>{' '}
        on{' '}
        <a href="https://unsplash.com/s/photos/software-developer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </p>
    </span>
    <p>
      I’ve seen gobs and gobs of these type of “click bait” articles in my time
      searching on the inter webs or twitter and have always thought “Self,
      don’t be like them and don’t write that article”. Well… I caved 🤣. The
      BIGGEST reason is because I created{' '}
      <a
        href="https://twitter.com/jessebuilds/status/1176352385918099457?s=20&t=VJ8O2Jp6XVwYBG9fq-Uu2A"
        target="_blank"
        rel="noreferrer"
      >
        this tweet
      </a>{' '}
      in 2019 when I switched jobs. I have shamelessly copied the link to that
      tweet more times than I can count now showing other co-workers the tools I
      roll with because invariably they will see something and say, “Hey what
      was that?”
      <br />
      <br />
      <b>Caveats: </b>I’ve worked in a predominantly Mac environment for over 10
      years so all my recommendations have that OS level consideration in place.
    </p>
    <ul>
      <li>
        {' '}
        &#8226; VSCode
        {
          // Need Link/Logo? 
        }
        <ul>
          <li>
            So before you get all judgey-pants on me, hear me out. I’ve tried
            JetBrains, Atom, and Sublime… heck I’ve even tried good ‘ol VIM in
            iTerm2. While each has its own perks and drawbacks, I think you have
            to make a distinction between profession IDE and personal IDE. My
            personal IDE of choice is hands down VSCode as it is 100% free and
            works great. My professional IDE of choice is “whatever the majority
            of the developers use”. Anytime I either pair with a developer OR
            work to triage a code issue with another team player, I want to
            eliminate as many barriers and frictions as humanly possible to make
            it feel like they are looking at their own screen. That being said,
            at my current workplace VSCode is all the rage so I’m very happy. 🤣
            <br />
            <br />
            The other great thing about VSCode are the extensions 🤩, here are 3
            that I use every day:
            <ul>
              <li>
                &#8226;{' '}
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager"
                  target="_blank"
                  rel="noreferrer"
                >
                  Project Manager:
                </a>
                <ul>
                  &#8226; Do you have multiple code repos that you bounce around
                  multiple times a day? Do you have a single mono repo that is
                  GIGANTIC and you wish you could target specific folders? This
                  is the extension for you. A simple JSON Config object to map
                  “projects” to folders and BAM! You can access all the
                  different repos with a keyword search. Super slick!{' '}
                </ul>
              </li>
              <li>
                &#8226;{' '}
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
                  target="_blank"
                  rel="noreferrer"
                >
                  Prettier:
                </a>
                <ul>
                  &#8226; If you aren’t using Prettier, USE IT! If you are using
                  it but don’t have it integrated into your IDE, oh man… This
                  will save you so much time. I personally don’t like it to
                  pretty things on save; however, being able to use `cmd +
                  control + f` to format files is a breeze.{' '}
                </ul>
              </li>
              <li>
                &#8226;{' '}
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitLens:
                </a>
                <ul>
                  &#8226; When I’m tracking down a recent regression in my code
                  base at work, GitLens is my GO TO tool to find areas that were
                  recently changed in order to zero in on the root cause. The
                  simply UI to see every line of code tied to a git commit,
                  message and history is invaluable!{' '}
                </ul>
              </li>
              <li>
                &#8226;{' '}
                <a
                  href="https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code Spell Checker:
                </a>
                <ul>
                  &#8226; This is a relatively new one in my extension list. I
                  one day saw a pretty egregious spelling mistake in some client
                  facing code and thought “Who was the bone head who typed
                  that?” Using GitLens, I saw that I was said bone head…
                  wonderful. 5 seconds later I had this spell checker up and
                  running to prevent that type of error from happening again.{' '}
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    <br />
    <br />
  </Layout>
)

export default DeveloperToolsBlogPost
