import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('snotel-station');
  },

  renderTemplate: function() {
    this.render();
  }
});