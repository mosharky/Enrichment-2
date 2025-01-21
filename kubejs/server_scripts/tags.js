/** @param {TagEvent.Item} e */
function itemTags(e) {
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
