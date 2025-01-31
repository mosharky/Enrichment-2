/** @param {TagEvent.Item} e */
function itemTags(e) {
    let tier1Sets = [
        'minecraft:leather',
        'immersive_armors:bone',
        'immersive_armors:wooden',
        'plentyofarmors:cactus',
        'plentyofarmors:crimson',
        'plentyofarmors:warped',
        'plentyofarmors:bamboo',
        'plentyofarmors:cherry',
        'plentyofarmors:mangrove',
        'plentyofarmors:dark_oak',
        'plentyofarmors:jungle',
        'plentyofarmors:birch',
        'plentyofarmors:spruce',
        'plentyofarmors:acacia',
        'plentyofarmors:oak',
        'plentyofarmors:slime',
        'dimdoors:world_thread',
        'dimdoors:garment_of_reality',
        'iceandfire:armor_copper_metal',
        'iceandfire:sheep'
    ].forEach(set => {
        global.armorTypes.forEach(armorType => {
            e.add(`enrichment2:tier_1_${armorType}`, `${set}_${armorType}`)
        })
    })
    e.add(`enrichment2:tier_1_helmet`, `vanityslots:familiar_wig`)
    e.add(`enrichment2:tier_1_helmet`, `snowdownessentials:leather_hat`)
    e.add(`enrichment2:tier_1_chestplate`, `vanityslots:familiar_shirt`)
    e.add(`enrichment2:tier_1_chestplate`, `snowdownessentials:leather_chest_belt`)
    e.add(`enrichment2:tier_1_leggings`, `vanityslots:familiar_pants`)
    e.add(`enrichment2:tier_1_leggings`, `snowdownessentials:leather_belt`)
    e.add(`enrichment2:tier_1_boots`, `vanityslots:familiar_sneakers`)
    e.add(`enrichment2:tier_1_boots`, `snowdownessentials:leather_boots`)
    e.remove('c:iron_ingots', ['betterend:thallasium_ingot', 'betternether:cincinnasite_ingot'])
}


/** @param {TagEvent.Item} e */
function fullRemovalTags(e) {
    // process regex because removeAllTagsFrom() doesn't accept regex
    let newArr = []
    global.fullRemovals.forEach(removal => {
        if (removal instanceof RegExp) newArr = newArr.concat(Ingredient.of(removal).itemIds)
        else newArr.push(removal)
    })

    newArr.forEach(removal => {
        e.removeAllTagsFrom(removal)
    })
}


/** @param {TagEvent.Block} e */
function blockTags(e) {
    e.add('spelunkery:salt_blocks', /galosphere:.*pink_salt.*/)
}