// ===========================
// Sample Data
// ===========================

const tours = [
    {
        id: 'north-cascades-highway',
        title: 'North Cascades Highway',
        region: 'Washington State',
        lat: 48.51,
        lng: -121.2,
        description: 'Wind through the dramatic North Cascades along Highway 20, one of the most scenic drives in the Pacific Northwest. Towering peaks, glacier-fed lakes, and old-growth forests tell the story of the "American Alps."',
        image: 'images/north-cascades.jpg',
        badge: 'Free',
        stops: 10,
        duration: '50 min',
        distance: '130 mi',
        route: [
            [48.5101, -122.2271],  // Sedro-Woolley
            [48.5363, -121.4432],  // Marblemount
            [48.6747, -121.2489],  // Newhalem
            [48.6946, -121.2050],  // Gorge Creek Falls
            [48.7130, -121.0970],  // Diablo Lake Overlook
            [48.7350, -121.0680],  // Ross Lake Overlook
            [48.5162, -120.7383],  // Rainy Pass
            [48.5220, -120.6640],  // Washington Pass
            [48.5900, -120.4010],  // Mazama
            [48.4710, -120.1860],  // Winthrop
        ],
        locations: [
            { name: 'Sedro-Woolley', desc: 'Gateway town to the North Cascades', lat: 48.5101, lng: -122.2271, image: 'images/locations/sedro-woolley.jpg' },
            { name: 'Marblemount', desc: 'Last stop before the wilderness begins', lat: 48.5363, lng: -121.4432, image: 'images/locations/marblemount.jpg' },
            { name: 'Newhalem', desc: 'A company town built by Seattle City Light', lat: 48.6747, lng: -121.2489, image: 'images/locations/newhalem.jpg' },
            { name: 'Gorge Creek Falls', desc: 'A thundering waterfall dropping into a turquoise gorge', lat: 48.6946, lng: -121.2050, image: 'images/locations/gorge-creek.jpg' },
            { name: 'Diablo Lake Overlook', desc: 'Impossibly turquoise water colored by glacial flour', lat: 48.7130, lng: -121.0970, image: 'images/locations/diablo-lake.jpg' },
            { name: 'Ross Lake Overlook', desc: 'A vast reservoir stretching to the Canadian border', lat: 48.7350, lng: -121.0680, image: 'images/locations/ross-lake.jpg' },
            { name: 'Rainy Pass', desc: 'Where the Pacific Crest Trail crosses the highway', lat: 48.5162, lng: -120.7383, image: 'images/locations/rainy-pass.jpg' },
            { name: 'Washington Pass Overlook', desc: 'Jaw-dropping views of Liberty Bell and the Early Winters Spires', lat: 48.5220, lng: -120.6640, image: 'images/locations/washington-pass.jpg' },
            { name: 'Mazama', desc: 'A tiny mountain village in the Methow Valley', lat: 48.5900, lng: -120.4010, image: 'images/locations/mazama.jpg' },
            { name: 'Winthrop', desc: 'An Old West-themed town at the end of the highway', lat: 48.4710, lng: -120.1860, image: 'images/locations/winthrop.jpg' },
        ]
    },
    {
        id: 'denali-national-park',
        title: 'Denali National Park',
        region: 'Alaska',
        lat: 63.33,
        lng: -150.5,
        description: 'Experience the raw wilderness of Denali, home to North America\'s tallest peak. Six million acres of tundra, grizzlies, caribou, and landscapes that have barely changed in thousands of years.',
        image: 'images/denali.jpg',
        badge: 'Coming Soon',
        stops: 10,
        duration: '55 min',
        distance: '92 mi',
        route: [
            [63.7306, -148.8886],  // Park Entrance
            [63.7220, -149.1500],  // Savage River
            [63.6700, -149.5800],  // Teklanika River
            [63.5500, -149.9200],  // Polychrome Pass
            [63.5300, -150.1000],  // Toklat River
            [63.4800, -150.2200],  // Stony Hill Overlook
            [63.4310, -150.3100],  // Eielson Visitor Center
            [63.4560, -150.8680],  // Wonder Lake
            [63.5340, -151.0750],  // Kantishna
            [63.0692, -151.0063],  // Denali Summit View
        ],
        locations: [
            { name: 'Park Entrance', desc: 'Where the adventure into the wild begins', lat: 63.7306, lng: -148.8886, image: 'images/locations/park-entrance.jpg' },
            { name: 'Savage River', desc: 'The last stretch accessible by regular vehicles', lat: 63.7220, lng: -149.1500, image: 'images/locations/savage-river.jpg' },
            { name: 'Teklanika River', desc: 'Braided river channels carved by glacial melt', lat: 63.6700, lng: -149.5800, image: 'images/locations/teklanika.jpg' },
            { name: 'Polychrome Pass', desc: 'Volcanic cliffs painted in red, orange, and purple', lat: 63.5500, lng: -149.9200, image: 'images/locations/polychrome.jpg' },
            { name: 'Toklat River', desc: 'Prime grizzly bear territory along a wide riverbed', lat: 63.5300, lng: -150.1000, image: 'images/locations/toklat.jpg' },
            { name: 'Stony Hill Overlook', desc: 'Your first clear view of Denali on a good day', lat: 63.4800, lng: -150.2200, image: 'images/locations/stony-hill.jpg' },
            { name: 'Eielson Visitor Center', desc: 'Face to face with the mountain at 66 miles in', lat: 63.4310, lng: -150.3100, image: 'images/locations/eielson.jpg' },
            { name: 'Wonder Lake', desc: 'The iconic reflection of Denali on still water', lat: 63.4560, lng: -150.8680, image: 'images/locations/wonder-lake.jpg' },
            { name: 'Kantishna', desc: 'A gold rush settlement at the end of the road', lat: 63.5340, lng: -151.0750, image: 'images/locations/kantishna.jpg' },
            { name: 'Denali Summit View', desc: 'The highest point in North America at 20,310 feet', lat: 63.0692, lng: -151.0063, image: 'images/locations/denali-summit.jpg' },
        ]
    }
];

