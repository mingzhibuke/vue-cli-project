
let moment = require('moment'); //npm install moment -s  插件
module.exports = (timestamp, format) => { //秒数转时间<span>{{ 时间秒数 | timestampFormat('YYYY/MM/DD HH:mm:ss') }}</span>
  let result;
  timestamp = parseInt(timestamp);
  if (!timestamp) {
    result = '-';
  } else if (format) {
    result = moment(timestamp).format(format);
  } else {
    result = moment(timestamp).format('YYYY-MM-DD HH:mm:ss');
  }
  return result;
}
