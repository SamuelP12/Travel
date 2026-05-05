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
        badge: 'Coming Soon',
        stops: 10,
        duration: '0 min',
        distance: '130 mi',
        driveTime: '1.5 hr',
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
        id: 'methow-valley-school-commute',
        title: 'Methow Valley School Commute',
        region: 'Washington State',
        lat: 48.47,
        lng: -120.19,
        description: 'Follow Twin Lakes Road from Winthrop to Methow Valley Elementary School, passing through the stunning Methow Valley with Mount Gardner towering above. A short scenic commute through one of Washington\'s most beautiful landscapes.',
        image: 'images/methow-school-commute.jpg',
        badge: 'Free',
        stops: 3,
        duration: '4 min',
        distance: '14 mi',
        driveTime: '15 min',
        route: [
            [48.4705, -120.1830],  // Bridge crossing out of Winthrop
            [48.4784, -120.1865],  // Stop 1
            [48.4728, -120.1475],  // Stop 2
            [48.4476, -120.1192],  // Stop 3
        ],
        locations: [
            { name: 'Stop 1', desc: 'First stop along Twin Lakes Road', lat: 48.4784, lng: -120.1865, audio: 'audio/methow-stop1.mp3', image: 'images/locations/methow-stop1.jpg' },
            { name: 'Stop 2', desc: 'Second stop along Twin Lakes Road', lat: 48.4728, lng: -120.1475, audio: 'audio/methow-stop2.mp3', image: 'images/locations/methow-stop2.jpg' },
            { name: 'Stop 3', desc: 'Methow Valley Elementary School', lat: 48.4476, lng: -120.1192, audio: 'audio/methow-stop3.mp3', image: 'images/locations/methow-stop3.jpg' },
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
        badge: 'In Progress',
        stops: 10,
        duration: '0 min',
        distance: '92 mi',
        driveTime: '7 hr',
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
    },
    {
        id: 'test-liberty-bell',
        title: 'Test',
        region: 'Liberty Bell HS',
        lat: 48.4422,
        lng: -120.1700,
        description: 'Walking test around Liberty Bell High School. Tight geofence radii so each of the three stops fires as you walk past it. Audio is reused from the Methow commute just so you can hear something.',
        image: '',
        badge: 'Test',
        stops: 3,
        duration: '4 min',
        distance: '0.1 mi',
        driveTime: '—',
        // Walking-scale geofence radii (override the driving defaults).
        // Loosened from 60/120 to 120/250 — typical iPhone GPS drift is
        // 15-30m near buildings, so tighter radii were missing fires.
        instantRadiusFeet: 120,   // ~37 m
        approachRadiusFeet: 250,  // ~76 m — closest-approach catches drive-bys
        route: [
            [48.4422583, -120.1689],   // Front (east, Twin Lakes Rd)
            [48.4429000, -120.1700],   // Side (north)
            [48.4422000, -120.1709],   // Back (west)
        ],
        locations: [
            { name: 'Front (Twin Lakes Rd)', desc: 'East side, facing the road', lat: 48.4422583, lng: -120.1689, audio: 'audio/methow-stop1.mp3' },
            { name: 'Side (North)',           desc: 'North side of the building', lat: 48.4429000, lng: -120.1700, audio: 'audio/methow-stop2.mp3' },
            { name: 'Back (West)',            desc: 'West side of the building',  lat: 48.4422000, lng: -120.1709, audio: 'audio/methow-stop3.mp3' },
        ]
    }
];

// ===========================
// State
// ===========================

