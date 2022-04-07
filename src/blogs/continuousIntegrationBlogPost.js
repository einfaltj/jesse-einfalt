import React from 'react'

import continuousIntegrationImage from '../images/continuous_integration.jpeg'
import Layout from '../components/layout'
import BackLinkWebsite from '../components/BackLinkWebsite'

const ContinuousIntegrationBlogPost = () => (
  <Layout>
    <BackLinkWebsite/>
    <h2>From Release-All-Nighters to Continuous Integration</h2>
    <h2>— A True Story</h2>
    <span className="image main">
      <img src={continuousIntegrationImage} alt="" />
    </span>
    <p>
      “Oh, you aren’t doing CI?”
      <br />
      <br />
      “Oh, you don’t know what Continuous Integration is?”
      <br />
      <br />
      “Oh really? That is how often you deploy to stable? You were up HOW late
      fixing release bugs?”
      <br />
      <br />
      Ever been here? We have! We have! Turn the clocks back to 2014 and you
      would see a company that had major releases about every 2 months. These
      releases would be fraught with tension as developers hoped their feature
      wouldn’t be “that” feature, our testers frantically smoke testing through
      the app during the “code freeze” (you know the kind I mean… where if we
      found a showstopper, we would hotfix into the release branch and hope for
      the best), and lastly me on customer support rolling my eyes saying,
      “Let’s see what breaks this go around…”. Don’t get me wrong, we had some
      pretty good releases; however, we also had releases that were the absolute
      pits.
      <br />
      <br />
      Between those dark days and now, I traversed being a support rep to being
      a product owner to an automated software tester to finally becoming a
      software developer. This is a conversation from the other day between me
      and my Project Manager:
      <br />
      <br />
      <i>Project Manager: </i>“Jesse, don’t merge that branch yet. We need to
      get a bug fix out to stable before I head out for the evening”.
      <br />
      <i>Me: </i>“Cool beans, need me to do anything?”
      <br />
      <i>Project Manager: </i>“Nah, just have to wait for the full test suite to
      run on Integration. I just kicked it off. I’ll grab some coffee, ensure it
      gets deployed to Stable, then you are free to push to your heart’s
      content. 
      <br />
      <i>Me: </i>“Awesome… awesome to the max!”
      <br />
      <br />
      Now is this completely accurate. Yes… I do actually talk this way on a
      normal basis. 😉 Oh… you mean deploying our Integration branch directly to
      Stable? Sorta… we normally deploy to Stable every Tuesday BUT if we find a
      bug or have a special request, we can get Integration tested and deployed
      to Stable in about 20 minutes. And that is only if the test suite takes
      its sweet time.
      <br />
      <br />
      To the meat: HOW???? How did we go from releases that everyone dreaded to
      doing it so that our project manager literally has to push a button to get
      it deployed? I don’t know about you, but a list seems to be appropriate
      here:
      <br />
      <br />
      <b>1. Prioritize it and Ensure Management is Bought in:</b>
      <br />
      If you don’t have this, you can’t get anywhere. Moving to CI takes tons of
      time and investments from every part of your software company. Granted, if
      the above example about Erik pushing a button to deploy doesn’t excite
      leadership, you might have your work cut out for you; however, here is
      hoping you can Google “Benefits of CI” and convince them.
      <br />
      <br />
      <b>2. I DEMAND a Test:</b>
      <br />
      Creating an automated test suite will be the biggest investment for your
      company; specifically your developers/testers. Now, if you don’t have any
      sort of testing in place (unit, integration, end-to-end (e2e), monkey in a
      room pushing buttons, anything), stop the presses and fix that right now!
      Having been in various roles in our company, I can say with confidence
      that having an automated test suite helps EVERYONE in the company. It
      helps support feel safe during releases that their tickets will be of
      gratitude for the new feature (hey, a guy can dream, right?). It helps our
      testers not have to smoke test every little area of the application and
      focus on corner cases or even GASP the UX of our new features. And most of
      all, it allows developers to code with abandon and know that they have a
      safety blanket preventing any of their bugs from making it to customers.
      Trust me, whatever the cost that is preventing you from beginning this
      first thing in the morning is simply WORTH IT!
      <br />
      <br />
      <b>3. Automate that Trash:</b>
      <br />
      Once you have some tests (other than the monkey), it is time to add some
      automation to ensure they run at scheduled points in the development
      lifecycle. In our history, we began writing e2e tests that covered
      critical functionality in our application. If we shipped a bad bug, we
      fixed it and then wrote an e2e to prevent that from ever happening again.
      As our test suite grew and grew, it quickly became apparent that we needed
      a way to kick off a full build and let it sit for the hour or two it now
      took to run. We setup up the box, gave the credentials to the chosen few
      on the test team and voila! We had an automated test suite. Looking back,
      it was horribly inefficient and it didn’t provide great feedback to the
      devs; however, we no longer shipped app crashing bugs to our beta
      customers… not that… that ever… happened… 😅
      <br />
      <br />
      <b>4. Unit Tests are God’s gift to Developers:</b>
      <br />
      After doing this above approach for around a year and having to painfully
      git bisect to figure out which commit broke something in the release
      branch, we realized that we needed to move the test feedback to the people
      it impacted most: the developers. This began the process of both writing
      and requiring unit tests in both our client and server side code. I won’t
      sugar coat it: it was messy, frustrating, and very tedious in the
      beginning. You change a piece of code in some older code and all of a
      sudden you had to spend a couple hours writing unit tests around something
      you never wrote. However, as the test coverage grew and developers got
      better and better at writing tests, it got easier. Even now we aren’t
      perfect in this area; but, we are continually improving in this area.
      <br />
      <br />
      <b>5. Pre-Commit Hooks:</b>
      <br />
      An automated test suite sans monkey, check. Unit tests, check. Coding
      standards, check. Next step towards CI? Pre-commit hooks. On every commit
      to ANY branch, the linter, stylings, and appropriate tests ALL have to be
      green to even commit your work. While there are times where I wish I could
      commit up unfinished work instead of stashing the changes, I do really
      enjoy having this security blanket. What better way to NOT look stupid in
      front of your peers than to avoid pushing a super silly syntax bug. It’s
      great!
      <br />
      <br />
      <b>6. MORE tests: Integration and e2e:</b>
      <br />
      If you are still reading, then I didn’t scare you off by saying our ENTIRE
      TEST SUITE consisted of about 1000 e2e tests. Let me tell ya, it was
      rough. It took FOREVER to run and then we would have to triage the code if
      the tests failed to figure out what actually broke. I won’t dive too deep
      here but we realized that we couldn’t ever hope to catch every bug with
      e2e tests; however, we could catch QUITE a bit more with integration tests
      combined with e2e tests. We chose Behat integration tests to cover our
      entire server-side code and boy howdy has it been AMAZING to work with.
      Before we had permission errors at every turn. Now, we have every endpoint
      wrapped in an integration test that checks permissions as well as
      responses. Pretty slick!
      <br />
      <br />
      <b>7. DRUM ROLL!!! Automate Deployment of your integration Branch:</b>
      <br />
      You have all the pieces at this point, now it is just putting it all
      together!!! Most likely, you will wire up everything, do your first
      automated deployment and realize, “Crap, I just shipped a huge bug.”
      Great! Go fix it and then continue to write more tests. For us, we got to
      this point and still only deployed once every 6 weeks; however, we were
      now in the habit of integrating our code at least daily and ensuring that
      the test suite is green after integrating. As your confidence in your test
      suite grows, you will then begin to feel confident to release every 5
      weeks. Then every 2 weeks. Then maybe every week. Then maybe you deploy to
      get a bug fix out the door just to make your project manager happy while
      he gets his coffee.
      <br />
      <br />
      Is this list exhaustive (exhaustive, not exhausting), nope; but, I feel it
      checks the main boxes for what you need to start going towards CI. 4th
      wall moment: even though we are deploying once a week to stable, we still
      have a lot to work on. I feel we still don’t have enough unit and
      integration tests and WAY too many e2e tests. I hope to one day be
      deploying to stable daily. After that, deploy to stable on every green
      commit to integration. Even though that seems a long way off, I see it
      right on the horizon; especially after I reflect on where we have been.
    </p>
  </Layout>
)

export default ContinuousIntegrationBlogPost
