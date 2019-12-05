import { next } from '@ember/runloop';
import { hash } from 'rsvp';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import Route from '@ember/routing/route';

const SHORTCUTS = { 'g': 'toggleGrouping', };

export default Route.extend({
  globalStore: service(),

  shortcuts: SHORTCUTS,

  afterModel() {
    return hash(
      get(this, 'globalStore').findAll('clusterTemplateRevision'),
      get(this, 'globalStore').findAll('clusterTemplate'),
    );
  },

  actions:   {
    toggleGrouping() {
      let choices = ['list', 'grouped'];
      let cur = this.get('controller.mode');
      let neu = choices[((choices.indexOf(cur) + 1) % choices.length)];

      next(() => {
        this.set('controller.mode', neu);
      });
    },
  },

});
