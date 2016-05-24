(function () {
    'use strict';

    angular.module('app')
        .component('clientList', {
            templateUrl: 'clientList.html',
            controller: ClientListController
        });

    function ClientListController($scope, $element, $attrs) {
        var ctrl = this;

        ctrl.list = getList();


        ctrl.deleteClient = deleteClient;



        //////////////////////////
        function getList() {
            return [
                { name: 'Cliente 1', lastname: 'Apellido 1' },
                { name: 'Cliente 2', lastname: 'Apellido 2' },
                { name: 'Cliente 3', lastname: 'Apellido 3' },
                { name: 'Cliente 4', lastname: 'Apellido 4' }
            ];
        }

        function deleteClient(client) {
            var idx = ctrl.list.indexOf(client);
            if (idx >= 0) {
                ctrl.list.splice(idx, 1);
            }
        }
    }
})();