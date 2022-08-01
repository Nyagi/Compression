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
            id: 'apothecary_test',
            output: 'botania:pure_daisy',
            ingredients: ['botania:white_petal','botania:white_petal','botania:white_petal','botania:white_petal', 'botania:livingwood_twig']
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
  })

