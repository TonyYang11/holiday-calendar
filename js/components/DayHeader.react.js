var React = require('react');

var DayHeader = module.exports = React.createClass({
  render: function() {
    return (
      <tr>
        <th>Mon</th>
        <th>Tue</th>
        <th>Wed</th>
        <th>Thu</th>
        <th>Fri</th>
        <th>Sat</th>
        <th>Sun</th>
      </tr>
    )
  }
});
