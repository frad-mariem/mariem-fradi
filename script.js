
// =====================================
// 1. LISTE DES RESTAURANTS
// =====================================

const restaurants = [
    {
        id: 1,
        name: "O10 Café",
        category: "Café",
        governorate: "Sousse",
        address: "Rue de Poste, Khzema, Sousse",
        mood: ["study", "coffee", "friends"],
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
        menu: [
            {
                category: "Cafés",
                items: [
                    { name: "Espresso", price: 2.400 },
                    { name: "Americano", price: 2.500 },
                    { name: "Capucin", price: 2.600 },
                    { name: "Cappuccino", price: 4.100 }
                ]
            },
            {
                category: "Boissons",
                items: [
                    { name: "Thé vert", price: 1.900 },
                    { name: "Jus d'orange", price: 4.300 }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "GAL Coffee & Kitchen",
        category: "Café & Restaurant",
        governorate: "Sousse",
        address: "Avenue 14 Janvier, Hammam Sousse",
        mood: ["friends", "family", "coffee", "date"],
        image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8",
        menu: []
    },
    {
        id: 3,
        name: "PAUL",
        category: "Café & Pâtisserie",
        governorate: "Sousse",
        address: "Mall of Sousse",
        mood: ["coffee", "friends", "family"],
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
        menu: []
    },
    {
        id: 4,
        name: "BIG BEN Café",
        category: "Café & Restaurant",
        governorate: "Sousse",
        address: "Avenue 14 Janvier, Sousse",
        mood: ["friends", "family", "coffee"],
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
        menu: []
    },
    {
        id: 5,
        name: "Daily Grind CoffeeShop",
        category: "Coffee Shop",
        governorate: "Sousse",
        address: "Sahloul 4, Sousse",
        mood: ["study", "coffee", "friends"],
        image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0",
        menu: []
    },
    {
        id: 6,
        name: "KOOB Coffee Shop",
        category: "Coffee Shop",
        governorate: "Sousse",
        address: "Khzema Ouest, Sousse",
        mood: ["study", "coffee", "date"],
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
        menu: []
    },
    {
        id: 7,
        name: "The Spin",
        category: "Coffee Shop",
        governorate: "Sousse",
        address: "Avenue 14 Janvier, Sousse",
        mood: ["friends", "coffee", "date"],
        image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814",
        menu: []
    },
    {
        id: 8,
        name: "Waterside Café & Kitchen",
        category: "Café & Restaurant",
        governorate: "Sousse",
        address: "Hammam Sousse",
        mood: ["family", "friends", "date"],
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
        menu: []
    },
    {
        id: 9,
        name: "Café Beb Al Medina",
        category: "Café traditionnel",
        governorate: "Sousse",
        address: "Médina de Sousse",
        mood: ["date", "family", "coffee"],
        image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
        menu: []
    },
    {
        id: 10,
        name: "Fleur d'Orient",
        category: "Café & Restaurant",
        governorate: "Sousse",
        address: "Centre de Sousse",
        mood: ["family", "friends", "coffee"],
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de",
        menu: []
    },
    {
        id: 11,
        name: "Underground Space",
        category: "Espace de jeux",
        governorate: "Sousse",
        address: "Sahloul, Sousse",
        mood: ["friends"],
        image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
        menu: []
    }
];


// =====================================
// 2. MENUS DE DÉMONSTRATION
// =====================================

const demoMenu = [
    {
        category: "Cafés",
        items: [
            { name: "Espresso", price: 2.500 },
            { name: "Cappuccino", price: 4.000 },
            { name: "Café crème", price: 3.500 }
        ]
    },
    {
        category: "Boissons",
        items: [
            { name: "Thé", price: 2.500 },
            { name: "Jus d'orange", price: 4.500 },
            { name: "Citronnade", price: 4.000 }
        ]
    },
    {
        category: "Snacks",
        items: [
            { name: "Croissant", price: 2.500 },
            { name: "Sandwich", price: 7.000 },
            { name: "Panini", price: 9.000 }
        ]
    },
    {
        category: "Plats",
        items: [
            { name: "Pâtes", price: 14.000 },
            { name: "Pizza", price: 16.000 },
            { name: "Salade", price: 12.000 }
        ]
    }
];

restaurants.forEach(restaurant => {
    if (restaurant.menu.length === 0) {
        restaurant.menu = demoMenu;
        restaurant.isDemoMenu = true;
    } else {
        restaurant.isDemoMenu = false;
    }
});


// =====================================
// 3. ÉLÉMENTS DE LA PAGE
// =====================================

const grid = document.getElementById("restaurantGrid");
const count = document.getElementById("resultCount");
const searchForm = document.getElementById("searchForm");
const moodCards = document.querySelectorAll(".mood-card");
const favoritesGrid = document.getElementById("favoritesGrid");

let selectedMood = "";


// =====================================
// 4. SÉLECTION DU MOOD
// =====================================

moodCards.forEach(card => {
    card.addEventListener("click", () => {
        moodCards.forEach(item => {
            item.classList.remove("selected");
        });

        card.classList.add("selected");
        selectedMood = card.dataset.mood;
    });
});


// =====================================
// 5. SYSTÈME MES FAVORIS
// =====================================

let favorites = [];

try {
    const savedFavorites = JSON.parse(
        localStorage.getItem("foodMoodFavorites") || "[]"
    );

    if (Array.isArray(savedFavorites)) {
        favorites = savedFavorites.map(Number);
    }
} catch (error) {
    favorites = [];
}

function saveFavorites() {
    localStorage.setItem(
        "foodMoodFavorites",
        JSON.stringify(favorites)
    );
}


// =====================================
// 6. CRÉER UNE CARTE RESTAURANT
// =====================================

function createRestaurantCard(restaurant) {

    const isFavorite = favorites.includes(restaurant.id);

    const mapsLink =
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(
            restaurant.name + " " + restaurant.address + " Tunisia"
        );

    const card = document.createElement("article");
    card.className = "restaurant-card";

    card.innerHTML = `
        <div class="restaurant-photo">

            <img
                src="${restaurant.image}"
                alt="${restaurant.name}"
                loading="lazy"
            >

            <button
                class="favorite"
                type="button"
                data-favorite-id="${restaurant.id}"
                aria-label="${isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}"
                aria-pressed="${isFavorite}"
                title="${isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}"
            >
                ${isFavorite ? "♥" : "♡"}
            </button>

        </div>

        <div class="restaurant-info">

            <span>${restaurant.category}</span>

            <div class="restaurant-title-row">
                <h3>${restaurant.name}</h3>
            </div>

            <p class="location">📍 ${restaurant.address}</p>

            <div class="card-actions">

                <a href="restaurant.html?id=${restaurant.id}">
                    Découvrir
                </a>

                <a
                    href="${mapsLink}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Localisation
                </a>

                <button
                    type="button"
                    class="compare-btn"
                    data-compare-id="${restaurant.id}"
                >
                    + Comparer
                </button>

            </div>

        </div>
    `;

    return card;
}


// =====================================
// 7. AFFICHER LES RESTAURANTS
// =====================================

function renderRestaurants(list) {

    if (!grid) return;

    grid.innerHTML = "";

    if (list.length === 0) {

        grid.innerHTML = `
            <p class="empty-message">
                Aucun endroit trouvé.
                Essaie un autre mood ou gouvernorat.
            </p>
        `;

        if (count) {
            count.textContent = "0 résultat";
        }

        return;
    }

    list.forEach(restaurant => {
        grid.appendChild(createRestaurantCard(restaurant));
    });

    if (count) {
        count.textContent = `${list.length} résultat(s)`;
    }
}


// =====================================
// 8. AFFICHER MES FAVORIS
// =====================================

function renderFavorites() {

    if (!favoritesGrid) return;

    favoritesGrid.innerHTML = "";

    const favoriteRestaurants = restaurants.filter(restaurant =>
        favorites.includes(restaurant.id)
    );

    if (favoriteRestaurants.length === 0) {

        favoritesGrid.innerHTML = `
            <p class="empty-state">
                Tu n'as pas encore de favoris.
                Clique sur le cœur d'un restaurant pour l'ajouter ♡
            </p>
        `;

        return;
    }

    favoriteRestaurants.forEach(restaurant => {
        favoritesGrid.appendChild(createRestaurantCard(restaurant));
    });
}


// =====================================
// 9. AJOUTER / RETIRER UN FAVORI
// =====================================

function handleFavoriteClick(event) {

    const button = event.target.closest("[data-favorite-id]");

    if (!button) return;

    const restaurantId = Number(button.dataset.favoriteId);

    if (favorites.includes(restaurantId)) {
        favorites = favorites.filter(id => id !== restaurantId);
    } else {
        favorites.push(restaurantId);
    }

    saveFavorites();
    renderFavorites();

    document.querySelectorAll("[data-favorite-id]").forEach(btn => {

        const id = Number(btn.dataset.favoriteId);
        const active = favorites.includes(id);

        btn.textContent = active ? "♥" : "♡";
        btn.setAttribute("aria-pressed", active);

        btn.setAttribute(
            "aria-label",
            active ? "Retirer des favoris" : "Ajouter aux favoris"
        );

        btn.title = active ? "Retirer des favoris" : "Ajouter aux favoris";
    });
}

if (grid) {
    grid.addEventListener("click", handleFavoriteClick);
}

if (favoritesGrid) {
    favoritesGrid.addEventListener("click", handleFavoriteClick);
}

renderFavorites();


// =====================================
// 10. RECHERCHE PAR MOOD ET GOUVERNORAT
// =====================================

if (searchForm) {

    searchForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const governorateSelect =
            document.getElementById("governorateSelect");

        const resultsTitle =
            document.getElementById("resultsTitle");

        if (!selectedMood) {
            alert("Choisis d'abord ton mood !");
            return;
        }

        if (!governorateSelect || !governorateSelect.value) {
            alert("Choisis ton gouvernorat !");
            return;
        }

        const governorate = governorateSelect.value;

        const results = restaurants.filter(restaurant => {

            const matchesGovernorate =
                restaurant.governorate === governorate;

            const matchesMood =
                restaurant.mood.includes(selectedMood);

            return matchesGovernorate && matchesMood;
        });

        renderRestaurants(results);

        const moodNames = {
            study: "Étudier au calme",
            date: "Un date",
            friends: "Sortie entre amis",
            family: "Sortie en famille",
            coffee: "Un café",
            takeaway: "À emporter"
        };

        if (resultsTitle) {
            resultsTitle.textContent =
                `${moodNames[selectedMood]} · ${governorate}`;
        }
    });
}


// =====================================
// 11. MESSAGE INITIAL
// =====================================

if (grid) {
    grid.innerHTML = `
        <p class="empty-message">
            Choisis ton mood et ton gouvernorat
            pour découvrir les endroits.
        </p>
    `;
}

if (count) {
    count.textContent = "À découvrir";
}


// =====================================
// 12. SYSTÈME MES POINTS
// =====================================

let points = 0;

const earnPointBtn = document.getElementById("earnPointBtn");
const pointsBalance = document.getElementById("pointsBalance");
const pointsProgress = document.getElementById("pointsProgress");
const pointsHint = document.getElementById("pointsHint");

function updatePoints() {

    if (pointsBalance) {
        pointsBalance.textContent = points;
    }

    if (pointsProgress) {
        pointsProgress.style.width =
            Math.min((points / 50) * 100, 100) + "%";
    }

    if (pointsHint) {

        if (points >= 50) {
            pointsHint.textContent =
                "Bravo ! Tu as atteint 50 points.";
        } else {
            pointsHint.textContent =
                `Encore ${50 - points} points pour la récompense démo.`;
        }
    }
}

if (earnPointBtn) {

    earnPointBtn.addEventListener("click", function() {
        points += 10;
        updatePoints();
    });
}

updatePoints();


// =====================================
// 13. PARAMÈTRES - THÈMES ET COULEURS
// =====================================

const settingsBtn = document.getElementById("settingsBtn");
const settingsDialog = document.getElementById("settingsDialog");
const closeSettings = document.getElementById("closeSettings");
const closeSettingsBtn = document.getElementById("closeSettingsBtn");

const themeButtons = document.querySelectorAll("[data-theme-choice]");

const allowedThemes = ["light", "dark", "pink", "blue", "beige"];

function applyTheme(theme) {

    if (!allowedThemes.includes(theme)) {
        theme = "light";
    }

    document.documentElement.setAttribute("data-theme", theme);

    try {
        localStorage.setItem("foodMoodTheme", theme);
    } catch (error) {
        console.warn("Impossible de sauvegarder le thème.", error);
    }

    themeButtons.forEach(button => {
        const selected = button.dataset.themeChoice === theme;

        button.classList.toggle("active", selected);
        button.setAttribute("aria-pressed", String(selected));
    });
}

let savedTheme = "light";

try {
    savedTheme = localStorage.getItem("foodMoodTheme") || "light";
} catch (error) {
    savedTheme = "light";
}

applyTheme(savedTheme);


if (settingsBtn && settingsDialog) {
    settingsBtn.addEventListener("click", () => {

        if (typeof settingsDialog.showModal === "function") {
            if (!settingsDialog.open) {
                settingsDialog.showModal();
            }
        } else {
            settingsDialog.setAttribute("open", "");
        }

    });
}


themeButtons.forEach(button => {
    button.addEventListener("click", () => {
        applyTheme(button.dataset.themeChoice);
    });
});


function closeSettingsDialog() {
    if (!settingsDialog) return;

    if (typeof settingsDialog.close === "function") {
        settingsDialog.close();
    } else {
        settingsDialog.removeAttribute("open");
    }
}

if (closeSettings) {
    closeSettings.addEventListener("click", closeSettingsDialog);
}

if (closeSettingsBtn) {
    closeSettingsBtn.addEventListener("click", closeSettingsDialog);
}


// =====================================
// 14. MODIFIER LE MOT DE PASSE
// =====================================

const passwordForm = document.getElementById("passwordForm");
const currentPassword = document.getElementById("currentPassword");
const newPassword = document.getElementById("newPassword");
const confirmPassword = document.getElementById("confirmPassword");
const passwordMessage = document.getElementById("passwordMessage");

if (passwordForm) {

    passwordForm.addEventListener("submit", async function(event) {

        event.preventDefault();

        const client = window.supabaseClient;

        if (!passwordMessage || !newPassword || !confirmPassword) {
            return;
        }

        if (!client) {
            passwordMessage.textContent =
                "Erreur de connexion au service de compte.";
            passwordMessage.style.color = "red";
            return;
        }

        const oldPassword = currentPassword ? currentPassword.value : "";
        const password = newPassword.value;
        const confirmation = confirmPassword.value;

        if (!oldPassword) {
            passwordMessage.textContent =
                "Entre ton mot de passe actuel.";
            passwordMessage.style.color = "red";
            return;
        }

        if (password.length < 8) {
            passwordMessage.textContent =
                "Le mot de passe doit contenir au moins 8 caractères.";
            passwordMessage.style.color = "red";
            return;
        }

        if (password !== confirmation) {
            passwordMessage.textContent =
                "Les deux mots de passe ne correspondent pas.";
            passwordMessage.style.color = "red";
            return;
        }

        passwordMessage.textContent = "Modification en cours...";
        passwordMessage.style.color = "";

        try {

            const { data: userData, error: userError } =
                await client.auth.getUser();

            if (userError || !userData.user) {
                throw new Error("Utilisateur introuvable. Reconnecte-toi.");
            }

            const { error: loginError } =
                await client.auth.signInWithPassword({
                    email: userData.user.email,
                    password: oldPassword
                });

            if (loginError) {
                throw new Error("L'ancien mot de passe est incorrect.");
            }

            const { error: updateError } =
                await client.auth.updateUser({
                    password: password
                });

            if (updateError) {
                throw updateError;
            }

            passwordMessage.textContent =
                "✓ Ton mot de passe a été modifié avec succès.";

            passwordMessage.style.color = "green";

            passwordForm.reset();

        } catch (error) {

            passwordMessage.textContent = error.message;
            passwordMessage.style.color = "red";

        }

    });
}


// =====================================
// 15. DÉCONNEXION
// =====================================

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", async function() {

        const confirmation = confirm(
            "Tu veux vraiment te déconnecter ?"
        );

        if (!confirmation) return;

        const client = window.supabaseClient;

        try {

            if (client) {
                const { error } = await client.auth.signOut();

                if (error) {
                    throw error;
                }
            }

            window.location.replace("index.html");

        } catch (error) {

            alert("Erreur lors de la déconnexion : " + error.message);

        }

    });
}