// ===========================
// State
// ===========================

let currentTour = null;
let currentLocationIndex = 0;
let isPlaying = false;

// ===========================
// DOM refs
// ===========================

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const screens = {
    home: $('#screen-home'),
    map: $('#screen-map'),
    tour: $('#screen-tour'),
    locations: $('#screen-locations'),
    player: $('#screen-player'),
};

// ===========================
// Map
// ===========================

let map = null;
let userMarker = null;
let mapFromScreen = 'home';

// Fetch road-following route from OSRM (free, no API key)
async function fetchRoadRoute(tour) {
    try {
        // Build OSRM waypoints string: lng,lat;lng,lat;...
        const waypoints = tour.route.map(p => `${p[1]},${p[0]}`).join(';');
        const url = `https://router.project-osrm.org/route/v1/driving/${waypoints}?overview=full&geometries=geojson`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.code === 'Ok' && data.routes && data.routes[0]) {
            // OSRM returns [lng, lat], Leaflet needs [lat, lng]
            return data.routes[0].geometry.coordinates.map(c => [c[1], c[0]]);
        }
    } catch (e) {
        // Silently fall back to straight lines
    }
    return null;
}

function initMap() {
    if (map) return;

    map = L.map('map', {
        center: [45, -120],
        zoom: 3,
        zoomControl: false,
        attributionControl: false,
    });

    // Dark map tiles
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        subdomains: 'abcd',
    }).addTo(map);

    // Draw tour routes
    tours.forEach(tour => {
        if (!tour.route) return;

        // Fetch actual road geometry from OSRM
        fetchRoadRoute(tour).then(roadCoords => {
            const coords = roadCoords || tour.route; // fallback to straight lines

            // Red route line following real roads
            const polyline = L.polyline(coords, {
                color: '#FF3B30',
                weight: 4,
                opacity: 0.9,
            }).addTo(map);

            polyline.on('click', () => {
                openTourFromMap(tour);
            });

            // Invisible wider line for easier tapping
            const hitArea = L.polyline(coords, {
                color: 'transparent',
                weight: 30,
                opacity: 0,
            }).addTo(map);

            hitArea.on('click', () => {
                openTourFromMap(tour);
            });
        });

        // Tour label at center of route
        const midIndex = Math.floor(tour.route.length / 2);
        const midPoint = tour.route[midIndex];

        const label = L.marker(midPoint, {
            icon: L.divIcon({
                className: 'tour-map-label',
                html: `<div class="tour-map-label-inner">${tour.title}</div>`,
                iconSize: null,
                iconAnchor: [0, 0],
            }),
        }).addTo(map);

        label.on('click', () => {
            openTourFromMap(tour);
        });
    });
}

    // Scale labels based on zoom
    function updateLabelScale() {
        const zoom = map.getZoom();
        // Scale from 0.55 at zoom 3 to 1.0 at zoom 7+
        const scale = Math.min(1, Math.max(0.55, (zoom - 3) / 4 * 0.45 + 0.55));
        document.querySelectorAll('.tour-map-label-inner').forEach(el => {
            el.style.transform = `scale(${scale})`;
        });
    }

    map.on('zoom', updateLabelScale);
    updateLabelScale();
}

