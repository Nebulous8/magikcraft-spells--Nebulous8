const magik = magikcraft.io;

const inventory = require('inventory')
const items = require('items')

function main() {
    const myInventory = inventory(self)
    myInventory.add( items.bucket(64) )
    myInventory.add( items.diamondSword(1))
    myInventory.add( items.diamondPickaxe(1))

}