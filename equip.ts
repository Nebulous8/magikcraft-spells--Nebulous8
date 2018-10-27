const magik = magikcraft.io;

const inventory = require('inventory')
const items = require('items')

function main() {
    const myInventory = inventory(self)
    myInventory.add( items.diamondSword(1) )
    .add( items.diamondHelmet(1))
    .add( items.diamondBoots(1))
    .add( items.goldenLeggings(1))
    .add( items.diamondPickaxe(1))
    .add( items.bedrock(64))
    .add( items.goldenApple(64))
}