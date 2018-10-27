const magik = magikcraft.io;

const inventory = require('inventory')
const items = require('items')

function main() {
    const myInventory = inventory(self)
    myInventory.add( items.diamondSword(1) )
    .add( items.goldenApple(54))
}