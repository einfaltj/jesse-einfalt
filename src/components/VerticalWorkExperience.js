import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import WorkIcon from './icons/WorkIcon'

const finalIconStyle = {
  background: 'rgb(27, 31, 34)',
  color: '#fff',
  paddingLeft: '12px',
  paddingTop: '7px',
}

const VerticalWorkExperience = () => (
  <VerticalTimeline layout="1-column">
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(27, 31, 34, 0)'}}
      contentArrowStyle={{ borderRight: '7px solid  rgb(255,255,255)' }}
      date="03/2018 - 07/2019"
      iconStyle={finalIconStyle}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">Software Developer</h3>
      <h4 className="vertical-timeline-element-subtitle">
        Church Community Builder, Colorado Springs
      </h4>
      <p>
        <ul>
          &#8226; Software team lead of 9 developers integrating a new payment
          platform which will process 100s of millions in payments per year
        </ul>
        <ul>
          &#8226; Developing large CRM suite in React and React-Native with a
          RESTful API built on PHP and MySQL
        </ul>
        <ul>
          &#8226; Became the owner of company's Test Suite to ensure
          reliability, speed and coverage
        </ul>
        <ul>
          &#8226; Implemented Behat/Mink end to end tests to replace legacy E2E
          suite. This enabled PM team to have insight into test coverage using
          business language gherkin
        </ul>
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      date="2010 - 2011"
      iconStyle={finalIconStyle}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">Art Director</h3>
      <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
      <p>
        Creative Direction, User Experience, Visual Design, SEO, Online
        Marketing
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      date="2008 - 2010"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">Web Designer</h3>
      <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
      <p>User Experience, Visual Design</p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2006 - 2008"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">Web Designer</h3>
      <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
      <p>User Experience, Visual Design</p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="April 2013"
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">
        Content Marketing for Web, Mobile and Social Media
      </h3>
      <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
      <p>Strategy, Social Media</p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="November 2012"
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">
        Agile Development Scrum Master
      </h3>
      <h4 className="vertical-timeline-element-subtitle">Certification</h4>
      <p>Creative Direction, User Experience, Visual Design</p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="2002 - 2006"
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">
        Bachelor of Science in Interactive Digital Media Visual Imaging
      </h3>
      <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
      <p>Creative Direction, Visual Design</p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
      icon={<WorkIcon />}
    />
  </VerticalTimeline>
)

export default VerticalWorkExperience