// =====================================
// 16. PROFIL UTILISATEUR DANS PARAMÈTRES
// =====================================

const profileBtn = document.getElementById("profileBtn");

const settingsFullName = document.getElementById("settingsFullName");
const settingsEmail = document.getElementById("settingsEmail");
const settingsAvatar = document.getElementById("settingsAvatar");
const avatarInput = document.getElementById("avatarInput");
const saveProfileBtn = document.getElementById("saveProfileBtn");
const profileMessage = document.getElementById("profileMessage");

let selectedAvatarFile = null;


async function loadUserProfile() {

    const client = window.supabaseClient;

    if (!client) {
        if (profileMessage) {
            profileMessage.textContent =
                "Connexion Supabase indisponible.";
        }
        return;
    }

    try {

        const { data, error } = await client.auth.getUser();

        if (error) throw error;
        if (!data.user) {
            throw new Error("Utilisateur introuvable.");
        }

        const user = data.user;

        const fullName =
            user.user_metadata?.full_name ||
            user.user_metadata?.name ||
            "Nom non disponible";

        if (settingsFullName) {
            settingsFullName.textContent = fullName;
        }

        if (settingsEmail) {
            settingsEmail.textContent = user.email || "";
        }

        const avatarUrl = user.user_metadata?.avatar_url;

        if (settingsAvatar && avatarUrl) {
            settingsAvatar.src = avatarUrl;
        }

        if (profileMessage) {
            profileMessage.textContent = "";
        }

    } catch (error) {

        console.error("Erreur profil :", error);

        if (profileMessage) {
            profileMessage.textContent = error.message;
        }
    }
}


