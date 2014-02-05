'use strict';

angular.module('pehratekcomApp')
    .controller('MainCtrl', function ($scope, $routeParams) {

        $scope.systems = [
            {
                id: 0,
                name: 'product1',
                title: 'Product 1',
                category: 'system',
                price: 2000,
                imageUrl: [
                    'images/products/product-1.png',
                    'images/products/product-2.png'
                ],
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.'
            },
            {
                id: 1,
                name: 'product2',
                title: 'Product 2',
                category: 'system',
                price: 1000,
                imageUrl: [
                    'images/products/product-1.png',
                    'images/products/product-2.png'
                ],
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.'
            },
            {
                id: 2,
                name: 'product3',
                title: 'Product 3',
                category: 'system',
                price: 3000,
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
                name: 'centeringBox',
                title: 'Centering Box',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/yeoman.png'
                ]
            },
            {
                id: 1,
                name: 'soundModule',
                title: 'Sound Module',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/yeoman.png'
                ]
            },
            {
                id: 2,
                name: 'category3',
                title: 'Category 3',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/yeoman.png'
                ]
            },
            {
                id: 3,
                name: 'category4',
                title: 'Category 4',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/yeoman.png'
                ]
            }
        ];

        $scope.options = [
            {
                id: 0,
                name: 'product1',
                title: 'Product 1',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/product1/1.png',
                    'images/products/product1/2.png'
                ]
            },
            {
                id: 1,
                name: 'product2',
                title: 'Product 2',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/product2/1.png',
                    'images/products/product2/2.png'
                ]
            },
            {
                id: 2,
                name: 'product3',
                title: 'Product 3',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/product3/1.png',
                    'images/products/product3/2.png'
                ]
            },
            {
                id: 3,
                name: 'product4',
                title: 'Product 4',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/product4/1.png',
                    'images/products/product4/2.png'
                ]
            },
            {
                id: 4,
                name: 'product5',
                title: 'Product 5',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/product5/1.png',
                    'images/products/product5/2.png'
                ]
            },
            {
                id: 5,
                name: 'product6',
                title: 'Product 6',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/product6/1.png',
                    'images/products/product6/2.png'
                ]
            },
            {
                id: 6,
                name: 'product7',
                title: 'Product 7',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/product7/1.png',
                    'images/products/product7/2.png'
                ]
            },
            {
                id: 7,
                name: 'product8',
                title: 'Product 8',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/product8/1.png',
                    'images/products/product8/2.png'
                ]
            }
        ];

        $scope.systemToOption = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];

        $scope.categoryToOption = [
            [1, 4, 7],
            [2, 5],
            [3, 6, 9],
            [8]
        ];

        $scope.optionToCategory = [
            1, 2, 3, 1, 2, 3, 1, 4, 3
        ];

        $scope.selectedSystem = $routeParams.id;
        $scope.selectedCategory = $routeParams.cat;
        $scope.selectedOption = $routeParams.opt;

        $scope.system = $scope.systems[$scope.selectedSystem - 1];
        $scope.options = $scope.systemToOption[$scope.selectedSystem];
    });