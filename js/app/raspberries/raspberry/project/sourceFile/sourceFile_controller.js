Piaas.RaspberriesRaspberryProjectSourceFileController = Ember.ObjectController.extend({
    actions: {
        doSaveFile: function() {
            console.log("SAVING: " + this.get("model.id"));
            this.get('model').save();
        },

        doRollbackFile: function() {
            console.log("ROLLBACK: " + this.get("model.id"));
            this.get('model').rollback();
        }
    }
});