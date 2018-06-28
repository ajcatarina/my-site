import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'
import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Oswald', 'sans-serif'],
  bodyFontFamily: ['Lato', 'sans-serif'],
})

// Output CSS as string.
typography.toString()

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
          []
        </Link>

      <Link
        to="/work/"
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
        { name: 'description', content: 'Portfolio' },
        { name: 'keywords', content: 'aj, ajcatarina, aj catarina' },
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
