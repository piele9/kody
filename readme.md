<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Instrukcja Obsługi Skryptu Integracyjnego</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        h1, h2 {
            color: #333;
        }
        pre {
            background-color: #f7f7f7;
            border: 1px solid #e1e1e8;
            padding: 10px;
            border-radius: 5px;
        }
    </style>
</head>
<body>

    <h1>Instrukcja Obsługi Skryptu Integracyjnego</h1>
    <p>Ten dokument opisuje sposób działania oraz instrukcję obsługi skryptu integracyjnego, który jest zaprojektowany do automatyzacji dodawania arkusza stylów CSS do dokumentu HTML oraz obsługi błędów w aplikacji internetowej.</p>
    
    <h2>Opis</h2>
    <p>Skrypt wykonuje dwie główne funkcje:</p>
    <ol>
        <li><strong>Dynamiczne dodawanie arkusza stylów CSS</strong> - skrypt automatycznie dodaje arkusz stylów do dokumentu HTML.</li>
        <li><strong>Wykrywanie i obsługa błędów</strong> - skrypt monitoruje strukturę DOM w poszukiwaniu błędów i informuje o nich użytkownika.</li>
    </ol>
    
    <h2>Jak to działa</h2>
    <h3>Dodanie arkusza stylów:</h3>
    <pre><code>const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'style.css';
document.head.appendChild(link);
</code></pre>
    
    <h3>Obsługa błędów:</h3>
    <p>Obiekt <code>errors</code> zawiera definicje błędów i ich opisy:</p>
    <pre><code>const errors = {
  "email: required": "&lt;p&gt; ... &lt;/p&gt;",
  "email: invalid": "Należy w tej sytuacji zweryfikować poprawność adresu e-mail"
};
</code></pre>
    
    <p>Funkcja <code>showPopup</code> jest odpowiedzialna za wyświetlanie popupów z komunikatami:</p>
    <pre><code>function showPopup(message) {
  // Kod funkcji
}
</code></pre>
    
    <p><code>MutationObserver</code> nasłuchuje zmian w DOM i reaguje na błędy:</p>
    <pre><code>const observer = new MutationObserver((mutations) => {
  // Kod nasłuchiwania i reakcji na błędy
});
observer.observe(document.body, { childList: true, subtree: true });
</code></pre>
    
    <h2>Instalacja</h2>
    <ol>
        <li>Skopiuj kod skryptu do pliku JavaScript w projekcie.</li>
        <li>Umieść plik <code>style.css</code> w odpowiednim katalogu.</li>
        <li>Dołącz skrypt do strony HTML, najlepiej przed tagiem <code>&lt;/body&gt;</code>.</li>
    </ol>
    
    <h2>Sposób Użycia</h2>
    <p>Po dołączeniu skryptu do strony, działa on automatycznie. Nie wymaga dodatkowej konfiguracji czy inicjalizacji.</p>
    
    <h2>Licencja i Prawa Autorskie</h2>
    <p>Wszelkie prawa zastrzeżone. Użytkowanie, kopiowanie, modyfikacja, rozpowszechnianie oraz wykorzystanie skryptu jest dozwolone wyłącznie zgodnie z warunkami ustalonymi przez właściciela praw autorskich.</p>

</body>
</html>
