import { getVenues, getBands, getBookings } from "./database.js";

export const Venues = () => {
  let venueHTML = `<ul>`;
  for (const venue of getVenues()) {
    venueHTML += `<li data-type="venue" data-id="${venue.id}">${venue.name}</li>`;
  }
  venueHTML += `</ul>`;
  return venueHTML;
};

document.addEventListener("click", (clickEvent) => {
  const venueClick = clickEvent.target;
  let bandNames = [];
  if (venueClick.dataset.type === "venue") {
    for (const booking of getBookings()) {
      if (booking.venueId === parseInt(venueClick.dataset.id)) {
        for (const band of getBands()) {
          if (booking.bandId === band.id) {
            bandNames.push(band.name);
          }
        }
      }
    }
    const bandNameString = bandNames.join(", ");
    window.alert(
      `The venue has been booked by the following band(s): ${bandNameString}`
    );
  }
});
