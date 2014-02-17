'use strict';
var MainCtrl, ModalCtrl;

angular.module('pehratekcomApp')
    .controller('ModalCtrl', ['$scope', '$modalInstance', function ($scope, $modalInstance) {
        $scope.ok = function () {
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }])
    .controller('MainCtrl', ['$scope', '$routeParams', '$modal', 'cart', 'products', function ($scope, $routeParams, $modal, cart, products) {
        $scope.open = function () {
            $modal.open({
                templateUrl: 'views/test.html',
                controller: 'ModalCtrl'
            });
        };

        $scope.selectedSystemId = $routeParams.id ? $routeParams.id - 1 : null;
        $scope.selectedCategoryId = $routeParams.cat ? $routeParams.cat - 1 : 0;
        $scope.selectedOptionId = $routeParams.opt ? $routeParams.opt - 1 : 0;

        $scope.selectedSystem = products.getSystem($scope.selectedSystemId);
        $scope.selectedCategory = products.getCategory($scope.selectedCategoryId);
        $scope.selectedOption = products.getOption($scope.selectedOptionId);

        $scope.cart = cart;
        if (!$scope.cart.getSystem()) {
            $scope.cart.setSystem($scope.selectedSystem);
        }

        $scope.setSystemId = function (systemId) {
            $scope.selectedSystemId = systemId;
            $scope.selectedSystem = products.getSystem(systemId);
        };

        $scope.setCategoryId = function (categoryId) {
            $scope.selectedCategoryId = categoryId;
            $scope.selectedCategory = products.getCategory(categoryId);
        };

        $scope.systems = products.allSystems();
        $scope.categories = products.allCategories();
        $scope.options = products.allOptions();
        $scope.categoryOptions = products.categoryOptions($scope.selectedCategoryId);
        $scope.systemCategories = products.systemCategories($scope.selectedSystemId);
        $scope.systemCategoryOptions = products.systemCategoryOptions($scope.selectedSystemId, $scope.selectedCategoryId);

        $scope.optionsForSystem = function (systemId) {
            return products.optionsForSystem(systemId);
        };

        $scope.nextCategory = function () {
            var categories = products.systemCategories($scope.selectedSystemId),
                i = 0,
                len = categories.length,
                result = categories[len - 1].id;

            for (i; i < len - 1; i++) {
                if (categories[i].id === $scope.selectedCategoryId) {
                    result = categories[i + 1].id;
                    break;
                }
            }

            return result;
        };

        $scope.isLastCategory = function () {
            var categories = products.systemCategories($scope.selectedSystemId),
                len = categories.length;

            return len === 0 || categories[len - 1].id === $scope.selectedCategoryId;
        };
    }]);