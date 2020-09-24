import React, { Fragment } from 'react'
import VerticalWorkExperience from '../components/VerticalWorkExperience'

const WorkPage = () => (
  <Fragment>
    <div style={{ paddingBottom: '60px' }}>
      <div style={{ float: 'left' }}>
        <h2 className="major">Work Experience</h2>
      </div>
      <div style={{ float: 'right' }}>
        <a
          href="https://drive.google.com/file/d/1xgqHlLsALt-eUpqQpUN_7m-lyComdMxi/view?usp=sharing"
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
  </Fragment>
)

export default WorkPage
