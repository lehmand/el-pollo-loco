const level1 = new Level(
	[
		new Endbloss(),
        // new Chicken(), 
        // new Chicken(), 
        // new Chicken()
    ],
	[
        new Cloud()
    ],

	[
		new BackgroundObject('../assets/img/5_background/layers/air.png', -719),
		new BackgroundObject('../assets/img/5_background/layers/3_third_layer/2.png', -719),
		new BackgroundObject('../assets/img/5_background/layers/2_second_layer/2.png', -719),
		new BackgroundObject('../assets/img/5_background/layers/1_first_layer/2.png', -719),

		new BackgroundObject('../assets/img/5_background/layers/air.png', 0),
		new BackgroundObject('../assets/img/5_background/layers/3_third_layer/1.png', 0),
		new BackgroundObject('../assets/img/5_background/layers/2_second_layer/1.png', 0),
		new BackgroundObject('../assets/img/5_background/layers/1_first_layer/1.png', 0),

		new BackgroundObject('../assets/img/5_background/layers/air.png', 719),
		new BackgroundObject('../assets/img/5_background/layers/3_third_layer/2.png', 719),
		new BackgroundObject('../assets/img/5_background/layers/2_second_layer/2.png', 719),
		new BackgroundObject('../assets/img/5_background/layers/1_first_layer/2.png', 719),

		new BackgroundObject('../assets/img/5_background/layers/air.png', 719 * 2),
		new BackgroundObject('../assets/img/5_background/layers/3_third_layer/1.png', 719 * 2),
		new BackgroundObject('../assets/img/5_background/layers/2_second_layer/1.png', 719 * 2),
		new BackgroundObject('../assets/img/5_background/layers/1_first_layer/1.png', 719 * 2),

		new BackgroundObject('../assets/img/5_background/layers/air.png', 719 * 3),
		new BackgroundObject('../assets/img/5_background/layers/3_third_layer/2.png', 719 * 3),
		new BackgroundObject('../assets/img/5_background/layers/2_second_layer/2.png', 719 * 3),
		new BackgroundObject('../assets/img/5_background/layers/1_first_layer/2.png', 719 * 3),

		new BackgroundObject('../assets/img/5_background/layers/air.png', 719 * 4),
		new BackgroundObject('../assets/img/5_background/layers/3_third_layer/1.png', 719 * 4),
		new BackgroundObject('../assets/img/5_background/layers/2_second_layer/1.png', 719 * 4),
		new BackgroundObject('../assets/img/5_background/layers/1_first_layer/1.png', 719 * 4),

		new BackgroundObject('../assets/img/5_background/layers/air.png', 719 * 5),
		new BackgroundObject('../assets/img/5_background/layers/3_third_layer/2.png', 719 * 5),
		new BackgroundObject('../assets/img/5_background/layers/2_second_layer/2.png', 719 * 5),
		new BackgroundObject('../assets/img/5_background/layers/1_first_layer/2.png', 719 * 5),
	],

	[
		new Coin(250),
		new Coin(250),
		new Coin(250),
		new Coin(250),
		new Coin(250),
		new Coin(250),
		new Coin(250),
		new Coin(250),
		new Coin(250),
		new Coin(250),
		new Coin(250),
		new Coin(250),
	],

	[
		new Bottle(300),
		new Bottle(300),
		new Bottle(300),
		new Bottle(300),
	]
);
