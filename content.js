const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'style.css';
document.head.appendChild(link);


// Błędy i ich rozwiązania
const errors = {
  "email: required": "<p>Wygląda na to, że nie wprowadziłeś adresu email w ustawieniach magazynu, z którego realizowana jest wysyłka.</p><p><strong>Przejdź do ustawień Magazynu M2:</strong></p> <p><a href='https://trening10.iai-shop.com/panel/stocks.php?action=edit&id=2' target='_blank'>[Przejdź]</a>, a następnie uzupełnij w danych kontaktowych pole: adres email.</p>",
  "email: invalid": "<p>Należy w tej sytuacji zweryfikować poprawność adresu e-mail.</p>"
};

// Funkcja do wyświetlania popupa
function showPopup(message) {

  // Usuń poprzednie popupy, jeśli istnieją
  document.querySelectorAll('.popup, .popup2').forEach(popup => popup.remove());
  // Usunięcie PopUpu z Ido -> // document.querySelectorAll('#windowTopLayer').forEach(element => element.remove());

  const popup = document.createElement('div');
  popup.className = "popup";
  popup.innerHTML = `
    <p>Czy potrzebujesz pomocy z wydrukowaniem etykiety?</p>
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

  document.getElementById('noButton').addEventListener('click', function () {
    popup.remove();
  });

  document.getElementById('yesButton').addEventListener('click', function () {
    popup.remove();
    popup2.style.display = "block";
  });

  document.getElementById('closeButton').addEventListener('click', function () {
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

