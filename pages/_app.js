import React from 'react'
import App from 'next/app'
import { Tina, TinaCMS } from 'tinacms'
import { GitClient } from '@tinacms/git-client'
/*
 ** 1. Import the custom field component
 */
import RangeInput from '../components/RangeInput'

/*
 ** 2. Define the field plugin
 */
const customFieldPlugin = {
  name: 'range-input',
  Component: RangeInput,
}

export default class Site extends App {
  constructor() {
    super()
    this.cms = new TinaCMS({
      apis: {
        git: new GitClient('http://localhost:3000/___tina'),
      },
      sidebar: {
        position: 'overlay',
        hidden: process.env.NODE_ENV === 'production',
      },
    })
    /*
     ** 3. Register the plugin with the cms
     */
    this.cms.fields.add(customFieldPlugin)
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Tina cms={this.cms}>
        <Component {...pageProps} />
      </Tina>
    )
  }
}
