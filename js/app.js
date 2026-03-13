// ===========================
// Sample Data
// ===========================

const tours = [
    {
        id: 'blue-ridge-parkway',
        title: 'Blue Ridge Parkway',
        region: 'North Carolina & Virginia',
        description: 'Drive through the stunning Blue Ridge Mountains with stories about the history, wildlife, and hidden gems along one of America\'s most scenic routes.',
        image: 'images/blue-ridge.jpg',
        badge: 'Free',
        stops: 8,
        duration: '45 min',
        distance: '85 mi',
        locations: [
            { name: 'Hendersonville Overlook', desc: 'Where the mountains first come into view', image: 'images/locations/hendersonville.jpg' },
            { name: 'Graveyard Fields', desc: 'A valley shaped by ancient floods and wildfire', image: 'images/locations/graveyard-fields.jpg' },
            { name: 'Devil\'s Courthouse', desc: 'Cherokee legends of this towering rock face', image: 'images/locations/devils-courthouse.jpg' },
            { name: 'Richland Balsam', desc: 'The highest point on the entire Parkway', image: 'images/locations/richland-balsam.jpg' },
            { name: 'Waterrock Knob', desc: 'Panoramic views stretching four states', image: 'images/locations/waterrock-knob.jpg' },
            { name: 'Balsam Gap', desc: 'Historic railroad town in the clouds', image: 'images/locations/balsam-gap.jpg' },
            { name: 'Soco Gap', desc: 'Gateway to the Cherokee homeland', image: 'images/locations/soco-gap.jpg' },
            { name: 'Oconaluftee Valley', desc: 'Into the heart of the Great Smoky Mountains', image: 'images/locations/oconaluftee.jpg' },
        ]
    },
    {
        id: 'pacific-coast-highway',
        title: 'Pacific Coast Highway',
        region: 'California',
        description: 'Cruise along the iconic California coastline from Big Sur to Monterey. Hear about shipwrecks, celebrity hideaways, and geological wonders carved by the Pacific.',
        image: 'images/pacific-coast.jpg',
        badge: 'Coming Soon',
        stops: 10,
        duration: '55 min',
        distance: '120 mi',
        locations: [
            { name: 'Bixby Creek Bridge', desc: 'One of the most photographed bridges in the world', image: 'images/locations/bixby.jpg' },
            { name: 'McWay Falls', desc: 'An 80-foot waterfall dropping onto a pristine beach', image: 'images/locations/mcway.jpg' },
            { name: 'Point Lobos', desc: 'The crown jewel of California state parks', image: 'images/locations/point-lobos.jpg' },
            { name: 'Carmel-by-the-Sea', desc: 'A fairytale village with no street addresses', image: 'images/locations/carmel.jpg' },
            { name: 'Pfeiffer Beach', desc: 'Purple sand and a natural rock arch', image: 'images/locations/pfeiffer.jpg' },
            { name: 'Nepenthe', desc: 'Where Orson Welles and Rita Hayworth honeymooned', image: 'images/locations/nepenthe.jpg' },
            { name: 'Julia Pfeiffer Burns', desc: 'Towering redwoods meeting the ocean', image: 'images/locations/julia-pfeiffer.jpg' },
            { name: 'Andrew Molera', desc: 'A hidden trail to a secluded beach', image: 'images/locations/andrew-molera.jpg' },
            { name: 'Point Sur Lighthouse', desc: 'A lonely beacon on a volcanic rock', image: 'images/locations/point-sur.jpg' },
            { name: 'Monterey Bay', desc: 'Where the canyon beneath rivals the Grand Canyon', image: 'images/locations/monterey.jpg' },
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
    tour: $('#screen-tour'),
    locations: $('#screen-locations'),
    player: $('#screen-player'),
};

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
        goBack('tour', 'home');
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
// Init
// ===========================

renderTourList();
