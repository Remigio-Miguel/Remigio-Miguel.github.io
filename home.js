const searchForm = document.querySelector("#home-search");
searchForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(searchForm);
  const params = new URLSearchParams(data);
  window.location.href = `/buscar-servicio/?${params.toString()}`;
});
