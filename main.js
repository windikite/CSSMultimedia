const spellbook = document.getElementById("spellbook").childNodes;
const library = [
  [
      "https://oldschool.runescape.wiki/images/Arceuus_Home_Teleport_icon_%28mobile%29.png?043d2",
      "https://oldschool.runescape.wiki/images/Arceuus_Library_Teleport_icon_%28mobile%29.png?043d2",
      "https://oldschool.runescape.wiki/images/Basic_Reanimation_icon_%28mobile%29.png?61920",
      "https://oldschool.runescape.wiki/images/Draynor_Manor_Teleport_icon_%28mobile%29.png?152a5",
      "https://oldschool.runescape.wiki/images/Battlefront_Teleport_icon_%28mobile%29.png?61920",
      "https://oldschool.runescape.wiki/images/Mind_Altar_Teleport_icon_%28mobile%29.png?3d966",
      "https://oldschool.runescape.wiki/images/Respawn_Teleport_icon_%28mobile%29.png?0ea53",
      "https://oldschool.runescape.wiki/images/Ghostly_Grasp_icon_%28mobile%29.png?aec4b",
      "https://oldschool.runescape.wiki/images/Resurrect_Lesser_Ghost_icon_%28mobile%29.png?6c75c",
      "https://oldschool.runescape.wiki/images/Resurrect_Lesser_Skeleton_icon_%28mobile%29.png?6c75c",
      "https://oldschool.runescape.wiki/images/Resurrect_Lesser_Zombie_icon_%28mobile%29.png?43685",
      "https://oldschool.runescape.wiki/images/Salve_Graveyard_Teleport_icon_%28mobile%29.png?43433",
      "https://oldschool.runescape.wiki/images/Adept_Reanimation_icon_%28mobile%29.png?e692b",
      "https://oldschool.runescape.wiki/images/Inferior_Demonbane_icon_%28mobile%29.png?a8d5c",
      "https://oldschool.runescape.wiki/images/Shadow_Veil_icon_%28mobile%29.png?d54c9",
      "https://oldschool.runescape.wiki/images/Fenkenstrain%27s_Castle_Teleport_icon_%28mobile%29.png?aec4b",
      "https://oldschool.runescape.wiki/images/Dark_Lure_icon_%28mobile%29.png?8d4d3",
      "https://oldschool.runescape.wiki/images/Skeletal_Grasp_icon_%28mobile%29.png?126c6",
      "https://oldschool.runescape.wiki/images/Resurrect_Superior_Ghost_icon_%28mobile%29.png?2493e",
      "https://oldschool.runescape.wiki/images/Resurrect_Superior_Skeleton_icon_%28mobile%29.png?2493e",
      "https://oldschool.runescape.wiki/images/Resurrect_Superior_Zombie_icon_%28mobile%29.png?2493e",
      "https://oldschool.runescape.wiki/images/Mark_of_Darkness_icon_%28mobile%29.png?627a5",
      "https://oldschool.runescape.wiki/images/West_Ardougne_Teleport_icon_%28mobile%29.png?e2abd",
      "https://oldschool.runescape.wiki/images/Superior_Demonbane_icon_%28mobile%29.png?126c6",
      "https://oldschool.runescape.wiki/images/Lesser_Corruption_icon_%28mobile%29.png?627a5",
      "https://oldschool.runescape.wiki/images/Harmony_Island_Teleport_icon_%28mobile%29.png?aec4b",
      "https://oldschool.runescape.wiki/images/Vile_Vigour_icon_%28mobile%29.png?e2abd",
      "https://oldschool.runescape.wiki/images/Degrime_icon_%28mobile%29.png?468fa",
      "https://oldschool.runescape.wiki/images/Cemetery_Teleport_icon_%28mobile%29.png?61920",
      "https://oldschool.runescape.wiki/images/Expert_Reanimation_icon_%28mobile%29.png?171bf",
      "https://oldschool.runescape.wiki/images/Ward_of_Arceuus_icon_%28mobile%29.png?e2abd",
      "https://oldschool.runescape.wiki/images/Resurrect_Greater_Ghost_icon_%28mobile%29.png?687f2",
      "https://oldschool.runescape.wiki/images/Resurrect_Greater_Skeleton_icon_%28mobile%29.png?56e58",
      "https://oldschool.runescape.wiki/images/Resurrect_Greater_Zombie_icon_%28mobile%29.png?56e58",
      "https://oldschool.runescape.wiki/images/Resurrect_Crops_icon_%28mobile%29.png?0ea53",
      "https://oldschool.runescape.wiki/images/Undead_Grasp_icon_%28mobile%29.png?04d1a",
      "https://oldschool.runescape.wiki/images/Death_Charge_icon_%28mobile%29.png?39491",
      "https://oldschool.runescape.wiki/images/Dark_Demonbane_icon_%28mobile%29.png?8d4d3",
      "https://oldschool.runescape.wiki/images/Barrows_Teleport_icon_%28mobile%29.png?ff831",
      "https://oldschool.runescape.wiki/images/Demonic_Offering_icon_%28mobile%29.png?468fa",
      "https://oldschool.runescape.wiki/images/Greater_Corruption_icon_%28mobile%29.png?aec4b",
      "https://oldschool.runescape.wiki/images/Master_Reanimation_icon_%28mobile%29.png?3d966",
      "https://oldschool.runescape.wiki/images/Ape_Atoll_Teleport_%28Arceuus%29_icon_%28mobile%29.png?e692b",
      "https://oldschool.runescape.wiki/images/Sinister_Offering_icon_%28mobile%29.png?d54c9"
  ],
  [
    "https://oldschool.runescape.wiki/images/Lunar_Home_Teleport_icon_%28mobile%29.png?17355",
    "https://oldschool.runescape.wiki/images/Bake_Pie_icon_%28mobile%29.png?6369a",
    "https://oldschool.runescape.wiki/images/Geomancy_icon_%28mobile%29.png?0b88d",
    "https://oldschool.runescape.wiki/images/Cure_Plant_icon_%28mobile%29.png?b7482",
    "https://oldschool.runescape.wiki/images/Monster_Examine_icon_%28mobile%29.png?a74bd",
    "https://oldschool.runescape.wiki/images/NPC_Contact_icon_%28mobile%29.png?c58d8",
    "https://oldschool.runescape.wiki/images/Cure_Other_icon_%28mobile%29.png?b7482",
    "https://oldschool.runescape.wiki/images/Humidify_icon_%28mobile%29.png?3f59e",
    "https://oldschool.runescape.wiki/images/Moonclan_Teleport_icon_%28mobile%29.png?b6222",
    "https://oldschool.runescape.wiki/images/Tele_Group_Moonclan_icon_%28mobile%29.png?00914",
    "https://oldschool.runescape.wiki/images/Cure_Me_icon_%28mobile%29.png?b7482",
    "https://oldschool.runescape.wiki/images/Ourania_Teleport_icon_%28mobile%29.png?c58d8",
    "https://oldschool.runescape.wiki/images/Hunter_Kit_icon_%28mobile%29.png?3f59e",
    "https://oldschool.runescape.wiki/images/Waterbirth_Teleport_icon_%28mobile%29.png?6369a",
    "https://oldschool.runescape.wiki/images/Tele_Group_Waterbirth_icon_%28mobile%29.png?00914",
    "https://oldschool.runescape.wiki/images/Cure_Group_icon_%28mobile%29.png?b7482",
    "https://oldschool.runescape.wiki/images/Stat_Spy_icon_%28mobile%29.png?d581f",
    "https://oldschool.runescape.wiki/images/Barbarian_Teleport_icon_%28mobile%29.png?6369a",
    "https://oldschool.runescape.wiki/images/Tele_Group_Barbarian_icon_%28mobile%29.png?021ec",
    "https://oldschool.runescape.wiki/images/Spin_Flax_icon_%28mobile%29.png?d581f",
    "https://oldschool.runescape.wiki/images/Superglass_Make_icon_%28mobile%29.png?021ec",
    "https://oldschool.runescape.wiki/images/Tan_Leather_icon_%28mobile%29.png?021ec",
    "https://oldschool.runescape.wiki/images/Khazard_Teleport_icon_%28mobile%29.png?a74bd",
    "https://oldschool.runescape.wiki/images/Tele_Group_Khazard_icon_%28mobile%29.png?00914",
    "https://oldschool.runescape.wiki/images/Dream_icon_%28mobile%29.png?0b88d",
    "https://oldschool.runescape.wiki/images/String_Jewellery_icon_%28mobile%29.png?d581f",
    "https://oldschool.runescape.wiki/images/Stat_Restore_Pot_Share_icon_%28mobile%29.png?d581f",
    "https://oldschool.runescape.wiki/images/Magic_Imbue_icon_%28mobile%29.png?a74bd",
    "https://oldschool.runescape.wiki/images/Fertile_Soil_icon_%28mobile%29.png?0b88d",
    "https://oldschool.runescape.wiki/images/Boost_Potion_Share_icon_%28mobile%29.png?6369a",
    "https://oldschool.runescape.wiki/images/Fishing_Guild_Teleport_icon_%28mobile%29.png?0b88d",
    "https://oldschool.runescape.wiki/images/Teleport_to_Target_icon_%28mobile%29.png?a9d3d",
    "https://oldschool.runescape.wiki/images/Tele_Group_Fishing_Guild_icon_%28mobile%29.png?021ec",
    "https://oldschool.runescape.wiki/images/Plank_Make_icon_%28mobile%29.png?c58d8",
    "https://oldschool.runescape.wiki/images/Catherby_Teleport_icon_%28mobile%29.png?b7482",
    "https://oldschool.runescape.wiki/images/Recharge_Dragonstone_icon_%28mobile%29.png?c58d8",
    "https://oldschool.runescape.wiki/images/Ice_Plateau_Teleport_icon_%28mobile%29.png?a74bd",
    "https://oldschool.runescape.wiki/images/Tele_Group_Ice_Plateau_icon_%28mobile%29.png?00914",
    "https://oldschool.runescape.wiki/images/Energy_Transfer_icon_%28mobile%29.png?0b88d",
    "https://oldschool.runescape.wiki/images/Heal_Other_icon_%28mobile%29.png?3f59e",
    "https://oldschool.runescape.wiki/images/Vengeance_Other_icon_%28mobile%29.png?6369a",
    "https://oldschool.runescape.wiki/images/Vengeance_icon_%28mobile%29.png?00914",
    "https://oldschool.runescape.wiki/images/Heal_Group_icon_%28mobile%29.png?3f59e",
    "https://oldschool.runescape.wiki/images/Spellbook_Swap_icon_%28mobile%29.png?d581f"
  ],
  [
    "https://oldschool.runescape.wiki/images/Edgeville_Home_Teleport_icon_%28mobile%29.png?68fbc",
    "https://oldschool.runescape.wiki/images/Smoke_Rush_icon_%28mobile%29.png?c73c4",
    "https://oldschool.runescape.wiki/images/Shadow_Rush_icon_%28mobile%29.png?c73c4",
    "https://oldschool.runescape.wiki/images/Paddewwa_Teleport_icon_%28mobile%29.png?6f7fa",
    "https://oldschool.runescape.wiki/images/Blood_Rush_icon_%28mobile%29.png?66a1f",
    "https://oldschool.runescape.wiki/images/Ice_Rush_icon_%28mobile%29.png?d8aba",
    "https://oldschool.runescape.wiki/images/Senntisten_Teleport_icon_%28mobile%29.png?6f7fa",
    "https://oldschool.runescape.wiki/images/Smoke_Burst_icon_%28mobile%29.png?c73c4",
    "https://oldschool.runescape.wiki/images/Shadow_Burst_icon_%28mobile%29.png?9db0a",
    "https://oldschool.runescape.wiki/images/Kharyrll_Teleport_icon_%28mobile%29.png?d8aba",
    "https://oldschool.runescape.wiki/images/Blood_Burst_icon_%28mobile%29.png?66a1f",
    "https://oldschool.runescape.wiki/images/Ice_Burst_icon_%28mobile%29.png?d8aba",
    "https://oldschool.runescape.wiki/images/Lassar_Teleport_icon_%28mobile%29.png?d8aba",
    "https://oldschool.runescape.wiki/images/Smoke_Blitz_icon_%28mobile%29.png?c73c4",
    "https://oldschool.runescape.wiki/images/Shadow_Blitz_icon_%28mobile%29.png?9db0a",
    "https://oldschool.runescape.wiki/images/Dareeyak_Teleport_icon_%28mobile%29.png?a5d71",
    "https://oldschool.runescape.wiki/images/Blood_Blitz_icon_%28mobile%29.png?66a1f",
    "https://oldschool.runescape.wiki/images/Ice_Blitz_icon_%28mobile%29.png?d8aba",
    "https://oldschool.runescape.wiki/images/Carrallanger_Teleport_icon_%28mobile%29.png?a5d71",
    "https://oldschool.runescape.wiki/images/Teleport_to_Target_icon_%28mobile%29.png?a9d3d",
    "https://oldschool.runescape.wiki/images/Smoke_Barrage_icon_%28mobile%29.png?c73c4",
    "https://oldschool.runescape.wiki/images/Shadow_Barrage_icon_%28mobile%29.png?9db0a",
    "https://oldschool.runescape.wiki/images/Annakarl_Teleport_icon_%28mobile%29.png?66a1f",
    "https://oldschool.runescape.wiki/images/Blood_Barrage_icon_%28mobile%29.png?66a1f",
    "https://oldschool.runescape.wiki/images/Ice_Barrage_icon_%28mobile%29.png?a5d71",
    "https://oldschool.runescape.wiki/images/Ghorrock_Teleport_icon_%28mobile%29.png?a5d71"
  ]
];

