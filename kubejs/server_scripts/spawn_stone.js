onEvent('block.break', event => {
	let player = event.getEntity();
	let block =  event.getBlock();
	
	if (player./*something empty hand*/) {
		if (block.id.startswith('minecraft:stone')) {
			let stone_flies = Math.floor(Math.random()*3+1);
			for (let i = 0; i < stone_flies; i++) {
				event.server.runCommand('/summon crittersandcompanions:dragonfly ${block.x} ${block.y} ${block.z}')
			}
		}
		block.getTags.forEach(t => {
			if (t.toString().equals("minecraft:log")) {
				event.server.runCommand('/summon crittersandcompanions:leaf_insect ${block.x} ${block.y} ${block.z}')
			}
		}
	}
})