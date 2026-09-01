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
