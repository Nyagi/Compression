onEvent('block.break', event => {
	let player = event.getEntity();
	let block = event.getBlock();
	
	if (player.getMainHandItem().isEmpty()) {
		if (block.id.startsWith('minecraft:stone')) {
			let stone_flies = Math.floor(Math.random()*3+1);
			for (let i = 0; i < stone_flies; i++) {
				event.server.runCommandSilent('/summon crittersandcompanions:dragonfly '+block.x+' '+block.y+' '+block.z+'')
			}
		}
		let tags = block.getTags()
		tags.forEach(t => {
			if (t.toString().equals("minecraft:logs")) {
				event.server.runCommandSilent('/summon crittersandcompanions:leaf_insect '+block.x+' '+block.y+' '+block.z+'')
				event.server.runCommandSilent('/setblock '+block.x+' '+block.y+' '+block.z+' air')
				event.cancel();
			}
		})
	}
})