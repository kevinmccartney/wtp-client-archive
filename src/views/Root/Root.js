import React from 'react';
import PropTypes from 'prop-types';

const Root = ({ children }) => (
  <div>
    <h1>Ooohhhh whheeeeee, I&apos;m the root</h1>
    {children}
  </div>
);

Root.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Root;
