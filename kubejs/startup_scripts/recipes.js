onEvent('recipes', event => {
    //Petal Apothecary Item
    event.remove({output: 'botania:apothecary_default'})
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
    //Remove LivingWood Tools
    event.remove({output: 
        [Item.of('aiotbotania:livingwood_shears', '{Damage:0}'), Item.of('aiotbotania:livingwood_sword', '{Damage:0}'), Item.of('aiotbotania:livingwood_axe', '{Damage:0}'), Item.of('aiotbotania:livingwood_pickaxe', '{Damage:0}'), Item.of('aiotbotania:livingwood_shovel', '{Damage:0}'), Item.of('aiotbotania:livingwood_hoe', '{Damage:0}'), Item.of('aiotbotania:livingwood_aiot', '{Damage:0}')]})
    //Remove Wood/Stone Tools
    event.remove({output: 
        [Item.of('minecraft:wooden_sword', '{Damage:0}'), Item.of('minecraft:wooden_shovel', '{Damage:0}'), Item.of('minecraft:wooden_pickaxe', '{Damage:0}'), Item.of('minecraft:wooden_axe', '{Damage:0}'), Item.of('minecraft:wooden_hoe', '{Damage:0}'), Item.of('minecraft:stone_sword', '{Damage:0}'), Item.of('minecraft:stone_shovel', '{Damage:0}'), Item.of('minecraft:stone_pickaxe', '{Damage:0}'), Item.of('minecraft:stone_axe', '{Damage:0}'), Item.of('minecraft:stone_hoe', '{Damage:0}')]})
    //Petal Apothecary Recipes
        //PureDaisy
        event.remove({output: 'botania:pure_daisy'})
        event.recipes.botania.petal_apothecary({
            output: 'botania:pure_daisy',
            ingredients: ['botania:white_petal','botania:white_petal','botania:white_petal','botania:white_petal', 'botania:livingwood_twig']
        })
        //Rannuncarpus
        event.remove({output: 'botania:rannuncarpus'})
        event.recipes.botania.petal_apothecary({
            output: 'botania:rannuncarpus',
            ingredients: ['botania:orange_petal','botania:orange_petal','botania:yellow_petal','botania:redstone_root', 'botania:livingwood_twig','create:deployer','botania:rune_earth']
        })
    //PureDaisy Recipes
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
    //Andesite Alloy
    event.remove({output: 'create:andesite_alloy'})
    event.shaped('create:andesite_alloy', [
      'AB',
      'BA'
    ], {
      A: 'kubejs:living_andesite',
      B: 'minecraft:iron_nugget'
    })
    //Shaft
    event.remove({output: 'create:shaft'})
    event.shaped('4x create:shaft', [
      'A  ',
      ' A ',
      '  A'
    ], {
      A: 'create:andesite_alloy'
    })
    //Small Cog
    event.remove({output: 'create:cogwheel'})
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
    event.remove({output: 'create:large_cogwheel'})
    event.shaped('create:large_cogwheel', [
      ' A ',
      'BCB',
      ' A '
    ], {
      A: 'create:shaft',
      B: 'botania:framed_livingwood',
      C: 'create:cogwheel'
    })
    //Create Press
    event.remove({output: 'create:mechanical_press'})
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
    event.remove({output: 'create:water_wheel'})
    event.shaped('create:water_wheel', [
      ' CA',
      'CBC',
      'AC '
    ], {
      A: 'create:large_cogwheel',
      B: 'create:shaft',
      C: 'botania:livingwood_planks_stairs'
    })
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
    //Soil Sample
    event.shapeless('kubejs:soil_sample', ['minecraft:dirt','minecraft:clay_ball', 'minecraft:sand', 'minecraft:gravel'])
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
      //Torn off chunk of wool
      event.shapeless('8x kubejs:torn_off_wool_chunk', ['#minecraft:wool'])
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
    //Create Crafting
      //Bonk (Press)
      event.recipes.createPressing('kubejs:used_crude_compaction_testing_kit',['kubejs:crude_compaction_testing_kit'])
    //Furnace Crafting
      event.smelting('kubejs:used_crude_entropy_testing_kit', 'kubejs:crude_entropy_testing_kit')
    //Create Assembly Line
      //Static-Test
      event.recipes.createSequencedAssembly(
        ["minecraft :dirt"], //result items
        [
          event.recipes.deploying('kubejs:custom1' /*will output custom1*/, ['kubejs:custom1' /*will have custom1 as input*/, 'minecraft:gravel']), //the custom1 here is a transitional item, its data will change with the recipe and it will hold the assembly line process, that's why it's the input and output of all the recipes on the line
          event.recipes.createCutting('kubejs:custom1', 'kubejs:custom1') //it's also the input and output here for the same reasons, this thing will actually create a bunch of recipes for individual machines and different data
        ]).transitionalItem('kubejs:custom1') //we tell it here that this is the transitional item
  
}) 


