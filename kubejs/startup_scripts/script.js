/* > This is the master .js file for all blocks & items in the pack.
||   Items & Blocks are seperated, Laboratory type items are auto generated using .forEach, and thus you wont see
||   them all listed individually, that is only visible in REI using @KubeJS
||   -Nyagi
||   
||   Collaborators: Nyagi, Tralomine, Lylythii
||*/

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
//Random Progression Items
onEvent('item.registry', event => {
	event.create('spongy_iron')
	event.create('coked_brick')
	event.create('livisite_brick')
	event.create('brick_binder_composit')
})
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
			'qcd',
			'virtual_particles',
			'vacuum_energy',
		//chrono
			'time_dilation',
			'causality',
		//spacetime
			'inflation',
			'wormholes',
			'cmb',
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
			'end'
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
//Internal names for data recording devices
let emptylabRecording = [
	'lab_notebook', 
	'encyclopedia',
	'flash_drive',
	'data_cell',
	'flake_encoder'
]
let unLabRecording = [
	'punched_cards', 
	'etched_memory_cell',
	'tunned_qbit_chip',
	'enscribed_blackhole_holographic_cell'
]
//Everything else to do with lab stuff
onEvent('item.registry', function(event) {
	for(let i = 0; i < unLabRecording.length; i++) {
		event.create('un'+ unLabRecording[i]);
		for(let j = 0; j < kits.length; j++) {
			event.create(unLabRecording[i] + '_with_' + kits[j] + '_data');
		};
	};
});
//Item sub components
onEvent('item.registry', event => {
	event.create('sturdy_wooden_box')
	event.create('iron_piston_head')
	event.create('soil_sample')
	event.create('bucket_with_salt_and_electrodes')
	event.create('torn_off_wool_chunk')
	event.create('slightly_unstable_mix_bag')
	event.create('ae2_schematic').unstackable().maxDamage(64)
	event.create('ballpoint_pen')
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
onEvent('block.registry', event => {
	//Flake
	event.create('flake')
			 .material('metal')
			 .hardness(3000)
			 .resistance(8000)
			 .tagBlock('minecraft:mineable/pickaxe')
			 .renderType('cutout')
  //CrackedFlake
	event.create('flake_cracked')
			 .material('metal')
		   .hardness(500)
		   .resistance(800)
		   .displayName('Cracked Flake')
		   .tagBlock('minecraft:mineable/pickaxe')
  //Living Andesite
	event.create('living_andesite')
			 .material('stone')
		   .hardness(1.5)
		   .resistance(6)
		   .displayName('Livisite')
		   .tagBlock('minecraft:mineable/pickaxe')
  //Coked Living Rock
    event.create('coked_livingrock')
  			.material('stone')
			.hardness(2.5)
			.resistance(6)
			.displayName('Coked Livingrock')
			.tagBlock('minecraft:mineable/pickaxe')
})