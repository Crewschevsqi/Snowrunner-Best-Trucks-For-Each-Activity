/* =====================================================================
   DANE POJAZDÓW I KATEGORII
   =====================================================================
   To jest JEDYNE miejsce, w którym należy edytować zawartość aplikacji.
   Użytkownicy strony NIE mają możliwości dodawania / edytowania / usuwania
   pojazdów z poziomu interfejsu — to celowe. Aby coś zmienić, edytuj ten
   plik w kodzie źródłowym i wypchnij zmiany na GitHub.

   1) CATEGORIES — lista nazw kategorii, w kolejności wyświetlania.
   2) VEHICLES   — lista pojazdów. Każdy obiekt:
        id        — unikalny identyfikator (bez spacji, np. "scout_800")
        name      — nazwa wyświetlana
        category  — musi dokładnie odpowiadać jednej z nazw w CATEGORIES
        unlocked  — true = dostępny od początku gry, false = trzeba odblokować
        region    — wymagane tylko gdy unlocked = false (gdzie/jak odblokować)
        image     — (opcjonalnie) ścieżka do zdjęcia w folderze images/,
                    np. "images/scout_800.jpg". Jeśli pominiesz albo plik nie
                    istnieje, pokaże się domyślna ikonka.

   Poniżej znajdują się PRZYKŁADOWE dane demonstracyjne — nazwy i regiony
   są przykładowe/fikcyjne, podmień je na prawdziwe dane z gry.
   ===================================================================== */

const CATEGORIES = [
  "Scouts",
  "Logging",
  "Special Trailers",
  "Water Transportation",
  "Overloading",
  "Trailers",
  "Farming"
];

