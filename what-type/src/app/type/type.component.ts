import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import  {MatGridListModule } from '@angular/material/grid-list';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-type',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet, MatGridListModule],
  templateUrl: './type.component.html',
  styleUrl: './type.component.css'
})
export class TypeComponent implements OnInit {
  type!: string | null;
  typeInfo!: TypeInfo;
  typeMap = loadMap();
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.type = this.route.snapshot.paramMap.get('type');
    this.typeInfo = this.getValidatedTypeInfo();
    this.columns = this.getColumn();
  }

  getValidatedTypeInfo(): TypeInfo {
    if(this.type == null) {
      throw new Error("No Param Found.");
    }
    if(!this.typeMap.has(this.type)) {
      throw new Error("Invalid type.")
    }
    return this.typeMap.get(this.type)!;
  }

  columns: number = 1;
  @ViewChild('grid', { static: false })
  grid!: ElementRef;
  onGridResize() {
    this.columns = this.getColumn()
  }
  getColumn(): number {
    return Math.floor(window.innerWidth / 100)
  }
}

interface Pokemon {
  imageLink: string
  name: string
}

interface TypeInfo {
  pokemonList: Pokemon[]
  description: string
}

function pokemon(name: string, pokedexStr: string): Pokemon {
  return {name: name, imageLink: "https://github.com/fanzeyi/pokemon.json/blob/master/images/" + pokedexStr + ".png?raw=true"}
}


