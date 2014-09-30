Piaas.Project = DS.Model.extend({
    content: DS.attr('string'),
    sourceFiles: DS.hasMany('sourceFile', {async: true})
});