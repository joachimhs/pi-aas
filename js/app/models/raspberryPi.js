Piaas.RaspberryPi = DS.Model.extend({
    projects: DS.hasMany('project', {async: true}),
    installedVersion: DS.attr('string'),
    online: DS.attr('boolean')
});