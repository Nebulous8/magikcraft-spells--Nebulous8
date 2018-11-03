
const magik = magikcraft.io;

const inventory = require('inventory')
const items = require('items')

function main() {
    const myInventory = inventory(self)
    myInventory.add( items.diamondHelmet(1))
    myInventory.add( items.diamondChestplate(1))
    myInventory.add( items.diamondLeggings(1))
    myInventory.add( items.diamondBoots(1))
    myInventory.add( items.diamondSword(1))
    myInventory.add( items.diamondPickaxe(1))
    myInventory.add( items.diamondAxe(1))
    myInventory.add( items.diamondBlock(64))
    myInventory.add( items.bow(1))
    myInventory.add( items.arrow(64))

}
