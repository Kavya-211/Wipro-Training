const eventContainer = document.getElementById("events");
const filter = document.getElementById("filter");

async function fetchEvents() {
  try {
    const response = await fetch("events.json");
    const data = await response.json();
    displayEvents(data);
    filter.addEventListener("change", () => {
      const value = filter.value;
      const filtered = value === "all"
        ? data
        : data.filter(e => e.category === value);
      displayEvents(filtered);
    });
  } catch (error) {
    console.error("Error loading events");
  }
}

const displayEvents = events => {
  eventContainer.innerHTML = "";
  events.forEach(({ name, category, date }) => {
    eventContainer.innerHTML += `
      <div class="col-md-4">
        <div class="card mb-3">
          <div class="card-body">
            <h5>${name}</h5>
            <p>${category} | ${date}</p>
          </div>
        </div>
      </div>
    `;
  });
};

fetchEvents();
