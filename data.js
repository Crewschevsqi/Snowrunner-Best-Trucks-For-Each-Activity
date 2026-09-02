const CATEGORIES = [
  "Scouts",
  "Logging",
  "Special Trailers",
  "Water Transportation",
  "Overloading",
  "Farming"
];

const VEHICLES = [
  // ---- Pojazdy dodane przez użytkownika (lista ze zrzutów ekranu) ----
  // Status odblokowania i region NIE zostały podane w źródle — pola
  // "unlocked"/"region" ustawione są tymczasowo na false/"" (pokaże się
  // "Region: —"). Uzupełnij te dane, jeśli je znasz.
  // Te same modele pojazdów pojawiają się w kilku kategoriach (bo w grze
  // mogą wykonywać kilka rodzajów zadań) — dlatego mają osobne wpisy
  // z unikalnym "id" dla każdej kategorii.

// -- Scouts --
  { id: "Tatarin", name: "Tuz 420 Tatarin", category: "Scouts", unlocked: false, region: "Zimnegorsk, Taymyr", image: "images/tatarin.jpg" },

  // -- Logging --
  { id: "aramatsu_forester_logging", name: "Aramatsu Forester", category: "Logging", unlocked: false, region: "The Lowland, Maine", image: "images/aramatsu.jpg" },
  { id: "kenworth_963_logging", name: "Kenworth 963", category: "Logging", unlocked: false, region: "Duncan Bay, British Columbia", image: "images/kennylog.jpg" },
  { id: "tayga_6455b_logging", name: "Tayga 6455B", category: "Logging", unlocked: false, region: "The Lowland, Maine", image: "images/taygalog.png" },
  { id: "plad_450_logging", name: "Plad 450", category: "Logging", unlocked: false, region: "Zherbai Quarries, Almaty", image: "images/plad450log.jpg" },
  { id: "azov_73210_logging", name: "Azov 73210", category: "Logging", unlocked: true, region: "", image: "images/73210log.jpg" },
  { id: "zikz_612h_logging", name: "ZikZ 612H", category: "Logging", unlocked: false, region: "Mastodon DLC", image: "images/612log.jpg" },
  { id: "mack_pinnacle_logging", name: "Mack Pinnacle", category: "Logging", unlocked: false, region: "Mack Dual Pack DLC", image: "images/mackp.jpg" },

  // -- Water Transportation --
  { id: "derry_special_water", name: "Derry Special 15C-177", category: "Water Transportation", unlocked: false, region: "The Albany River, Ontario", image: "images/derrywater.jpg" },
  { id: "zikz_612h_water", name: "ZikZ 612H", category: "Water Transportation", unlocked: false, region: "Mastodon DLC", image: "images/Zikz 612h.jpg" },

  // -- Overloading --
  { id: "kenworth_963_overloading", name: "Kenworth 963", category: "Overloading", unlocked: false, region: "Duncan Bay, British Columbia", image: "images/kennyover.jpg" },
  { id: "zikz_612h_overloading", name: "ZikZ 612H", category: "Overloading", unlocked: false, region: "Mastodon DLC", image: "images/612hover.jpg" },
  { id: "azov_73210_overloading", name: "Azov 73210", category: "Overloading", unlocked: true, region: "", image: "images/azov73210over.jpg" },
  { id: "azov_atom_overloading", name: "Azov Atom", category: "Overloading", unlocked: false, region: "Azov Atom DLC", image: "images/atomover.png" },
  { id: "paystar_5600ts_overloading", name: "International Paystar 5600 TS", category: "Overloading", unlocked: false, region: "Grainwoods River, Wisconsin", image: "images/5600over.jpg" },

  // -- Special Trailers --
  { id: "zikz_605r_trailers", name: "ZikZ 605R", category: "Special Trailers", unlocked: false, region: "Cosmodrome, Amur", image: "images/zikz605r.jpg" },
  { id: "zikz_612h_trailers", name: "ZikZ 612H", category: "Special Trailers", unlocked: false, region: "Mastodon DLC", image: "images/zikzspecial.jpg" },
  { id: "plad_450_trailers", name: "Plad 450", category: "Special Trailers", unlocked: false, region: "Zherbai Quarries, Almaty", image: "images/plad450.jpg" },
  { id: "kolob_74760_trailers", name: "Kolob 74760", category: "Special Trailers", unlocked: true, region: "", image: "images/kolob74760.jpg" },
  { id: "derry_special_trailers", name: "Derry Special 15C-177", category: "Special Trailers", unlocked: false, region: "The Albany River, Ontario", image: "images/derry15c.jpg" },

  // -- Farming --
  { id: "futom_7290ra_farming", name: "Futom 7290 RA", category: "Farming", unlocked: false, region: "Foothills, Austria", image: "images/futom.jpg" }
];
