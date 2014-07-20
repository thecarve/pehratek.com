'use strict';

angular.module('pehratekcomApp')
    .factory('cart', function () {
        var _system = null,
            _options = [];

        function removeOption(optionId) {
            var i = _options.length - 1;

            for (i; i >= 0; i--) {
                if (_options[i].id === optionId) {
                    _options.splice(i);
                }
            }
        }

        function removeCategoryOptions(categoryId) {
            var i = _options.length - 1;

            for (i; i >= 0; i--) {
                if (_options[i].category === categoryId) {
                    _options.splice(i);
                }
            }
        }

        return {
            setSystem: function (system) {
                if (system != _system) {
                    _system = system;
                    _options = [];
                }
            },
            getSystem: function () {
                return _system;
            },
            addOption: function (option) {
                removeCategoryOptions(option.category);
                _options.push(option);
            },
            removeOption: function (optionId) {
                removeOption(optionId);
            },
            removeCategoryOptions: function (categoryId) {
                removeCategoryOptions(categoryId);
            },
            options: function () {
                return _options;
            },
            price: function () {
                var price = 0;

                if (_system !== null) {
                    price += _system.price;

                    angular.forEach(_options, function (option) {
                        price += option.price;
                    });
                }

                return price;
            }
        };
    });