let currentTour = null;
let currentLocationIndex = 0;
let isPlaying = false;
let audio = null;
let geoWatchId = null;
let triggeredStops = new Set();  // track which stops already played
let stopDistances = new Map();   // previous distance to each stop, for closest-approach detection
let pendingStops = [];           // stops queued by the geofence while another stop is mid-play
let audioUnlocked = false;       // track if audio context is unlocked
let wakeLock = null;             // screen wake lock
let silentAudio = null;          // silent looping track to keep iOS from suspending the tab

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

            // Blue glow line (hidden by default, shown on hover)
            const glow = L.polyline(coords, {
                color: '#0A84FF',
                weight: 10,
                opacity: 0,
            }).addTo(map);

            // Red route line following real roads
            const polyline = L.polyline(coords, {
                color: '#FF3B30',
                weight: 4,
                opacity: 0.9,
            }).addTo(map);

            polyline.on('click', () => {
                openTourFromMap(tour);
            });

            // Invisible wider line for easier tapping/hovering
            const hitArea = L.polyline(coords, {
                color: 'transparent',
                weight: 30,
                opacity: 0,
            }).addTo(map);

            hitArea.on('click', () => {
                openTourFromMap(tour);
            });

            hitArea.on('mouseover', () => {
                glow.setStyle({ opacity: 0.5 });
                polyline.setStyle({ color: '#0A84FF' });
            });

            hitArea.on('mouseout', () => {
                glow.setStyle({ opacity: 0 });
                polyline.setStyle({ color: '#FF3B30' });
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
    btn.classList.add('locating');

    requestLocation((lat, lng) => {
        btn.classList.remove('locating');

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
    });
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
                ${tour.image ? `<img src="${tour.image}" alt="${tour.title}">` : `<div style="width:100%;height:100%;background:linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);display:flex;align-items:center;justify-content:center;"><span style="font-size:48px;opacity:0.3;">&#9968;</span></div>`}
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
        ${tour.image ? `<img src="${tour.image}" alt="${tour.title}">` : `<div style="width:100%;height:100%;background:linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);"></div>`}
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
    $('#tour-drive-time').textContent = tour.driveTime || '—';

    // Location previews
    $('#tour-locations-preview').innerHTML = tour.locations.map((loc, i) => `
        <div class="location-preview">
            <div class="location-preview-number">${i + 1}</div>
            <div class="location-preview-thumb">
                ${loc.image ? `<img src="${loc.image}" alt="${loc.name}">` : `<div style="width:100%;height:100%;background:linear-gradient(135deg,#2C2C2E,#3A3A3C);"></div>`}
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
    triggeredStops.clear();
    stopDistances.clear();
    startGeoTracking();
    showTrackingStrip();
    $('#locations-title').textContent = tour.title;

    const list = $('#locations-list');
    list.innerHTML = tour.locations.map((loc, i) => `
        <div class="location-item" data-index="${i}">
            <div class="location-item-number">${i + 1}</div>
            <div class="location-item-thumb">
                ${loc.image ? `<img src="${loc.image}" alt="${loc.name}">` : `<div style="width:100%;height:100%;background:linear-gradient(135deg,#2C2C2E,#3A3A3C);"></div>`}
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

function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
}

function loadAudioForLocation(loc) {
    // Reuse a single Audio element so iOS keeps its autoplay unlock
    if (!audio) {
        audio = new Audio();
    }

    audio.pause();

    isPlaying = false;
    $('.icon-play').classList.remove('hidden');
    $('.icon-pause').classList.add('hidden');
    $('#progress-fill').style.width = '0%';
    $('#time-current').textContent = '0:00';
    $('#time-total').textContent = '0:00';

    if (loc.audio) {
        audio.src = loc.audio;
        audio.load();

        audio.onloadedmetadata = () => {
            $('#time-total').textContent = formatTime(audio.duration);
        };
        audio.ontimeupdate = () => {
            if (audio.duration) {
                const pct = (audio.currentTime / audio.duration) * 100;
                $('#progress-fill').style.width = pct + '%';
                $('#time-current').textContent = formatTime(audio.currentTime);
            }
        };
        audio.onended = () => {
            isPlaying = false;
            $('.icon-play').classList.remove('hidden');
            $('.icon-pause').classList.add('hidden');
            // Resume the keep-alive track so the tab stays alive between stops
            startKeepAliveLoop();
            // Drain queued geofence stops first — these are stops the user
            // drove past while we were playing something else
            if (pendingStops.length > 0) {
                const next = pendingStops.shift();
                startStopAudio(next);
                return;
            }
            // Otherwise auto-advance to the next stop in the tour
            if (currentLocationIndex < currentTour.locations.length - 1) {
                updatePlayerForLocation(currentLocationIndex + 1);
            }
        };
    } else {
        audio.removeAttribute('src');
        audio.load();
        audio.onloadedmetadata = null;
        audio.ontimeupdate = null;
        audio.onended = null;
    }
}

// Geofence entry point. Decides whether to skip, queue, or play right now:
//   - already playing this exact stop → skip (don't restart)
//   - already playing a different stop → queue, drained on `ended`
//   - otherwise → play immediately
function playStopAudio(index) {
    const loc = currentTour && currentTour.locations[index];
    if (!loc) return;

    if (audio && audio.src && !audio.paused) {
        // src is the resolved absolute URL; loc.audio is the relative path
        if (loc.audio && audio.src.endsWith(loc.audio)) {
            return; // already playing this stop, leave it alone
        }
        if (!pendingStops.includes(index)) {
            pendingStops.push(index);
        }
        return;
    }

    startStopAudio(index);
}

// Actually load + open + play. Bypasses skip/queue logic.
function startStopAudio(index) {
    currentLocationIndex = index;
    const loc = currentTour.locations[index];

    $('#player-title').textContent = loc.name;
    $('#player-subtitle').textContent = currentTour.title;

    const imgEl = $('#player-img');
    const imgContainer = $('#player-image');
    if (loc.image) {
        imgEl.src = loc.image;
        imgEl.alt = loc.name;
        imgEl.style.display = 'block';
        imgContainer.style.background = 'var(--color-surface-2)';
    } else {
        imgEl.style.display = 'none';
        imgContainer.style.background = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)';
    }

    loadAudioForLocation(loc);
    showScreen('player', 'slide-up');

    if (audio && loc.audio) {
        // Pause the silent keep-alive track so it doesn't compete for the
        // iOS audio session — the real audio takes over and interrupts other apps
        pauseKeepAliveLoop();
        audio.play().then(() => {
            isPlaying = true;
            $('.icon-play').classList.add('hidden');
            $('.icon-pause').classList.remove('hidden');
        }).catch(() => {
            // Autoplay still blocked — leave player visible so user can tap play
            isPlaying = false;
            $('.icon-play').classList.remove('hidden');
            $('.icon-pause').classList.add('hidden');
            // Keep-alive loop resumes so the tab stays alive
            startKeepAliveLoop();
        });
    }
}

function openPlayer(locationIndex) {
    currentLocationIndex = locationIndex;
    const loc = currentTour.locations[locationIndex];

    $('#player-title').textContent = loc.name;
    $('#player-subtitle').textContent = currentTour.title;

    // Show location image or placeholder
    const imgEl = $('#player-img');
    const imgContainer = $('#player-image');
    if (loc.image) {
        imgEl.src = loc.image;
        imgEl.alt = loc.name;
        imgEl.style.display = 'block';
        imgContainer.style.background = 'var(--color-surface-2)';
    } else {
        imgEl.style.display = 'none';
        imgContainer.style.background = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)';
    }

    loadAudioForLocation(loc);

    showScreen('player', 'slide-up');
}

