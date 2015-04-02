var React = require('react'),
    _ = require('lodash'),
    Day = require('./Day.react');

var Week = module.exports = React.createClass({
  render: function() {
    var days = _.map(this.props.week, function(day, idx) {
      return (
        <Day day={day} />
      )
    });
    return (
      <tr>
        {days}
      </tr>
    )
  }
});