function openTourFromMap(tour) {
    mapFromScreen = 'map';
    openTourDetail(tour);
}

function openMap() {
    showScreen('map');
    // Small delay so the screen is visible before initializing
    setTimeout(() => {
        initMap();
        map.invalidateSize();
    }, 50);
}

// GPS button on map
$('#btn-map-gps').addEventListener('click', () => {
    const btn = $('#btn-map-gps');

    if (!navigator.geolocation) {
        alert('Geolocation is not supported by your browser.');
        return;
    }

    btn.classList.add('locating');

    navigator.geolocation.getCurrentPosition(
        (position) => {
            btn.classList.remove('locating');
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            // Remove old marker
            if (userMarker) {
                map.removeLayer(userMarker);
            }

            // Blue pulsing dot for user location
            userMarker = L.circleMarker([lat, lng], {
                radius: 8,
                fillColor: '#0A84FF',
                fillOpacity: 1,
                color: '#fff',
                weight: 3,
            }).addTo(map);

            map.setView([lat, lng], 8, { animate: true });
        },
        () => {
            btn.classList.remove('locating');
            alert('Unable to get your location. Please check your location permissions.');
        },
        { enableHighAccuracy: true, timeout: 10000 }
    );
});

// Map back button
$('#btn-back-map').addEventListener('click', () => {
    goBack('map', 'home');
});

// ===========================
// Navigation
// ===========================

function showScreen(name, animation = 'slide-in') {
    const target = screens[name];
    const current = document.querySelector('.screen.active');

    if (current === target) return;

    // Remove old animation classes
    target.classList.remove('slide-in', 'slide-out', 'slide-up', 'slide-down');

    target.classList.add('active', animation);
    target.scrollTop = 0;

    if (current) {
        const reverseAnim = animation === 'slide-up' ? 'slide-down' : 'slide-out';
        // We don't animate the old screen away for simplicity — just hide it
        current.classList.remove('active', 'slide-in', 'slide-up');
    }
}

function goBack(fromScreen, toScreen) {
    const from = screens[fromScreen];
    const to = screens[toScreen];

    from.classList.remove('active', 'slide-in', 'slide-up');
    to.classList.add('active');
    to.classList.remove('slide-in', 'slide-out', 'slide-up', 'slide-down');
}

// ===========================
// Render: Home
// ===========================

function renderTourList(filter = '') {
    const list = $('#tour-list');
    const filtered = tours.filter(t =>
        t.title.toLowerCase().includes(filter.toLowerCase()) ||
        t.region.toLowerCase().includes(filter.toLowerCase())
    );

    if (filtered.length === 0) {
        list.innerHTML = '<div class="no-results">No tours found</div>';
        return;
    }

    list.innerHTML = filtered.map(tour => `
        <div class="tour-card" data-tour="${tour.id}">
            <div class="tour-card-image">
                <div style="width:100%;height:100%;background:linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);display:flex;align-items:center;justify-content:center;">
                    <span style="font-size:48px;opacity:0.3;">&#9968;</span>
                </div>
            </div>
            <div class="tour-card-overlay">
                <div class="tour-card-badge">${tour.badge}</div>
                <h3 class="tour-card-title">${tour.title}</h3>
                <p class="tour-card-region">${tour.region}</p>
            </div>
        </div>
    `).join('');

    // Attach click handlers
    list.querySelectorAll('.tour-card').forEach(card => {
        card.addEventListener('click', () => {
            const tour = tours.find(t => t.id === card.dataset.tour);
            mapFromScreen = 'home';
            openTourDetail(tour);
        });
    });
}

// ===========================
// Render: Tour Detail
// ===========================

function openTourDetail(tour) {
    currentTour = tour;

    // Hero
    $('#tour-hero').innerHTML = `
        <div style="width:100%;height:100%;background:linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);"></div>
        <button class="btn-back" id="btn-back-tour">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </button>
        <div class="tour-hero-overlay">
            <h1 class="tour-hero-title">${tour.title}</h1>
            <p class="tour-hero-region">${tour.region}</p>
        </div>
    `;

    // Body
    $('#tour-description').textContent = tour.description;
    $('#tour-stops').textContent = tour.stops;
    $('#tour-duration').textContent = tour.duration;
    $('#tour-distance').textContent = tour.distance;

    // Location previews
    $('#tour-locations-preview').innerHTML = tour.locations.map((loc, i) => `
        <div class="location-preview">
            <div class="location-preview-number">${i + 1}</div>
            <div class="location-preview-thumb">
                <div style="width:100%;height:100%;background:linear-gradient(135deg,#2C2C2E,#3A3A3C);"></div>
            </div>
            <div class="location-preview-info">
                <div class="location-preview-name">${loc.name}</div>
                <div class="location-preview-desc">${loc.desc}</div>
            </div>
        </div>
    `).join('');

    // Back button
    document.getElementById('btn-back-tour').addEventListener('click', () => {
        goBack('tour', mapFromScreen);
        mapFromScreen = 'home';
    });

    // Get Tour button
    $('#btn-get-tour').onclick = () => {
        openLocations(tour);
    };

    showScreen('tour');
}

