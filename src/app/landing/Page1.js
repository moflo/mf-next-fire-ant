import React from 'react';
import PropTypes from 'prop-types';
// import TweenOne from 'rc-tween-one';
// import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Icon, Button, Divider } from 'antd';
// import QueueAnim from 'rc-queue-anim';

export default function Page1({ isMobile }) {
  return (
    <div id="page1" className="content-wrapper page">
      <div
        key="image"
        className="image1 image-wrapper"
        animation={{ x: 0, opacity: 1, ease: 'easeOutQuad' }}
        style={{ transform: 'translateX(-100px)', opacity: 0 }}
      />
      <div
        type={isMobile ? 'bottom' : 'right'}
        className="text-wrapper"
        key="text"
        leaveReverse
      >
        <h2 key="h2">PRODUCT FEATURES</h2>
        <p key="p" style={{ maxWidth: 310 }}>Learn more about the key product features, sign up now.</p>
        <div key="button">
          <a>
            <Button type="primary" size="large">
              Sign Up
              <Icon type="right" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
Page1.propTypes = {
  isMobile: PropTypes.bool,
};