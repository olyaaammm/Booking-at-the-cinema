const buttonElem1 = document.querySelector('#open_1520');
const modalElem1 = document.querySelector('#modal1');

const buttonElem2 = document.querySelector('#open_1940');
const modalElem2 = document.querySelector('#modal2');

const buttonElem3 = document.querySelector('#open_2115');
const modalElem3 = document.querySelector('#modal3');

const buttonElem4 = document.querySelector('#open_1330');
const modalElem4 = document.querySelector('#modal4');


var selectedSeats = [];

modalElem1.style.cssText = `
  display: flex;
  visibility: hidden;
  opacity: 0;
  transition: opacity 300ms ease-in-out;
`

modalElem2.style.cssText = `
  display: flex;
  visibility: hidden;
  opacity: 0;
  transition: opacity 300ms ease-in-out;
`
modalElem3.style.cssText = `
  display: flex;
  visibility: hidden;
  opacity: 0;
  transition: opacity 300ms ease-in-out;
`
modalElem4.style.cssText = `
  display: flex;
  visibility: hidden;
  opacity: 0;
  transition: opacity 300ms ease-in-out;
`

const closeModal = event => {
  const target = event.target;
  if (target == modalElem1 || target == modalElem2 || target.closest('.modal__close')) {
    modalElem1.style.opacity = 0;
    modalElem2.style.opacity = 0;
    modalElem3.style.opacity = 0;
    modalElem4.style.opacity = 0;
    setTimeout(() => {
      modalElem1.style.visibility = 'hidden';
      modalElem2.style.visibility = 'hidden';
      modalElem3.style.visibility = 'hidden';
      modalElem4.style.visibility = 'hidden';
    }, 300)
  }
}

const openModal1 = () => {
  modalElem1.style.visibility = 'visible';
  modalElem1.style.opacity = 1;
}

const openModal2 = () => {
  modalElem2.style.visibility = 'visible';
  modalElem2.style.opacity = 1;
}

const openModal3 = () => {
  modalElem3.style.visibility = 'visible';
  modalElem3.style.opacity = 1;
}

const openModal4 = () => {
  modalElem4.style.visibility = 'visible';
  modalElem4.style.opacity = 1;
}

buttonElem1.addEventListener('click', openModal1);
buttonElem2.addEventListener('click', openModal2);
buttonElem3.addEventListener('click', openModal3);
buttonElem4.addEventListener('click', openModal4);

modalElem1.addEventListener('click', closeModal);
modalElem2.addEventListener('click', closeModal);
modalElem3.addEventListener('click', closeModal);
modalElem4.addEventListener('click', closeModal);

function toggleSeat(seat) {
  seat.classList.toggle("selected");
  var seatNumber = seat.innerText;

  if (selectedSeats.includes(seatNumber)) {
    selectedSeats = selectedSeats.filter(function (value) {
      return value !== seatNumber;
    });
  } else {
    selectedSeats.push(seatNumber);
  }
}

function bookSeats() {
  if (selectedSeats.length > 0) {
    alert("Вы забронировали места: " + selectedSeats.join(", "));
    selectedSeats = [];
  } else {
    alert("Пожалуйста, выберите места для бронирования.");
  }
}

var seatsContainer1 = document.querySelector("#modal1 #seatsContainer");
for (var i = 1; i <= 50; i++) {
  var seat = document.createElement("div");
  seat.className = "seat";
  seat.innerText = i;
  seat.onclick = function () {
    toggleSeat(this);
  };
  seatsContainer1.appendChild(seat);
}

var seatsContainer2 = document.querySelector("#modal2 #seatsContainer");
for (var i = 1; i <= 50; i++) {
  var seat = document.createElement("div");
  seat.className = "seat";
  seat.innerText = i;
  seat.onclick = function () {
    toggleSeat(this);
  };
  seatsContainer2.appendChild(seat);
}

var seatsContainer3 = document.querySelector("#modal3 #seatsContainer");
for (var i = 1; i <= 50; i++) {
  var seat = document.createElement("div");
  seat.className = "seat";
  seat.innerText = i;
  seat.onclick = function () {
    toggleSeat(this);
  };
  seatsContainer3.appendChild(seat);
}

var seatsContainer4 = document.querySelector("#modal4 #seatsContainer");
for (var i = 1; i <= 50; i++) {
  var seat = document.createElement("div");
  seat.className = "seat";
  seat.innerText = i;
  seat.onclick = function () {
    toggleSeat(this);
  };
  seatsContainer4.appendChild(seat);

}
