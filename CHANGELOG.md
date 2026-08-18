# Changelog

Wszystkie znaczące zmiany w projekcie będą dokumentowane w tym pliku.

## [0.3] - Ostatnie zmiany

### Nowości i ulepszenia
- **Dashboard**: Wdrożono tymczasowy układ zastępujący starą grafikę.
- **Dashboard**: Zaimplementowano eksperymentalny widget lokalnej pogody pobierający dane z Open-Meteo.
- **Wyszukiwarka mobilna**: Stworzono dedykowany, pełnoekranowy widok mobilny, rozwiązujący problem zasłaniania wyników przez systemową klawiaturę.
- **Motywy**: Udoskonalono architekturę opartą o React Context. Zmiana motywu natychmiast synchronizuje Pasek Nawigacji, Wyszukiwarkę oraz Dashboard.

### UI/UX & Design
- **Wyszukiwarka**: Optymalizacja efektu rozmycia. Okno przeniesiono do React Portalu, dzięki czemu poprawnie rozmywa całe tło aplikacji.
- **Wyszukiwarka**: Dodano obsługę nawigacji klawiaturą (strzałki, enter, tab) oraz poprawiono wyświetlanie paska przewijania.
- **Nawigacja mobilna**: Przebudowano dolny pasek nawigacji. Poprawiono marginesy i dodano ikonkę wyszukiwarki oddzieloną separatorem.
- **Landing Page**: Zwiększono czytelność paska nawigacji w trybie ciemnym (dodano obramowanie i cień oddzielający od tła).
- Oczyszczono układ ogłoszeń na panelu głównym (komunikat o wersji Beta).

### Poprawki błędów
- Naprawiono błąd znikającej, aktywnej pastylki w pasku nawigacji podczas zmiany rozmiaru okna przeglądarki.
- Przywrócono widoczność ikony logo Smart Campus w menu profilu oraz wymuszono jej poprawny wygląd w stopce Landing Page w trybie ciemnym.
- Naprawiono wyświetlanie polskich znaków na Landing Page.
- Naprawiono globalny skrypt wpisywania i wyświetlania wersji aplikacji.

### Wydajność
- **Lazy Loading**: Wdrożono Code Splitting w głównym routerze. Podstrony ładują się na żądanie, co znacznie przyspiesza start aplikacji.
- **Kompresja Brotli**: Zoptymalizowano wagę plików wynikowych `.js` i `.css` zmniejszając je o ok. 70%.
- **Obrazy WebP**: Przekonwertowano ciężkie grafiki PNG na format WebP, oszczędzając prawie 5 MB podczas pierwszego ładowania strony.

### Utrzymanie projektu
- Uporządkowano import ikon, usuwając stary link FontAwesome CDN z pliku `index.html`.
- Oczyszczono projekt z nieużywanych paczek i zależności (m.in. `axios`, `sharp`, paczki TypeScriptu).
