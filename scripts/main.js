import { Bands } from "./bands.js";
import { Bookings } from "./bookings.js";
import { Venues } from "./venues.js";

const mainContainer = document.querySelector("#container");

const html = `
<h1>Tour Some Sugar On Me</h1>
<div class="details">
    <article class="bookings">
        <section>
            <h2>Bookings</h2>
            ${Bookings()}\n
        </section>
    </article>
    <div class="components">
        <section class="detail--column list detail__venues">
            <h2>Venues</h2>
            ${Venues()}
        </section>
        <section class="detail--column list detail__bands">
            <h2>Bands</h2>
            ${Bands()}
        </section>
    </div>
    
</div>
`;

mainContainer.innerHTML = html;
