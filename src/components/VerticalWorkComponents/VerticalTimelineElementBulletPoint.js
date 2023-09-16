import React from 'react'
import PropTypes from 'prop-types'

const VerticalTimelineElementBulletPoint = props => (
  <li>
    &#8226; <b>{props.title}: </b>
    {props.description}
  </li>
)

VerticalTimelineElementBulletPoint.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default VerticalTimelineElementBulletPoint