if (profileBtn && settingsDialog) {

    profileBtn.addEventListener("click", async () => {

        await loadUserProfile();

        if (typeof settingsDialog.showModal === "function") {

            if (!settingsDialog.open) {
                settingsDialog.showModal();
            }

        } else {
            settingsDialog.setAttribute("open", "");
        }

    });
}


if (settingsBtn) {
    settingsBtn.addEventListener("click", loadUserProfile);
}


if (avatarInput) {

    avatarInput.addEventListener("change", () => {

        const file = avatarInput.files?.[0];

        if (!file) return;

        if (!file.type.startsWith("image/")) {
            alert("Choisis un fichier image.");
            avatarInput.value = "";
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            alert("La photo ne doit pas dépasser 2 Mo.");
            avatarInput.value = "";
            return;
        }

        selectedAvatarFile = file;

        if (settingsAvatar) {
            settingsAvatar.src = URL.createObjectURL(file);
        }

        if (profileMessage) {
            profileMessage.textContent =
                "Photo choisie. Clique sur Enregistrer.";
        }

    });
}


if (saveProfileBtn) {

    saveProfileBtn.addEventListener("click", async () => {

        const client = window.supabaseClient;

        if (!client) {
            if (profileMessage) {
                profileMessage.textContent =
                    "Connexion Supabase indisponible.";
            }
            return;
        }

        if (!selectedAvatarFile) {
            if (profileMessage) {
                profileMessage.textContent =
                    "Choisis d'abord une photo.";
            }
            return;
        }

        try {

            saveProfileBtn.disabled = true;

            if (profileMessage) {
                profileMessage.textContent =
                    "Enregistrement en cours...";
            }

            const { data: userData, error: userError } =
                await client.auth.getUser();

            if (userError) throw userError;

            if (!userData.user) {
                throw new Error("Utilisateur introuvable.");
            }

            const user = userData.user;

            const extension =
                selectedAvatarFile.name.split(".").pop();

            const filePath =
                `${user.id}/avatar.${extension}`;

            const { error: uploadError } = await client.storage
                .from("avatars")
                .upload(filePath, selectedAvatarFile, {
                    upsert: true,
                    contentType: selectedAvatarFile.type
                });

            if (uploadError) throw uploadError;

            const { data: urlData } = client.storage
                .from("avatars")
                .getPublicUrl(filePath);

            const avatarUrl =
                urlData.publicUrl + "?t=" + Date.now();

            const { error: updateError } =
                await client.auth.updateUser({
                    data: {
                        avatar_url: avatarUrl
                    }
                });

            if (updateError) throw updateError;

            if (settingsAvatar) {
                settingsAvatar.src = avatarUrl;
            }

            selectedAvatarFile = null;
            avatarInput.value = "";

            if (profileMessage) {
                profileMessage.textContent =
                    "✓ Photo enregistrée avec succès.";
                profileMessage.style.color = "green";
            }

        } catch (error) {

            console.error(error);

            if (profileMessage) {
                profileMessage.textContent = error.message;
                profileMessage.style.color = "red";
            }

        } finally {

            saveProfileBtn.disabled = false;

        }

    });
}


