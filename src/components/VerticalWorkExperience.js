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

const finalContentStyle = {
  background: 'rgb(27, 31, 34, 0)',
  paddingTop: '0px',
}

const finalArrowStyle = {
  borderRight: '7px solid  rgb(255,255,255)',
}

const VerticalWorkExperience = () => (
  <VerticalTimeline layout="1-column">
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={finalContentStyle}
      contentArrowStyle={finalArrowStyle}
      date="07/2021 - Present"
      iconStyle={finalIconStyle}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">
        Senior Software Quality Engineering Manager
      </h3>
      <h4
        style={{ paddingBottom: '16px' }}
        className="vertical-timeline-element-subtitle"
      >
        Quantum Metric, Monument
      </h4>
      <div>
        <ul>
          &#8226; Grew QA Department from 2 to 14 people to support our
          ever-growing Engineering teams
        </ul>
        <ul>
          &#8226; Architected E2E UI test suite which supports and allows around
          30 developers to release 10-15 times a day
        </ul>
        <ul>
          &#8226; Oversaw the following:
          <ul>&#8226; E2E test suite for our iOS and Android SDKs </ul>
          <ul>
            &#8226; Replay & Capture multi-browser E2E test suite primarily
            responsible for ensuring capturing 1 out of 4 online sessions of ALL
            online sessions
          </ul>
          <ul>
            &#8226; Load testing our ingestion services to simulate load of up
            to 3 million concurrent sessions an hour per client
          </ul>
        </ul>
        <ul>
          &#8226; Created Engineering’s first Internship program which has seen
          interns hired into full time roles across QA, Delivery Engineering,
          Data Science, and Production Support at an 88% success rate
        </ul>
      </div>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={finalContentStyle}
      contentArrowStyle={finalArrowStyle}
      date="09/2019 - 07/2021"
      iconStyle={finalIconStyle}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">
        Software Quality Engineering Manager
      </h3>
      <h4
        style={{ paddingBottom: '16px' }}
        className="vertical-timeline-element-subtitle"
      >
        Quantum Metric, Monument
      </h4>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={finalContentStyle}
      contentArrowStyle={finalArrowStyle}
      date="03/2018 - 09/2019"
      iconStyle={finalIconStyle}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">Software Developer</h3>
      <h4
        style={{ paddingBottom: '16px' }}
        className="vertical-timeline-element-subtitle"
      >
        Church Community Builder, Colorado Springs
      </h4>
      <div>
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
      </div>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={finalContentStyle}
      contentArrowStyle={finalArrowStyle}
      date="07/2017 - 03/2018"
      iconStyle={finalIconStyle}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">
        Test Automation Developer
      </h3>
      <h4
        style={{ paddingBottom: '16px' }}
        className="vertical-timeline-element-subtitle"
      >
        Church Community Builder, Colorado Springs
      </h4>
      <div>
        <ul>
          &#8226; Primary automated tester for the mobile team which included
          iOS and Android apps
        </ul>
        <ul>
          &#8226; Wrote automated tests, manually tested and shipped responsive
          forms with payments which now process over 2 million dollars weekly
        </ul>
        <ul>
          &#8226; Wrote Behat integration tests for server side code and
          Cucumber end to end tests for the client side code
        </ul>
      </div>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={finalContentStyle}
      contentArrowStyle={finalArrowStyle}
      date="04/2016 - 07/2017"
      iconStyle={finalIconStyle}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">Product Owner</h3>
      <h4
        style={{ paddingBottom: '16px' }}
        className="vertical-timeline-element-subtitle"
      >
        Church Community Builder, Colorado Springs
      </h4>
      <div>
        <ul>&#8226; Managed the Give Team as the Product Owner/Scrum Master</ul>
        <ul>
          &#8226; Primary project manager when CCB became PCI Level 1 compliant
        </ul>
        <ul>
          &#8226; Successfully rolled out CCB's 2-way merchant integration with
          Pushpay which has over 950 active churches
        </ul>
        <ul>&#8226; Oversaw the creation of a new mobile giving experience</ul>
      </div>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={finalContentStyle}
      contentArrowStyle={finalArrowStyle}
      date="12/2014 - 04/2016"
      iconStyle={finalIconStyle}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">
        Tier III Technical Support
      </h3>
      <h4
        style={{ paddingBottom: '16px' }}
        className="vertical-timeline-element-subtitle"
      >
        Church Community Builder, Colorado Springs
      </h4>
      <div>
        <ul>
          &#8226; Triaged API integration, financial, and bug case issues for
          both churches and preferred vendors
        </ul>
        <ul>
          &#8226;As software bugs were found, worked with developers to create
          bug cases and inquiries that were easy to reproduce and then helped in
          the prioritization of those bugs
        </ul>
        <ul>
          &#8226; Performed data services for churches that ranged from
          recovering accidentally deleted data to mass alterations of data
        </ul>
      </div>
    </VerticalTimelineElement>
  </VerticalTimeline>
)

export default VerticalWorkExperience
