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
        'enva:titanium'
    ].forEach(set => {
        global.armorTypes.forEach(armorType => {
            e.add(`enrichment2:tier_3_${armorType}`, `${set}_${armorType}`)
        })
    })
    let tier4Sets = [
        'minecraft:diamond',
        'dungeonnowloading:spawner_chestplate',
        'immersive_armors:steampunk',
        'immersive_armors:heavy',
        'immersive_armors:prismarine',
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
        'twilightforest:steeleaf',
        'twilightforest:knightmetal',
        'legacies_and_legends:ward',
        'malum:malignant_stronghold',
        'oreganized:electrum',
        'plentyofarmors:frozen_diamond',
        'plentyofarmors:echo',
        'plentyofarmors:amethyst',
        'plentyofarmors:ender'
    ].forEach(set => {
        global.armorTypes.forEach(armorType => {
            e.add(`enrichment2:tier_4_${armorType}`, `${set}_${armorType}`)
        })
    })
    let tier5Sets = [
        'minecraft:netherite',
        'betternether:flaming_ruby',
        'iceandfire:tide_blue',
        'iceandfire:tide_bronze',
        'iceandfire:tide_deepblue',
        'iceandfire:tide_green',
        'iceandfire:tide_purple',
        'iceandfire:tide_red',
        'iceandfire:tide_teal',
        'twilightforest:phantom',
        'knightquest:apple',
        'knightquest:bamboo',
        'knightquest:blaze',
        'knightquest:bow',
        'knightquest:creeper',
        'knightquest:deepslate',
        'knightquest:evoker',
        'knightquest:path',
        'knightquest:silver',
        'knightquest:skeleton',
        'knightquest:spider',
        'knightquest:strawhat',
        'knightquest:zombie',
        'knightquest:witch',
        'knightquest:polar',
        'knightquest:shinobi',
        'fantasy_armor:eclipse_soldier',
        'fantasy_armor:dragonslayer',
        'fantasy_armor:hero',
        'fantasy_armor:golden_horns',
        'fantasy_armor:thief',
        'fantasy_armor:wandering_wizard',
        'fantasy_armor:chess_board_knight',
        'fantasy_armor:dark_lord',
        'fantasy_armor:sunset_wings',
        'fantasy_armor:fog_guard',
        'fantasy_armor:dark_cover',
        'fantasy_armor:spark_of_dawn',
        'fantasy_armor:golden_execution',
        'fantasy_armor:forgotten_trace',
        'fantasy_armor:redeemer',
        'fantasy_armor:twinned',
        'fantasy_armor:gilded',
        'fantasy_armor:lady_maria',
        'fantasy_armor:crucible_knight',
        'fantasy_armor:evening_ghost',
        'fantasy_armor:ronin',
    ].forEach(set => {
        global.armorTypes.forEach(armorType => {
            e.add(`enrichment2:tier_5_${armorType}`, `${set}_${armorType}`)
        })
    })
    let tier6Sets = [
        'betterend:crystalite',
        'betterend:aeternium',
        'botania:terrasteel',
        'mythicupgrades:aquamarine',
        'mythicupgrades:sapphire',
        'mythicupgrades:jade',
        'mythicupgrades:peridot',
        'mythicupgrades:topaz',
        'mythicupgrades:ruby',
        'mythicupgrades:ametrine',
        'plentyofarmors:ender_netherite',
        'plentyofarmors:marine_diamond',
        'twilightforest:fiery',
        'knightquest:bamboo_blue',
        'knightquest:bamboo_green',
        'knightquest:bat',
        'knightquest:horn',
        'knightquest:dragon',
        'knightquest:enderman',
        'knightquest:forze',
        'knightquest:hollow',
        'knightquest:nether',
        'knightquest:veteran',
        'knightquest:phantom',
        'knightquest:sea',
        'knightquest:shield',
        'knightquest:silverfish',
        'knightquest:warlord',
        'knightquest:pirate',
        'knightquest:conquistador',
        'knightquest:husk',
        'knightquest:wither',
        'knightquest:squire',
        'knightquest:skulk',
    ].forEach(set => {
        global.armorTypes.forEach(armorType => {
            e.add(`enrichment2:tier_6_${armorType}`, `${set}_${armorType}`)
        })
    })
    let tier7Sets = [
        'plentyofarmors:stardusite',
        'majruszsdifficulty:enderium'
    ].forEach(set => {
        global.armorTypes.forEach(armorType => {
            e.add(`enrichment2:tier_7_${armorType}`, `${set}_${armorType}`)
        })
    })
    let tier8Sets = [
        'iceandfire:dragonsteel_fire',
        'iceandfire:dragonsteel_ice',
        'iceandfire:dragonsteel_lightning',
    ].forEach(set => {
        global.armorTypes.forEach(armorType => {
            e.add(`enrichment2:tier_8_${armorType}`, `${set}_${armorType}`)
        })
    })

    // helmets
    e.add(`enrichment2:tier_1_helmet`, `vanityslots:familiar_wig`)
    e.add(`enrichment2:tier_1_helmet`, `snowdownessentails:leather_hat`)
    e.add(`enrichment2:tier_1_helmet`, `enva:glasses`)
    e.add(`enrichment2:tier_1_helmet`, `iceandfire:blindfold`)
    e.add(`enrichment2:tier_1_helmet`, `iceandfire:earplugs`)
    e.add(`enrichment2:tier_1_helmet`, `overweight_farming:straw_hat`)

    e.add(`enrichment2:tier_2_helmet`, `snowdownessentails:iron_hat`)
    e.add(`enrichment2:tier_2_helmet`, `snowdownessentails:gold_hat`)
    e.add(`enrichment2:tier_2_helmet`, `enva:glass_helmet`)
    e.add(`enrichment2:tier_2_helmet`, `malum:soul_hunter_cloak`)
    e.add(`enrichment2:tier_2_helmet`, `mininghelmet:mining_helmet`)
    e.add(`enrichment2:tier_2_helmet`, `create:copper_diving_helmet`)
    
    e.add(`enrichment2:tier_3_helmet`, `ad_astra:space_helmet`)
    e.add(`enrichment2:tier_3_helmet`, `armoroftheages:japanese_light_armor_head`)
    e.add(`enrichment2:tier_3_helmet`, `enva:titanium_coated_glass_helmet`)
    e.add(`enrichment2:tier_3_helmet`, `enva:titanium_coated_water_glass_bowl`)
    e.add(`enrichment2:tier_3_helmet`, `friendsandfoes:wildfire_crown`)
    e.add(`enrichment2:tier_3_helmet`, `knightquest:chainmail_helmet`)
    e.add(`enrichment2:tier_3_helmet`, `knightquest:chainmail_helmet2`)
    
    e.add(`enrichment2:tier_4_helmet`, `armoroftheages:quetzalcoatl_armor_head`)
    e.add(`enrichment2:tier_4_helmet`, `armoroftheages:centurion_armor_head`)
    e.add(`enrichment2:tier_4_helmet`, `armoroftheages:o_yoroi_armor_head`)
    e.add(`enrichment2:tier_4_helmet`, `armoroftheages:pharaoh_armor_head`)
    e.add(`enrichment2:tier_4_helmet`, `armoroftheages:iron_plate_armor_head`)
    e.add(`enrichment2:tier_4_helmet`, `snowdownessentails:diamond_hat`)

    e.add(`enrichment2:tier_5_helmet`, `armoroftheages:anubis_armor_head`)
    e.add(`enrichment2:tier_5_helmet`, `ad_astra:netherite_space_helmet`)
    e.add(`enrichment2:tier_5_helmet`, `snowdownessentails:netherite_hat`)
    e.add(`enrichment2:tier_5_helmet`, `create:netherite_diving_helmet`)
    e.add(`enrichment2:tier_5_helmet`, `knightquest:zombie_helmet2`)
    
    e.add(`enrichment2:tier_6_helmet`, `armoroftheages:raijin_armor_head`)
    e.add(`enrichment2:tier_6_helmet`, `aquamirae:abyssal_heaume`)
    e.add(`enrichment2:tier_6_helmet`, `aquamirae:abyssal_tiara`)
    e.add(`enrichment2:tier_6_helmet`, `knightquest:tengu_helmet`)
    e.add(`enrichment2:tier_6_helmet`, `knightquest:pirate2_helmet`)
    e.add(`enrichment2:tier_6_helmet`, `knightquest:pirate3_helmet`)
    e.add(`enrichment2:tier_6_helmet`, `knightquest:conquistador2_helmet`)
    e.add(`enrichment2:tier_6_helmet`, `knightquest:conquistador3_helmet`)
    e.add(`enrichment2:tier_6_helmet`, `knightquest:skulk2_helmet`)
    e.add(`enrichment2:tier_6_helmet`, `knightquest:skulk3_helmet`)
    e.add(`enrichment2:tier_6_helmet`, `knightquest:skulk4_helmet`)
    e.add(`enrichment2:tier_6_helmet`, `knightquest:husk_helmet2`)
    e.add(`enrichment2:tier_6_helmet`, `knightquest:husk_helmet3`)

    e.add(`enrichment2:tier_7_helmet`, `armoroftheages:holy_armor_head`)
    e.add(`enrichment2:tier_7_helmet`, `ad_astra:jet_suit_helmet`)
    e.add(`enrichment2:tier_7_helmet`, `aquamirae:three_bolt_helmet`)

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
    e.add(`enrichment2:tier_4_chestplate`, `armoroftheages:pharaoh_armor_chest`)
    e.add(`enrichment2:tier_4_chestplate`, `armoroftheages:iron_plate_armor_chest`)
    e.add(`enrichment2:tier_4_chestplate`, `snowdownessentails:diamond_chest_belt`)
    e.add(`enrichment2:tier_4_chestplate`, `aquamirae:three_bolt_suit`)

    e.add(`enrichment2:tier_5_chestplate`, `armoroftheages:anubis_armor_chest`)
    e.add(`enrichment2:tier_5_chestplate`, `ad_astra:netherite_space_suit`)
    e.add(`enrichment2:tier_5_chestplate`, `create:netherite_backtank`)
    e.add(`enrichment2:tier_5_chestplate`, `snowdownessentails:netherite_chest_belt`)
    
    e.add(`enrichment2:tier_6_chestplate`, `armoroftheages:raijin_armor_chest`)
    e.add(`enrichment2:tier_6_chestplate`, `aquamirae:abyssal_brigantine`)

    e.add(`enrichment2:tier_7_chestplate`, `armoroftheages:holy_armor_chest`)
    e.add(`enrichment2:tier_7_chestplate`, `ad_astra:jet_suit`)

    // leggings
    e.add(`enrichment2:tier_1_leggings`, `vanityslots:familiar_pants`)
    e.add(`enrichment2:tier_1_leggings`, `snowdownessentails:leather_belt`)

    e.add(`enrichment2:tier_2_leggings`, `snowdownessentails:iron_belt`)
    e.add(`enrichment2:tier_2_leggings`, `snowdownessentails:gold_belt`)
    e.add(`enrichment2:tier_2_leggings`, `malum:soul_hunter_leggings`)

    e.add(`enrichment2:tier_3_leggings`, `ad_astra:space_pants`)
    e.add(`enrichment2:tier_3_leggings`, `armoroftheages:japanese_light_armor_legs`)

    e.add(`enrichment2:tier_4_leggings`, `armoroftheages:quetzalcoatl_armor_legs`)
    e.add(`enrichment2:tier_4_leggings`, `armoroftheages:centurion_armor_legs`)
    e.add(`enrichment2:tier_4_leggings`, `armoroftheages:o_yoroi_armor_legs`)
    e.add(`enrichment2:tier_4_leggings`, `armoroftheages:pharaoh_armor_legs`)
    e.add(`enrichment2:tier_4_leggings`, `armoroftheages:iron_plate_armor_legs`)
    e.add(`enrichment2:tier_4_leggings`, `snowdownessentails:diamond_belt`)
    e.add(`enrichment2:tier_4_leggings`, `aquamirae:three_bolt_leggings`)

    e.add(`enrichment2:tier_5_leggings`, `armoroftheages:anubis_armor_legs`)
    e.add(`enrichment2:tier_5_leggings`, `ad_astra:netherite_space_pants`)
    e.add(`enrichment2:tier_5_leggings`, `snowdownessentails:netherite_belt`)
    
    e.add(`enrichment2:tier_6_leggings`, `armoroftheages:raijin_armor_legs`)
    e.add(`enrichment2:tier_6_leggings`, `aquamirae:abyssal_leggings`)

    e.add(`enrichment2:tier_7_leggings`, `armoroftheages:holy_armor_legs`)
    e.add(`enrichment2:tier_7_leggings`, `ad_astra:jet_suit_pants`)

    // boots
    e.add(`enrichment2:tier_1_boots`, `vanityslots:familiar_sneakers`)
    e.add(`enrichment2:tier_1_boots`, `snowdownessentails:leather_boots`)

    e.add(`enrichment2:tier_2_boots`, `snowdownessentails:iron_boots`)
    e.add(`enrichment2:tier_2_boots`, `snowdownessentails:gold_boots`)
    e.add(`enrichment2:tier_2_boots`, `create:copper_diving_boots`)
    e.add(`enrichment2:tier_2_boots`, `malum:soul_hunter_boots`)
    
    e.add(`enrichment2:tier_3_boots`, `ad_astra:space_boots`)
    e.add(`enrichment2:tier_3_boots`, `armoroftheages:japanese_light_armor_feet`)

    e.add(`enrichment2:tier_4_boots`, `armoroftheages:quetzalcoatl_armor_feet`)
    e.add(`enrichment2:tier_4_boots`, `armoroftheages:centurion_armor_feet`)
    e.add(`enrichment2:tier_4_boots`, `armoroftheages:o_yoroi_armor_feet`)
    e.add(`enrichment2:tier_4_boots`, `armoroftheages:pharaoh_armor_feet`)
    e.add(`enrichment2:tier_4_boots`, `armoroftheages:iron_plate_armor_feet`)
    e.add(`enrichment2:tier_4_boots`, `snowdownessentails:diamond_boots`)
    e.add(`enrichment2:tier_4_boots`, `aquamirae:three_bolt_boots`)

    e.add(`enrichment2:tier_5_boots`, `armoroftheages:anubis_armor_feet`)
    e.add(`enrichment2:tier_5_boots`, `ad_astra:netherite_space_boots`)
    e.add(`enrichment2:tier_5_boots`, `snowdownessentails:netherite_boots`)
    e.add(`enrichment2:tier_5_boots`, `create:netherite_diving_boots`)
    
    e.add(`enrichment2:tier_6_boots`, `armoroftheages:raijin_armor_feet`)
    e.add(`enrichment2:tier_6_boots`, `aquamirae:abyssal_boots`)

    e.add(`enrichment2:tier_7_boots`, `armoroftheages:holy_armor_feet`)
    e.add(`enrichment2:tier_7_boots`, `ad_astra:jet_suit_boots`)

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

    let newBeaconBaseBlocks = [
        "create:andesite_alloy_block",
        "betternether:cincinnasite_forged",
        "create:industrial_iron_block",
        "createaddition:electrum_block",
        "iceandfire:dragonsteel_fire_block",
        "iceandfire:dragonsteel_ice_block",
        "iceandfire:dragonsteel_lightning_block",
        "ae2:quartz_block",
        "galosphere:allurite_block",
        "galosphere:lumiere_block",
        "galosphere:pink_salt"
    ].forEach((item) => {
        e.add('minecraft:beacon_base_blocks', item)
    })
}