// =====================================
// 17. SYSTÈME DE RÉSERVATION
// =====================================

const reservationSelect =
    document.getElementById("reservationRestaurant");

const reservationForm =
    document.getElementById("reservationForm");

const reservationMessage =
    document.getElementById("reservationMessage");

const reservationDate =
    document.getElementById("reservationDate");


function getReservations() {

    try {

        const data = JSON.parse(
            localStorage.getItem("foodMoodReservations") || "[]"
        );

        return Array.isArray(data) ? data : [];

    } catch (error) {

        return [];

    }
}


if (reservationSelect) {

    if (reservationSelect.options.length <= 1) {

        restaurants.forEach(restaurant => {

            const option = document.createElement("option");

            option.value = restaurant.id;
            option.textContent = restaurant.name;

            reservationSelect.appendChild(option);

        });
    }
}


function setMinimumReservationDate() {

    if (!reservationDate) return;

    const today = new Date();

    const localDate = new Date(
        today.getTime() - today.getTimezoneOffset() * 60000
    ).toISOString().split("T")[0];

    reservationDate.min = localDate;
}

setMinimumReservationDate();


if (reservationForm) {

    reservationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        if (!reservationSelect || !reservationMessage || !reservationDate) {
            return;
        }

        const restaurantId = Number(reservationSelect.value);

        const selectedRestaurant = restaurants.find(
            restaurant => restaurant.id === restaurantId
        );

        if (!selectedRestaurant) {

            reservationMessage.textContent =
                "Choisis un restaurant.";

            return;
        }

        const nameInput = document.getElementById("reservationName");
        const phoneInput = document.getElementById("reservationPhone");
        const timeInput = document.getElementById("reservationTime");
        const guestsInput = document.getElementById("reservationGuests");
        const requestInput = document.getElementById("reservationRequest");

        if (!nameInput || !phoneInput || !timeInput || !guestsInput) {
            reservationMessage.textContent =
                "Certains champs de réservation sont introuvables.";
            return;
        }

        const reservation = {

            id: Date.now(),

            restaurantId: selectedRestaurant.id,

            restaurant: selectedRestaurant.name,

            name: nameInput.value.trim(),

            phone: phoneInput.value.trim(),

            date: reservationDate.value,

            time: timeInput.value,

            guests: Number(guestsInput.value),

            request: requestInput ? requestInput.value.trim() : "",

            status: "pending",

            createdAt: new Date().toISOString()

        };


        if (
            !reservation.name ||
            !reservation.phone ||
            !reservation.date ||
            !reservation.time ||
            !reservation.guests
        ) {

            reservationMessage.textContent =
                "Remplis tous les champs obligatoires.";

            return;
        }

        if (reservation.date < reservationDate.min) {
            reservationMessage.textContent =
                "Choisis une date valide.";
            return;
        }


        try {

            const savedReservations = getReservations();

            savedReservations.push(reservation);

            localStorage.setItem(
                "foodMoodReservations",
                JSON.stringify(savedReservations)
            );

            reservationMessage.textContent =
                "✓ Ta demande est enregistrée ! Elle est en attente de validation.";

            reservationMessage.style.color = "green";

            reservationForm.reset();

            setMinimumReservationDate();

        } catch (error) {

            reservationMessage.textContent =
                "Impossible d'enregistrer la demande. Réessaie.";

            reservationMessage.style.color = "red";

        }

    });
}


