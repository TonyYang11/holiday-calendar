var React = require('react'),
    _ = require('lodash'),
    yearTwoZeroOneFive = require('./year');

var Year = require('./components/Year.react');

React.render(<Year yearData={yearTwoZeroOneFive} />, document.getElementById('calendar'));
