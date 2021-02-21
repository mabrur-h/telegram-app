import Vue from 'vue';
import Moment from 'moment';


Vue.filter('filterDateTime', (val) => {
    return Moment(val).isValid() ? Moment(val).format('HH:mm') : '';
});


Vue.filter('filterPhoneNumber', (val) => {
    return val ? '(' + val.slice(0, 2) + ') ' + val.slice(2, 5) + '-' + val.slice(5, 7) + '-' + val.slice(7) : '';
});
