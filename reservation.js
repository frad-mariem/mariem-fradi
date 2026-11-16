
const params = new URLSearchParams(window.location.search);

const restaurant = params.get("restaurant");

const restaurantName = document.getElementById("restaurantName");

const reservationForm = document.getElementById("reservationForm");

const reservationDate = document.getElementById("reservationDate");

const reservationMessage = document.getElementById("reservationMessage");

// Afficher le restaurant choisi
restaurantName.textContent = restaurant || "Aucun restaurant sélectionné";

// Empêcher de choisir une date passée
const today = new Date();
const localDate = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

reservationDate.min = localDate;


// Enregistrer la demande de réservation (version démo)
reservationForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const reservation = {
        restaurant: restaurant || "Non précisé",
        name: document.getElementById("fullName").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        date: reservationDate.value,
        time: document.getElementById("reservationTime").value,
        guests: document.getElementById("guests").value,
        specialRequest: document.getElementById("specialRequest").value.trim()
    };

    const reservations = JSON.parse(
        localStorage.getItem("foodMoodReservations") || "[]"
    );

    reservations.push(reservation);

    localStorage.setItem(
        "foodMoodReservations",
        JSON.stringify(reservations)
    );

    reservationMessage.style.display = "block";

    reservationMessage.textContent =
        "✓ Votre demande de réservation a été enregistrée ! " +
        "Ceci est une démonstration : le restaurant n'a pas encore reçu votre demande.";

    reservationForm.reset();

    reservationDate.min = localDate;
});
