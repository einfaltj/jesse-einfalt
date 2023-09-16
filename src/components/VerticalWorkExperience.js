import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import WorkIcon from './icons/WorkIcon'
import VerticalTimelineElementBulletPoint from './VerticalWorkComponents/VerticalTimelineElementBulletPoint'

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
      date="03/2023 - Present"
      iconStyle={finalIconStyle}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">
        Senior Technical Project Manager
      </h3>
      <h4
        style={{ paddingBottom: '16px' }}
        className="vertical-timeline-element-subtitle"
      >
        Quantum Metric, Monument
      </h4>
      <div>
        <ul>
          <li>
            <h4>
              &#8226; <b>Key Technical Contributions:</b>
            </h4>
            <ul>
              <VerticalTimelineElementBulletPoint
                title="Technical Projects"
                description="Led projects including Atlas Rollout, DBv3
                Reports, Guide Alerts, and Page Title enhancements which spanned
                all disciplines of engineering"
              />
              <VerticalTimelineElementBulletPoint
                title="Individual Achievements"
                description="Rebuilt table replay functionality, improved date picker, added industry picker and enable/disable retail based metrics"
              />
              <VerticalTimelineElementBulletPoint
                title="UI Optimizations"
                description="Decreased UI and worker bundle size by tree shaking Lodash usage and reducing the codebase footprint"
              />
              <VerticalTimelineElementBulletPoint
                title="Package Cleanup"
                description="Reduced npm install time by 1:30 by pruning, cleaning and refactoring dependencies"
              />
              <VerticalTimelineElementBulletPoint
                title="Code Standards"
                description="Ensured code standards were automatically enforced across the entire UI codebase"
              />
            </ul>
          </li>
          <li>
            <h4>
              &#8226; <b>Strategic Impact:</b>
            </h4>
            <ul>
              <VerticalTimelineElementBulletPoint
                title="CI/CD Optimizations"
                description="Identified a time savings of 6 minutes per pipeline through parallelizing jobs"
              />
              <VerticalTimelineElementBulletPoint
                title="Code Ownership"
                description="Enabled CODEOWNERS file/ownership and defined UI Engineering Process Changes"
              />
            </ul>
          </li>
          <li>
            <h4>
              &#8226; <b>Collaborative Initiatives:</b>
            </h4>
            <ul>
              <VerticalTimelineElementBulletPoint
                title="HackWeek Facilitation"
                description="Orchestrated Quantum Metric's 2nd HackWeek, actively contributing to multiple projects"
              />
              <VerticalTimelineElementBulletPoint
                title="Weekly Engineering Insights"
                description="Worked with EMs on creating a Weekly Engineering Update meeting and document to highlight all inflight work for our 55+ person Engineering Team"
              />
            </ul>
          </li>
        </ul>
      </div>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={finalContentStyle}
      contentArrowStyle={finalArrowStyle}
      date="09/2019 - 03/2023"
      iconStyle={finalIconStyle}
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">
        Senior Software Quality Engineering Manager
        <br />
        <br />
        Software Quality Engineering Manager
      </h3>
      <h4
        style={{ paddingBottom: '16px' }}
        className="vertical-timeline-element-subtitle"
      >
        Quantum Metric, Monument
      </h4>
      <div>
        <ul>
          <VerticalTimelineElementBulletPoint
            title="Team Leadership"
            description="Grew the QA department from 2 to 14 team members to support the expanding Engineering teams"
          />
          <VerticalTimelineElementBulletPoint
            title="Test Suite Architecture"
            description="Designed an E2E UI test suite enabling 30 developers to release 10-20 times a day"
          />
          <VerticalTimelineElementBulletPoint
            title="Testing Across Platforms"
            description="Managed E2E test suites for Web Capture, iOS and Android SDKs, and Platform Services"
          />
          <VerticalTimelineElementBulletPoint
            title="Load Testing"
            description="Orchestrated load testing for ingestion services, simulating up to 3 million concurrent sessions an hour per client"
          />
          <VerticalTimelineElementBulletPoint
            title="Internship Program"
            description="Pioneered Engineering's first Internship program, resulting in an 88% conversion rate of interns to full-time hires across various departments"
          />
        </ul>
      </div>
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
          <VerticalTimelineElementBulletPoint
            title="Leadership"
            description="Led a team of 9 developers in integrating a new payment platform, processing hundreds of millions in payments annually"
          />
          <VerticalTimelineElementBulletPoint
            title="Technology Stack"
            description="Developed a CRM suite in React and React-Native, supported by a RESTful API built on PHP and MySQL"
          />
          <VerticalTimelineElementBulletPoint
            title="Test Suite Ownership"
            description="Assumed ownership of the company's Test Suite, ensuring reliability, speed, and coverage"
          />
          <VerticalTimelineElementBulletPoint
            title="Testing Transformation"
            description="Implemented Behat/Mink end-to-end tests to replace legacy suites, improving test coverage and facilitating communication with the PM team"
          />
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
          <VerticalTimelineElementBulletPoint
            title="Mobile Testing"
            description="Served as the primary automated tester for the mobile team, covering iOS and Android apps"
          />
          <VerticalTimelineElementBulletPoint
            title="Payment Processing"
            description="Authored automated tests and manually tested responsive forms with payments, processing over $2 million weekly"
          />
          <VerticalTimelineElementBulletPoint
            title="Test Automation"
            description="Developed Behat integration tests for server-side code and Cucumber end-to-end tests for client-side code"
          />
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
      <h3 className="vertical-timeline-element-title">
        Product Owner / Scrum Master
      </h3>
      <h4
        style={{ paddingBottom: '16px' }}
        className="vertical-timeline-element-subtitle"
      >
        Church Community Builder, Colorado Springs
      </h4>
      <div>
        <ul>
          <VerticalTimelineElementBulletPoint
            title="Compliance Achievement"
            description="Led the transition to PCI Level 1 compliance"
          />
          <VerticalTimelineElementBulletPoint
            title="Integration Success"
            description="Oversaw the successful integration of CCB's 2-way merchant integration with Pushpay, serving over 950 active churches"
          />
          <VerticalTimelineElementBulletPoint
            title="Mobile Experience"
            description="Orchestrated the creation of a new mobile giving experience"
          />
        </ul>
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
          <VerticalTimelineElementBulletPoint
            title="Issue Triage"
            description="Assessed API integration, financial, and bug case issues for churches and preferred vendors"
          />
          <VerticalTimelineElementBulletPoint
            title="Collaboration"
            description="Worked closely with developers to create and prioritize bug cases and inquiries"
          />
          <VerticalTimelineElementBulletPoint
            title="Data Services"
            description="Provided data services for churches, including data recovery and mass data alterations"
          />
        </ul>
      </div>
    </VerticalTimelineElement>
  </VerticalTimeline>
)

export default VerticalWorkExperience
