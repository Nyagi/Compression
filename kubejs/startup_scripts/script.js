// priority: 0
/*
console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})
*/


//Items
	//Internal names for pack "science" progression
	let kits = [
		//electromagnetic
			'static',
			'magnetic',
			'conductive',
			'resistance',
		//destructive
			'compaction',
			'piercing',
			'high_velocity',
			'shockwave',
		//thermodynamic
			'hot',
			'cold',
			'insulation',
			'entropy',
		//gravitational
			'dark_matter',
			'dark_energy',
			'lensing',
			'negative_mass',
		//high_energy
			'laser',
			'fission',
			'fusion',
			'particle_accelerator',
		//low_energy
			'cryonics',
			'near_zero',
			'exotic_matter_states',
			'super_substances',
		//vacuum
			'nothing',
			'QCD',
			'virtual_particles',
			'vacuum_energy',
		//chrono
			'time_dilation',
			'causality',
		//spacetime
			'inflation',
			'wormholes',
			'CMB',
		//anomalous
			'causality_breaking',
			'entropy_violations',
			'singularities',
			'tachyons',
		//inflaton
			'the_outside',
			'pseudo_stable_inflaton_field',
			'hyper_dimensional_bridges',
			'infinite_feedback_loops',
			'reversing',
			'end',
	]
	//Internal names for data combining
//auto item builder
//testing kits
onEvent('item.registry', event => {
	kits.forEach(kit => {
			event.create('crude_' + kit + '_testing_kit')
			event.create('used_crude_' + kit + '_testing_kit')
			event.create('basic_' + kit + '_testing_kit')
			event.create('used_basic_' + kit + '_testing_kit')
			event.create('industrial_' + kit + '_testing_kit')
			event.create('used_industrial_' + kit + '_testing_kit')
			event.create('laboratory_' + kit + '_testing_kit')
			event.create('used_laboratory_' + kit + '_testing_kit')
			event.create('simulated_' + kit + '_testing_kit')
			event.create('used_simulated_' + kit + '_testing_kit')
	  })
	})
//Everything else to do with lab stuff
onEvent('item.registry', event => {
	//Internal names for data recording devices
		event.create('empty_lab_notebook')
		event.create('empty_encyclopedia')
		event.create('un-punched_cards')
		event.create('empty_flash_drive')
		event.create('empty_data_cell')
		event.create('un-etched_memory_cell')
		event.create('untunned_qbit_chip')
		event.create('empty_flake_encoder')
		event.create('un-enscribed_blackhole_holographic_cell')
	//Internal names for condensed knowledge
		event.create('small_pile_of_knowledge')
		event.create('empty_lab_notebook')
})
onEvent('item.registry', event => {
	event.create('sturdy_wooden_box')
	event.create('iron_piston_head')
	event.create('soil_sample')
})

//OreProcessing Chain Items
   let metalStages = [
	//create crushing
	'crushed',
	//bee
	'impregnated',
	//orechild
	'imbued',
	//pneumatic
	'etched',
	//mystic
	'enchanted',
	//immersive
	'stintered',
	//conjuration
	'replicated',
	//matter compressor + miniturization
	'compacted',
	//DML
	'simulated',
	//alchemistry
	'atomized',
	//mek-nuc
	'fissile',
	//ae-singularity
	'schwarzschild',
	//botania-runic
	'rune-etched',
	//alch-fusion
	'star-forged',
	//bota+antimatter+ton of other shit to add later
	'infinite'

   ]
   let metals = [
	'iron',
	'copper',
	'gold',
	'tin',
	'lead',
	'silver',
	'nickle',
	'zinc',
	'uranium',
	'osmium'
   ]
onEvent('item.registry', event => {
	metalStages.forEach(stage => {
		metals.forEach(material => {
		  event.create(stage + '_' + material)
		})
	  })
	})

//Blocks
  //Flake
  onEvent('block.registry', event => {
	event.create('flake')
		   .material('metal')
		 .hardness(3000)
		 .resistance(8000)
		 .displayName('Flake')
		 .tagBlock('minecraft:mineable/pickaxe')
		 .requiresTool(true)
		 .harvestTool('pickaxe', 10) 
  })
  //CrackedFlake
  onEvent('block.registry', event => {
	event.create('flake_cracked')
		 .material('metal')
	   .hardness(500)
	   .resistance(800)
	   .displayName('Cracked Flake')
	   .tagBlock('minecraft:mineable/pickaxe')
	   .requiresTool(true)
	   .harvestTool('pickaxe', 10) 
  })
  //Living Andesite
  onEvent('block.registry', event => {
	event.create('living_andesite')
		 .material('stone')
	   .hardness(1.5)
	   .resistance(6)
	   .displayName('Livisite')
	   .tagBlock('minecraft:mineable/pickaxe')
	   .requiresTool(true)
	   .harvestTool('pickaxe', 1) 
  })