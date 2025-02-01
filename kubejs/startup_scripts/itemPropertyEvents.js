ItemEvents.modification(event => {
    event.modify('endermanoverhaul:corrupted_blade', item => {
        let attribute = item.getAttributes("generic.attack_speed").get(0)
        item.removeAttribute("generic.attack_speed", attribute.id)
        item.addAttribute("generic.attack_speed", attribute.id, attribute.name, -2.8, attribute.operation)
    })

    event.modify('endermanoverhaul:corrupted_shield', item => {
        item.maxDamage *= 0.75
    })
})