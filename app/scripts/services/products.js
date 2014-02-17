'use strict';

angular.module('pehratekcomApp')
    .factory('products', function () {
        var systems,
            categories,
            options,
            optionsForSystem,
            optionsForCategory,
            systemCategories,
            systemOptions,
            systemCategoryOptions,
            categoryOptions;

        systems = [
            {
                id: 0,
                name: 'vds1000',
                title: 'Video VRA-RF VDS-1000',
                category: 'system',
                price: 3295,
                imageUrl: [
                    'images/products/vds1000.png'
                ],
                desc: 'Consists of TWO 15" LCD Monitors, dual mounting brackets, hand-held RF remote control (14.5"x10.8"x1.7")'
            },
            {
                id: 1,
                name: 'xm5000',
                title: '3D Toy XM-5000 Wireless/Wired',
                category: 'system',
                price: 1398,
                imageUrl: [
                    'images/products/xm5000.png'
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
                    'images/products/vds1500.png'
                ],
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.'
            }
        ];

        categories = [
            {
                id: 0,
                name: 'centeringlcdMonitor',
                title: 'Centering LCD Monitors'
            },
            {
                id: 1,
                name: 'centeringBox',
                title: 'Centering Boxes'
            },
            {
                id: 2,
                name: 'soundModule',
                title: 'Sound Modules'
            },
            {
                id: 3,
                name: 'installationKit',
                title: 'Installation Kits'
            },
            {
                id: 4,
                name: 'cornermountingBracket',
                title: 'Corner Mounting Brackets'
            },
            {
                id: 5,
                name: 'dualarmmountingBracket',
                title: 'Dual Arm Mounting Brackets'
            },
            {
                id: 6,
                name: 'irboosterRepeater',
                title: 'IR Booster Repeaters'
            },
            {
                id: 7,
                name: 'rollingStand',
                title: 'Rolling Stands'
            },
            {
                id: 8,
                name: 'desktopStand',
                title: 'Desktop Stands'
            },
            {
                id: 9,
                name: 'speakerConsole',
                title: 'Speaker Consoles'
            },
            {
                id: 10,
                name: 'topmountBracket',
                title: 'Top Mount Brackets'
            },
            {
                id: 11,
                name: 'legacyProduct',
                title: 'Legacy Products'
            }
        ];

        options = [
            {
                id: 0,
                name: 'vds500',
                title: 'Wireless Video Centering Monitor',
                category: 0, //'centeringlcdMonitor'
                price: 1498,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/vds500/vds500.png'
                ]
            },
            {id: 1,
                name: 'vds510',
                title: 'Wireless Video Centering Monitor',
                category: 1, //'centeringlcdMonitor'
                price: 1498,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/vds510/vds510.png'
                ]
            },
            {
                id: 2,
                name: 'lpa440',
                title: 'Animated Low Profile Centering Box',
                category: 1, //'centeringBox',
                price: 299,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/lpa440/lpa440.png'
                ]
            },
            {
                id: 3,
                name: 'lpv300',
                title: 'Lighted Duck Low Profile Centering Box',
                category: 1, //'centeringBox',
                price: 299,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/lpv300/lpv300.png'
                ]
            },
            {
                id: 4,
                name: 'lpc200',
                title: 'Lighted Duck Low Profile Centering Box',
                category: 1, //'centeringBox',
                price: 129,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/lpc200/lpc200.png'
                ]
            },
            {
                id: 5,
                name: 'lpa400',
                title: 'Animated Low Profile Centering Box',
                category: 1, //'centeringBox',
                price: 259,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/lpa400/lpa400.png'
                ]
            },
            {
                id: 6,
                name: 'vdo-snd',
                title: 'Sound Module',
                category: 2, //sound modules
                price: 299,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/vdosnd/vdosnd.png'
                ]
            },
            {
                id: 7,
                name: 'insvid',
                title: 'Video VRA Installation Kit',
                category: 3, //'installationKit',
                price: 79,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/insvid/insvid.png'
                ]
            },
            {
                id: 8,
                name: 'ins5000',
                title: 'XM-5000 Installation Kit',
                category: 3, //'installationKit',
                price: 89,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/ins5000/ins5000.png'
                ]
            },
            {
                id: 9,
                name: 'ctrmt',
                title: 'Flush Mount Bracket',
                category: 4, //'cornermountingBracket',
                price: 79,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/ctrmt/ctrmt.png'
                ]
            },
            {
                id: 10,
                name: 'dua001',
                title: 'Dual Arm Mounting Bracket',
                price: 59,
                category: 5, //'dualarmmountingBracket',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/dua001/dua001.png'
                ]
            },
            {
                id: 11,
                name: 'irrt200',
                title: 'IR Signal Booster',
                category: 6, //'irboosterRepeater',
                price: 149,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/irrt200/irrt200.png'
                ]
            },
            {
                id: 12,
                name: 'rolstan',
                title: 'Rolling Adjustable Stand',
                category: 7, //'rollingStand',
                price: 399,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/rolstan/rolstan.png'
                ]
            },
            {
                id: 13,
                name: 'dsk10',
                title: 'Desktop Stand',
                category: 8, //'desktopStand',
                price: 129,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/dsk10/dsk10.png'
                ]
            },
            {
                id: 14,
                name: 'vds2000',
                title: 'VDS-2000 Speaker Console',
                category: 9, //'speakerConsole',
                price: 4475,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/vds2000/vds2000.png'
                ]
            },
            {
                id: 15,
                name: 'vds2500',
                title: 'VDS-2500 Speaker Console',
                category: 9, //'speakerConsole',
                price: 4675,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/vds2500/vds2500.png'
                ]
            },
            {
                id: 16,
                name: 'legacy1',
                title: 'legacy1',
                category: 11, //'none',
                price: 0,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/product16/1.png',
                    'images/products/product16/2.png'
                ]
            },
            {
                id: 17,
                name: 'legacy2',
                title: 'legacy2',
                category: 11, //'none',
                price: 0,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/vds2500/vds2500.png'
                ]
            },
            {
                id: 18,
                name: 'std500',
                title: 'Video VRA To Mounting Bracket',
                category: 10, //'topmountBracket',
                price: 89,
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et volutpat odio, nec posuere dolor. Nulla a massa massa. Praesent in cursus diam, eu vulputate lectus. Fusce tincidunt eros eget lorem faucibus volutpat. Morbi eu pretium massa, id dapibus felis. In eget sodales ante. Nam ut felis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vestibulum tellus eu neque hendrerit, ut tempor diam tempor.',
                imgUrl: [
                    'images/products/std500/std500.png'
                ]
            }
        ];

        optionsForSystem = [
            [0, 2, 3, 6, 9, 10, 12, 7, 13, 14],  //Video VRA-RF VDS-1000 - 0
            [0, 2, 4, 8, 18, 9, 10, 11, 12, 13],        //3D Toy XM-5000 Wireless/Wired - 1
            [0, 5, 4, 7, 10, 9, 12, 13, 15]         //Video VRA-IR VDS-1500 - 2
        ];

        optionsForCategory = [
            [0],             //centeringlcdMonitor - 0
            [2, 3, 4, 5, 1],       //centeringBox - 2
            [6],                //soundModule - 3
            [7, 8],             //installationKit - 3
            [9],                //cornermountingBracket - 4
            [10],               //dualarmmountingBracket - 5
            [11],               //irboosterRepeater - 6
            [12],               //rollingStand - 6
            [13],               //desktopStand - 8
            [14, 15],           //speakerConsole -9
            [18],                //topmountbracket
            [16, 17]            // legacy
        ];

        systemCategories = function (systemId) {
            var i,
                j,
                sysOptions = optionsForSystem[systemId],
                optionId,
                catId,
                sysLen,
                resultLen,
                matchFound,
                result = [];

            if (systemCategories.result && systemCategories.systemId === systemId) {
                return systemCategories.result;
            }
            else {
                if (sysOptions) {
                    sysLen = sysOptions.length;

                    for (i = 0; i < sysLen; i++) {
                        resultLen = result.length;
                        matchFound = false;
                        optionId = sysOptions[i];
                        catId = options[optionId].category;

                        for (j = 0; j < resultLen; j++) {
                            if (result[j].id === catId) {
                                matchFound = true;
                                break;
                            }
                        }

                        if (!matchFound) {
                            result.push(categories[catId]);
                        }
                    }
                }

                systemCategories.systemId = systemId;
                systemCategories.result = result;

                return result;
            }
        };

        systemOptions = function (systemId) {
            //TODO: automate this
            return optionsForSystem[systemId];
        };

        systemCategoryOptions = function (systemId, categoryId) {
            var i,
                j,
                catOptions,
                sysOptions,
                catLen,
                sysLen,
                result = [];

            if (systemId !== null && categoryId !== null) {
                catOptions = optionsForCategory[categoryId];
                sysOptions = optionsForSystem[systemId];
                catLen = catOptions.length;
                sysLen = sysOptions.length;

                for (i = 0; i < catLen; i++) {
                    for (j = 0; j < sysLen; j++) {
                        if (catOptions[i] === sysOptions[j]) {
                            result.push(options[catOptions[i]]);
                        }
                    }
                }
            }

            return result;
        };

        categoryOptions = function (categoryId) {
            var optionIds = optionsForCategory[categoryId],
                result = [];

            angular.forEach(optionIds, function (optionId) {
                result.push(options[optionId]);
            });

            return result;
        };

        return {
            allSystems: function () {
                return systems;
            },
            allCategories: function () {
                return categories;
            },
            allOptions: function () {
                return options;
            },
            getSystem: function (systemId) {
                return systems[systemId];
            },
            getCategory: function (categoryId) {
                return categories[categoryId];
            },
            getOption: function (optionId) {
                return options[optionId];
            },
            systemCategories: function (systemId) {
                return systemCategories(systemId);
            },
            systemOptions: function (systemId) {
                return systemOptions(systemId);
            },
            systemCategoryOptions: function (systemId, categoryId) {
                return systemCategoryOptions(systemId, categoryId);
            },
            categoryOptions: function (categoryId) {
                return categoryOptions(categoryId);
            }
        }
    });