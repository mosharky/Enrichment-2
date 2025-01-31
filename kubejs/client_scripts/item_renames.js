function uppercaseFirst (word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

ClientEvents.lang("en_us", e => {
    global.armorTypes.forEach(armorType => {
        e.renameItem(`knightquest:bamboo_${armorType}`, `Red Bamboo ${uppercaseFirst(armorType)}`)
        e.renameItem(`knightquest:phantom_${armorType}`, `Night Shade ${uppercaseFirst(armorType)}`)
        e.renameItem(`knightquest:silver_${armorType}`, `Tribal Silverbird ${uppercaseFirst(armorType)}`)
        e.renameItem(`knightquest:wither_${armorType}`, `Executioner ${uppercaseFirst(armorType)}`)
        e.renameItem(`knightquest:chainmail_${armorType}2`, `Shackled ${uppercaseFirst(armorType)}`)
        e.renameItem(`immersive_armors:slime_${armorType}`, `Slimier ${uppercaseFirst(armorType)}`)
        e.renameItem(`plentyofarmors:copper_${armorType}`, `Refined Copper ${uppercaseFirst(armorType)}`)
        e.renameItem(`phantom_armor:phantom_armor_${armorType}`, `Phantom Leather ${uppercaseFirst(armorType)}`)
    })
})