function updatePlayerForLocation(index) {
    if (index < 0) index = 0;
    if (index >= currentTour.locations.length) index = currentTour.locations.length - 1;

    currentLocationIndex = index;
    const loc = currentTour.locations[index];
    $('#player-title').textContent = loc.name;
    $('#player-subtitle').textContent = currentTour.title;

    const imgEl = $('#player-img');
    const imgContainer = $('#player-image');
    if (loc.image) {
        imgEl.src = loc.image;
        imgEl.alt = loc.name;
        imgEl.style.display = 'block';
        imgContainer.style.background = 'var(--color-surface-2)';
    } else {
        imgEl.style.display = 'none';
        imgContainer.style.background = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)';
    }

    loadAudioForLocation(loc);
}

// ===========================
// Player Controls
// ===========================

$('#btn-play').addEventListener('click', () => {
    if (!audio) return;

    // Request location if we don't have it yet
    if (userLat === null) {
        requestLocation();
    }

    isPlaying = !isPlaying;
    if (isPlaying) {
        audio.play();
    } else {
        audio.pause();
    }
    $('.icon-play').classList.toggle('hidden', isPlaying);
    $('.icon-pause').classList.toggle('hidden', !isPlaying);
});

$('#btn-back-10').addEventListener('click', () => {
    if (audio) audio.currentTime = Math.max(0, audio.currentTime - 10);
});

