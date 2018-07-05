import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import logo from '../images/aj_logo.svg'

import './index.css'
import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Oswald', 'sans-serif'],
  bodyFontFamily: ['Merriweather', 'serif'],
})

// Output CSS as string.
//typography.toString()

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles()

const Header = () => (
  <div
    style={{
      background: 'none',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >

        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img src={logo} width="50" height="auto"/>
        </Link>

      <Link
        to="/about/"
        style={{
          color: 'white',
          textDecoration: 'none',
          float: 'right',

        }}
      >
        ABOUT
      </Link>
      <Link
        to="/work/"
        style={{
          color: 'white',
          textDecoration: 'none',
          float: 'right',
          paddingRight: '30px',
        }}
      >
        WORK
      </Link>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="AJ Catarina - Designer & Developer"
      meta={[
        { name: 'description', content: 'AJ Catarina is a Developer and Graphics Designer. React enthusiast.' },
        { name: 'keywords', content: 'aj, ajcatarina, aj catarina, Ariel Jay Catarina, AJ Catarina, ajcatarina.com, graphics design, catarina, ariel, ariel jay' },
      ]}
      link={[
        { href: 'https://fonts.googleapis.com/css?family=Merriweather:300,400|Oswald', rel: 'stylesheet' }
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
        background: '#262626',
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
