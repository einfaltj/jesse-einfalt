import React from 'react'
import ContactIcons from '../components/ContactIcons'

let JamieAge = getAge('2017/07/01');
let EvieAge = getAge('2019/06/25');

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}

const AboutPage = () => (
  <>
    <h2 className="major">10 Things About Jesse</h2>
    <span className="image main">{/* <img src={pic01} alt="" /> */}</span>
    <div>
      <p>
        1. I love the Green Bay Packers. I’m not from Wisconsin. I just like
        the color green.
      </p>
      <p>
        2. I went to a small liberal arts college in Arkansas (!) where
        I double majored in Applied Music and Mathematics. Yes, the course load
        was a bit much towards the end.
      </p>
      <p>
        3. I started my software career at a SAAS company as an Onboarding
        Specialist.
      </p>
      <p>
        4. I have eleven jokes. One of the jokes is that I have eleven jokes.
      </p>
      <p>5. I’m passionate about learning and keeping a growth mindset.</p>
      <p>
        6. I have two children: Jamie ({JamieAge}) and Evie ({EvieAge}), with my wife, Madeleine.
        Jamie loves excavators and trains, Evie loves to screech and ride my old
        plastic horse around the house, and Madeleine and I miss sleeping in and
        quiet mornings.
      </p>
      <p>
        7. I say I like to learn. Madeleine would tell you I like to “level up”.
      </p>
      <p>
        8. I have a ridiculous-but-true medical condition called “Food Dependent
        Exercise Induced Anaphalaxis”. Basically, if I work out right
        after eating, I get hives and can go into anaphaltic shock. Gives pause
        to that old adage, “don’t swim for half an hour after eating”.
      </p>
      <p>
        9. I’m a home grown software developer. I didn’t take any paid courses
        or boot camps or workshops to learn. I took a Linda.com course that was
        offered through my library, fixed bugs like crazy and learned from all
        the more senior software developers that were graciously willing to help
        me. Shout out to Alex, Benjamin, Corey, Doug, Gentry, and Nathaniel.
      </p>
      <p>
        10. I love coffee. I love beer. I love sushi, steak, nachos. Let’s go
        out for a bite and talk shop.
      </p>
      <ContactIcons />
    </div>
  </>
)

export default AboutPage
