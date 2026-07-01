import './fonts/DancingScript-VariableFont_wght.ttf';
import './style/style.css';
import _ from 'lodash';
import dayjs from 'dayjs';
document.getElementById('date').innerHTML = `Date and time is: ${dayjs().format('YYYY MM DD HH:mm A')}`;
document.getElementById('result').innerHTML = `Total bill is: ${_.add(200, 300)}`;