// =====================================
// 18. COMPARATEUR DE RESTAURANTS
// =====================================

// Restaurants sélectionnés pour la comparaison
let comparedRestaurants = [];


// Ajouter le style du comparateur
const compareStyle = document.createElement("style");

compareStyle.textContent = `
.compare-btn {
    background: #9ba873;
    color: white;
    border: none;
    padding: 9px 13px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 13px;
    margin-top: 8px;
}

.compare-btn:hover {
    background: #34452f;
}

.compare-btn.active {
    background: #f2b5b4;
    color: #34452f;
}

.compare-bar {
    position: fixed;
    bottom: 18px;
    left: 50%;
    transform: translateX(-50%);
    width: min(92%, 600px);
    background: #34452f;
    color: white;
    padding: 15px;
    border-radius: 15px;
    z-index: 999;
    display: none;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    box-shadow: 0 5px 25px #0003;
}

.compare-bar button {
    border: none;
    padding: 9px 13px;
    border-radius: 20px;
    cursor: pointer;
    background: #f2b5b4;
    color: #34452f;
    font-weight: bold;
}

.compare-dialog {
    width: min(95%, 850px);
    max-height: 85vh;
    overflow: auto;
    border: none;
    border-radius: 18px;
    padding: 25px;
    background: #fbf8ef;
    color: #34452f;
}

.compare-dialog::backdrop {
    background: #0008;
}

.compare-dialog h2 {
    margin-bottom: 18px;
}

.compare-table-wrapper {
    overflow-x: auto;
}

.compare-table {
    width: 100%;
    border-collapse: collapse;
    min-width: 500px;
}

.compare-table th,
.compare-table td {
    padding: 13px;
    border-bottom: 1px solid #ddd;
    text-align: left;
}

.compare-table th {
    background: #e9eddd;
}

.compare-close {
    margin-top: 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    background: #34452f;
    color: white;
    cursor: pointer;
}

@media (max-width: 500px) {
    .compare-bar {
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
    }
}
`;

