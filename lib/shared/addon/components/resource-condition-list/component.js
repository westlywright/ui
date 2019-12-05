import Component from '@ember/component';
import layout from './template';

const HEADERS = [
  {
    name:           'type',
    sort:           ['type'],
    translationKey: 'conditionSections.table.type',
    width:          200,
  },
  {
    name:           'status',
    sort:           ['status'],
    translationKey: 'conditionSections.table.status',
    width:          125,
  },
  {
    name:           'lastUpdateTime',
    sort:           ['lastUpdateTime'],
    translationKey: 'conditionSections.table.lastUpdate',
    width:          200,
  },
  {
    name:           'reason',
    sort:           ['reason'],
    translationKey: 'conditionSections.table.reason',
    width:          250,
  },
  {
    name:           'message',
    sort:           ['message'],
    translationKey: 'conditionSections.table.message',
  },
];

export default Component.extend({
  layout,

  conditions:   null,

  sortBy:       'type',
  descending:   false,
  resourceType: null,

  headers:      HEADERS,
});
