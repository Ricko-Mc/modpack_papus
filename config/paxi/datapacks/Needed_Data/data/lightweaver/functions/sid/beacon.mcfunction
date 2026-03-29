scoreboard players add .global BeaconSID 1
scoreboard players operation @e[type=!minecraft:player, limit=1, tag=tempBeaconMarker, sort=nearest] BeaconSID = .global BeaconSID
execute as @e[type=!minecraft:player, limit=1, tag=tempBeaconMarker, sort=nearest] run tag @s add weaverLightOrb
scoreboard players operation @s BeaconSID = .global BeaconSID
tag @e remove tempBeaconMarker