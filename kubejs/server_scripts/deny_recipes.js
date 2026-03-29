// Remove recipes
ServerEvents.recipes(event => {
    event.remove({ output: 'explorerscompass:explorerscompass' });
    event.remove({ output: 'eeeabsmobs:demolisher' });
    event.remove({ output: 'fantasy_armor:moon_crystal' });
    event.remove({ output: 'twilightforest:glass_sword' });
    event.remove({ output: 'cataclysm:wither_assault_shoulder_weapon' });
    event.remove({ id: "twilightforest:uncrafting_table" })
    event.remove({ id: "aquamirae:terrible_sword" })
    event.remove({ id: "enigmaticlegacy:eldritch_pan" })
    event.remove({ id: "gobber2:dragon_star" })
    event.remove({ id: "enigmaticaddons:legacy/unwitnessed_amulet" })
    event.remove({ id: "bosses_of_mass_destruction:brimstone_nectar" })
    event.remove({ id: "irons_spellbooks:eldritch_manuscript" });
});
ServerEvents.genericLootTables(event => {
    // Add coinsje items to simple dungeon loot table
    event.modify('minecraft:chests/simple_dungeon', table => {
        table.addPool(pool => {
            pool.rolls = [1, 2]; // Number of rolls for loot
            // Common coins
            pool.addItem('coinsje:copper_coin', 10); // More common
            pool.addItem('coinsje:copper_coin_pile', 8);
            pool.addItem('coinsje:iron_coin', 6);
            pool.addItem('coinsje:iron_coin_pile', 5);

            // Rare coins
            pool.addItem('coinsje:gold_coin', 4); // Rarer
            pool.addItem('coinsje:gold_coin_pile', 4);
            pool.addItem('coinsje:diamond_coin', 4); // Rarest
            pool.addItem('coinsje:diamond_coin_pile', 4);
        });
    });

    // Add coinsje items to ancient city loot table
    event.modify('minecraft:chests/ancient_city', table => {
        table.addPool(pool => {
            pool.rolls = [1, 2]; // Number of rolls for loot
            // Common coins
            pool.addItem('coinsje:copper_coin', 8); // More common
            pool.addItem('coinsje:copper_coin_pile', 6);
            pool.addItem('coinsje:iron_coin', 5);
            pool.addItem('coinsje:iron_coin_pile', 4);

            // Rare coins
            pool.addItem('coinsje:gold_coin', 5); // Rarer in the ancient city
            pool.addItem('coinsje:gold_coin_pile', 5);
            pool.addItem('coinsje:diamond_coin', 4);
            pool.addItem('coinsje:diamond_coin_pile', 3);
        });
    });

    // Add coinsje items to village armorer loot table
    event.modify('minecraft:chests/village/village_armorer', table => {
        table.addPool(pool => {
            pool.rolls = [1, 2];
            pool.addItem('coinsje:copper_coin', 10);
            pool.addItem('coinsje:iron_coin', 5);
            pool.addItem('coinsje:gold_coin', 2);
        });
    });

    // Add coinsje items to village toolsmith loot table
    event.modify('minecraft:chests/village/village_toolsmith', table => {
        table.addPool(pool => {
            pool.rolls = [1, 2];
            pool.addItem('coinsje:copper_coin', 8);
            pool.addItem('coinsje:iron_coin', 6);
            pool.addItem('coinsje:gold_coin', 4);
        });
    });

    // Add coinsje items to village weaponsmith loot table
    event.modify('minecraft:chests/village/village_weaponsmith', table => {
        table.addPool(pool => {
            pool.rolls = [1, 2];
            pool.addItem('coinsje:copper_coin', 10);
            pool.addItem('coinsje:iron_coin', 6);
            pool.addItem('coinsje:gold_coin', 4);
        });
    });
});
ServerEvents.genericLootTables(event => {
    // Modify the loot table for the Dark Doppelganger
    event.modify('darkdoppelganger:entities/dark_doppelganger', table => {
        table.addPool(pool => {
            pool.rolls = [1]; 
            pool.addItem('coinsje:netherite_coin_pile', 1);
            pool.addItem('aquamirae:terrible_sword', 1)
            pool.addItem('coinsje:diamond_coin_pile', 3); // Rare drop
        });
    });
})
ServerEvents.genericLootTables(event => {
    event.modify('minecraft:entities/warden', table => {
        table.addPool(pool => {
            pool.rolls = [1];
            pool.addItem('irons_spellbooks:ancient_knowledge_fragment', 1);
        });
    });
});

EntityEvents.drops(event => {
    if (event.entity.type == 'sons_of_sins:wistiver') {
        event.drops.clear();
    }
});
EntityEvents.drops(event => {
    if (event.entity.type == 'sons_of_sins:blud') {
        event.drops.clear();
    }
});
ServerEvents.recipes(event => {
    event.shaped('bosses_of_mass_destruction:brimstone_nectar', [
        'ND ',
        'G  '
    ], {
        N: 'minecraft:netherite_scrap',
        D: 'minecraft:diamond',
        G: 'minecraft:ghast_tear'
    })
});
ServerEvents.recipes(event => {
    event.shaped('gobber2:dragon_star', [
        'NDN',
        'GGG',
        'NGN'
    ], {
        D: 'minecraft:dragon_head',
        G: 'gobber2:gobber2_block_end',
        N: 'minecraft:nether_star'
    })
});
ServerEvents.recipes(event => {
    event.shaped('enigmaticlegacy:unwitnessed_amulet', [
        'NEN',
        'EFE',
        'NEN'
    ], {
        E: 'enigmaticaddons:earth_heart_fragment',
        F: 'enigmaticlegacy:golden_ring',
        N: 'minecraft:gold_nugget'
    })
});
ServerEvents.recipes(event => {
    event.shaped('enigmaticlegacy:enigmatic_amulet', [
        'NEN',
        'EFE',
        'NEN'
    ], {
        E: 'enigmaticaddons:earth_heart_fragment',
        F: 'enigmaticlegacy:unwitnessed_amulet',
        N: 'minecraft:gold_nugget'
    })
});
ServerEvents.recipes(event => {
    event.shaped('irons_spellbooks:eldritch_manuscript', [
        'NFN',
        'ENE',
        'NEN'
    ], {
        E: 'minecraft:echo_shard',
        F: 'coinsje:netherite_coin',
        N: 'irons_spellbooks:ancient_knowledge_fragment'
    })
});
PlayerEvents.loggedIn(event => {
    const player_name = event.player.getName().getString()

    console.log("Curios check for " + player_name)

    if (!event.player.stages.has('curios_slots_added')) {
        event.player.stages.add('curios_slots_added')

        console.log("Adding curios for " + player_name)
        event.server.runCommandSilent("curios remove curio " + player_name)

        //List of preset slots at this link https://docs.illusivesoulworks.com/curios/preset-slots
    }
})
