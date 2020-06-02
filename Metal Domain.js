var iFileName = "cw:hd3152017metaldomain.js";
RequiredSheetVersion(12.999);
// This file adds the content from the Cleric Week: Hombrew Domain article to MPMB's Character Record Sheet

// Define the source
SourceList["CW:HD"] = {
	name : "Cleric Week: Hombrew Domain",
	abbreviation : "CW:HD",
	group : "Cleric Week",
	url : "https://noblecrumpet-dorkvision.tumblr.com/post/158458740482/cleric-week-homebrew-domains?is_related_post=1",
	date : "2017/03/15"
};

// New Subclass for Cleric: Metal Domain
AddSubClass("cleric", "metal domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*metal).*$/i,
	subname : "Metal Domain",
	source: ["CW:HD", 2],
	spellcastingExtra : ["grease", "earth tremor", "cloud of daggers", "heat metal", "conjure barrage", "erupting earth", "stone shape", "fabricate", "wall of stone", "animate objects"],
	features : {
		"subclassfeature1" : {
			name : "Magnetic Grasp",
			source: ["CW:HD", 2],
			minlevel : 1,
			description : "\n   " + "You can telekinetically control unattended metal objects that weigh up to 10 pounds at a range of up to 60 ft. You must be able to see your target and maintain concentration",
			},
		"subclassfeature2" : {
			name : "Channel Divinity: Rusting Grasp",
			source: ["CW:HD", 2],
			minlevel : 2,
			description : desc([
				"As an action, you can rapidly decay metal with your touch",
				"A 3 ft. radius area of nonmagical metal turns into a dusty pile of oxidation",
				"Against a metallic creature (even magically animated) this deals 6d10 damage",
				"When used against an enemy, an enemy’s weapon or their armor, you must succeed at a melee spell attack to target it",
				"A weapon or armor rusted by your Rusting Grasp becomes useless"
			]),
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Channel Divinity: Repel Metal",
			source: ["CW:HD", 2],
			minlevel : 6,
			description : desc([
				"As an action, you can magnetically repel metal",
				"You gain resistance to damage from weapons made from metal for 1 minute"
			]),
			action : ["action", ""]
		},
		"subclassfeature8" : {
			name : "Metallic Enhancement",
			source : ["CW:HD", 2],
			minlevel : 8,
			description : "\n   " + "Once per turn, when I hit a creature with a weapon attack, I can do extra damage",
			additional : levels.map(function (n) {
				if (n < 8) return "";
				return "+" + (n < 14 ? 1 : 2) + "d8 of weapon's damage type";
			}),
			calcChanges : {
				atkAdd : ["if (classes.known.cleric && classes.known.cleric.level > 7 && !isSpell) {fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 damage'; }; ", "Once per turn, I can have one of my weapon attacks that hit do extra weapon's damage type."]
			}
		},
			calcChanges : {
				atkAdd : ["if (classes.known.cleric && classes.known.cleric.level > 7 && !isSpell) {fields.Description += (fields.Description ? '; ' : '') + 'Once per turn +' + (classes.known.cleric.level < 14 ? 1 : 2) + 'd8 damage'; }; ", "Once per turn, I can have one of my weapon attacks that hit do extra weapon's damage type."]
			},
		"subclassfeature17" : {
			name : "Graft",
			source: ["CW:HD", 2],
			minlevel : 17,
			description : desc([
				"You can permanently enhance a creature’s armor class by 1 with a DC 15 Medicine check as you apply grafts of divine metal to their body over the course of 1 hour",
				"The process is extremely painful and hideous",
				"Creatures must either be helpless, restrained, unconscious, willing, or dead to apply such modifications",
				"Such surgery will awaken unconscious or sleeping creatures instantly"
			]),
		}
	}
}
);