var React = require('react'),
    _ = require('lodash'),
    Month = require('./Month.react');

var Year = module.exports = React.createClass({
  render: function() {
    var months = _.map(this.props.yearData, function(month, idx) {
      var img = '/asset/' + month.month + '.jpg';
      return (
        <Month month={month} title={month.title} img={img} key={idx} />
      )
    });
    return (
      <ul>
        {months}
      </ul>
    );
  }
});
