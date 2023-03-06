window.onload = function () {
  // 21) Date le variabili x = "John" e y = "Doe", mostra in console "John <> Doe"
  let x = "John",
    y = "Doe";
  console.log(x + " <> " + y);

  //22) Crea un oggetto con le seguenti proprietà: name, surname, email
  let obj = {
    name: "Mario",
    surname: "Rossi",
    email: "mariorossi@gmail.com",
  };

  //23) Cancella la proprietà email dall'oggetto appena creato
  delete obj.email;

  //24) Crea un array contenente 10 stringhe
  let arrayOfStrings = [
    "ciao",
    "come",
    "ti",
    "senti",
    "oggi",
    "amico",
    "mio",
    "?",
    "vuoi",
    "uscire",
  ];

  //25) Mostra in console ogni stringa del precedente array
  arrayOfStrings.forEach((str) => {
    console.log(str);
  });

  console.log("\n");

  //26) Crea un array contenente 100 numeri random
  let randomNumbers = [];

  for (let i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 10));
  }
  console.log(randomNumbers);

  // 27) Scrivi una funzione per trovare il valore massimo e il valore minimo dall'array appena creato
  function findMaxAndMin(array) {
    let max = 0;
    let min = 0;

    array.forEach((element) => {
      if (element < min) min = element;
      if (element > max) max = element;
    });

    return [min, max];
  }
  let results = findMaxAndMin(randomNumbers);
  console.log("Max: " + results[1] + " Min: " + results[0]);

  //28) Crea un array di array, nel quale ogni array "figlio" ha 10 numeri random
  let items = [[], [], [], [], [], [], [], [], [], []];

  items.forEach((array) => {
    for (let i = 0; i < 10; i++) {
      array.push(Math.floor(Math.random() * 10));
    }
  });
  console.log(items);

  //29)Crea una funzione che riceve 2 array come parametri e ritorni quello con più elementi
  function findLongest(array1, array2) {
    if (array1.length > array2.length) {
      return array1;
    } else if (array1.length < array2.length) {
      return array2;
    } else {
      return "stessa dimensione!";
    }
  }

  //30) Crea una funzione che riceve 2 array numerici come parametri e ritorna quello con la somma totale degli elementi maggiore
  function findLongest(array1, array2) {
    let somma1 = 0;
    let somma2 = 0;
    array1.forEach((el) => {
      somma1 += el;
    });
    array2.forEach((el) => {
      somma2 += el;
    });
    if (somma1 > somma2) {
      return array1;
    } else if (somma1 < somma2) {
      return array2;
    } else {
      return "stessa somma!";
    }
  }

  //31) Seleziona l'elemento con id "container" nella pagina
  let container = document.querySelector("#container");

  //32) Seleziona tutti gli elementi di tipo <td> nella pagina
  let allTD = document.querySelectorAll("td");
  console.log(allTD);

  //33) Usa un ciclo per stampare in console il testo contenuto in ogni elemento <td> nella pagina
  allTD.forEach((td) => {
    console.log(td.innerText);
  });

  //34) Scrivi una funzione per cambiare il titolo della pagina
  function changePageTitle(newTitle) {
    let title = document.querySelector("title");
    title.innerText = newTitle;
  }

  changePageTitle("Ciaoo");

  //35) Scrivi una funzione per aggiungere una nuova riga alla tabella nella pagina
  function addRow() {
    let table = document.querySelector("table");

    let newRow = table.insertRow();

    let newCell = newRow.insertCell();
    let newCell2 = newRow.insertCell();
    let newCell3 = newRow.insertCell();
    let newCell4 = newRow.insertCell();
    let newCell5 = newRow.insertCell();

    let newText = document.createTextNode("riga");
    let newText2 = document.createTextNode("aggiunta");
    let newText3 = document.createTextNode("con");
    let newText4 = document.createTextNode("javascript");
    let newText5 = document.createTextNode("dinamicamente");

    newCell.appendChild(newText);
    newCell2.appendChild(newText2);
    newCell3.appendChild(newText3);
    newCell4.appendChild(newText4);
    newCell5.appendChild(newText5);
  }
  addRow();

  //36) Scrivi una funzione per aggiungere la classe "test" ad ogni riga nella tabella
  function addClass() {
    let rows = document.querySelectorAll("tr");
    rows.forEach((row) => {
      row.classList.add("test");
    });
  }

  addClass();

  //37) Scrivi una funzione per aggiungere uno sfondo rosso a ogni link presente nella pagina
  function addBackGround() {
    let a = document.querySelectorAll("a");
    a.forEach((link) => {
      link.style.backgroundColor = "red";
    });
  }

  addBackGround();

  //38) Mostra in console "Page loaded" quando la pagina ha finito di caricarsi
  console.log("page loaded");

  //39) Scrivi una funzione per aggiungere nuovi elementi alla lista non ordinata nella pagina
  function addElementToList() {
    let list = document.querySelector("ul");
    let element = document.createElement("li");
    element.innerText = "nuovo elemento aggiunto con js";
    list.appendChild(element);
  }

  addElementToList();

  //40) Scrivi una funzione per svuotare una lista nella pagina

  //   function emptyList() {
  //     let list = document.querySelector("ul");
  //     while (list.firstChild) {
  //       list.removeChild(list.firstChild);
  //     }
  //   }

  //   emptyList();

  //   41) Aggiungi un event listener in modo che compaia un alert quando il cursore passa sopra un link; l'alert deve mostrare la sua proprietà href

  //   let a = document.querySelectorAll("a");
  //   a.forEach((a) => {
  //     a.addEventListener("mouseover", (event) => {
  //       alert(a.href);
  //     });
  //   });

  //42) Crea un bottone che una volta cliccato nasconde ogni immagine nella pagina
  let button = document.querySelector("button");
  button.addEventListener("click", () => {
    let images = document.querySelectorAll("img");
    images.forEach((img) => {
      img.style.visibility = "hidden";
    });
  });

  //43) Crea un bottone che una volta cliccato nasconde o mostra la tabella nella pagina
  let toggleTable = document.querySelector(".toggleTable");
  let table = document.querySelector("table");

  toggleTable.addEventListener("click", (event) => {
    if (table.classList.contains("hide")) {
      table.classList.remove("hide");
    } else {
      table.classList.add("hide");
    }
  });

  // 44) Crea una funzione per calcolare la somma di ogni numero contenuto in tutte le celle della tabella (se il contenuto è un numero)

  function sumEveryCell() {
    let sum = 0;
    let table = document.querySelector("table");
    let tds = table.querySelectorAll("td");
    tds.forEach((td) => {
      if (!isNaN(+td.innerText)) {
        sum += +td.innerText;
      }
    });
    console.log("La somma dei numeri in tabella è: ", sum);
  }

  sumEveryCell();

  //45) Cancella l'ultima lettera dal titolo della pagina ogni volta che l'utente ci clicca sopra
  let title = document.querySelector("h1");
  let arrayOfLetters = title.innerText.split("");

  function deleteLastLetter() {
    console.log(title);
    title.addEventListener("click", (event) => {
      arrayOfLetters.pop();
      console.log(arrayOfLetters);
      title.innerText = arrayOfLetters.join("");
    });
  }

  deleteLastLetter();

  //46) Aggiungi un event listener in modo che cliccando un <td> nella pagina, questo cambi colore di sfondo

  function changeBgColor() {
    let table = document.querySelector("table");
    let tds = table.querySelectorAll("td");

    tds.forEach((td) => {
      td.addEventListener("click", (event) => {
        td.style.backgroundColor = "cyan";
      });
    });
  }

  changeBgColor();

  //47) Aggiungi un bottone che una volta cliccato elimini un <td> a caso nella tabella

  let btn = document.querySelector(".deleteRandom");

  btn.addEventListener("click", () => {
    let table = document.querySelector("table");
    let tds = table.querySelectorAll("td");

    let randomNumber = Math.floor(Math.random() * tds.length);
    tds[randomNumber].style.visibility = "hidden";
  });

  //48) Aggiungi automaticamente un bordo rosa ad una cella della tabella quando il cursore ci passa sopra

  function addPinkBorder() {
    let table = document.querySelector("table");
    let tds = table.querySelectorAll("td");

    tds.forEach((td) => {
      td.addEventListener("mouseover", (event) => {
        td.style.border = "1px solid pink";
      });
    });
  }

  addPinkBorder();

  //49) Scrivi una funzione per creare una tabella con 4 righe e 3 colonne e aggiungerla alla fine della pagina

  function createTable() {
    let body = document.querySelector("body");
    let table = document.createElement("table");

    for (let i = 0; i < 4; i++) {
      let tr = table.insertRow();
      for (let j = 0; j < 3; j++) {
        let td = tr.insertCell();
        td.appendChild(document.createTextNode(`Cell I${i}/J${j}`));
        td.style.border = "1px solid black";
      }
    }
    table.style.marginTop = "20px";
    body.appendChild(table);
  }

  createTable();

  //50) Scrivi una funzione per rimuovere l'ultima tabella presente nella pagina

  function removeLastTable() {
    let body = document.querySelector("body");
    if (body.lastChild.tagName.toLowerCase() == "table") {
      body.lastChild.remove(body.lastChild.tagName);
    }
  }

  removeLastTable();
};
