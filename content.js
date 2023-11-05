const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'style.css';
document.head.appendChild(link);


// Błędy i ich rozwiązania
const errors = {
  "email: required": "<p>Należy w tej sytuacji zweryfikować poprawność adresu e-mail podanego przez sklep w danych adresowych, które są przekazywane jako nadawcze na etykietę - czy adres e-mail jest podany oraz czy domena, podana dla adresu e-mail, jest prawidłowa. Dane nadawcze mogą być pobierane z danych kontaktowych sklepu, domyślnych danych do dokumentów sprzedaży lub z danych magazynu, z którego odbywa się wysyłka zamówienia.</p><p> Sprawdzisz to w konfiguracji kuriera w sekcji: <p><strong> ADMINISTRACJA > Magazyn i logistyka > Konfiguracja kurierów > Polska > InPost > wybierz usługę. </strong></p><p>Dodatkowo, jeśli adres e-mail w danych adresowych jest podany, należy nadpisać zmiany i spróbować wygenerować etykietę w zamówieniu jeszcze raz.</p>",
  "email: invalid": "Należy w tej sytuacji zweryfikować poprawność adresu e-mail"
};

// Funkcja do wyświetlania popupa
function showPopup(message) {
	
  // Usuń poprzednie popupy, jeśli istnieją
  document.querySelectorAll('.popup, .popup2').forEach(popup => popup.remove());
  document.querySelectorAll('#windowTopLayer').forEach(element => element.remove());
  
  const popup = document.createElement('div');
  popup.className = "popup";
  popup.innerHTML = `
    <p>Czy pomóc w obsłudze komunikatu?</p>
    <div class="buttons">
      <button id="yesButton" class="transparent-button">Tak</button>
      <button id="noButton" class="transparent-button">Nie</button>
    </div>
  `;
  
  const popup2 = document.createElement('div');
  popup2.className = "popup2"; 
  popup2.style.display = "none";
  popup2.innerHTML = `
    <p>${message}</p> 
    <div class="buttons">
      <button id="closeButton" class="transparent-button">Zapoznałem/am się z informacjami</button>
    </div>
  `;
  
  document.body.appendChild(popup);
  document.body.appendChild(popup2); 

  document.getElementById('noButton').addEventListener('click', function() {
    popup.remove(); 
  });

  document.getElementById('yesButton').addEventListener('click', function() {
    popup.remove();
    popup2.style.display = "block"; 
  });

  document.getElementById('closeButton').addEventListener('click', function() {
    popup.remove();
	popup2.remove(); 
  });
}

const observer = new MutationObserver((mutations) => {
  for (let mutation of mutations) {
    if (mutation.type === "childList") {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE) {
          const textContent = node.nodeType === Node.ELEMENT_NODE ? node.textContent : node.nodeValue;
          Object.keys(errors).forEach((error) => {
            if (textContent.includes(error)) {
              showPopup(errors[error]);
            }
          });
        }
      });
    }
  }
});

observer.observe(document.body, { childList: true, subtree: true });

