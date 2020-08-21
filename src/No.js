import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import './no.scss';

export default class No extends Component {
  render() {
    return (
      <div>
        <a href='#section1'> Go to section 1 </a>
        <a href='#section2'> Go to section 2 </a>
        <h1>
          <ScrollableAnchor id={'section1'}>
            <div> Hello World </div>
          </ScrollableAnchor>
        </h1>
        <h2>
          <ScrollableAnchor id={'section2'}>
            <div> How are you world? </div>
          </ScrollableAnchor>
        </h2>
      </div>
    )
  }
}