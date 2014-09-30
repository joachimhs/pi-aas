Piaas.CodemirrorTextareaComponent = Ember.Component.extend({


    didInsertElement: function() {
        this._super();

        var element = this.get('element');
        var content = this.get('value');

        console.log(content);
        this.cm = CodeMirror(element, {
            mode: "text/x-java",
            value: content,
            theme: 'monokai',
            lineNumbers: true,
            autofocus: false
        });

        var cm = this.cm;
        var component = this;
        cm.on('change', function(){
            var value = cm.getDoc().getValue();

            Ember.run(function(){
                component.suspendCMListener = true;
                component.set('value', value);
                component.suspendCMListener = false;
            });
        });
    },

    willDestroyElement: function() {
        this.cm.off('change');
        this.cm = null;
    },

    updateCodeMirror: function() {
        if (!this.cm) { return; }
        if (this.suspendCMListener) { return; }

        var doc = this.cm.getDoc();
        doc.setValue(this.get('value'));


    }.observes('value')
});