$('#btn-forward-10').addEventListener('click', () => {
    if (audio) audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
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
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
    isPlaying = false;
    $('.icon-play').classList.remove('hidden');
    $('.icon-pause').classList.add('hidden');
    // User explicitly closed — drop any geofence-queued stops
    pendingStops.length = 0;
    // Keep the silent track running so geofence triggers still wake the tab
    startKeepAliveLoop();
    goBack('player', 'locations');
});

// ===========================
// Back Buttons
// ===========================

$('#btn-back-locations').addEventListener('click', () => {
    hideTrackingStrip();
    stopGeoTracking();
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

let userLat = null;
let userLng = null;

// Two-tier trigger: tight zone fires immediately; wider zone fires when you've
// passed the closest point (distance was within radius and is now increasing).
// This way a stop fires whether you're on foot or driving past at 50 mph, and
// every stop is checked independently — missing one never blocks the next.
const STOP_INSTANT_RADIUS_MILES = 250 / 5280;   // ~250 ft instant trigger
const STOP_APPROACH_RADIUS_MILES = 0.25;        // 0.25 mi closest-approach trigger

function distanceMiles(lat1, lng1, lat2, lng2) {
    const toRad = (d) => d * Math.PI / 180;
    const R = 3959; // Earth radius in miles
    const dLat = toRad(lat2 - lat1);
    const dLng = toRad(lng2 - lng1);
    const a = Math.sin(dLat / 2) ** 2 +
              Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function checkGeofences(lat, lng) {
    if (!currentTour) return;

    // Per-tour overrides allow walking-scale tests with tighter radii
    const instantRadius = currentTour.instantRadiusFeet
        ? currentTour.instantRadiusFeet / 5280
        : STOP_INSTANT_RADIUS_MILES;
    const approachRadius = currentTour.approachRadiusFeet
        ? currentTour.approachRadiusFeet / 5280
        : STOP_APPROACH_RADIUS_MILES;

    let toTrigger = -1;
    let nearestUntriggered = null;
    let nearestDistMiles = Infinity;

    for (let i = 0; i < currentTour.locations.length; i++) {
        const loc = currentTour.locations[i];
        if (!loc.audio) continue;

        const key = currentTour.id + '-' + i;
        const dist = distanceMiles(lat, lng, loc.lat, loc.lng);
        const prevDist = stopDistances.get(key);
        stopDistances.set(key, dist);

        if (triggeredStops.has(key)) continue;

        if (dist < nearestDistMiles) {
            nearestDistMiles = dist;
            nearestUntriggered = loc;
        }

        // Instant trigger: standing/driving inside the tight radius.
        if (dist <= instantRadius) {
            toTrigger = i;
        }
        // Closest-approach trigger: was within the wider radius and is now
        // moving away. Catches drive-bys that never sample inside 250 ft.
        else if (prevDist !== undefined &&
                 dist > prevDist &&
                 prevDist <= approachRadius) {
            toTrigger = i;
        }

        if (toTrigger === i) {
            triggeredStops.add(key);
        }
    }

    updateTrackingStrip(nearestUntriggered, nearestDistMiles, instantRadius);

    if (toTrigger >= 0) {
        markTrackingFiring(currentTour.locations[toTrigger]);
        playStopAudio(toTrigger);
    }
}

// ----- Live tracking strip on the locations screen -----

function showTrackingStrip() {
    const strip = $('#tracking-strip');
    if (!strip) return;
    strip.hidden = false;
    const dot = $('#tracking-dot');
    const text = $('#tracking-text');
    if (dot) { dot.classList.remove('locked', 'firing'); }
    if (text) text.textContent = 'Waiting for GPS…';
}

function hideTrackingStrip() {
    const strip = $('#tracking-strip');
    if (strip) strip.hidden = true;
}

function updateTrackingStrip(nearestLoc, nearestDistMiles, instantRadiusMiles) {
    const strip = $('#tracking-strip');
    if (!strip || strip.hidden) return;
    const dot = $('#tracking-dot');
    const text = $('#tracking-text');
    if (!dot || !text) return;

    // Don't overwrite the brief "firing" state
    if (dot.classList.contains('firing')) return;

    dot.classList.add('locked');

    if (!nearestLoc) {
        const total = currentTour ? currentTour.locations.filter(l => l.audio).length : 0;
        text.innerHTML = `<strong>All ${total} stops triggered.</strong> Walk back through to replay.`;
        return;
    }

    const ft = Math.round(nearestDistMiles * 5280);
    const inside = nearestDistMiles <= instantRadiusMiles;
    const verb = inside ? 'inside' : 'to';
    text.innerHTML = `Tracking · <strong>${ft} ft</strong> ${verb} <strong>${nearestLoc.name}</strong>`;
}

let _firingResetTimer = null;
function markTrackingFiring(loc) {
    const dot = $('#tracking-dot');
    const text = $('#tracking-text');
    if (!dot || !text) return;
    dot.classList.remove('locked');
    dot.classList.add('firing');
    text.innerHTML = `Triggering · <strong>${loc.name}</strong>`;
    if (_firingResetTimer) clearTimeout(_firingResetTimer);
    _firingResetTimer = setTimeout(() => {
        dot.classList.remove('firing');
        dot.classList.add('locked');
    }, 4000);
}

async function requestWakeLock() {
    if (!('wakeLock' in navigator)) return;
    try {
        wakeLock = await navigator.wakeLock.request('screen');
        wakeLock.addEventListener('release', () => {
            wakeLock = null;
        });
    } catch (e) {
        // Wake lock request failed (e.g. low battery)
    }
}

function releaseWakeLock() {
    if (wakeLock) {
        wakeLock.release();
        wakeLock = null;
    }
}

// Re-acquire wake lock and force a fresh geofence check when the user comes
// back to the app — `watchPosition` may have stalled while the tab was hidden.
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState !== 'visible') return;

    if (geoWatchId !== null) requestWakeLock();
    // Make sure the silent keep-alive track is still running
    startKeepAliveLoop();

    if (currentTour && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                userLat = pos.coords.latitude;
                userLng = pos.coords.longitude;
                checkGeofences(userLat, userLng);
            },
            () => {},
            { enableHighAccuracy: true, maximumAge: 0, timeout: 10000 }
        );
    }
});

