// ==UserScript==
// @name         Torn Location Based Travel Map
// @namespace    http://tampermonkey.net/
// @version      2025-12-04
// @description  Replaces the plane in torn travel page with a live location map
// @author       justlucdewit
// @match        https://www.torn.com/page.php?sid=travel
// @icon         https://www.google.com/s2/favicons?sz=64&domain=torn.com
// ==/UserScript==

(function() {
    'use strict';

    const create_live_location_map = () => {
        const root = document.createElement("div");
        root.id = "travel-location-map"

        // Set map background
        root.style.height = '500px';
        root.style.background = '#444';

        root.innerHTML = `
            <h1>
                Hello World!
            </h1>
        `;

        return root;
    }

    const travel_root = document.getElementById('travel-root');
    const original_flight_animation = travel_root.querySelector("figure");
    const location_map = create_live_location_map();

    original_flight_animation.replaceWith(location_map);
})();