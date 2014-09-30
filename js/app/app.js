var Piaas = Ember.Application.create({

});

Piaas.Adapter = DS.RESTAdapter.extend();

//Ember.Inflector.inflector.irregular('oppgave', 'oppgaver');

Piaas.ApplicationStore = DS.Store.extend({
    adapter:  "Piaas.Adapter"
});

Piaas.RaspberryPiAdapter = Piaas.Adapter.extend({
    namespace: 'json/data'
});

Piaas.ProjectAdapter = Piaas.Adapter.extend({
    namespace: 'json/data'
});

Piaas.ProjectSerializer = DS.RESTSerializer.extend({
    serialize: function(record, options) {
        var json = this._super(record, options);

        console.log(JSON.stringify(record));

        json.sourceFiles = record.get('sourceFiles').mapProperty('id');

        console.log('JSON SERIALIZED');
        console.log(json);

        return json;
    }
});

Piaas.SourceFileAdapter = Piaas.Adapter.extend({
    namespace: 'json/data'
});