function startGeoTracking() {
    if (geoWatchId !== null) return;
    if (!navigator.geolocation) return;

    requestWakeLock();

    geoWatchId = navigator.geolocation.watchPosition(
        (position) => {
            userLat = position.coords.latitude;
            userLng = position.coords.longitude;
            checkGeofences(userLat, userLng);
        },
        () => {},  // silent errors for continuous tracking
        { enableHighAccuracy: true, maximumAge: 0, timeout: 15000 }
    );
}

function stopGeoTracking() {
    if (geoWatchId !== null) {
        navigator.geolocation.clearWatch(geoWatchId);
        geoWatchId = null;
    }
    releaseWakeLock();
}

function requestLocation(callback, silent = false) {
    if (!navigator.geolocation) {
        if (!silent) alert('Geolocation is not supported by your browser.');
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            userLat = position.coords.latitude;
            userLng = position.coords.longitude;
            if (callback) callback(userLat, userLng);
            // Start continuous tracking once we have permission
            startGeoTracking();
        },
        (error) => {
            if (!silent) {
                if (error.code === error.PERMISSION_DENIED) {
                    alert('Location access is blocked.\n\nTo fix this on iPhone:\n1. Open Settings\n2. Scroll to Safari\n3. Scroll down to "Location"\n4. Set it to "Ask" or "Allow"\n5. Then reload this page');
                } else if (error.code === error.TIMEOUT) {
                    alert('Location request timed out. Please try again.');
                } else {
                    alert('Unable to get your location. Please check that Location Services are turned on in Settings > Privacy & Security > Location Services.');
                }
            }
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 60000 }
    );
}

