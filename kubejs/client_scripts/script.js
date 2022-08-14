// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')

onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	// event.hide('minecraft:cobblestone')
})

onEvent('item.tooltip', tooltip => {
	tooltip.add(['botania:pebble'], 'I can hear some scuttling within blocks of stone, I have to be a tad cautious to not break it with a tool')
})