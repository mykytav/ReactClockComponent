class DateTime {
  constructor(date) {
    this.date = date || new Date();

    this.dayNames = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];

    this.monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
  }

  formatTimeUnit(timeUnit) {
    return timeUnit >= 10 ? `${timeUnit}` : `0${timeUnit}`;
  }

  year() {
    return this.date.getFullYear();
  }

  month() {
    return this.monthNames[this.date.getMonth()];
  }

  dayOfTheMonth() {
    return this.formatTimeUnit(this.date.getUTCDate());
  }

  dayOfTheWeek() {
    return this.dayNames[this.date.getDay()];
  }

  hours() {
    return this.formatTimeUnit(this.date.getHours());
  }

  minutes() {
    return this.formatTimeUnit(this.date.getMinutes());
  }

  seconds() {
    return this.formatTimeUnit(this.date.getSeconds());
  }

  static timeToDate(date) {
    const datePresentation = new DateTime(date);
    return `
    ${datePresentation.dayOfTheWeek().substring(0, 3)},
    ${datePresentation.dayOfTheMonth()} 
    ${datePresentation.month()}, 
    ${datePresentation.year()}
    `;
  }

  static timeToTime(date) {
    const timePresentation = new DateTime(date);
    return `
    ${timePresentation.hours()}:
    ${timePresentation.minutes()}:
    ${timePresentation.seconds()}
    `;
  }
}

export default DateTime;
