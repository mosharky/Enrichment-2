ItemEvents.modification(event => {
    event.modify('endermanoverhaul:corrupted_blade', item => {
        let attribute = item.getAttributes("generic.attack_speed").get(0)
        item.removeAttribute("generic.attack_speed", attribute.id)
        item.addAttribute("generic.attack_speed", attribute.id, attribute.name, -2.8, attribute.operation)
    })

    event.modify('endermanoverhaul:corrupted_shield', item => {
        item.maxDamage *= 0.75
    })

    const newPearls = [
        'endermanoverhaul:corrupted_pearl',
        'endermanoverhaul:soul_pearl',
        'endermanoverhaul:ancient_pearl',
        'endermanoverhaul:bubble_pearl',
        'endermanoverhaul:summoner_pearl',
        'endermanoverhaul:icy_pearl',
        'endermanoverhaul:crimson_pearl',
        'endermanoverhaul:warped_pearl'
    ].forEach(pearl => {
        event.modify(pearl, item => {
            item.maxStackSize = 1
        }) 
    })

    const evilArrows = [
        'xtraarrows:flint_ender_arrow',
        'xtraarrows:iron_ender_arrow',
        'xtraarrows:golden_ender_arrow',
        'xtraarrows:diamond_ender_arrow',
        'xtraarrows:netherite_ender_arrow',
        'xtraarrows:flint_vexing_arrow',
        'xtraarrows:iron_vexing_arrow',
        'xtraarrows:golden_vexing_arrow',
        'xtraarrows:diamond_vexing_arrow',
        'xtraarrows:netherite_vexing_arrow',
    ].forEach(arrow => {
        event.modify(arrow, item => {
            item.maxStackSize = 48
        }) 
    })

    const oneStackItems = [
        'minecraft:enchanted_golden_apple',
        'diamond_apples:enchanted_diamond_apple',
        'immersive_weathering:enchanted_golden_moss_clump',
        'xtraarrows:notch_apple_arrow',
        'minecraft:beacon',
        'minecraft:heart_of_the_sea',
        'minecraft:conduit',
        'minecraft:heartstone',
        'guardianexpansion:prismarine_converter',
        'amethyst_imbuement:golden_heart',
        'amethyst_imbuement:spellcasters_focus',
        'amethyst_imbuement:crystalline_heart',
        'amethyst_imbuement:crystalline_core'
    ].forEach(thing => {
        event.modify(thing, item => {
            item.maxStackSize = 1
        }) 
    })
})