function get_spell_gif() {
  let gif_url = this.src;
  let spell_name = "";
  const blacklist = ["Lesser_", "Greater_", "Superior_", "Master_", "Expert_"];
  blacklist.forEach(x => {
    let found = gif_url.lastIndexOf(x);
    if (found != -1) {
      gif_url = gif_url.substring(0,found) + gif_url.substring(found+x.length)
    };
  });
  let start_index = gif_url.lastIndexOf("/");
  let end_index = gif_url.lastIndexOf("_icon");
  spell_name = gif_url.substring(start_index+1,end_index);
  gif_url = "https://oldschool.runescape.wiki/images/" + spell_name + ".gif"
  document.getElementById("viewer").src = gif_url;
  console.log(gif_url)
}

function purge_spellbook() {
  list = document.getElementById("spellbook")
    while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
    }
}

function swap_to_ancients() {
  purge_spellbook();
  library[2].forEach((x, i) => {
    const tag = document.createElement("img");
    tag.src = x;
    tag.addEventListener("click", get_spell_gif)
    document.getElementById("spellbook").appendChild(tag)
  });
};

function swap_to_arceus() {
  purge_spellbook();
  library[0].forEach((x, i) => {
    const tag = document.createElement("img");
    tag.src = x;
    tag.addEventListener("click", get_spell_gif)
    document.getElementById("spellbook").appendChild(tag)
  });
};

function swap_to_lunars() {
  purge_spellbook();
  library[1].forEach((x, i) => {
    const tag = document.createElement("img");
    tag.src = x;
    tag.addEventListener("click", get_spell_gif)
    document.getElementById("spellbook").appendChild(tag)
  });
};

swap_to_arceus();
document.getElementById("lunars").addEventListener("click", swap_to_lunars)
document.getElementById("ancients").addEventListener("click", swap_to_ancients)
document.getElementById("arceus").addEventListener("click", swap_to_arceus)