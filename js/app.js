// ===========================
// Sample Data
// ===========================

const tours = [
    {
        id: 'north-cascades-highway',
        title: 'North Cascades Highway',
        region: 'Washington State',
        description: 'Wind through the dramatic North Cascades along Highway 20, one of the most scenic drives in the Pacific Northwest. Towering peaks, glacier-fed lakes, and old-growth forests tell the story of the "American Alps."',
        image: 'images/north-cascades.jpg',
        badge: 'Free',
        stops: 10,
        duration: '50 min',
        distance: '130 mi',
        locations: [
            { name: 'Sedro-Woolley', desc: 'Gateway town to the North Cascades', image: 'images/locations/sedro-woolley.jpg' },
            { name: 'Marblemount', desc: 'Last stop before the wilderness begins', image: 'images/locations/marblemount.jpg' },
            { name: 'Newhalem', desc: 'A company town built by Seattle City Light', image: 'images/locations/newhalem.jpg' },
            { name: 'Gorge Creek Falls', desc: 'A thundering waterfall dropping into a turquoise gorge', image: 'images/locations/gorge-creek.jpg' },
            { name: 'Diablo Lake Overlook', desc: 'Impossibly turquoise water colored by glacial flour', image: 'images/locations/diablo-lake.jpg' },
            { name: 'Ross Lake Overlook', desc: 'A vast reservoir stretching to the Canadian border', image: 'images/locations/ross-lake.jpg' },
            { name: 'Rainy Pass', desc: 'Where the Pacific Crest Trail crosses the highway', image: 'images/locations/rainy-pass.jpg' },
            { name: 'Washington Pass Overlook', desc: 'Jaw-dropping views of Liberty Bell and the Early Winters Spires', image: 'images/locations/washington-pass.jpg' },
            { name: 'Mazama', desc: 'A tiny mountain village in the Methow Valley', image: 'images/locations/mazama.jpg' },
            { name: 'Winthrop', desc: 'An Old West-themed town at the end of the highway', image: 'images/locations/winthrop.jpg' },
        ]
    },
    {
        id: 'denali-national-park',
        title: 'Denali National Park',
        region: 'Alaska',
        description: 'Experience the raw wilderness of Denali, home to North America\'s tallest peak. Six million acres of tundra, grizzlies, caribou, and landscapes that have barely changed in thousands of years.',
        image: 'images/denali.jpg',
        badge: 'Coming Soon',
        stops: 10,
        duration: '55 min',
        distance: '92 mi',
        locations: [
            { name: 'Park Entrance', desc: 'Where the adventure into the wild begins', image: 'images/locations/park-entrance.jpg' },
            { name: 'Savage River', desc: 'The last stretch accessible by regular vehicles', image: 'images/locations/savage-river.jpg' },
            { name: 'Teklanika River', desc: 'Braided river channels carved by glacial melt', image: 'images/locations/teklanika.jpg' },
            { name: 'Polychrome Pass', desc: 'Volcanic cliffs painted in red, orange, and purple', image: 'images/locations/polychrome.jpg' },
            { name: 'Toklat River', desc: 'Prime grizzly bear territory along a wide riverbed', image: 'images/locations/toklat.jpg' },
            { name: 'Stony Hill Overlook', desc: 'Your first clear view of Denali on a good day', image: 'images/locations/stony-hill.jpg' },
            { name: 'Eielson Visitor Center', desc: 'Face to face with the mountain at 66 miles in', image: 'images/locations/eielson.jpg' },
            { name: 'Wonder Lake', desc: 'The iconic reflection of Denali on still water', image: 'images/locations/wonder-lake.jpg' },
            { name: 'Kantishna', desc: 'A gold rush settlement at the end of the road', image: 'images/locations/kantishna.jpg' },
            { name: 'Denali Summit View', desc: 'The highest point in North America at 20,310 feet', image: 'images/locations/denali-summit.jpg' },
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