function loadMap(): Map<string, TypeInfo> {
  let typeChart = new Map<string, TypeInfo>();
  typeChart.set('bug', { description: '', pokemonList: [pokemon("Caterpie", "010"), pokemon("Metapod", "011"), pokemon("Pinsir", "127"), pokemon("Pineco", "204"), pokemon("Wurmple", "265"), pokemon("Silcoon", "266"), pokemon("Cascoon", "268"), pokemon("Volbeat", "313"), pokemon("Illumise", "314"), pokemon("Kricketot", "401"), pokemon("Kricketune", "402"), pokemon("Burmy", "412"), pokemon("Karrablast", "588"), pokemon("Shelmet", "616"), pokemon("Accelgor", "617"), pokemon("Scatterbug", "664"), pokemon("Spewpa", "665"), pokemon("Grubbin", "736")]});
  typeChart.set('bug_electric', { description: '', pokemonList: [pokemon("Joltik", "595"), pokemon("Galvantula", "596"), pokemon("Charjabug", "737"), pokemon("Vikavolt", "738")]});
  typeChart.set('bug_fairy', { description: '', pokemonList: [pokemon("Cutiefly", "742"), pokemon("Ribombee", "743")]});
  typeChart.set('bug_fighting', { description: '', pokemonList: [pokemon("Heracross", "214"), pokemon("Buzzwole", "794"), pokemon("Pheromosa", "795")]});
  typeChart.set('bug_fire', { description: '', pokemonList: [pokemon("Larvesta", "636"), pokemon("Volcarona", "637")]});
  typeChart.set('bug_flying', { description: '', pokemonList: [pokemon("Butterfree", "012"), pokemon("Scyther", "123"), pokemon("Ledyba", "165"), pokemon("Ledian", "166"), pokemon("Yanma", "193"), pokemon("Beautifly", "267"), pokemon("Masquerain", "284"), pokemon("Ninjask", "291"), pokemon("Mothim", "414"), pokemon("Combee", "415"), pokemon("Vespiquen", "416"), pokemon("Yanmega", "469"), pokemon("Vivillon", "666")]});
  typeChart.set('bug_ghost', { description: '', pokemonList: [pokemon("Shedinja", "292")]});
  typeChart.set('bug_grass', { description: '', pokemonList: [pokemon("Paras", "046"), pokemon("Parasect", "047"), pokemon("Wormadam", "413"), pokemon("Sewaddle", "540"), pokemon("Swadloon", "541"), pokemon("Leavanny", "542")]});
  typeChart.set('bug_ground', { description: '', pokemonList: [pokemon("Nincada", "290")]});
  typeChart.set('bug_poison', { description: '', pokemonList: [pokemon("Weedle", "013"), pokemon("Kakuna", "014"), pokemon("Beedrill", "015"), pokemon("Venonat", "048"), pokemon("Venomoth", "049"), pokemon("Spinarak", "167"), pokemon("Ariados", "168"), pokemon("Dustox", "269"), pokemon("Venipede", "543"), pokemon("Whirlipede", "544"), pokemon("Scolipede", "545")]});
  typeChart.set('bug_rock', { description: '', pokemonList: [pokemon("Shuckle", "213"), pokemon("Dwebble", "557"), pokemon("Crustle", "558")]});
  typeChart.set('bug_steel', { description: '', pokemonList: [pokemon("Forretress", "205"), pokemon("Scizor", "212"), pokemon("Escavalier", "589"), pokemon("Durant", "632"), pokemon("Genesect", "649")]});
  typeChart.set('bug_water', { description: '', pokemonList: [pokemon("Surskit", "283"), pokemon("Wimpod", "767"), pokemon("Golisopod", "768")]});
  typeChart.set('dark', { description: '', pokemonList: [pokemon("Umbreon", "197"), pokemon("Poochyena", "261"), pokemon("Mightyena", "262"), pokemon("Absol", "359"), pokemon("Darkrai", "491"), pokemon("Purrloin", "509"), pokemon("Liepard", "510"), pokemon("Zorua", "570"), pokemon("Zoroark", "571")]});
  typeChart.set('dark_dragon', { description: '', pokemonList: [pokemon("Deino", "633"), pokemon("Zweilous", "634"), pokemon("Hydreigon", "635"), pokemon("Guzzlord", "799")]});
  typeChart.set('dark_fighting', { description: '', pokemonList: [pokemon("Scraggy", "559"), pokemon("Scrafty", "560")]});
  typeChart.set('dark_fire', { description: '', pokemonList: [pokemon("Houndour", "228"), pokemon("Houndoom", "229")]});
  typeChart.set('dark_flying', { description: '', pokemonList: [pokemon("Murkrow", "198"), pokemon("Honchkrow", "430"), pokemon("Vullaby", "629"), pokemon("Mandibuzz", "630"), pokemon("Yveltal", "717")]});
  typeChart.set('dark_ghost', { description: '', pokemonList: [pokemon("Sableye", "302")]});
  typeChart.set('dark_ice', { description: '', pokemonList: [pokemon("Sneasel", "215"), pokemon("Weavile", "461")]});
  typeChart.set('dark_psychic', { description: '', pokemonList: [pokemon("Inkay", "686"), pokemon("Malamar", "687")]});
  typeChart.set('dark_steel', { description: '', pokemonList: [pokemon("Pawniard", "624"), pokemon("Bisharp", "625")]});
  typeChart.set('dragon', { description: '', pokemonList: [pokemon("Dratini", "147"), pokemon("Dragonair", "148"), pokemon("Bagon", "371"), pokemon("Shelgon", "372"), pokemon("Axew", "610"), pokemon("Fraxure", "611"), pokemon("Haxorus", "612"), pokemon("Druddigon", "621"), pokemon("Goomy", "704"), pokemon("Sliggoo", "705"), pokemon("Goodra", "706"), pokemon("Jangmo-o", "782")]});
  typeChart.set('dragon_electric', { description: '', pokemonList: [pokemon("Zekrom", "644")]});
  typeChart.set('dragon_fighting', { description: '', pokemonList: [pokemon("Hakamo-o", "783"), pokemon("Kommo-o", "784")]});
  typeChart.set('dragon_fire', { description: '', pokemonList: [pokemon("Reshiram", "643")]});
  typeChart.set('dragon_flying', { description: '', pokemonList: [pokemon("Dragonite", "149"), pokemon("Altaria", "334"), pokemon("Salamence", "373"), pokemon("Rayquaza", "384")]});
  typeChart.set('dragon_ground', { description: '', pokemonList: [pokemon("Gible", "443"), pokemon("Gabite", "444"), pokemon("Garchomp", "445"), pokemon("Zygarde", "718")]});
  typeChart.set('dragon_ice', { description: '', pokemonList: [pokemon("Kyurem", "646")]});
  typeChart.set('dragon_psychic', { description: '', pokemonList: [pokemon("Latias", "380"), pokemon("Latios", "381")]});
  typeChart.set('electric', { description: '', pokemonList: [pokemon("Pikachu", "025"), pokemon("Raichu", "026"), pokemon("Voltorb", "100"), pokemon("Electrode", "101"), pokemon("Electabuzz", "125"), pokemon("Jolteon", "135"), pokemon("Pichu", "172"), pokemon("Mareep", "179"), pokemon("Flaaffy", "180"), pokemon("Ampharos", "181"), pokemon("Elekid", "239"), pokemon("Raikou", "243"), pokemon("Electrike", "309"), pokemon("Manectric", "310"), pokemon("Plusle", "311"), pokemon("Minun", "312"), pokemon("Shinx", "403"), pokemon("Luxio", "404"), pokemon("Luxray", "405"), pokemon("Pachirisu", "417"), pokemon("Electivire", "466"), pokemon("Blitzle", "522"), pokemon("Zebstrika", "523"), pokemon("Tynamo", "602"), pokemon("Eelektrik", "603"), pokemon("Eelektross", "604"), pokemon("Xurkitree", "796"), pokemon("Zeraora", "807")]});
  typeChart.set('electric_fairy', { description: '', pokemonList: [pokemon("Dedenne", "702"), pokemon("Tapu Koko", "785")]});
  typeChart.set('electric_flying', { description: '', pokemonList: [pokemon("Zapdos", "145"), pokemon("Emolga", "587"), pokemon("Thundurus", "642")]});
  typeChart.set('electric_ghost', { description: '', pokemonList: [pokemon("Rotom", "479")]});
  typeChart.set('electric_normal', { description: '', pokemonList: [pokemon("Helioptile", "694"), pokemon("Heliolisk", "695")]});
  typeChart.set('electric_steel', { description: '', pokemonList: [pokemon("Magnemite", "081"), pokemon("Magneton", "082"), pokemon("Magnezone", "462"), pokemon("Togedemaru", "777")]});
  typeChart.set('fairy', { description: '', pokemonList: [pokemon("Clefairy", "035"), pokemon("Clefable", "036"), pokemon("Cleffa", "173"), pokemon("Togepi", "175"), pokemon("Snubbull", "209"), pokemon("Granbull", "210"), pokemon("Flabébé", "669"), pokemon("Floette", "670"), pokemon("Florges", "671"), pokemon("Spritzee", "682"), pokemon("Aromatisse", "683"), pokemon("Swirlix", "684"), pokemon("Slurpuff", "685"), pokemon("Sylveon", "700"), pokemon("Xerneas", "716"), pokemon("Comfey", "764")]});
  typeChart.set('fairy_flying', { description: '', pokemonList: [pokemon("Togetic", "176"), pokemon("Togekiss", "468")]});
  typeChart.set('fighting', { description: '', pokemonList: [pokemon("Mankey", "056"), pokemon("Primeape", "057"), pokemon("Machop", "066"), pokemon("Machoke", "067"), pokemon("Machamp", "068"), pokemon("Hitmonlee", "106"), pokemon("Hitmonchan", "107"), pokemon("Tyrogue", "236"), pokemon("Hitmontop", "237"), pokemon("Makuhita", "296"), pokemon("Hariyama", "297"), pokemon("Riolu", "447"), pokemon("Timburr", "532"), pokemon("Gurdurr", "533"), pokemon("Conkeldurr", "534"), pokemon("Throh", "538"), pokemon("Sawk", "539"), pokemon("Mienfoo", "619"), pokemon("Mienshao", "620"), pokemon("Pancham", "674"), pokemon("Crabrawler", "739"), pokemon("Passimian", "766")]});
  typeChart.set('fighting_dark', { description: '', pokemonList: [pokemon("Pangoro", "675")]});
  typeChart.set('fighting_flying', { description: '', pokemonList: [pokemon("Hawlucha", "701")]});
  typeChart.set('fighting_ghost', { description: '', pokemonList: [pokemon("Marshadow", "802")]});
  typeChart.set('fighting_ice', { description: '', pokemonList: [pokemon("Crabominable", "740")]});
  typeChart.set('fighting_psychic', { description: '', pokemonList: [pokemon("Meditite", "307"), pokemon("Medicham", "308")]});
  typeChart.set('fighting_steel', { description: '', pokemonList: [pokemon("Lucario", "448")]});
  typeChart.set('fire', { description: '', pokemonList: [pokemon("Charmander", "004"), pokemon("Charmeleon", "005"), pokemon("Vulpix", "037"), pokemon("Ninetales", "038"), pokemon("Growlithe", "058"), pokemon("Arcanine", "059"), pokemon("Ponyta", "077"), pokemon("Rapidash", "078"), pokemon("Magmar", "126"), pokemon("Flareon", "136"), pokemon("Cyndaquil", "155"), pokemon("Quilava", "156"), pokemon("Typhlosion", "157"), pokemon("Slugma", "218"), pokemon("Magby", "240"), pokemon("Entei", "244"), pokemon("Torchic", "255"), pokemon("Torkoal", "324"), pokemon("Chimchar", "390"), pokemon("Magmortar", "467"), pokemon("Tepig", "498"), pokemon("Pansear", "513"), pokemon("Simisear", "514"), pokemon("Darumaka", "554"), pokemon("Darmanitan", "555"), pokemon("Heatmor", "631"), pokemon("Fennekin", "653"), pokemon("Braixen", "654"), pokemon("Litten", "725"), pokemon("Torracat", "726")]});
  typeChart.set('fire_dark', { description: '', pokemonList: [pokemon("Incineroar", "727")]});
  typeChart.set('fire_dragon', { description: '', pokemonList: [pokemon("Turtonator", "776")]});
  typeChart.set('fire_fighting', { description: '', pokemonList: [pokemon("Combusken", "256"), pokemon("Blaziken", "257"), pokemon("Monferno", "391"), pokemon("Infernape", "392"), pokemon("Pignite", "499"), pokemon("Emboar", "500")]});
  typeChart.set('fire_flying', { description: '', pokemonList: [pokemon("Charizard", "006"), pokemon("Moltres", "146"), pokemon("Ho-Oh", "250"), pokemon("Fletchinder", "662"), pokemon("Talonflame", "663"), pokemon("Oricorio", "741")]});
  typeChart.set('fire_ghost', { description: '', pokemonList: [pokemon("Blacephalon", "806")]});
  typeChart.set('fire_ground', { description: '', pokemonList: [pokemon("Numel", "322"), pokemon("Camerupt", "323")]});
  typeChart.set('fire_normal', { description: '', pokemonList: [pokemon("Litleo", "667"), pokemon("Pyroar", "668")]});
  typeChart.set('fire_psychic', { description: '', pokemonList: [pokemon("Delphox", "655")]});
  typeChart.set('fire_rock', { description: '', pokemonList: [pokemon("Magcargo", "219")]});
  typeChart.set('fire_steel', { description: '', pokemonList: [pokemon("Heatran", "485")]});
  typeChart.set('fire_water', { description: '', pokemonList: [pokemon("Volcanion", "721")]});
  typeChart.set('flying', { description: '', pokemonList: [pokemon("Tornadus", "641")]});
  typeChart.set('flying_dragon', { description: '', pokemonList: [pokemon("Noibat", "714"), pokemon("Noivern", "715")]});
  typeChart.set('ghost', { description: '', pokemonList: [pokemon("Misdreavus", "200"), pokemon("Shuppet", "353"), pokemon("Banette", "354"), pokemon("Duskull", "355"), pokemon("Dusclops", "356"), pokemon("Mismagius", "429"), pokemon("Dusknoir", "477"), pokemon("Yamask", "562"), pokemon("Cofagrigus", "563")]});
  typeChart.set('ghost_dark', { description: '', pokemonList: [pokemon("Spiritomb", "442")]});
  typeChart.set('ghost_dragon', { description: '', pokemonList: [pokemon("Giratina", "487")]});
  typeChart.set('ghost_fairy', { description: '', pokemonList: [pokemon("Mimikyu", "778")]});
  typeChart.set('ghost_fire', { description: '', pokemonList: [pokemon("Litwick", "607"), pokemon("Lampent", "608"), pokemon("Chandelure", "609")]});
  typeChart.set('ghost_flying', { description: '', pokemonList: [pokemon("Drifloon", "425"), pokemon("Drifblim", "426")]});
  typeChart.set('ghost_grass', { description: '', pokemonList: [pokemon("Phantump", "708"), pokemon("Trevenant", "709"), pokemon("Pumpkaboo", "710"), pokemon("Gourgeist", "711"), pokemon("Dhelmise", "781")]});
  typeChart.set('ghost_ground', { description: '', pokemonList: [pokemon("Sandygast", "769"), pokemon("Palossand", "770")]});
  typeChart.set('ghost_poison', { description: '', pokemonList: [pokemon("Gastly", "092"), pokemon("Haunter", "093"), pokemon("Gengar", "094")]});
  typeChart.set('grass', { description: '', pokemonList: [pokemon("Bulbasaur", "001"), pokemon("Tangela", "114"), pokemon("Chikorita", "152"), pokemon("Bayleef", "153"), pokemon("Meganium", "154"), pokemon("Bellossom", "182"), pokemon("Sunkern", "191"), pokemon("Sunflora", "192"), pokemon("Treecko", "252"), pokemon("Grovyle", "253"), pokemon("Sceptile", "254"), pokemon("Seedot", "273"), pokemon("Shroomish", "285"), pokemon("Cacnea", "331"), pokemon("Turtwig", "387"), pokemon("Grotle", "388"), pokemon("Cherubi", "420"), pokemon("Cherrim", "421"), pokemon("Carnivine", "455"), pokemon("Tangrowth", "465"), pokemon("Leafeon", "470"), pokemon("Shaymin", "492"), pokemon("Snivy", "495"), pokemon("Servine", "496"), pokemon("Serperior", "497"), pokemon("Pansage", "511"), pokemon("Simisage", "512"), pokemon("Petilil", "548"), pokemon("Lilligant", "549"), pokemon("Maractus", "556"), pokemon("Chespin", "650"), pokemon("Quilladin", "651"), pokemon("Skiddo", "672"), pokemon("Gogoat", "673"), pokemon("Fomantis", "753"), pokemon("Lurantis", "754"), pokemon("Bounsweet", "761"), pokemon("Steenee", "762"), pokemon("Tsareena", "763")]});
  typeChart.set('grass_dark', { description: '', pokemonList: [pokemon("Nuzleaf", "274"), pokemon("Shiftry", "275"), pokemon("Cacturne", "332")]});
  typeChart.set('grass_fairy', { description: '', pokemonList: [pokemon("Cottonee", "546"), pokemon("Whimsicott", "547"), pokemon("Morelull", "755"), pokemon("Shiinotic", "756"), pokemon("Tapu Bulu", "787")]});
  typeChart.set('grass_fighting', { description: '', pokemonList: [pokemon("Breloom", "286"), pokemon("Virizion", "640"), pokemon("Chesnaught", "652")]});
  typeChart.set('grass_flying', { description: '', pokemonList: [pokemon("Hoppip", "187"), pokemon("Skiploom", "188"), pokemon("Jumpluff", "189"), pokemon("Tropius", "357"), pokemon("Rowlet", "722"), pokemon("Dartrix", "723")]});
  typeChart.set('grass_ghost', { description: '', pokemonList: [pokemon("Decidueye", "724")]});
  typeChart.set('grass_ground', { description: '', pokemonList: [pokemon("Torterra", "389")]});
  typeChart.set('grass_ice', { description: '', pokemonList: [pokemon("Snover", "459"), pokemon("Abomasnow", "460")]});
  typeChart.set('grass_poison', { description: '', pokemonList: [pokemon("Ivysaur", "002"), pokemon("Venusaur", "003"), pokemon("Oddish", "043"), pokemon("Gloom", "044"), pokemon("Vileplume", "045"), pokemon("Bellsprout", "069"), pokemon("Weepinbell", "070"), pokemon("Victreebel", "071"), pokemon("Roselia", "315"), pokemon("Budew", "406"), pokemon("Roserade", "407"), pokemon("Foongus", "590"), pokemon("Amoonguss", "591")]});
  typeChart.set('grass_psychic', { description: '', pokemonList: [pokemon("Exeggcute", "102"), pokemon("Exeggutor", "103")]});
  typeChart.set('grass_steel', { description: '', pokemonList: [pokemon("Ferroseed", "597"), pokemon("Ferrothorn", "598"), pokemon("Kartana", "798")]});
  typeChart.set('ground', { description: '', pokemonList: [pokemon("Sandshrew", "027"), pokemon("Sandslash", "028"), pokemon("Diglett", "050"), pokemon("Dugtrio", "051"), pokemon("Cubone", "104"), pokemon("Marowak", "105"), pokemon("Phanpy", "231"), pokemon("Donphan", "232"), pokemon("Trapinch", "328"), pokemon("Groudon", "383"), pokemon("Hippopotas", "449"), pokemon("Hippowdon", "450"), pokemon("Drilbur", "529"), pokemon("Mudbray", "749"), pokemon("Mudsdale", "750")]});
  typeChart.set('ground_dark', { description: '', pokemonList: [pokemon("Sandile", "551"), pokemon("Krokorok", "552"), pokemon("Krookodile", "553")]});
  typeChart.set('ground_dragon', { description: '', pokemonList: [pokemon("Vibrava", "329"), pokemon("Flygon", "330")]});
  typeChart.set('ground_electric', { description: '', pokemonList: [pokemon("Stunfisk", "618")]});
  typeChart.set('ground_flying', { description: '', pokemonList: [pokemon("Gligar", "207"), pokemon("Gliscor", "472"), pokemon("Landorus", "645")]});
  typeChart.set('ground_ghost', { description: '', pokemonList: [pokemon("Golett", "622"), pokemon("Golurk", "623")]});
  typeChart.set('ground_psychic', { description: '', pokemonList: [pokemon("Baltoy", "343"), pokemon("Claydol", "344")]});
  typeChart.set('ground_rock', { description: '', pokemonList: [pokemon("Rhyhorn", "111"), pokemon("Rhydon", "112"), pokemon("Rhyperior", "464")]});
  typeChart.set('ground_steel', { description: '', pokemonList: [pokemon("Excadrill", "530")]});
  typeChart.set('ice', { description: '', pokemonList: [pokemon("Snorunt", "361"), pokemon("Glalie", "362"), pokemon("Regice", "378"), pokemon("Glaceon", "471"), pokemon("Vanillite", "582"), pokemon("Vanillish", "583"), pokemon("Vanilluxe", "584"), pokemon("Cubchoo", "613"), pokemon("Beartic", "614"), pokemon("Cryogonal", "615"), pokemon("Bergmite", "712"), pokemon("Avalugg", "713")]});
  typeChart.set('ice_flying', { description: '', pokemonList: [pokemon("Articuno", "144"), pokemon("Delibird", "225")]});
  typeChart.set('ice_ghost', { description: '', pokemonList: [pokemon("Froslass", "478")]});
  typeChart.set('ice_ground', { description: '', pokemonList: [pokemon("Swinub", "220"), pokemon("Piloswine", "221"), pokemon("Mamoswine", "473")]});
  typeChart.set('ice_psychic', { description: '', pokemonList: [pokemon("Jynx", "124"), pokemon("Smoochum", "238")]});
  typeChart.set('ice_water', { description: '', pokemonList: [pokemon("Spheal", "363"), pokemon("Sealeo", "364"), pokemon("Walrein", "365")]});
  typeChart.set('normal', { description: '', pokemonList: [pokemon("Rattata", "019"), pokemon("Raticate", "020"), pokemon("Meowth", "052"), pokemon("Persian", "053"), pokemon("Lickitung", "108"), pokemon("Chansey", "113"), pokemon("Kangaskhan", "115"), pokemon("Tauros", "128"), pokemon("Ditto", "132"), pokemon("Eevee", "133"), pokemon("Porygon", "137"), pokemon("Snorlax", "143"), pokemon("Sentret", "161"), pokemon("Furret", "162"), pokemon("Aipom", "190"), pokemon("Dunsparce", "206"), pokemon("Teddiursa", "216"), pokemon("Ursaring", "217"), pokemon("Porygon2", "233"), pokemon("Stantler", "234"), pokemon("Smeargle", "235"), pokemon("Miltank", "241"), pokemon("Blissey", "242"), pokemon("Zigzagoon", "263"), pokemon("Linoone", "264"), pokemon("Slakoth", "287"), pokemon("Vigoroth", "288"), pokemon("Slaking", "289"), pokemon("Whismur", "293"), pokemon("Loudred", "294"), pokemon("Exploud", "295"), pokemon("Skitty", "300"), pokemon("Delcatty", "301"), pokemon("Spinda", "327"), pokemon("Zangoose", "335"), pokemon("Castform", "351"), pokemon("Kecleon", "352"), pokemon("Bidoof", "399"), pokemon("Ambipom", "424"), pokemon("Buneary", "427"), pokemon("Lopunny", "428"), pokemon("Glameow", "431"), pokemon("Purugly", "432"), pokemon("Happiny", "440"), pokemon("Munchlax", "446"), pokemon("Lickilicky", "463"), pokemon("Porygon-Z", "474"), pokemon("Regigigas", "486"), pokemon("Arceus", "493"), pokemon("Patrat", "504"), pokemon("Watchog", "505"), pokemon("Lillipup", "506"), pokemon("Herdier", "507"), pokemon("Stoutland", "508"), pokemon("Audino", "531"), pokemon("Minccino", "572"), pokemon("Cinccino", "573"), pokemon("Bouffalant", "626"), pokemon("Bunnelby", "659"), pokemon("Furfrou", "676"), pokemon("Yungoos", "734"), pokemon("Gumshoos", "735"), pokemon("Silvally", "773"), pokemon("Komala", "775")]});
  typeChart.set('normal_dragon', { description: '', pokemonList: [pokemon("Drampa", "780")]});
  typeChart.set('normal_fairy', { description: '', pokemonList: [pokemon("Jigglypuff", "039"), pokemon("Wigglytuff", "040"), pokemon("Igglybuff", "174"), pokemon("Azurill", "298")]});
  typeChart.set('normal_fighting', { description: '', pokemonList: [pokemon("Stufful", "759"), pokemon("Bewear", "760")]});
  typeChart.set('normal_flying', { description: '', pokemonList: [pokemon("Pidgey", "016"), pokemon("Pidgeotto", "017"), pokemon("Pidgeot", "018"), pokemon("Spearow", "021"), pokemon("Fearow", "022"), pokemon("Farfetch'd", "083"), pokemon("Doduo", "084"), pokemon("Dodrio", "085"), pokemon("Hoothoot", "163"), pokemon("Noctowl", "164"), pokemon("Taillow", "276"), pokemon("Swellow", "277"), pokemon("Swablu", "333"), pokemon("Starly", "396"), pokemon("Staravia", "397"), pokemon("Staraptor", "398"), pokemon("Chatot", "441"), pokemon("Pidove", "519"), pokemon("Tranquill", "520"), pokemon("Unfezant", "521"), pokemon("Rufflet", "627"), pokemon("Braviary", "628"), pokemon("Fletchling", "661"), pokemon("Pikipek", "731"), pokemon("Trumbeak", "732"), pokemon("Toucannon", "733")]});
  typeChart.set('normal_grass', { description: '', pokemonList: [pokemon("Deerling", "585"), pokemon("Sawsbuck", "586")]});
  typeChart.set('normal_ground', { description: '', pokemonList: [pokemon("Diggersby", "660")]});
  typeChart.set('normal_psychic', { description: '', pokemonList: [pokemon("Girafarig", "203"), pokemon("Meloetta", "648"), pokemon("Oranguru", "765")]});
  typeChart.set('normal_water', { description: '', pokemonList: [pokemon("Bibarel", "400")]});
  typeChart.set('poison', { description: '', pokemonList: [pokemon("Ekans", "023"), pokemon("Arbok", "024"), pokemon("Nidoran♀", "029"), pokemon("Nidorina", "030"), pokemon("Nidoran♂", "032"), pokemon("Nidorino", "033"), pokemon("Grimer", "088"), pokemon("Muk", "089"), pokemon("Koffing", "109"), pokemon("Weezing", "110"), pokemon("Gulpin", "316"), pokemon("Swalot", "317"), pokemon("Seviper", "336"), pokemon("Trubbish", "568"), pokemon("Garbodor", "569"), pokemon("Poipole", "803")]});
  typeChart.set('poison_bug', { description: '', pokemonList: [pokemon("Skorupi", "451")]});
  typeChart.set('poison_dark', { description: '', pokemonList: [pokemon("Stunky", "434"), pokemon("Skuntank", "435"), pokemon("Drapion", "452")]});
  typeChart.set('poison_dragon', { description: '', pokemonList: [pokemon("Dragalge", "691"), pokemon("Naganadel", "804")]});
  typeChart.set('poison_fighting', { description: '', pokemonList: [pokemon("Croagunk", "453"), pokemon("Toxicroak", "454")]});
  typeChart.set('poison_fire', { description: '', pokemonList: [pokemon("Salandit", "757"), pokemon("Salazzle", "758")]});
  typeChart.set('poison_flying', { description: '', pokemonList: [pokemon("Zubat", "041"), pokemon("Golbat", "042"), pokemon("Crobat", "169")]});
  typeChart.set('poison_ground', { description: '', pokemonList: [pokemon("Nidoqueen", "031"), pokemon("Nidoking", "034")]});
  typeChart.set('poison_water', { description: '', pokemonList: [pokemon("Skrelp", "690"), pokemon("Mareanie", "747"), pokemon("Toxapex", "748")]});
  typeChart.set('psychic', { description: '', pokemonList: [pokemon("Abra", "063"), pokemon("Kadabra", "064"), pokemon("Alakazam", "065"), pokemon("Drowzee", "096"), pokemon("Hypno", "097"), pokemon("Mewtwo", "150"), pokemon("Mew", "151"), pokemon("Espeon", "196"), pokemon("Unown", "201"), pokemon("Wobbuffet", "202"), pokemon("Spoink", "325"), pokemon("Grumpig", "326"), pokemon("Chimecho", "358"), pokemon("Wynaut", "360"), pokemon("Deoxys", "386"), pokemon("Chingling", "433"), pokemon("Uxie", "480"), pokemon("Mesprit", "481"), pokemon("Azelf", "482"), pokemon("Cresselia", "488"), pokemon("Munna", "517"), pokemon("Musharna", "518"), pokemon("Gothita", "574"), pokemon("Gothorita", "575"), pokemon("Gothitelle", "576"), pokemon("Solosis", "577"), pokemon("Duosion", "578"), pokemon("Reuniclus", "579"), pokemon("Elgyem", "605"), pokemon("Beheeyem", "606"), pokemon("Espurr", "677"), pokemon("Meowstic", "678"), pokemon("Cosmog", "789"), pokemon("Cosmoem", "790"), pokemon("Necrozma", "800")]});
  typeChart.set('psychic_fairy', { description: '', pokemonList: [pokemon("Mr. Mime", "122"), pokemon("Ralts", "280"), pokemon("Kirlia", "281"), pokemon("Gardevoir", "282"), pokemon("Mime Jr.", "439"), pokemon("Tapu Lele", "786")]});
  typeChart.set('psychic_fighting', { description: '', pokemonList: [pokemon("Gallade", "475")]});
  typeChart.set('psychic_fire', { description: '', pokemonList: [pokemon("Victini", "494")]});
  typeChart.set('psychic_flying', { description: '', pokemonList: [pokemon("Natu", "177"), pokemon("Xatu", "178"), pokemon("Lugia", "249"), pokemon("Woobat", "527"), pokemon("Swoobat", "528"), pokemon("Sigilyph", "561")]});
  typeChart.set('psychic_ghost', { description: '', pokemonList: [pokemon("Hoopa", "720"), pokemon("Lunala", "792")]});
  typeChart.set('psychic_grass', { description: '', pokemonList: [pokemon("Celebi", "251")]});
  typeChart.set('psychic_steel', { description: '', pokemonList: [pokemon("Solgaleo", "791")]});
  typeChart.set('rock', { description: '', pokemonList: [pokemon("Sudowoodo", "185"), pokemon("Nosepass", "299"), pokemon("Regirock", "377"), pokemon("Cranidos", "408"), pokemon("Rampardos", "409"), pokemon("Bonsly", "438"), pokemon("Roggenrola", "524"), pokemon("Boldore", "525"), pokemon("Gigalith", "526"), pokemon("Rockruff", "744"), pokemon("Lycanroc", "745")]});
  typeChart.set('rock_bug', { description: '', pokemonList: [pokemon("Anorith", "347"), pokemon("Armaldo", "348")]});
  typeChart.set('rock_dark', { description: '', pokemonList: [pokemon("Tyranitar", "248")]});
  typeChart.set('rock_dragon', { description: '', pokemonList: [pokemon("Tyrunt", "696"), pokemon("Tyrantrum", "697")]});
  typeChart.set('rock_fairy', { description: '', pokemonList: [pokemon("Carbink", "703"), pokemon("Diancie", "719")]});
  typeChart.set('rock_fighting', { description: '', pokemonList: [pokemon("Terrakion", "639")]});
  typeChart.set('rock_flying', { description: '', pokemonList: [pokemon("Aerodactyl", "142"), pokemon("Archen", "566"), pokemon("Archeops", "567"), pokemon("Minior", "774")]});
  typeChart.set('rock_grass', { description: '', pokemonList: [pokemon("Lileep", "345"), pokemon("Cradily", "346")]});
  typeChart.set('rock_ground', { description: '', pokemonList: [pokemon("Geodude", "074"), pokemon("Graveler", "075"), pokemon("Golem", "076"), pokemon("Onix", "095"), pokemon("Larvitar", "246"), pokemon("Pupitar", "247")]});
  typeChart.set('rock_ice', { description: '', pokemonList: [pokemon("Amaura", "698"), pokemon("Aurorus", "699")]});
  typeChart.set('rock_poison', { description: '', pokemonList: [pokemon("Nihilego", "793")]});
  typeChart.set('rock_psychic', { description: '', pokemonList: [pokemon("Lunatone", "337"), pokemon("Solrock", "338")]});
  typeChart.set('rock_steel', { description: '', pokemonList: [pokemon("Shieldon", "410"), pokemon("Bastiodon", "411"), pokemon("Probopass", "476"), pokemon("Stakataka", "805")]});
  typeChart.set('rock_water', { description: '', pokemonList: [pokemon("Omanyte", "138"), pokemon("Omastar", "139"), pokemon("Kabuto", "140"), pokemon("Kabutops", "141"), pokemon("Binacle", "688"), pokemon("Barbaracle", "689")]});
  typeChart.set('steel', { description: '', pokemonList: [pokemon("Registeel", "379"), pokemon("Klink", "599"), pokemon("Klang", "600"), pokemon("Klinklang", "601"), pokemon("Meltan", "808"), pokemon("Melmetal", "809")]});
  typeChart.set('steel_dragon', { description: '', pokemonList: [pokemon("Dialga", "483")]});
  typeChart.set('steel_fairy', { description: '', pokemonList: [pokemon("Mawile", "303"), pokemon("Klefki", "707"), pokemon("Magearna", "801")]});
  typeChart.set('steel_fighting', { description: '', pokemonList: [pokemon("Cobalion", "638")]});
  typeChart.set('steel_flying', { description: '', pokemonList: [pokemon("Skarmory", "227"), pokemon("Celesteela", "797")]});
  typeChart.set('steel_ghost', { description: '', pokemonList: [pokemon("Honedge", "679"), pokemon("Doublade", "680"), pokemon("Aegislash", "681")]});
  typeChart.set('steel_ground', { description: '', pokemonList: [pokemon("Steelix", "208")]});
  typeChart.set('steel_psychic', { description: '', pokemonList: [pokemon("Beldum", "374"), pokemon("Metang", "375"), pokemon("Metagross", "376"), pokemon("Jirachi", "385"), pokemon("Bronzor", "436"), pokemon("Bronzong", "437")]});
  typeChart.set('steel_rock', { description: '', pokemonList: [pokemon("Aron", "304"), pokemon("Lairon", "305"), pokemon("Aggron", "306")]});
  typeChart.set('water', { description: '', pokemonList: [pokemon("Squirtle", "007"), pokemon("Wartortle", "008"), pokemon("Blastoise", "009"), pokemon("Psyduck", "054"), pokemon("Golduck", "055"), pokemon("Poliwag", "060"), pokemon("Poliwhirl", "061"), pokemon("Seel", "086"), pokemon("Shellder", "090"), pokemon("Krabby", "098"), pokemon("Kingler", "099"), pokemon("Horsea", "116"), pokemon("Seadra", "117"), pokemon("Goldeen", "118"), pokemon("Seaking", "119"), pokemon("Staryu", "120"), pokemon("Magikarp", "129"), pokemon("Vaporeon", "134"), pokemon("Totodile", "158"), pokemon("Croconaw", "159"), pokemon("Feraligatr", "160"), pokemon("Politoed", "186"), pokemon("Remoraid", "223"), pokemon("Octillery", "224"), pokemon("Suicune", "245"), pokemon("Mudkip", "258"), pokemon("Wailmer", "320"), pokemon("Wailord", "321"), pokemon("Corphish", "341"), pokemon("Feebas", "349"), pokemon("Milotic", "350"), pokemon("Clamperl", "366"), pokemon("Huntail", "367"), pokemon("Gorebyss", "368"), pokemon("Luvdisc", "370"), pokemon("Kyogre", "382"), pokemon("Piplup", "393"), pokemon("Prinplup", "394"), pokemon("Buizel", "418"), pokemon("Floatzel", "419"), pokemon("Shellos", "422"), pokemon("Finneon", "456"), pokemon("Lumineon", "457"), pokemon("Phione", "489"), pokemon("Manaphy", "490"), pokemon("Oshawott", "501"), pokemon("Dewott", "502"), pokemon("Samurott", "503"), pokemon("Panpour", "515"), pokemon("Simipour", "516"), pokemon("Tympole", "535"), pokemon("Basculin", "550"), pokemon("Alomomola", "594"), pokemon("Froakie", "656"), pokemon("Frogadier", "657"), pokemon("Clauncher", "692"), pokemon("Clawitzer", "693"), pokemon("Popplio", "728"), pokemon("Brionne", "729"), pokemon("Wishiwashi", "746"), pokemon("Pyukumuku", "771")]});
  typeChart.set('water_bug', { description: '', pokemonList: [pokemon("Dewpider", "751"), pokemon("Araquanid", "752")]});
  typeChart.set('water_dark', { description: '', pokemonList: [pokemon("Carvanha", "318"), pokemon("Sharpedo", "319"), pokemon("Crawdaunt", "342"), pokemon("Greninja", "658")]});
  typeChart.set('water_dragon', { description: '', pokemonList: [pokemon("Kingdra", "230"), pokemon("Palkia", "484")]});
  typeChart.set('water_electric', { description: '', pokemonList: [pokemon("Chinchou", "170"), pokemon("Lanturn", "171")]});
  typeChart.set('water_fairy', { description: '', pokemonList: [pokemon("Marill", "183"), pokemon("Azumarill", "184"), pokemon("Primarina", "730"), pokemon("Tapu Fini", "788")]});
  typeChart.set('water_fighting', { description: '', pokemonList: [pokemon("Poliwrath", "062"), pokemon("Keldeo", "647")]});
  typeChart.set('water_flying', { description: '', pokemonList: [pokemon("Gyarados", "130"), pokemon("Mantine", "226"), pokemon("Wingull", "278"), pokemon("Pelipper", "279"), pokemon("Mantyke", "458"), pokemon("Ducklett", "580"), pokemon("Swanna", "581")]});
  typeChart.set('water_ghost', { description: '', pokemonList: [pokemon("Frillish", "592"), pokemon("Jellicent", "593")]});
  typeChart.set('water_grass', { description: '', pokemonList: [pokemon("Lotad", "270"), pokemon("Lombre", "271"), pokemon("Ludicolo", "272")]});
  typeChart.set('water_ground', { description: '', pokemonList: [pokemon("Wooper", "194"), pokemon("Quagsire", "195"), pokemon("Marshtomp", "259"), pokemon("Swampert", "260"), pokemon("Barboach", "339"), pokemon("Whiscash", "340"), pokemon("Gastrodon", "423"), pokemon("Palpitoad", "536"), pokemon("Seismitoad", "537")]});
  typeChart.set('water_ice', { description: '', pokemonList: [pokemon("Dewgong", "087"), pokemon("Cloyster", "091"), pokemon("Lapras", "131")]});
  typeChart.set('water_poison', { description: '', pokemonList: [pokemon("Tentacool", "072"), pokemon("Tentacruel", "073"), pokemon("Qwilfish", "211")]});
  typeChart.set('water_psychic', { description: '', pokemonList: [pokemon("Slowpoke", "079"), pokemon("Slowbro", "080"), pokemon("Starmie", "121"), pokemon("Slowking", "199"), pokemon("Bruxish", "779")]});
  typeChart.set('water_rock', { description: '', pokemonList: [pokemon("Corsola", "222"), pokemon("Relicanth", "369"), pokemon("Tirtouga", "564"), pokemon("Carracosta", "565")]});
  typeChart.set('water_steel', { description: '', pokemonList: [pokemon("Empoleon", "395")]});
  return typeChart;
}
