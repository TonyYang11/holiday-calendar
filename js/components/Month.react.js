var React = require('react'),
    _ = require('lodash'),
    DayHeader = require('./DayHeader.react'),
    Week = require('./Week.react');

var Month = module.exports = React.createClass({
  render: function() {
    var month = this.props.month;
    var weeks = [];
    _.times(month.first, function() {
      weeks.push({date: '', status: ''});
    });
    _.times(month.days, function(n) {
      var date = n + 1;
      var status = _.includes(month.holidays, date) ? 'holiday' :
        _.includes(month.workings, date) ? 'working' :
        _.includes(month.weekends, date) ? 'weekend' : '';
      weeks.push({date: date, status: status});
    });
    weeks = _.chunk(weeks, 7).map(function(week, idx) {
      return (
        <Week week={week} />
      );
    });

    return (
      <li className="month">
        <h2 className="month__title">{this.props.title}</h2>
        <div className="month__detail">
          <img className="month__image" src={this.props.img} />
          <div className="month__date">
            <table>
              <tbody>
                <DayHeader />
                {weeks}
              </tbody>
            </table>
          </div>
        </div>
      </li>
    );
  }
});