const VEHICLES = [
  // ---- Scouts ----
  {
    id: "scout_800",
    name: "Scout 800",
    category: "Scouts",
    unlocked: true,
    region: "",
    image: "images/scout_800.jpg"
  },
  {
    id: "trail_runner_gx",
    name: "Trail Runner GX",
    category: "Scouts",
    unlocked: false,
    region: "Michigan — kontrakt sponsorski",
    image: "images/trail_runner_gx.jpg"
  },
  {
    id: "pathfinder_4x4",
    name: "Pathfinder 4x4",
    category: "Scouts",
    unlocked: false,
    region: "Kola Peninsula — punkt obserwacyjny",
    image: ""
  },

  // ---- Logging ----
  {
    id: "timber_king_t4",
    name: "Timber King T4",
    category: "Logging",
    unlocked: true,
    region: "",
    image: "images/timber_king_t4.jpg"
  },
  {
    id: "log_hauler_pro",
    name: "Log Hauler Pro",
    category: "Logging",
    unlocked: false,
    region: "Alaska — zadanie transportowe",
    image: ""
  },
  {
    id: "forestline_88",
    name: "Forestline 88",
    category: "Logging",
    unlocked: false,
    region: "Taymyr — poziom reputacji 3",
    image: ""
  },

  // ---- Special Trailers ----
  {
    id: "flatbed_trailer_s1",
    name: "Flatbed Trailer S1",
    category: "Special Trailers",
    unlocked: true,
    region: "",
    image: "images/flatbed_trailer_s1.jpg"
  },
  {
    id: "fuel_tanker_trailer",
    name: "Fuel Tanker Trailer",
    category: "Special Trailers",
    unlocked: false,
    region: "Wisconsin — kontrakt magazynowy",
    image: ""
  },
  {
    id: "container_carrier_x2",
    name: "Container Carrier X2",
    category: "Special Trailers",
    unlocked: false,
    region: "Don — ukończenie zadania pobocznego",
    image: ""
  },

  // ---- Prawdziwe pojazdy z SnowRunnera (dodane na podstawie ogólnodostępnych
  //      informacji) — warto zweryfikować dokładny region/warunek odblokowania,
  //      bo mógł się zmienić wraz z aktualizacjami i sezonowymi DLC. ----
  {
    id: "khan_39_marshall",
    name: "Khan 39 Marshall",
    category: "Scouts",
    unlocked: true,
    region: "",
    image: ""
  },
  {
    id: "earthroamer_lti",
    name: "EarthRoamer LTi",
    category: "Scouts",
    unlocked: false,
    region: "Po ukończeniu kontraktu \"Taking Stock of the Damage\" (Sezon 14: Reap & Sow)",
    image: ""
  },
  {
    id: "gmc_mh9500",
    name: "GMC MH9500",
    category: "Logging",
    unlocked: false,
    region: "Michigan — dostępny w warsztacie od początku regionu",
    image: ""
  },
  {
    id: "international_transtar_4070a",
    name: "International Transtar 4070A",
    category: "Logging",
    unlocked: false,
    region: "Michigan — punkt handlowy",
    image: ""
  },
  {
    id: "caterpillar_ct680",
    name: "Caterpillar CT680",
    category: "Special Trailers",
    unlocked: false,
    region: "Wisconsin — dostępny w warsztacie",
    image: ""
  },

  // ---- Pojazdy dodane przez użytkownika (lista ze zrzutów ekranu) ----
  // Status odblokowania i region NIE zostały podane w źródle — pola
  // "unlocked"/"region" ustawione są tymczasowo na false/"" (pokaże się
  // "Region: —"). Uzupełnij te dane, jeśli je znasz.
  // Te same modele pojazdów pojawiają się w kilku kategoriach (bo w grze
  // mogą wykonywać kilka rodzajów zadań) — dlatego mają osobne wpisy
  // z unikalnym "id" dla każdej kategorii.

  // -- Logging --
  { id: "aramatsu_forester_logging", name: "Aramatsu Forester", category: "Logging", unlocked: false, region: "", image: "" },
  { id: "kenworth_963_logging", name: "Kenworth 963", category: "Logging", unlocked: false, region: "", image: "" },
  { id: "tayga_6455b_logging", name: "Tayga 6455B", category: "Logging", unlocked: false, region: "", image: "" },
  { id: "plad_450_logging", name: "Plad 450", category: "Logging", unlocked: false, region: "", image: "" },
  { id: "azov_73210_logging", name: "Azov 73210", category: "Logging", unlocked: false, region: "", image: "" },
  { id: "zikz_612h_logging", name: "ZikZ 612H", category: "Logging", unlocked: false, region: "", image: "" },

  // -- Water Transportation --
  { id: "derry_special_water", name: "Derry Special", category: "Water Transportation", unlocked: false, region: "", image: "" },
  { id: "zikz_612h_water", name: "ZikZ 612H", category: "Water Transportation", unlocked: false, region: "Mastodon DLC", image: "images/Zikz 612h.jpg" },

  // -- Overloading --
  { id: "kenworth_963_overloading", name: "Kenworth 963", category: "Overloading", unlocked: false, region: "", image: "" },
  { id: "zikz_612h_overloading", name: "ZikZ 612H", category: "Overloading", unlocked: false, region: "", image: "" },
  { id: "azov_73210_overloading", name: "Azov 73210", category: "Overloading", unlocked: false, region: "", image: "" },
  { id: "azov_atom_overloading", name: "Azov Atom", category: "Overloading", unlocked: false, region: "", image: "" },
  { id: "paystar_5600ts_overloading", name: "Paystar 5600 TS", category: "Overloading", unlocked: false, region: "", image: "" },

  // -- Trailers --
  { id: "zikz_605r_trailers", name: "ZikZ 605R", category: "Trailers", unlocked: false, region: "", image: "" },
  { id: "zikz_612h_trailers", name: "ZikZ 612H", category: "Trailers", unlocked: false, region: "Mastodon DLC", image: "" },
  { id: "plad_450_trailers", name: "Plad 450", category: "Trailers", unlocked: false, region: "", image: "" },
  { id: "kolob_74760_trailers", name: "Kolob 74760", category: "Trailers", unlocked: true, region: "", image: "" },
  { id: "derry_special_trailers", name: "Derry Special", category: "Trailers", unlocked: false, region: "", image: "" },

  // -- Farming --
  { id: "futom_7290ra_farming", name: "Futom 7290 RA", category: "Farming", unlocked: false, region: "Foothills, Austria", image: "" }
];
