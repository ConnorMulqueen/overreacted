import React from 'react';
import profilePic from '../assets/profile_pic.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt={`Connor Mulqueen`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 310 }}>
          Personal blog by{' '}
          <a href="https://www.connormulqueen.com/">Connor Mulqueen</a>.{' '}
          Some&nbsp;guy who liked Halo enough to become a software engineer.
        </p>
      </div>
    );
  }
}

export default Bio;
