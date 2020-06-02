import React from 'react'

const BackLinkWebsite = () => (
  <div
    style={{ display: 'flex' }}
    onClick={() => {
      window.open('/', '_blank')
      window.focus()
    }}
    onKeyDown={() => {
      window.open('/', '_blank')
      window.focus()
    }}
    role="button"
  >
    <span className="icon fa-arrow-left"></span>
    <h4 style={{ paddingLeft: '12px', paddingTop: '4px' }}>
      Back to my website
    </h4>
  </div>
)

export default BackLinkWebsite
