import React from 'react'
import PropTypes from 'prop-types'
import Contact from './ContactIcons';

let year = new Date().getFullYear();

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <Contact/>
        <p className="copyright">&copy; Jesse Einfalt {year}</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
