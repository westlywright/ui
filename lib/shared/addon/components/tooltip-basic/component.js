import { computed } from '@ember/object';
import { oneWay } from '@ember/object/computed';
import Component from '@ember/component';
import Tooltip from 'shared/mixins/tooltip';
import layout from './template';
import { inject as controller } from '@ember/controller';

export default Component.extend(Tooltip, {
  application: controller('application'),
  layout,
  display:     null,

  model:         oneWay('tooltipService.tooltipOpts.model'),
  selectPartial: computed('tooltipService.tooltipOpts.template', function() {
    return this.get('tooltipService.tooltipOpts.template') || 'tooltip-basic';
  })

});
