/**
 * Created by you on 2017/3/23.
 */
(function () {
    //'use strict';

    angular
        .module('app')
        .controller('ItemResultController', ItemResultController);

    ItemResultController.$inject = ['$location', 'AuthenticationService'];
    function ItemResultController($location, AuthenticationService) {
        var vm = this;
        vm.logout = logout;

        function logout() {
            AuthenticationService.isLogged = false;
            AuthenticationService.isAdmin = false;
            delete localStorage.token;
            $location.path("/");
        }
    }

})();