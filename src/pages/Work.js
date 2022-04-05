import React from 'react'
import VerticalWorkExperience from '../components/VerticalWorkExperience'

const mobileVersion = (
  <div>
    <div style={{ paddingBottom: '30px' }}>
      <div style={{ float: 'none' }}>
        <h2 className="major">Work Experience</h2>
      </div>
      <div style={{ float: 'none' }}>
        <a
          href="https://drive.google.com/file/d/1fowROgDEawCSHqqBicsLbiwmDnP8-BYy/view?usp=sharing"
          download="JesseEinfaltResume"
          target="_blank"
          className="button"
          rel="noreferrer"
        >
          Download Resume
        </a>
      </div>
    </div>
    <VerticalWorkExperience />
  </div>
)

const WorkPage = () => {
  return mobileVersion
}

export default WorkPage
