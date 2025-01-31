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
        'iceandfire:sheep',
        'majruszsdifficulty:tattered'
    ].forEach(set => {
        global.armorTypes.forEach(armorType => {
            e.add(`enrichment2:tier_1_${armorType}`, `${set}_${armorType}`)
        })
    })
    let tier2Sets = [
        'minecraft:chainmail',
        'minecraft:golden',
        'immersive_armors:robe',
        'immersive_armors:wither',
        'immersive_armors:warrior',
        'immersive_armors:slime',
        'botania:manaweave',
        'galosphere:sterling',
        'iceandfire:armor_silver_metal',
        'iceandfire:deathworm_yellow',
        'iceandfire:deathworm_white',
        'iceandfire:deathworm_red',
        'iceandfire:myrmex_desert',
        'iceandfire:myrmex_jungle',
        'iceandfire:forest_troll_leather',
        'iceandfire:frost_troll_leather',
        'iceandfire:mountain_troll_leather',
        'plentyofarmors:brick',
        'plentyofarmors:nether_brick',
        'plentyofarmors:quartz',
        'plentyofarmors:lapis',
        'plentyofarmors:redstone',
        'plentyofarmors:copper',
        'betterend:thallasium',
    ].forEach(set => {
        global.armorTypes.forEach(armorType => {
            e.add(`enrichment2:tier_2_${armorType}`, `${set}_${armorType}`)
        })
    })
    e.add(`enrichment2:tier_1_helmet`, `vanityslots:familiar_wig`)
    e.add(`enrichment2:tier_1_helmet`, `snowdownessentails:leather_hat`)
    e.add(`enrichment2:tier_2_helmet`, `snowdownessentails:iron_hat`)
    e.add(`enrichment2:tier_2_helmet`, `snowdownessentails:gold_hat`)
    e.add(`enrichment2:tier_1_chestplate`, `vanityslots:familiar_shirt`)
    e.add(`enrichment2:tier_1_chestplate`, `snowdownessentails:leather_chest_belt`)
    e.add(`enrichment2:tier_2_chestplate`, `create:copper_backtank`)
    e.add(`enrichment2:tier_2_chestplate`, `endermanoverhaul:badlands_hood`)
    e.add(`enrichment2:tier_2_chestplate`, `endermanoverhaul:savanna_hood`)
    e.add(`enrichment2:tier_2_chestplate`, `endermanoverhaul:snowy_hood`)
    e.add(`enrichment2:tier_2_chestplate`, `malum:soul_hunter_robe`)
    e.add(`enrichment2:tier_2_chestplate`, `snowdownessentails:iron_chest_belt`)
    e.add(`enrichment2:tier_2_chestplate`, `snowdownessentails:gold_chest_belt`)
    e.add(`enrichment2:tier_1_leggings`, `vanityslots:familiar_pants`)
    e.add(`enrichment2:tier_1_leggings`, `snowdownessentails:leather_belt`)
    e.add(`enrichment2:tier_2_leggings`, `snowdownessentails:iron_belt`)
    e.add(`enrichment2:tier_2_leggings`, `snowdownessentails:gold_belt`)
    e.add(`enrichment2:tier_1_boots`, `vanityslots:familiar_sneakers`)
    e.add(`enrichment2:tier_1_boots`, `snowdownessentails:leather_boots`)
    e.add(`enrichment2:tier_2_boots`, `snowdownessentails:iron_boots`)
    e.add(`enrichment2:tier_2_boots`, `snowdownessentails:gold_boots`)
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