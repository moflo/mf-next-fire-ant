import React from 'react';
import PropTypes from 'prop-types';
// import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
// import GitHubButton from 'react-github-button';
import { Icon } from 'antd';
// import QueueAnim from 'rc-queue-anim';

function typeFunc(a) {
  if (a.key === 'line') {
    return 'right';
  } else if (a.key === 'button') {
    return 'bottom';
  }
  return 'left';
}

export default function Banner({ onEnterChange }) {
  return (
    <section className="page banner-wrapper">
        <div className="banner-text-wrapper" type={typeFunc} delay={300} key="banner">
          <h2 key="h2">ANT <p>DESIGN</p></h2>
          <p key="content">UI Template</p>
          <span className="line" key="line" />
          <div key="button1" className="start-button clearfix">
            <a>
              GET STARTED
            </a>
            <a>
              MORE INFO
            </a>
          </div>
        </div>
        <Icon type="down" className="down" />
    </section>
  );
}
Banner.propTypes = {
  onEnterChange: PropTypes.func,
};