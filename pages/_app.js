import React from 'react'
import App from 'next/app'
import { withTina } from 'tinacms'
import { GitClient } from '@tinacms/git-client'

class Site extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default withTina(Site, {
  apis: {
    git: new GitClient('http://localhost:3000/___tina'),
  },
  sidebar: {
    position: 'overlay',
    hidden: process.env.NODE_ENV === 'production',
  },
})
