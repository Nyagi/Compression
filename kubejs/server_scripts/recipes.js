//Nuking Mods/Items
onEvent('recipes', event => {
	event.remove({mod: 'ae2'})
	event.remove({mod: 'create'})
	event.remove({mod: 'botania'})
	event.remove({mod: 'mythicbotany'})
	event.remove({mod: 'aiotbotania'})
	//dont remove minecraft entirely, too much shit to re-add, remove on item by item basis
		//Wooden/Stone Tools Bulk remove
		event.remove({output: 
		[Item.of('minecraft:wooden_sword', '{Damage:0}'), Item.of('minecraft:wooden_shovel', '{Damage:0}'), Item.of('minecraft:wooden_pickaxe', '{Damage:0}'), Item.of('minecraft:wooden_axe', '{Damage:0}'), Item.of('minecraft:wooden_hoe', '{Damage:0}'), Item.of('minecraft:stone_shovel', '{Damage:0}'), Item.of('minecraft:stone_pickaxe', '{Damage:0}'), Item.of('minecraft:stone_axe', '{Damage:0}'), Item.of('minecraft:stone_hoe', '{Damage:0}'), Item.of('minecraft:stone_sword', '{Damage:0}')
		]})
	event.remove({mod: 'mysticalagriculture'})
	event.remove({mod: 'mysticalagradditions'})

})
//Early Game Recipies
onEvent('recipes', event => {	
//--------------------------------------------------------------------------------------------------\\	
//Shapeless Recipes
	//Soil Sample
		event.shapeless('4x botania:livingwood_planks', ['botania:livingwood_log'])
	//Torn off chunk of wool
		event.shapeless('8x kubejs:torn_off_wool_chunk', ['#minecraft:wool'])
	//Living Wood Planks
		event.shapeless('8x kubejs:torn_off_wool_chunk', ['#minecraft:wool'])
	//Readding Botania Flower --> Petals
	//Tralo yelled at me cause i was doing this manually - Nyagi
		colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']
	colors.forEach(c => {
		event.shapeless('2x botania:'+c+'_petal',['botania:'+c+'_mystical_flower'])
    	event.shapeless('4x botania:'+c+'_petal',['botania:'+c+'_double_flower'])
})
//--------------------------------------------------------------------------------------------------\\	
//2x2 Recipes
	//Botania
		//Living rock from pebbles
			//Removing pebble input recipes to not run event.remove({output: 'minecraft:cobblestone'}) which would result in no way to make cobble
		event.remove({input: 'botania:pebble'})
		event.shaped('botania:livingrock', [
		 'AA',
		 'AA'
	 ], {
		A: 'botania:pebble',
		})
		//Living stick
		event.shaped('botania:livingwood_twig', [
			'A',
			'A'
		], {
		   A: 'botania:livingwood_log',
	   })
	   //Living wood plank stairs
	   event.shaped('4x botania:livingwood_planks_stairs', [
		'A ',
		'AA'
	], {
	   A: 'botania:livingwood_planks',
   })

	//Vanilla
		//Crafting Table
		event.shaped('minecraft:crafting_table', [
			'AA',
			'BB'
		], {
		A: 'botania:livingwood_twig',
		B: 'botania:livingrock'
		})
	
	//Create
		//Andesite Alloy
		event.shaped('create:andesite_alloy', [
			'AB',
			'BA'
		], {
			A: 'kubejs:living_andesite',
			B: 'minecraft:iron_nugget'
		})
//--------------------------------------------------------------------------------------------------\\	
//3x3 Recipes
	//Vanilla
		//Furnace
		event.remove({output: 'minecraft:furnace'})
		event.shaped('minecraft:furnace', [
			'BAB',
			'B B',
			'BAB'
		], {
			A: 'botania:livingrock',
			B: 'minecraft:cobblestone'
		})
	//Create
		//Shaft
		event.shaped('4x create:shaft', [
			'A  ',
			' A ',
			'  A'
		], {
			A: 'create:andesite_alloy'
		})
		//Small Cog
		event.shaped('create:cogwheel', [
			' A ',
			'BCB',
			' A '
		], {
					A: 'create:shaft',
					B: 'botania:pattern_framed_livingwood',
					C: 'create:andesite_alloy'
		})
		//Large Cog
		event.shaped('create:large_cogwheel', [
					' A ',
					'BCB',
					' A '
				], {
					A: 'create:shaft',
					B: 'botania:framed_livingwood',
					C: 'create:cogwheel'
		})
		//Gearbox
		event.shaped('create:gearbox', [
			'ACA',
			'CBC',
			'ACA'
		], {
			A: 'create:andesite_alloy',
			B: 'create:andesite_casing',
			C: 'create:cogwheel'
})
		//Create Press
		event.shaped('create:mechanical_press', [
					'A',
					'B',
					'C'
				], {
				A: 'create:shaft',
				B: 'create:gearbox',
				C: 'minecraft:anvil'
		})
		//Water Wheel
		event.shaped('create:water_wheel', [
					' CA',
					'CBC',
					'AC '
				], {
				A: 'create:large_cogwheel',
				B: 'create:shaft',
				C: 'botania:livingwood_planks_stairs'
		})
	//Botania
		//Petal Apothecary
		event.shaped('botania:apothecary_default', [
			'DAD',
			' B ',
			'CBC'
		], {
			A: '#botania:petals',
			B: '#minecraft:logs',
			C: '#minecraft:wooden_stairs',
			D: '#minecraft:wooden_slabs'
		})
		//Living Rock Sword
		event.shaped(Item.of('aiotbotania:livingrock_sword', '{Damage:0}'), [
			'A',
			'A',
			'B'
		], {
			A: 'botania:livingrock',
			B: 'botania:livingwood_twig'
		})
		//Living Rock Axe
		event.shaped(Item.of('aiotbotania:livingrock_axe', '{Damage:0}'), [
			'AA',
			'AB',
			' B'
		], {
			A: 'botania:livingrock',
			B: 'botania:livingwood_twig'
		})
		//Living Rock Pick
		event.shaped(Item.of('aiotbotania:livingrock_pickaxe', '{Damage:0}'), [
			'AAA',
			' B ',
			' B '
		], {
			A: 'botania:livingrock',
			B: 'botania:livingwood_twig'
		})
		//Living Rock Shovel
		event.shaped(Item.of('aiotbotania:livingrock_shovel', '{Damage:0}'), [
			'A',
			'B',
			'B'
		], {
			A: 'botania:livingrock',
			B: 'botania:livingwood_twig'
		})
		//Living Rock Hoe
		event.shaped(Item.of('aiotbotania:livingrock_hoe', '{Damage:0}'), [
			'AA',
			' B',
			' B'
		], {
			A: 'botania:livingrock',
			B: 'botania:livingwood_twig'
		})
		//Framed Living Wood Planks
		event.shaped('4x botania:framed_livingwood', [
			' A ',
			'ABA',
			' A '
		], {
			A: 'botania:livingwood_planks',
			B: 'botania:livingwood_twig'
		})
		//Patterned Framed Living Wood Planks
		event.shaped('4x botania:pattern_framed_livingwood', [
			'A A',
			' B ',
			'A A'
		], {
			A: 'botania:livingwood_planks',
			B: 'botania:livingwood_twig'
		})
	//LabStuff
	//LabStuff
		//Sturdy Wooden Box
		event.shaped('kubejs:sturdy_wooden_box', [
					'C C',
					'CBC',
					'AAA'
				], {
				A: '#forge:stripped_logs',
				B: Item.of('create:super_glue', '{Damage:0}'),
				C: '#forge:fences'
		})
		//Iron Piston Head
		event.shaped('kubejs:iron_piston_head', [
					' B ',
					' C ',
					'AAA'
				], {
					A: 'create:iron_sheet',
					B: 'create:shaft',
					C: 'create:piston_extension_pole'
		})
		//Crude Compaction Testing Kit
		event.shaped('kubejs:crude_compaction_testing_kit', [
					'A',
					'B',
					'C'
				], {
					A: 'kubejs:iron_piston_head',
					B: 'kubejs:soil_sample',
					C: 'kubejs:sturdy_wooden_box'
		})
		//Bucket With Salt & Electrodes
		event.shaped('kubejs:bucket_with_salt_and_electrodes', [
					'   ',
					'CBD',
					' A '
				], {
					A: 'minecraft:water_bucket',
					B: 'mekanism:salt',
					C: 'create:copper_sheet',
					D: 'create:zinc_nugget'
		})
		//Crude Static Testing Kit
		event.shaped('kubejs:crude_static_testing_kit', [
					'   ',
					'CBC',
					' A '
				], {
					A: 'kubejs:bucket_with_salt_and_electrodes',
					B: '#minecraft:wool',
					C: 'create:iron_sheet',
		})
		//Slightly Unstable Mix Bag
		event.shaped('kubejs:slightly_unstable_mix_bag', [
					' D ',
					'ACB',
					' D '
				], {
					A: 'ae2:certus_quartz_dust',
					B: 'minecraft:redstone',
					C: 'minecraft:charcoal',
					D: 'minecraft:paper'
		})
		//Crude Entropy Testing Kit
		event.shaped('kubejs:crude_entropy_testing_kit', [
					'A',
					'B'
				], {
					A: 'kubejs:slightly_unstable_mix_bag',
					B: 'kubejs:sturdy_wooden_box'
		})
//--------------------------------------------------------------------------------------------------\\	
//Vanilla
	//Furnace Crafting
		event.smelting('kubejs:used_crude_entropy_testing_kit', 'kubejs:crude_entropy_testing_kit')
//--------------------------------------------------------------------------------------------------\\
//Botania	
	//Petal Apothecary Recipes
		//PureDaisy
			event.recipes.botania.petal_apothecary({
				output: 'botania:pure_daisy',
				ingredients: ['botania:white_petal','botania:white_petal','botania:white_petal','botania:white_petal', 'botania:livingwood_twig']
			})
		//Rannuncarpus
			event.recipes.botania.petal_apothecary({
				output: 'botania:rannuncarpus',
				ingredients: ['botania:orange_petal','botania:orange_petal','botania:yellow_petal','botania:redstone_root', 'botania:livingwood_twig','create:deployer','botania:rune_earth']
			})
	//PureDaisy Recipes
		//Living Wood
		event.custom({
			"type": "botania:state_copying_pure_daisy",
			"input": {
			  "type": "tag_excluding",
			  "tag": "minecraft:logs",
			  "exclude": [
				{
				  "type": "block",
				  "block": "botania:livingwood_log"
				}
			  ]
			},
			"output": "botania:livingwood_log"
		  })
		//Living Rock
		event.recipes.botania.pure_daisy({
			output: {
				name: 'botania:livingrock'
			},
			input: {
				type: 'block', //object type, can be "block", "state", "blocks" or "tag"
				block: 'minecraft:smooth_stone'
			},
				time: 1200 // int, specifies the amount of ticks a blockspace has to receive to convert into the output state - optional
		})
		//Livisite
		event.recipes.botania.pure_daisy({
			output: {
				name: 'kubejs:living_andesite'
			},
			input: {
				type: 'block', //object type, can be "block", "state", "blocks" or "tag"
				block: 'minecraft:andesite'
			},
				time: 1200 // int, specifies the amount of ticks a blockspace has to receive to convert into the output state - optional
		})
//--------------------------------------------------------------------------------------------------\\	
//Create Recipes
	//Bonk (Press)		
		event.recipes.createPressing('kubejs:used_crude_compaction_testing_kit',['kubejs:crude_compaction_testing_kit'])
	//Deploying/RightClick
		////////TEMPORARY RECIPE\\\\\\\\\\\\\\
		event.shapeless('create:andesite_casing',['botania:stripped_livingwood_log', 'create:andesite_alloy'])
	//Assembly Line
			//Empty Lab Notebook
			//event.shapeless('kubejs:empty_lab_notebook', ['kubejs:ballpoint_pen', 'minecraft:writable_book'])
			//Create Assembly Line
			//Static-Test
			// event.recipes.createSequencedAssembly(
			// 	["minecraft :dirt"], //result items
			// 	[
			// 		event.recipes.createDeploying('kubejs:custom1' /*will output custom1*/, ['kubejs:custom1' /*will have custom1 as input*/, 'minecraft:gravel']), //the custom1 here is a transitional item, its data will change with the recipe and it will hold the assembly line process, that's why it's the input and output of all the recipes on the line
			// 		event.recipes.createCutting('kubejs:custom1', 'kubejs:custom1') //it's also the input and output here for the same reasons, this thing will actually create a bunch of recipes for individual machines and different data
			// 	]).transitionalItem('kubejs:custom1') //we tell it here that this is the transitional item
			// 
			// }) 
})
