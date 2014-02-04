'use strict';

angular.module('pehratekcomApp')
  .controller('MainCtrl', function ($scope, $routeParams) {

    $scope.products = [
        {
            id: 0,
            name: 'product1',
            title: 'Product 1',
            category: 'system',
            price: 2000,
            imageUrl: [
                'images/products/product1/1.png',
                'images/products/product1/2.png'
            ],
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
            options: [3,4,5]
        },

        {
            id: 1,
            name: 'product2',
            title: 'Product 2',
            category: 'system',
            price: 1000,
            imageUrl: [
                'images/products/product2/1.png',
                'images/products/product2/2.png'
            ],
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
            options: [6,7,8]
        },

        {
            id: 2,
            name: 'product3',
            title: 'Product 3',
            category: 'system',
            price: 3000,
            imageUrl: [
                'images/products/product3/1.png',
                'images/products/product3/2.png'
            ],
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
            options: [9,10,11]
        },

        {
            id: 3,
            name: 'product4',
            title: 'Product 4',
            category: 'centering-box',
            price: 30,
            imageUrl: [
                'images/products/product4/1.png',
                'images/products/product4/2.png'
            ],
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.'
        },

        {
            id: 4,
            name: 'product5',
            title: 'Product 5',
            category: 'centering-box',
            price: 4500,
            imageUrl: [
                'images/products/product5/1.png',
                'images/products/product5/2.png'
            ],
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.'
        },

        {
            id: 5,
            name: 'product6',
            title: 'Product 6',
            category: 'sound-module',
            price: 1700,
            imageUrl: [
                'images/products/product6/1.png',
                'images/products/product6/2.png'
            ],
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.'
        },

        {
            id: 6,
            name: 'product7',
            title: 'Product 7',
            category: 'centering-box',
            price: 1700,
            imageUrl: [
                'images/products/product7/1.png',
                'images/products/product7/2.png'
            ],
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.'
        },

        {
            id: 7,
            name: 'product8',
            title: 'Product 8',
            category: 'centering-box',
            price: 1700,
            imageUrl: [
                'images/products/product8/1.png',
                'images/products/product8/2.png'
            ],
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.'
        },

        {
            id: 8,
            name: 'product9',
            title: 'Product 9',
            category: 'centering-box',
            price: 1700,
            imageUrl: [
                'images/products/product9/1.png',
                'images/products/product9/2.png'
            ],
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.'
        },

        {
            id: 9,
            name: 'product10',
            title: 'Product 10',
            category: 'centering-box',
            price: 1700,
            imageUrl: [
                'images/products/product10/1.png',
                'images/products/product10/2.png'
            ],
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.'
        },

        {
            id: 10,
            name: 'product11',
            title: 'Product 11',
            category: 'centering-box',
            price: 1700,
            imageUrl: [
                'images/products/product11/1.png',
                'images/products/product11/2.png'
            ],
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.'
        },

        {
            id: 11,
            name: 'product12',
            title: 'Product 12',
            category: 'centering-box',
            price: 1700,
            imageUrl: [
                'images/products/product12/1.png',
                'images/products/product12/2.png'
            ],
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.'
        }
    ];

    $scope.product = $scope.products [$routeParams.id - 1];

  });