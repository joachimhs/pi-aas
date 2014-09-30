Piaas.Router.map(function() {
    this.resource("raspberries", {"path": "/raspberries"}, function() {
        this.route("raspberry", {path: '/:raspberryPi_id'}, function() {
            this.route("project", {path: "/projects/:project_id"}, function() {
                this.route('sourceFile', {path: "/sourceFile/:sourceFile_id"});
            });
        });
    });

});