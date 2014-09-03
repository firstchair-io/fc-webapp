import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  state: DS.attr('string'),
  latitude: DS.attr('string'),
  longitude: DS.attr('string'),
  region: DS.attr('string'),
  token: DS.attr('string'),
  weather: DS.attr('string'),
  temperature: DS.attr('string'),
  last_24_hours_snowfall: DS.attr('string'),
  wind: DS.attr('string'),
  conditions: DS.attr('string'),
  baseDepth: DS.attr('string'),
  humanReadableWeather: DS.attr('string'),

  fullDescription: function() {
    return this.get('name') + ', ' + this.get('state');
  }.property('name', 'state'),

  currentSnowfall: function() {
    return (this.get('last_24_hours_snowfall') || 0) + '"';
  }.property('last_24_hours_snowfall')
});
