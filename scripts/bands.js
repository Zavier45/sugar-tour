import { getBands, getBookings, getVenues } from "./database.js";

export const Bands = () => {
  let bandsHTML = `<ul>`;
  for (const band of getBands()) {
    bandsHTML += `<li data-type="band" data-bandID="${band.id}">${band.name}</li>`;
  }
  bandsHTML += `</ul>`;
  return bandsHTML;
};

document.addEventListener("click", (clickEvt) => {
  const bandClick = clickEvt.target;
  let venueNames = [];
  if (bandClick.dataset.type === "band") {
    for (const booking of getBookings()) {
      if (booking.bandId === parseInt(bandClick.dataset.bandid)) {
        for (const venue of getVenues())
          if (booking.venueId === venue.id) {
            venueNames.push(venue.name);
          }
      }
    }
    const venueNameString = venueNames.join("\n");
    window.alert(
      `This band has booked the following venue(s):\n ${venueNameString}`
    );
  }
});
