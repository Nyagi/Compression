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
	//Internal catagorization for pack "science" progression
	let kits = [
		//electromagnetic
			'static',
			'magnetic',
			'conductive',
			'resistance',
		//destructive
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
//auto item builder
onEvent('item.registry', event => {
	kits.forEach(kit => {
		event.create(kit + '_testing_kit')
		event.create('used_' + kit + '_testing_kit')
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

//Blocks
  onEvent('block.registry', event => {
	//Flake
	event.create('flake')
		   .material('metal')
		 .hardness(3000)
		 .resistance(8000)
		 .displayName('Flake')
		 .tagBlock('minecraft:mineable/pickaxe')
		 .requiresTool(true)
		 .harvestTool('pickaxe', 10) 
	//Cracked Flake
	event.create('flake_cracked')
		 .material('metal')
	   .hardness(500)
	   .resistance(800)
	   .displayName('Cracked Flake')
	   .tagBlock('minecraft:mineable/pickaxe')
	   .requiresTool(true)
	   .harvestTool('pickaxe', 10) 
  })