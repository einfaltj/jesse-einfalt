import React from 'react'

import developerToolsImage from '../images/developerTools.jpg'
import cliDemo from '../images/CLI_Demo.gif'
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
        &#8226;{' '}
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noreferrer"
        >
          VSCode:
        </a>
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
                  Do you have multiple code repos that you bounce around
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
                  If you aren’t using Prettier, USE IT! If you are using it but
                  don’t have it integrated into your IDE, oh man… This will save
                  you so much time. I personally don’t like it to pretty things
                  on save; however, being able to use `cmd + control + f` to
                  format files is a breeze.{' '}
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
                  When I’m tracking down a recent regression in my code base at
                  work, GitLens is my GO TO tool to find areas that were
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
                  This is a relatively new one in my extension list. I one day
                  saw a pretty egregious spelling mistake in some client facing
                  code and thought “Who was the bone head who typed that?” Using
                  GitLens, I saw that I was said bone head… wonderful. 5 seconds
                  later I had this spell checker up and running to prevent that
                  type of error from happening again.{' '}
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        &#8226;{' '}
        <a href="https://ohmyz.sh/" target="_blank" rel="noreferrer">
          Oh-my-zsh:
        </a>
        <ul>
          To be fair, I really don’t have too much experience in shell script
          tools OTHER than oh-my-zsh. Reasoning being I had a Sr. Dev show me
          their terminal once and I was like, “OOOOOOOOOOOO WHAT IS THAT???” And
          I was hooked. But who doesn’t LOVE seeing in your terminal what repo,
          branch and if you have any changes at a glance? If you are curious, my
          theme for the last 5 years is{' '}
          <a
            href="https://github.com/ohmyzsh/ohmyzsh/wiki/Themes#agnoster"
            target="_blank"
            rel="noreferrer"
          >
            agnoster
          </a>
          .
          <br />
          <br />
          The following 2 recommendations are plugins that require oh my zsh (if
          you needed any further convincing 😉):
          <li>
            &#8226;{' '}
            <a
              href="https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/jump"
              target="_blank"
              rel="noreferrer"
            >
              Jump:
            </a>
            <ul>
              Allows you to type "j partial_directory_name" and it will "jump"
              to that directory. Now, you have to manually cd there the first
              time, but as your history builds, it gets smarter. Great for
              managing multiple projects from the command line.
            </ul>
          </li>
          <li>
            &#8226;{' '}
            <a
              href="https://github.com/zsh-users/zsh-autosuggestions"
              target="_blank"
              rel="noreferrer"
            >
              Autocomplete:
            </a>
            <ul>
              This allows you to tab to complete based off your terminal
              history. Install/Demo here:{' '}
              <a
                href="https://asciinema.org/a/37390"
                target="_blank"
                rel="noreferrer"
              >
                https://asciinema.org/a/37390
              </a>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        &#8226;{' '}
        <a href="https://github.com/jonas/tig" target="_blank" rel="noreferrer">
          Tig:
        </a>
        <ul>
          I think one of the most overlooked thing about Git is that you really
          can understand SO MUCH MORE about your repo’s history if you can
          visualize it. Tig is a great CLI tool that does just this without
          having to pay for some GUI Git handler. This is hands DOWN my most
          used tool day to day to inspect git history. It also has vim usage
          built in so it makes it SUUUUPER easy to search for a commit message
          and inspect that commit.
        </ul>
      </li>
      <li>
        Quick Demo of using all the CLI tools together:
        <span className="image main">
          <img src={cliDemo} alt="" />
        </span>
      </li>
      <li>
        &#8226;{' '}
        <a
          href="https://apps.apple.com/us/app/magnet/id441258766?mt=12"
          target="_blank"
          rel="noreferrer"
        >
          Magnet:
        </a>
        <ul>
          So I have a bad habit of needing 3 monitors; however, even if you only
          run with a single monitor setup, having some sorta window management
          tool will literally save you minutes every day. I spend about 30
          seconds every morning booting up my computer and then setting my
          monitor workspaces using Magnet. A task that took easily 5 minutes
          manually dragging and re-sizing in the days before I even knew tools
          like this existed.
        </ul>
      </li>
    </ul>
    <br />
    <br />
  </Layout>
)

export default DeveloperToolsBlogPost