$('#btn-locate').addEventListener('click', () => {
    openMap();
});

// ===========================
// Unlock audio + keep-alive loop
// ===========================

// Build a 5-second silent WAV in memory so we don't have to ship a file.
// Used as a continuously-looping silent track to keep iOS Safari from
// suspending the tab when the screen locks or the user switches apps —
// `geolocation.watchPosition` only fires while the tab is alive, and
// "media is playing" is the cheapest way to keep it alive on iOS.
function createSilentBlobUrl() {
    const sampleRate = 22050;
    const duration = 5;
    const numSamples = sampleRate * duration;
    const buffer = new ArrayBuffer(44 + numSamples * 2);
    const view = new DataView(buffer);
    let p = 0;
    const wstr = (s) => { for (let i = 0; i < s.length; i++) view.setUint8(p++, s.charCodeAt(i)); };
    wstr('RIFF'); view.setUint32(p, 36 + numSamples * 2, true); p += 4;
    wstr('WAVE'); wstr('fmt ');
    view.setUint32(p, 16, true); p += 4;
    view.setUint16(p, 1, true); p += 2;   // PCM
    view.setUint16(p, 1, true); p += 2;   // mono
    view.setUint32(p, sampleRate, true); p += 4;
    view.setUint32(p, sampleRate * 2, true); p += 4;
    view.setUint16(p, 2, true); p += 2;
    view.setUint16(p, 16, true); p += 2;
    wstr('data'); view.setUint32(p, numSamples * 2, true); p += 4;
    return URL.createObjectURL(new Blob([buffer], { type: 'audio/wav' }));
}

function ensureSilentAudio() {
    if (silentAudio) return;
    silentAudio = new Audio(createSilentBlobUrl());
    silentAudio.loop = true;
    silentAudio.volume = 0;
    silentAudio.preload = 'auto';
    // Whenever the silent track gets paused by something other than us
    // (system events, audio session interruption), try to restart it
    silentAudio.addEventListener('pause', () => {
        if (audio && !audio.paused) return; // real audio is playing — fine
        // Small timeout so we don't fight legitimate pauses
        setTimeout(() => {
            if (silentAudio && silentAudio.paused && (!audio || audio.paused)) {
                silentAudio.play().catch(() => {});
            }
        }, 200);
    });
}

function startKeepAliveLoop() {
    ensureSilentAudio();
    if (silentAudio.paused) {
        silentAudio.play().catch(() => {});
    }
}

function pauseKeepAliveLoop() {
    if (silentAudio && !silentAudio.paused) {
        silentAudio.pause();
    }
}

function unlockAudio() {
    if (audioUnlocked) {
        // Keep-alive may have been paused by an interruption — make sure it's running
        startKeepAliveLoop();
        return;
    }
    // Pre-create the main audio element so future .play() calls (from the
    // geofence trigger, with no user gesture) are trusted on iOS.
    if (!audio) {
        audio = new Audio();
        audio.muted = true;
        audio.play().then(() => {
            audio.pause();
            audio.muted = false;
            audioUnlocked = true;
        }).catch(() => {});
    } else {
        audioUnlocked = true;
    }
    // Start the silent keep-alive track on the same gesture
    startKeepAliveLoop();
}

// Listen for any user gesture to unlock audio
['touchstart', 'touchend', 'click'].forEach(evt => {
    document.addEventListener(evt, unlockAudio, { once: false });
});

// ===========================
// Init
// ===========================

renderTourList();

// Request location on app launch (silent — no alert if denied, just triggers the prompt)
requestLocation(null, true);
