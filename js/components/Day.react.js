var React = require('react');

var Day = module.exports = React.createClass({
  render: function() {
    var day = this.props.day;
    return (
      <td className={day.status}>{day.date}</td>
    )
  }
});
