import { getBookings, getBands, getVenues } from "./database.js";

const bookings = getBookings();
const bands = getBands();
const venues = getVenues();
const findVenue = (booking, allVenues) => {
  let bookingVenue = null;
  for (const venue of venues) {
    if (venue.id === booking.venueId) {
      bookingVenue = venue.name;
    }
  }
  return bookingVenue;
};
const findBand = (booking, allBands) => {
  let bookingBand = null;
  for (const band of bands) {
    if (band.id === booking.bandId) {
      bookingBand = band.name;
    }
  }
  return bookingBand;
};

export const Bookings = () => {
  let bookingHTML = `<ul>`;
  for (const booking of getBookings()) {
    const band = findBand(booking, bands);
    const venue = findVenue(booking, venues);

    bookingHTML += `<li data-type="booking" data-bandId="${booking.bandId}">${band} are playing at ${venue} on ${booking.date}</li>`;
  }
  bookingHTML += `</ul>`;
  return bookingHTML;
};

document.addEventListener("click", (clckEvt) => {
  const bookClick = clckEvt.target;
  if (bookClick.dataset.type === "booking") {
    for (const band of getBands()) {
      if (band.id === parseInt(bookClick.dataset.bandid)) {
        window.alert(`${band.name}\n
      ${band.genre}\n
      Formed in ${band.yearFormed}\n
      ${band.members} band members`);
      }
    }
  }
});