document.head.appendChild(compareStyle);


// Créer la barre de comparaison
const compareBar = document.createElement("div");

compareBar.className = "compare-bar";

compareBar.innerHTML = `
    <span id="compareCount">
        0 / 3 restaurants sélectionnés
    </span>

    <div>
        <button type="button" id="compareNowBtn">
            Comparer
        </button>

        <button type="button" id="clearCompareBtn">
            Vider
        </button>
    </div>
`;

document.body.appendChild(compareBar);


// Créer la fenêtre de comparaison
const compareDialog = document.createElement("dialog");

compareDialog.className = "compare-dialog";

compareDialog.innerHTML = `
    <h2>⚖️ Comparaison des restaurants</h2>

    <div id="compareResults"></div>

    <button
        type="button"
        class="compare-close"
        id="closeCompareBtn"
    >
        Fermer
    </button>
`;

document.body.appendChild(compareDialog);


const compareCount = document.getElementById("compareCount");
const compareResults = document.getElementById("compareResults");


// Calculer le prix moyen du menu
function getAverageMenuPrice(restaurant) {

    const prices = [];

    restaurant.menu.forEach(category => {

        category.items.forEach(item => {

            if (typeof item.price === "number") {
                prices.push(item.price);
            }

        });

    });

    if (prices.length === 0) {
        return "Non disponible";
    }

    const average =
        prices.reduce((total, price) => total + price, 0)
        / prices.length;

    const priceText = average.toFixed(2) + " DT";

    if (restaurant.isDemoMenu) {
        return priceText + " (démo)";
    }

    return priceText;
}


