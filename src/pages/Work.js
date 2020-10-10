import React from 'react'
import VerticalWorkExperience from '../components/VerticalWorkExperience'
import { useMediaQuery } from 'react-responsive'

const desktopVersion = (
  <div id="work">
    <div style={{ paddingBottom: '1 em' }}>
      <div style={{ float: 'left' }}>
        <h2 className="major">Work Experience</h2>
      </div>
      <div style={{ float: 'right' }}>
      {/* <div className="body"> */}
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
  </div>
)

const mobileVersion = (
  <div>
    <div style={{ paddingBottom: '30px' }}>
      <div style={{ float: 'none' }}>
        <h2 className="major">Work Experience</h2>
      </div>
      <div style={{ float: 'none' }}>
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
  </div>
)

const WorkPage = () => {
  // const [hasMounted, setHasMounted] = React.useState(false)

  // React.useEffect(() => {
  //   setHasMounted(true)
  // }, [])

  // if (hasMounted) {
  //   const isMobile = useMediaQuery({ maxWidth: 767 })
  //   console.log(isMobile, 'Is Mobile')

  //   if (isMobile) {
  //     console.log('HERE?')
  //     return mobileVersion
  //   }

  //   return desktopVersion
  // }

  console.log('HERE AS WELL??????')
  return desktopVersion
}

export default WorkPage
