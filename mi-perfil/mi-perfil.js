const form = document.querySelector("#profile-form");
const profile = window.Hogario.read("hogario-profile", null);
if (profile) for (const [name, value] of Object.entries(profile)) {
  const field = form.elements.namedItem(name);
  if (field && value) field.value = value;
}
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(form));
  window.Hogario.write("hogario-profile", data);
  document.querySelector("#profile-message").textContent = "Tus datos se guardaron en este navegador.";
  document.querySelector("#profile-message").classList.remove("is-hidden");
  document.querySelector(".profile-account-heading h2").textContent = data.name;
  document.querySelector(".profile-avatar").textContent = data.name.split(/\s+/).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
});
