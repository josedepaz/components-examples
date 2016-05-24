(function () {
    'use strict';

    angular.module('app', [])
        .controller('MainCtrl', MainCtrl);

    function MainCtrl() {
        var self = this;
        self.client = {
            name: 'Prueba'
        };
    }

})();