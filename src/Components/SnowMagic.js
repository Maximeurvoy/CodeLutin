import React from 'react';
import Snowflakes from 'magic-snowflakes';


Snowflakes({
  color: '#f00', // Default: "#5ECDEF"
  container: document.querySelector('#snowflakes-container'), // Default: document.body
  count: 50, // 100 snowflakes. Default: 50
  minOpacity: 0.1, // From 0 to 1. Default: 0.6
  maxOpacity: 0.70, // From 0 to 1. Default: 1
  minSize: 20, // Default: 8
  maxSize: 30, // Default: 18
  rotation: true, // Default: true
  speed: 1, // The property affects the speed of falling. Default: 1
  wind: false, // Without wind. Default: true
  width: 100, // Default: width of container
  height: 250, // Default: height of container
  zIndex: 100 // Default: 9999
})

const SnowMagic = () => (

  <>
  </>
)

export default SnowMagic;



