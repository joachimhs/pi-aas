Piaas.RaspberriesRaspberryRoute = Ember.Route.extend({
    model: function(raspberry) {
        return this.store.find('raspberryPi', raspberry.raspberryPi_id);
    }
});