// ===========================
// Render: Locations List
// ===========================

function openLocations(tour) {
    currentTour = tour;
    $('#locations-title').textContent = tour.title;

    const list = $('#locations-list');
    list.innerHTML = tour.locations.map((loc, i) => `
        <div class="location-item" data-index="${i}">
            <div class="location-item-number">${i + 1}</div>
            <div class="location-item-thumb">
                <div style="width:100%;height:100%;background:linear-gradient(135deg,#2C2C2E,#3A3A3C);"></div>
            </div>
            <div class="location-item-info">
                <div class="location-item-name">${loc.name}</div>
                <div class="location-item-desc">${loc.desc}</div>
            </div>
            <div class="location-item-chevron">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </div>
        </div>
    `).join('');

    list.querySelectorAll('.location-item').forEach(item => {
        item.addEventListener('click', () => {
            const idx = parseInt(item.dataset.index);
            openPlayer(idx);
        });
    });

    showScreen('locations');
}

// ===========================
// Render: Player
// ===========================

function openPlayer(locationIndex) {
    currentLocationIndex = locationIndex;
    const loc = currentTour.locations[locationIndex];

    $('#player-title').textContent = loc.name;
    $('#player-subtitle').textContent = currentTour.title;
    $('#player-img').style.display = 'none';

    // Placeholder image
    const imgContainer = $('#player-image');
    imgContainer.style.background = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)';

    // Reset player state
    isPlaying = false;
    $('.icon-play').classList.remove('hidden');
    $('.icon-pause').classList.add('hidden');
    $('#progress-fill').style.width = '0%';
    $('#time-current').textContent = '0:00';
    $('#time-total').textContent = '2:30'; // placeholder duration

    showScreen('player', 'slide-up');
}

function updatePlayerForLocation(index) {
    if (index < 0) index = 0;
    if (index >= currentTour.locations.length) index = currentTour.locations.length - 1;

    currentLocationIndex = index;
    const loc = currentTour.locations[index];
    $('#player-title').textContent = loc.name;
    $('#player-subtitle').textContent = currentTour.title;

    // Reset progress
    $('#progress-fill').style.width = '0%';
    $('#time-current').textContent = '0:00';
}

// ===========================
// Player Controls
// ===========================

$('#btn-play').addEventListener('click', () => {
    isPlaying = !isPlaying;
    $('.icon-play').classList.toggle('hidden', isPlaying);
    $('.icon-pause').classList.toggle('hidden', !isPlaying);
});

$('#btn-back-10').addEventListener('click', () => {
    // Will hook into real audio later
});

$('#btn-forward-10').addEventListener('click', () => {
    // Will hook into real audio later
});

$('#btn-skip').addEventListener('click', () => {
    if (currentLocationIndex < currentTour.locations.length - 1) {
        updatePlayerForLocation(currentLocationIndex + 1);
    }
});

$('#btn-prev').addEventListener('click', () => {
    if (currentLocationIndex > 0) {
        updatePlayerForLocation(currentLocationIndex - 1);
    }
});

$('#btn-close-player').addEventListener('click', () => {
    isPlaying = false;
    $('.icon-play').classList.remove('hidden');
    $('.icon-pause').classList.add('hidden');
    goBack('player', 'locations');
});

// ===========================
// Back Buttons
// ===========================

$('#btn-back-locations').addEventListener('click', () => {
    goBack('locations', 'tour');
});

// ===========================
// Search
// ===========================

$('#search-input').addEventListener('input', (e) => {
    renderTourList(e.target.value);
});

// ===========================
// GPS Locate
// ===========================

function distanceMiles(lat1, lng1, lat2, lng2) {
    const toRad = (d) => d * Math.PI / 180;
    const R = 3959; // Earth radius in miles
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a = Math.sin(dLat / 2) ** 2 +
              Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

$('#btn-locate').addEventListener('click', () => {
    openMap();
});

// ===========================
// Init
// ===========================

renderTourList();
