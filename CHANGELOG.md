# Changelog

## [0.4.x] - Najnowsze poprawki UI / UX i wsparcie dla mobilnego Safari

### Naprawiono 
- **Problem nakładających się sekcji:** Rozwiązano problem na urządzeniach mobilnych, gdzie napisy (np. "Czym jest? Smart Campus") i logo nakładały się na zdjęcie budynku uczelni. Powodem był błąd zapadania się kontenerów flexbox używających procentowych wartości wysokości – wprowadzono bezpieczne reguły `height: auto` z odpowiednim zachowaniem `min-height`.
- **Ucinający się pasek nawigacyjny na iOS:** Usunięto przestarzały hack `transform: translateZ(0)` na pasku nawigacyjnym, który w połączeniu z `backdrop-filter` na nowszych urządzeniach Apple z silnikiem WebKit (Safari, iOS Chrome) powodował ucinanie grafiki (clipping bug) podczas przewijania.
- **Skaczący pasek nawigacyjny:** Zmieniono animację w `LandingNavBar.css` z `transition: all` na selektywną (`left`, `width`). Zapobiega to "gubieniu się" paska nawigacji podczas dynamicznego pokazywania i ukrywania się paska adresu na telefonie (co zmienia zmienną `safe-area-inset-top`).
- **Ekran logowania w trybie poziomym:** Usunięto sztywne blokowanie przewijania (`overflow: hidden` oraz `height: 100dvh`) na stronie logowania. Na urządzeniach z małą wysokością ekranu (np. telefon odwrócony poziomo) można teraz swobodnie przewijać stronę w dół, a przycisk logowania już się nie ucina.

### Dodano 
- **Poprawione zamykanie menu mobilnego:** Dodano skrypt wykrywający kliknięcia poza obszarem mobilnego rozwijanego paska nawigacji (`click-outside`). Menu teraz automatycznie chowa się po kliknięciu w dowolne miejsce na stronie.
- **Optymalizacja miejsca w pionie na ekranie logowania:** Dodano osobną regułę `@media (max-height: 500px)`, która na bardzo płaskich ekranach (orientacja horyzontalna telefonu) zacieśnia marginesy i niweluje puste przestrzenie wokół elementów formularza, aby zmieścić jak najwięcej kluczowych informacji w widoku bez przewijania.

### Zmieniono 
- **Czyszczenie CSS:** Usunięto niepotrzebne prefiksy `-webkit-` dla `backdrop-filter` i innych reguł, opierając się na nowoczesnym środowisku budowania (Vite/Autoprefixer), które dba o zgodność przeglądarek samodzielnie.
- **Wyrównanie i dystanse paska górnego:** Zrefaktoryzowano nadrzędny kontener nawigacji, zapewniając mu perfekcyjny odstęp od krawędzi uwzględniający notche/wycięcia na ekrany (`env(safe-area-inset-top)`). Oczyszczono plik `LandingPage.jsx` z pustych, niepotrzebnych sekcji udających marginesy.
