Piaas.RaspberriesRaspberryProjectController = Ember.ObjectController.extend({
    creatingFile: false,

    actions: {
        toggleCreateFile: function() {
            this.toggleProperty('creatingFile');
        },

        createNewFile: function() {
            var self = this;

            var project = this.get('model');
            var filename = this.get('newFilename');
            if (project && filename) {
                //todo: check that a file with the same name does not exist
                var newFile = this.store.createRecord("sourceFile", {
                    id: "sourceFiles_" + filename,
                    content: " "
                });

                project.get('sourceFiles').pushObject(newFile);

                newFile.save().then(function() {
                    console.log('new file saved! Saving project!');
                });

                project.save().then(function() {
                    console.log("project is saved!");
                    self.set('newFilename', null);
                    self.set('creatingFile', false);
                });
            } else {
                alert("Unable to save. Project: " + project + " filename: " + filename);
            }
        },

        cancelFileCreate: function() {
            this.set('newFilename', null);
            this.set('creatingFile', false);
        }
    }
});