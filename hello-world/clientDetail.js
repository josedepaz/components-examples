(function () {
    'use strict';
    
    angular.module('app').component('clientDetail', {
        templateUrl: 'clientDetail.html',
        controller: ClientDetailController,
        bindings: {
            client: '='
        }
    });

    function ClientDetailController() {

    }
})();