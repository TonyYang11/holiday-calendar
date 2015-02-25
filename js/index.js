var React = require('react'),
    _ = require('lodash'),
    yearTwoZeroOneFive = require('./year');


var DayHeader = React.createClass({
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

var Day = React.createClass({
  render: function() {
    var day = this.props.day;
    return (
      <td className={day.status}>{day.date}</td>
    )
  }
});

var Week = React.createClass({
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

var Month = React.createClass({
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

var Year = React.createClass({
  render: function() {
    var months = _.map(yearTwoZeroOneFive, function(month, idx) {
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

React.render(new Year(), document.getElementById('calendar'));
