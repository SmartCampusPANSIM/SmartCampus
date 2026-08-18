# Ostateczny System Wersjonowania - Smart Campus (Wersja v7)

Upraszczamy wszystko do perfekcji! Usunąłem daty i godziny, aby nie komplikować niepotrzebnie procesu (pamiętając, że Git i tak sam trzyma czas każdego zapisu). Zostawiamy czysty, uporządkowany system oparty na numerach i literkach, a w gałęziach używamy słówka "upcoming".

## 1. Nazewnictwo Wersji (Format X.Y.Z)

Baza to zawsze **`X.Y.Z`** (Major.Minor.Patch). Wersja ma być zawsze pisana jednym ciągiem znaków.

* **Format 1: Czysty Standard (Nowe wydania i standardowe poprawki)**
  * *Schemat:* `X.Y.Z`
  * *Przykład:* `0.4.0`, `0.4.1`
  * *Kiedy używać:* Dla normalnych wydań i standardowych, większych poprawek. Zmiana liczby oznacza, że do aplikacji weszła widoczna nowość lub duża łata.

* **Format 2: Wariant Literowy (Poprawki do poprawek - Hotfix)**
  * *Schemat:* `X.Y.Z[litera]` (Litera jest *przyklejona* do ostatniej cyfry, zero spacji i myślników)
  * *Przykład:* `0.4.1a`, `0.4.1b`
  * *Kiedy używać:* Wydałeś `0.4.1`, ale okazało się, że jest tam jakaś literówka lub drobny błąd, który trzeba załatać w 5 minut. Zamiast zużywać kolejny numer (0.4.2), wydajesz mikropoprawkę `0.4.1a`. Kolejny taki mikrobłąd? `0.4.1b`.

---

## 2. Nazywanie Gałęzi Roboczych (Słówko `upcoming`)
Skoro rezygnujemy z wpisywania wersji w nazwy gałęzi (żeby uniknąć zamieszania, bo plany co do wersji potrafią się zmienić), wprowadzamy uniwersalne słówko oznaczające "nadchodzącą wersję":

* **Zadania i Nowości do nowej wersji:** `upcoming/`
  * *Przykład:* `upcoming/mapa-kampusu`
* **Poprawki i Łatki:** `fix/`
  * *Przykład:* `fix/przycisk-logowania`

*Dzięki takiemu nazewnictwu, patrząc na listę gałęzi od razu wiesz co to jest. Gdy gałąź skończy swoje zadanie i zostanie wgrana do głównego kanału, gałąź tę po prostu usuwamy, bo jej praca "wsiąka" w aplikację i czeka na wydanie z odpowiednim numerem.*

---

## 3. Kanały Dystrybucji
Kanały pozostają Twoimi torami publikacji (czyli 3 głównymi gałęziami, które trwają wiecznie):

* 🔵 **Dev (`dev`)** - Kod roboczy, poligon doświadczalny zespołu.
* 🟠 **Public Beta (`beta`)** - Przetestowane nowości trafiają tu, aby mogli sprawdzić je zaproszeni studenci.
* 🟢 **Main (`main`)** - Kod kuloodporny dla każdego. Najczęściej widnieją tu wersje bez literowych dopisków (np. `0.4.0`).
