Piaas.RaspberriesRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('raspberryPi');
    }
});