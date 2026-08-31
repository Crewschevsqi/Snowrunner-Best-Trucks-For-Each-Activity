# Pojazdy — SnowRunner

Statyczna strona (bez backendu, bez bazy danych) do przeglądania pojazdów
z SnowRunnera podzielonych na kategorie. Zaprojektowana w minimalistycznym
stylu iOS i gotowa do zainstalowania jako aplikacja na ekranie głównym
telefonu (PWA — Progressive Web App).

**Ważne:** to wersja *tylko do odczytu*. Osoby odwiedzające stronę nie mogą
dodawać, edytować ani usuwać pojazdów z poziomu interfejsu — jedynym
sposobem zmiany zawartości jest edycja pliku `data.js` w kodzie źródłowym.

---

## 1. Struktura plików

```
index.html      – struktura strony
style.css       – wygląd (styl iOS, minimalistyczny)
app.js          – logika (tylko wyświetlanie danych)
data.js         – ⭐ TU EDYTUJESZ POJAZDY I KATEGORIE ⭐
manifest.json   – konfiguracja PWA (ikona, nazwa aplikacji)
sw.js           – obsługa trybu offline / instalacji
icons/          – ikony aplikacji
images/         – tu wrzucasz zdjęcia pojazdów
README.md       – ten plik
```

## 2. Jak dodać / zmienić pojazdy

Otwórz plik **`data.js`** i edytuj dwie listy:

- `CATEGORIES` — nazwy kategorii (kolejność = kolejność wyświetlania).
- `VEHICLES` — lista pojazdów. Każdy wpis wygląda tak:

```js
{
  id: "moj_pojazd",              // unikalny identyfikator, bez spacji
  name: "Nazwa pojazdu",
  category: "Scouts",            // musi pasować do nazwy z CATEGORIES
  unlocked: true,                // true = od startu gry, false = trzeba odblokować
  region: "",                    // wypełnij tylko gdy unlocked = false
  image: "images/moj_pojazd.jpg" // opcjonalnie, zostaw "" jeśli brak zdjęcia
}
```

W repozytorium znajdują się przykładowe (fikcyjne) dane demonstracyjne —
podmień je na prawdziwe nazwy i regiony z gry.

## 3. Jak dodać zdjęcia

Wrzuć pliki `.jpg` / `.png` do folderu `images/` i wpisz ich ścieżkę
w polu `image` danego pojazdu (np. `images/scania_74p.jpg`). Jeśli plik
nie istnieje albo pole zostanie puste, aplikacja pokaże domyślną ikonkę
zamiast zdjęcia — nic się nie wysypie.

## 4. Publikacja na GitHub Pages

1. Załóż nowe repozytorium na GitHub (np. `snowrunner-pojazdy`).
2. Wgraj do niego wszystkie pliki z tego folderu (zachowując strukturę,
   `index.html` musi być w głównym katalogu repozytorium).
3. Wejdź w **Settings → Pages** w repozytorium.
4. W sekcji „Build and deployment” wybierz **Deploy from a branch**,
   branch **main**, folder **/ (root)** → **Save**.
5. Po chwili GitHub poda adres strony, zwykle w formacie:
   `https://twoja-nazwa-uzytkownika.github.io/snowrunner-pojazdy/`
6. Każda zmiana w plikach (np. w `data.js`) i wypchnięcie jej (`git push`)
   automatycznie zaktualizuje działającą stronę po 1–2 minutach.

## 5. Instalacja jako aplikacja na telefonie

**iPhone / iPad (Safari):**
Otwórz stronę → przycisk **Udostępnij** (kwadrat ze strzałką) →
**Dodaj do ekranu początkowego**. Aplikacja uruchomi się w pełnym ekranie,
bez paska adresu przeglądarki.

**Android (Chrome):**
Otwórz stronę → menu (⋮) → **Dodaj do ekranu głównego** / **Zainstaluj
aplikację**.

**Komputer (Chrome/Edge):**
Ikona instalacji pojawi się w pasku adresu po prawej stronie.

## 6. Aktualizacje

Ponieważ strona działa też offline (dzięki `sw.js`), po wgraniu nowej
wersji danych czasem trzeba ręcznie odświeżyć aplikację (przeciągnięcie
w dół / wymuszone odświeżenie), żeby nowa wersja `data.js` się pobrała.
