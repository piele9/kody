# Obsługa błędów formularza i wyświetlanie popupów

Ten projekt zawiera skrypty do dynamicznego ładowania arkusza stylów CSS oraz obsługi błędów w formularzu z wyświetlaniem popupów zawierających odpowiednie komunikaty dla użytkownika.

## Jak działa kod?

Kod zawiera kilka kluczowych części:

1. **Ładowanie arkusza stylów**: Skrypt tworzy nowy element `<link>` i dodaje go do `<head>` dokumentu, aby załadować zewnętrzny arkusz stylów `style.css`.

    ```javascript
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'style.css';
    document.head.appendChild(link);
    ```

2. **Mapa błędów i ich rozwiązań**: Obiekt `errors` zawiera komunikaty błędów i ich opisy, które mogą być wyświetlane użytkownikowi.

    ```javascript
    const errors = {
      "email: required": "Należy w tej sytuacji zweryfikować poprawność adresu e-mail...",
      "email: invalid": "Należy w tej sytuacji zweryfikować poprawność adresu e-mail..."
      // inne błędy i rozwiązania
    };
    ```

3. **Funkcja do wyświetlania popupów**: `showPopup` jest funkcją, która odpowiedzialna jest za wyświetlenie komunikatów w popupie na ekranie użytkownika.

    ```javascript
    function showPopup(message) {
      // Usuwanie poprzednich popupów, jeśli istnieją
      // Wyświetlanie nowego popupa z komunikatem
      // Kod obsługi przycisków w popupie
    }
    ```

4. **Observer DOM**: `MutationObserver` nasłuchuje na zmiany w strukturze DOM i wyświetla odpowiednie popupy, gdy wykryje tekst błędu na stronie.

    ```javascript
    const observer = new MutationObserver((mutations) => {
      // Kod obsługujący wykrycie mutacji i wyświetlenie popupa
    });

    observer.observe(document.body, { childList: true, subtree: true });
    ```

## Jak używać?

Aby skorzystać z tego skryptu, dodaj go do swojego projektu HTML i upewnij się, że masz w projekcie plik `style.css` z odpowiednimi stylami dla popupów.

Po dodaniu skryptu i arkusza stylów do projektu, każdy wykryty błąd zdefiniowany w obiekcie `errors` zostanie automatycznie wyświetlony w formie popupu na stronie.

## Wymagania

- Przeglądarka z obsługą JavaScript ES6.
- Plik `style.css` zawierający style dla klas `.popup` i `.popup2`.

---

**Wszystkie prawa zastrzeżone.**
