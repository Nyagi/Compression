onEvent('block.break', event => {
	let player = event.getEntity();
	let block = event.getBlock();
	
	if (player.getMainHandItem().isEmpty()) {
		event.server.runCommand('/tellraw @a {"text":"'+block.id+'", "color":"blue"}')
		if (block.id.startsWith('minecraft:stone')) {
			let stone_flies = Math.floor(Math.random()*3+1);
			for (let i = 0; i < stone_flies; i++) {
				event.server.runCommand('/summon crittersandcompanions:dragonfly '+block.x+' '+block.y+' '+block.z+'')
			}
		}
		let tags = block.getTags()
		tags.forEach(t => {
			event.server.runCommand('/tellraw @a {"text":"tag: '+t+'", "color":"green"}')
			if (t.toString().equals("minecraft:logs")) {
				event.server.runCommand('/summon crittersandcompanions:leaf_insect '+block.x+' '+block.y+' '+block.z+'')
				event.server.runCommand('/setblock '+block.x+' '+block.y+' '+block.z+' air')
				event.cancel();
			}
		})
	}
})