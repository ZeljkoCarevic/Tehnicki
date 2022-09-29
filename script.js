const container = document.querySelector(".container");

let btn = document.createElement("button");
let btnClose = document.createElement("button");
btnClose.innerHTML = "Zatvori";

btn.innerHTML = "Vidi vise";

const persons = [
  {
    name: "sime anic",
    OIB: 112345,
    date: "01.5.2020",
  },
  {
    name: "Marko Livaja",
    OIB: 1245,
    date: "01.24.3421",
  },
  {
    name: "Zarko Zarkovic",
    OIB: 1235432523,
    date: "01.21.2002",
  },
  {
    name: "Milo Hrnic",
    OIB: 213123123,
    date: "25.8.1999",
  },
];

persons.forEach((el, i) => {
  container.insertAdjacentHTML(
    "afterbegin",
    `<div class="person">
        <p>${4 - i}</p>
        <p>${el.name}</p>
        <p>${el.OIB}</p>
        <p>${el.date}</p>
    </div>`
  );
});

const person = document.querySelectorAll(".person");
const popup = document.querySelector(".popup");

const personPopup = function (person) {
  if (parent.includes(person)) {
    popup.style.opacity = 1;
    console.log();
    popup.insertAdjacentHTML(
      "afterbegin",
      `
         <p>Ime i prezime:${split[2].replace(/[<p>, </p>]/g, " ")}</p>
        <p>OIB:${split[3].replace(/[<p>, </p>]/g, " ")}</p>
        <p>Datum rodenja:${split[4].replace(/[<p>, </p>]/g, " ")}</p>
        
        `
    );
    popup.appendChild(btnClose);
    if ((popup.style = "opacity")) {
      container.style.opacity = 0.5;
    }
  }
};

for (per of person) {
  container.appendChild(per);
  per.appendChild(btn.cloneNode(true));

  per.addEventListener("click", function (e) {
    if (e.path.length === 8) {
      parent = e.target.parentNode.innerHTML;
      split = parent.split(/\r?\n/);
    }
    personPopup("Milo Hrnic");
    personPopup("Zarko Zarkovic");
    personPopup("Marko Livaja");
    personPopup("sime anic");

    popup.style.removeProperty("opacity");
  });
}

btnClose.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.innerHTML = "";
  container.style.opacity = 1;
});
