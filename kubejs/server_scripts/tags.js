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
    let tier3Sets = [
        'minecraft:iron',
        'betternether:cincinnasite',
        'betternether:nether_ruby',
        'betterend:terminite',
        'botania:manasteel',
        'immersive_armors:warrior',
        'immersive_armors:slime',
        'immersive_armors:divine',
        'legacies_and_legends:dungeon',
        'legacies_and_legends:fortress',
        'phantom_armor:phantom_armor',
        'plentyofarmors:phantom',
        'plentyofarmors:crying_obsidian',
        'plentyofarmors:obsidian',
        'plentyofarmors:hardened_ice',
        'plentyofarmors:reinforced_iron',
        'plentyofarmors:emerald',
        'twilightforest:naga',
        'plentyofarmors:ironwood',
    ].forEach(set => {
        global.armorTypes.forEach(armorType => {
            e.add(`enrichment2:tier_3_${armorType}`, `${set}_${armorType}`)
        })
    })
    let tier4Sets = [
        'minecraft:diamond',
        'betternether:flaming_ruby',
        'immersive_armors:steampunk',
        'immersive_armors:heavy',
        'aquamirae:terrible',
        'mutantmonsters:mutant_skeleton',
        'botania:elementium',
        'malum:soul_stained_steel',
        'iceandfire:armor_red',
        'iceandfire:armor_bronze',
        'iceandfire:armor_green',
        'iceandfire:armor_gray',
        'iceandfire:armor_blue',
        'iceandfire:armor_white',
        'iceandfire:armor_sapphire',
        'iceandfire:armor_silver',
        'iceandfire:armor_electric',
        'iceandfire:armor_amethyst',
        'iceandfire:armor_copper',
        'iceandfire:armor_black',
        'twilightforest:arctic',
        'twilightforest:yeti',
    ].forEach(set => {
        global.armorTypes.forEach(armorType => {
            e.add(`enrichment2:tier_4_${armorType}`, `${set}_${armorType}`)
        })
    })
    // helmets
    e.add(`enrichment2:tier_1_helmet`, `vanityslots:familiar_wig`)
    e.add(`enrichment2:tier_1_helmet`, `snowdownessentails:leather_hat`)

    e.add(`enrichment2:tier_2_helmet`, `snowdownessentails:iron_hat`)
    e.add(`enrichment2:tier_2_helmet`, `snowdownessentails:gold_hat`)
    
    e.add(`enrichment2:tier_3_helmet`, `ad_astra:space_helmet`)
    e.add(`enrichment2:tier_3_helmet`, `armoroftheages:japanese_light_armor_head`)
    
    e.add(`enrichment2:tier_4_helmet`, `armoroftheages:quetzalcoatl_armor_head`)
    e.add(`enrichment2:tier_4_helmet`, `armoroftheages:centurion_armor_head`)
    e.add(`enrichment2:tier_4_helmet`, `armoroftheages:o_yoroi_armor_head`)

    // chestplates
    e.add(`enrichment2:tier_1_chestplate`, `vanityslots:familiar_shirt`)
    e.add(`enrichment2:tier_1_chestplate`, `snowdownessentails:leather_chest_belt`)

    e.add(`enrichment2:tier_2_chestplate`, `create:copper_backtank`)
    e.add(`enrichment2:tier_2_chestplate`, `endermanoverhaul:badlands_hood`)
    e.add(`enrichment2:tier_2_chestplate`, `endermanoverhaul:savanna_hood`)
    e.add(`enrichment2:tier_2_chestplate`, `endermanoverhaul:snowy_hood`)
    e.add(`enrichment2:tier_2_chestplate`, `malum:soul_hunter_robe`)
    e.add(`enrichment2:tier_2_chestplate`, `snowdownessentails:iron_chest_belt`)
    e.add(`enrichment2:tier_2_chestplate`, `snowdownessentails:gold_chest_belt`)
    
    e.add(`enrichment2:tier_3_chestplate`, `ad_astra:space_suit`)
    e.add(`enrichment2:tier_3_chestplate`, `armoroftheages:japanese_light_armor_chest`)
    
    e.add(`enrichment2:tier_4_chestplate`, `armoroftheages:quetzalcoatl_armor_chest`)
    e.add(`enrichment2:tier_4_chestplate`, `armoroftheages:centurion_armor_chest`)
    e.add(`enrichment2:tier_4_chestplate`, `armoroftheages:o_yoroi_armor_chest`)

    // leggings
    e.add(`enrichment2:tier_1_leggings`, `vanityslots:familiar_pants`)
    e.add(`enrichment2:tier_1_leggings`, `snowdownessentails:leather_belt`)

    e.add(`enrichment2:tier_2_leggings`, `snowdownessentails:iron_belt`)
    e.add(`enrichment2:tier_2_leggings`, `snowdownessentails:gold_belt`)

    e.add(`enrichment2:tier_3_leggings`, `ad_astra:space_pants`)
    e.add(`enrichment2:tier_3_leggings`, `armoroftheages:japanese_light_armor_legs`)

    e.add(`enrichment2:tier_4_leggings`, `armoroftheages:quetzalcoatl_armor_legs`)
    e.add(`enrichment2:tier_4_leggings`, `armoroftheages:centurion_armor_legs`)
    e.add(`enrichment2:tier_4_leggings`, `armoroftheages:o_yoroi_armor_legs`)

    // boots
    e.add(`enrichment2:tier_1_boots`, `vanityslots:familiar_sneakers`)
    e.add(`enrichment2:tier_1_boots`, `snowdownessentails:leather_boots`)

    e.add(`enrichment2:tier_2_boots`, `snowdownessentails:iron_boots`)
    e.add(`enrichment2:tier_2_boots`, `snowdownessentails:gold_boots`)
    
    e.add(`enrichment2:tier_3_boots`, `ad_astra:space_boots`)
    e.add(`enrichment2:tier_3_boots`, `armoroftheages:japanese_light_armor_feet`)

    e.add(`enrichment2:tier_4_boots`, `armoroftheages:quetzalcoatl_armor_feet`)
    e.add(`enrichment2:tier_4_boots`, `armoroftheages:centurion_armor_feet`)
    e.add(`enrichment2:tier_4_boots`, `armoroftheages:o_yoroi_armor_feet`)

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