const leftPad = require('left-pad');

function timeface(date = new Date()) {
  const hours = leftPad(date.getHours() % 12, 2, '0');
  const roundedMinutes = (date.getMinutes() < 30) ? '00' : '30';
  const timeFaceCode = `${hours}${roundedMinutes}`;

  switch (timeFaceCode) {
    case '0000':
      return '🕛';
    case '0030':
      return '🕧';
    case '0100':
      return '🕐';
    case '0130':
      return '🕜';
    case '0200':
      return '🕑';
    case '0230':
      return '🕝';
    case '0300':
      return '🕒';
    case '0330':
      return '🕞';
    case '0400':
      return '🕓';
    case '0430':
      return '🕟';
    case '0500':
      return '🕔';
    case '0530':
      return '🕠';
    case '0600':
      return '🕕';
    case '0630':
      return '🕡';
    case '0700':
      return '🕖';
    case '0730':
      return '🕢';
    case '0800':
      return '🕗';
    case '0830':
      return '🕣';
    case '0900':
      return '🕘';
    case '0930':
      return '🕤';
    case '1000':
      return '🕙';
    case '1030':
      return '🕥';
    case '1100':
      return '🕚';
    case '1130':
      return '🕦';
    default:
      return '⏳';
  }
}

module.exports = timeface;
