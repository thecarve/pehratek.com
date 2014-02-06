'use strict';

angular.module('pehratekcomApp')
    .controller('MainCtrl', function ($scope, $routeParams) {
        var Cart = function() {
            var self = this,
                _systemId = null,
                _options = [];

            self.setSystemId = function(systemId) {
                _systemId = systemId;
                _options = [];
            };

            self.getSystemId = function() {
                return _systemId;
            };

            self.addOption = function(optionId) {
                _options.push($scope.options[optionId]);
            };

            self.removeOption = function(optionId) {
                angular.forEach(_options, function(option) {
                    if (option.id == optionId) {
                        delete _options[option];
                    }
                });
            };

            self.price = function() {
                var price = 0;

                angular.forEach(_options, function(option) {
                    price += option.price;
                });

                return price;
            };
        };

        $scope.systems = [
            {
                id: 0,
                name: 'vds1000',
                title: 'Video VRA-RF VDS-1000',
                category: 'system',
                price: 3295,
                imageUrl: [
                    'images/products/product-1.png',
                    'images/products/product-2.png'
                ],
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.'
            },
            {
                id: 1,
                name: 'xm5000',
                title: '3D Toy XM-5000 Wireless/Wired',
                category: 'system',
                price: 1398,
                imageUrl: [
                    'images/products/product-1.png',
                    'images/products/product-2.png'
                ],
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.'
            },
            {
                id: 2,
                name: 'vds1500',
                title: 'Video VRA-IR VDS-1500',
                category: 'system',
                price: 3495,
                imageUrl: [
                    'images/products/product-1.png',
                    'images/products/product-2.png'
                ],
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.'
            }
        ];

        $scope.categories = [
            {
                id: 0,
                name: 'centeringlcdMonitor',
                title: 'Centering LCD Monitor'
            },
            {
                id: 1,
                name: 'centeringBox',
                title: 'Centering Box'
            },
            {
                id: 2,
                name: 'soundModule',
                title: 'Sound Module'
            },
            {
                id: 3,
                name: 'installationKit',
                title: 'Installation Kit'
            },
            {
                id: 4,
                name: 'cornermountingBracket',
                title: 'Corner Mounting Bracket'
            },
            {
                id: 5,
                name: 'dualarmmountingBracket',
                title: 'Dual Arm Mounting Bracket'
            },
            {
                id: 6,
                name: 'irboosterRepeater',
                title: 'IR Booster Repeater'
            },
            {
                id: 7,
                name: 'rollingStand',
                title: 'Rolling Stand'
            },
            {
                id: 8,
                name: 'desktopStand',
                title: 'Desktop Stand'
            },
            {
                id: 9,
                name: 'speakerConsole',
                title: 'Speaker Console'
            }
        ];

        $scope.options = [
            {
                id: 0,
                name: 'vds500',
                title: 'Wireless Video Centering Monitor',
                category: 'centeringlcdMonitor',
                price: 1498,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/product1/1.png',
                    'images/products/product1/2.png'
                ]
            },
            {id: 1,
                name: 'vds510',
                title: 'Wireless Video Centering Monitor',
                category: 'centeringlcdMonitor',
                price: 1498,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/product1/1.png',
                    'images/products/product1/2.png'
                ]
            },
            {
                id: 2,
                name: 'lpa440',
                title: 'Animated Low Profile Centering Box',
                category: 'centeringBox',
                price: 299,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/product2/1.png',
                    'images/products/product2/2.png'
                ]
            },
            {
                id: 3,
                name: 'lpv300',
                title: 'Lighted Duck Low Profile Centering Box',
                category: 'centeringBox',
                price: 299,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/product3/1.png',
                    'images/products/product3/2.png'
                ]
            },
            {
                id: 4,
                name: 'lpc200',
                title: 'Lighted Duck Low Profile Centering Box',
                category: 'centeringBox',
                price: 129,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/product4/1.png',
                    'images/products/product4/2.png'
                ]
            },
            {
                id: 5,
                name: 'lpa400',
                title: 'Animated Low Profile Centering Box',
                category: 'centeringBox',
                price: 259,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/product5/1.png',
                    'images/products/product5/2.png'
                ]
            },
            {
                id: 6,
                name: 'vdo-snd',
                title: 'Sound Module',
                price: 299,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/product6/1.png',
                    'images/products/product6/2.png'
                ]
            },
            {
                id: 7,
                name: 'insvid',
                title: 'Video VRA Installation Kit',
                category: 'installationKit',
                price: 79,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/product7/1.png',
                    'images/products/product7/2.png'
                ]
            },
            {
                id: 8,
                name: 'ins5000',
                title: 'XM-5000 Installation Kit',
                category: 'installationKit',
                price: 89,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/product8/1.png',
                    'images/products/product8/2.png'
                ]
            },
            {
                id: 9,
                name: 'ctrmt',
                title: 'Flush Mount Bracket???',
                category: 'cornermountingBracket',
                price: 79,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/product9/1.png',
                    'images/products/product9/2.png'
                ]
            },
            {
                id: 10,
                name: 'dua001',
                title: 'Dual Arm Mounting Bracket',
                price: 59,
                category: 'dualarmmountingBracket',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/product10/1.png',
                    'images/products/product10/2.png'
                ]
            },
            {
                id: 11,
                name: 'irrt200',
                title: 'IR Signal Booster',
                category: 'irboosterRepeater',
                price: 149,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/product11/1.png',
                    'images/products/product11/2.png'
                ]
            },
            {
                id: 12,
                name: 'rolstan',
                title: 'Rolling Adjustable Stand',
                category: 'rollingStand',
                price: 399,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/product12/1.png',
                    'images/products/product12/2.png'
                ]
            },
            {
                id: 13,
                name: 'dsk10',
                title: 'Desktop Stand',
                category: 'desktopStand',
                price: 129,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/product13/1.png',
                    'images/products/product13/2.png'
                ]
            },
            {
                id: 14,
                name: 'vds2000',
                title: 'VDS-2000 Speaker Console',
                category: 'speakerConsole',
                price: 0,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/product14/1.png',
                    'images/products/product14/2.png'
                ]
            },
            {
                id: 15,
                name: 'vds2500',
                title: 'VDS-2500 Speaker Console',
                category: 'speakerConsole',
                price: 0,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/product15/1.png',
                    'images/products/product15/2.png'
                ]
            }
        ];

        $scope.systemToOption = [
            [0, 1, 2, 3, 7, 8, 9],  //Video VRA-RF VDS-1000 - 0
            [1, 3, 4, 5, 6],        //3D Toy XM-5000 Wireless/Wired - 1
            [0, 1, 3, 7, 9]         //Video VRA-IR VDS-1500 - 2
        ];

        $scope.systemToCategory = [
            [0, 1, 3, 4],           //Video VRA-RF VDS-1000 - 0
            [0, 1, 2],              //3D Toy XM-5000 Wireless/Wired - 1
            [0, 1, 3, 4]            //Video VRA-IR VDS-1500 - 2
        ];

        $scope.categoryToOption = [
            [0, 1],             //centeringlcdMonitor - 0
            [2, 3, 4, 5],       //centeringBox - 1
            [6],                //soundModule - 2
            [7, 8],             //installationKit - 3
            [9],                //cornermountingBracket - 4 ???
            [10],               //dualarmmountingBracket - 5
            [11],               //irboosterRepeater - 6
            [12],               //rollingStand - 7
            [13],               //desktopStand - 8
            [14, 15]            //speakerConsole -9
        ];

        $scope.selectedSystem = $routeParams.id - 1;
        $scope.selectedCategoryId = $routeParams.cat ? $routeParams.cat - 1 : 0;
        $scope.selectedOptionId = $routeParams.opt ? $routeParams.opt - 1 : 0;

        $scope.system = $scope.systems[$scope.selectedSystem];
        $scope.selectedCategory = $scope.categories[$scope.selectedCategoryId];
        $scope.selectedOption = $scope.options[$scope.selectedOptionId];

        $scope.systemOptionIds = $scope.systemToOption[$scope.selectedSystem];

        $scope.systemCategories = function() {
            var result = [];

            angular.forEach($scope.systemToCategory[$scope.selectedSystem], function(catOption) {
                result.push($scope.options[catOption]);
            });

            return result;
        };

        $scope.systemCategoryOptions = (function() {
            var i = 0,
                j = 0,
                catOptions,
                sysOptions,
                catLen,
                sysLen,
                result = [];

            if ($routeParams.id && $routeParams.cat) {
                catOptions = $scope.categoryToOption[$scope.selectedCategoryId];
                sysOptions = $scope.systemToOption[$scope.selectedSystem];
                catLen = catOptions.length;
                sysLen = sysOptions.length;

                for (i = 0; i < catLen; i++) {
                    for (j = 0; j < sysLen; j++) {
                        if (catOptions[i] == sysOptions[j]) {
                            result.push($scope.options[catOptions[i]]);
                        }
                    }
                }
            }

            return result;
        }());

        $scope.cart = new Cart();
    });