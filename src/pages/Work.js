import React from 'react'
import VerticalWorkExperience from '../components/VerticalWorkExperience'
import { useMediaQuery } from 'react-responsive'

const desktopVersion = (
  <>
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
  </>
)

const mobileVersion = (
  <>
    <div style={{ paddingBottom: '30px' }}>
      <div>
        <h2 className="major">Work Experience</h2>
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
  </>
)

const WorkPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 532px)' })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)',
  })

  if (isTabletOrMobile || isTabletOrMobileDevice) {
    return mobileVersion
  } else {
    return desktopVersion
  }
}

export default WorkPage
