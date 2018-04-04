var superApp = angular.module('superApp', []);

superApp.controller('specificApp', function ($scope) {
    $scope.items = [
        {text: 'angular 1.6 learn', done: true},
        {text: 'build angular app 1.6', done: true},
        {text: 'angular 2 learn diff', done: false},
        {text: 'build angular app 2', done: false}
    ];

    $scope.addItem = function() {
        $scope.items.push({ text: $scope.itemText, done: false });
        $scope.itemText = '';        
    };

    $scope.searchEnter = function() {
        if (event.which == 13) {
            $scope.addItemClick();
        }
    };

    $scope.addItemClick = function() {
        if ($scope.itemText != '') {
            $scope.addItem();
        }
    };

    $scope.toggleDoneItemClick = function(item) {
        item.done = item.done ? false : true;
    };

    $scope.removeCompleted = function() {
        var oldItems = $scope.items;

        $scope.items = [];
        angular.forEach(oldItems, function(item) {
            if (!item.done) {
                $scope.items.push(item);
            }
        });
    };

    $scope.remaining = function() {
        var count = 0;
        
        angular.forEach($scope.items, function(item) {
            count += item.done ? 0 : 1;
        });
        
        return count;
    };

});