// Mettre à jour la barre et les boutons
function updateCompareBar() {

    if (compareCount) {
        compareCount.textContent =
            `${comparedRestaurants.length} / 3 restaurants sélectionnés`;
    }

    compareBar.style.display =
        comparedRestaurants.length > 0 ? "flex" : "none";

    document.querySelectorAll("[data-compare-id]").forEach(button => {

        const id = Number(button.dataset.compareId);

        const isSelected = comparedRestaurants.includes(id);

        button.classList.toggle("active", isSelected);

        button.textContent = isSelected
            ? "✓ Ajouté"
            : "+ Comparer";

    });
}


// Ajouter ou retirer un restaurant
document.addEventListener("click", function(event) {

    const button = event.target.closest("[data-compare-id]");

    if (!button) return;

    const restaurantId = Number(button.dataset.compareId);

    if (comparedRestaurants.includes(restaurantId)) {

        comparedRestaurants =
            comparedRestaurants.filter(id => id !== restaurantId);

    } else {

        if (comparedRestaurants.length >= 3) {

            alert("Tu peux comparer maximum 3 restaurants.");

            return;
        }

        comparedRestaurants.push(restaurantId);

    }

    updateCompareBar();

});


// Afficher le tableau comparatif
function showRestaurantComparison() {

    if (comparedRestaurants.length < 2) {

        alert("Choisis au moins 2 restaurants pour les comparer.");

        return;
    }

    const selectedRestaurants = restaurants.filter(restaurant =>
        comparedRestaurants.includes(restaurant.id)
    );

    const rows = [
        {
            label: "Restaurant",
            value: restaurant => restaurant.name
        },
        {
            label: "Catégorie",
            value: restaurant => restaurant.category
        },
        {
            label: "Gouvernorat",
            value: restaurant => restaurant.governorate
        },
        {
            label: "Adresse",
            value: restaurant => restaurant.address
        },
        {
            label: "Prix moyen du menu",
            value: restaurant => getAverageMenuPrice(restaurant)
        },
        {
            label: "Note des clients",
            value: () => "Non disponible"
        }
    ];

    let tableHTML = `
        <div class="compare-table-wrapper">
            <table class="compare-table">
                <thead>
                    <tr>
                        <th>Critères</th>
    `;

    selectedRestaurants.forEach(restaurant => {

        tableHTML += `
            <th>${restaurant.name}</th>
        `;

    });

    tableHTML += `
                    </tr>
                </thead>
                <tbody>
    `;

    rows.forEach(row => {

        tableHTML += `
            <tr>
                <th>${row.label}</th>
        `;

        selectedRestaurants.forEach(restaurant => {

            tableHTML += `
                <td>${row.value(restaurant)}</td>
            `;

        });

        tableHTML += `
            </tr>
        `;

    });

    tableHTML += `
                </tbody>
            </table>
        </div>
    `;

    compareResults.innerHTML = tableHTML;

    if (typeof compareDialog.showModal === "function") {
        compareDialog.showModal();
    } else {
        compareDialog.setAttribute("open", "");
    }

}


// Bouton Comparer
document.getElementById("compareNowBtn")
    .addEventListener("click", showRestaurantComparison);


// Vider la comparaison
document.getElementById("clearCompareBtn")
    .addEventListener("click", function() {

        comparedRestaurants = [];

        updateCompareBar();

    });


// Fermer la fenêtre
document.getElementById("closeCompareBtn")
    .addEventListener("click", function() {

        if (typeof compareDialog.close === "function") {
            compareDialog.close();
        } else {
            compareDialog.removeAttribute("open");
        }

    });


// Initialisation
updateCompareBar();
