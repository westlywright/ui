import Component from '@ember/component';
import layout from './template';

const HEADERS = [
  {
    name:           'host',
    sort:           ['host'],
    translationKey: 'ingressResponse.host',
  },
  {
    name:           'path',
    sort:           ['path', 'host'],
    translationKey: 'ingressResponse.path',
  },
  {
    name:           'time',
    sort:           ['time', 'path', 'host'],
    translationKey: 'ingressResponse.responseTime',
  },
];

export default Component.extend({
  layout,

  data:       null,

  sortBy:     'time',
  descending: true,
  labelArray: null,

  headers:    HEADERS,
});
