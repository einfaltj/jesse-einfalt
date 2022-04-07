import React from 'react'
import PropTypes from 'prop-types';

const BlogPreview = props => (
  <>
    <h3>{props.blogTitle}</h3>
    <span
      onClick={() => {
        window.open(props.blogRoute, '_blank')
        window.focus()
      }}
      onKeyDown={() => {
        window.open(props.blogRoute, '_blank')
        window.focus()
      }}
      role="button"
      tabIndex={0}
      className="image main"
    >
      <img src={props.blogImageSrc} alt="" />
    </span>
  </>
)

BlogPreview.propTypes = {
  blogTitle: PropTypes.string,
  blogRoute: PropTypes.string,
  blogImageSrc: PropTypes.any,
}

export default BlogPreview
