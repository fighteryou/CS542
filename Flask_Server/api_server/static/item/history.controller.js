/**
 * Created by you on 2017/3/31.
 */
(function () {
    'use strict';

    angular
        .module('app')
        .controller('HistoryController', HistoryController);

    HistoryController.$inject = ['$rootScope', 'ItemService','$window'];
    function HistoryController($rootScope, ItemService, $window) {
        var vm = this;

        vm.remove = remove;

        function remove(index) {
            var sid = $rootScope.history[index].sid;
             ItemService.removeHistory(sid)
                .then(function (response) {
                    if (response.remove_status) {
                        //use response to update page
                        $rootScope.history = response;
                         $window.location.reload();
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }

    }

})();
