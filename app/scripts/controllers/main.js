'use strict';
var MainCtrl, ModalCtrl;

angular.module('pehratekcomApp')
    .controller('ModalCtrl', ['$scope', '$modalInstance', 'products', function ($scope, $modalInstance, products) {
        $scope.ok = function () {
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

        $scope.selectedOption = products.selectedOption();
    }])
    .controller('SubmitModalCtrl', ['$scope', '$modalInstance', 'cart', function ($scope, $modalInstance, cart) {
        $scope.ok = function () {
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.close('cancel');
        };

        $scope.selectedSystem = cart.getSystem();
        $scope.options = cart.options();
        $scope.total = cart.price();
    }])
    .controller('MainCtrl', ['$scope', '$routeParams', '$modal', 'cart', 'products', function ($scope, $routeParams, $modal, cart, products) {
        $scope.optionDetail = function (optionId) {
            products.setOption(optionId);

            $modal.open({
                templateUrl: 'views/products/option-detail.html',
                controller: 'ModalCtrl'
            });
        };

        $scope.openOrderForm = function () {
            $modal.open({
                templateUrl: 'views/order-form.html',
                controller: 'SubmitModalCtrl'
            });
        };

        $scope.setSystemId = function (systemId) {
            $scope.selectedSystemId = systemId;
            products.setSystem(systemId);
        };

        $scope.setCategoryId = function (categoryId) {
            $scope.selectedCategoryId = categoryId;
            products.setCategory(categoryId);
        };

        $scope.setOptionId = function (optionId) {
            $scope.selectedOptionId = optionId;
            products.setOption(optionId);
        };

        if ($routeParams.id) {
            $scope.setSystemId($routeParams.id - 1);
        }
        else {
            $scope.setSystemId(0);
        }

        if ($routeParams.cat) {
            $scope.setCategoryId($routeParams.cat - 1);
        }
        else {
            $scope.setCategoryId(0);
        }

        if ($routeParams.opt) {
            $scope.setOptionId($routeParams.opt - 1);
        }
        else {
            $scope.setOptionId(0);
        }

        $scope.selectedSystem = products.selectedSystem();
        $scope.selectedCategory = products.selectedCategory();
        $scope.selectedOption = products.selectedOption();

        $scope.cart = cart;
        if (!$scope.cart.getSystem()) {
            $scope.cart.setSystem($scope.selectedSystem);
        }

        $scope.systems = products.allSystems();
        $scope.categories = products.allCategories();
        $scope.options = products.allOptions();
        $scope.categoryOptions = function () {
            return products.categoryOptions($scope.selectedCategoryId);
        };
        $scope.systemCategories = function () {
            return products.systemCategories($scope.selectedSystemId);
        };
        $scope.systemCategoryOptions = function () {
            return products.systemCategoryOptions($scope.selectedSystemId, $scope.selectedCategoryId);
        };

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