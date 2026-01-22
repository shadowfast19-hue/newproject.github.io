// ==================== ДАННЫЕ КЕЙСОВ ====================
// Цены указаны в USD (базовая валюта)

const casesData = {
    "Gamma Case": {
        name: "Кейс «Гамма»",
        price: 2.49,
        image: "img/Gamma Case/Gamma Case.png",
        items: [
            { name: "MAC-10 Carnivore", image: "img/Gamma Case/item Gamma Case/MAC-10 Carnivore.png", rarity: "consumer", price: 0.024 },
            { name: "Nova Exo", image: "img/Gamma Case/item Gamma Case/Nova Exo.png", rarity: "consumer", price: 0.024 },
            { name: "Sawed-Off Limelight", image: "img/Gamma Case/item Gamma Case/Sawed-Off Limelight.png", rarity: "consumer", price: 0.024 },
            { name: "PP-Bizon Harvester", image: "img/Gamma Case/item Gamma Case/PP-Bizon Harvester.png", rarity: "industrial", price: 0.08 },
            { name: "Tec-9 Ice Cap", image: "img/Gamma Case/item Gamma Case/Tec-9 Ice Cap.png", rarity: "industrial", price: 0.08 },
            { name: "P250 Iron Clad", image: "img/Gamma Case/item Gamma Case/P250 Iron Clad.png", rarity: "industrial", price: 0.08 },
            { name: "SG 553 Aerial", image: "img/Gamma Case/item Gamma Case/SG 553 Aerial.png", rarity: "mil-spec", price: 2.20 },
            { name: "Five-SeveN Violent Daimyo", image: "img/Gamma Case/item Gamma Case/Five-SeveN Violent Daimyo.png", rarity: "mil-spec", price: 2.80 },
            { name: "P90 Chopper", image: "img/Gamma Case/item Gamma Case/P90 Chopper.png", rarity: "mil-spec", price: 3.10 },
            { name: "R8 Revolver Reboot", image: "img/Gamma Case/item Gamma Case/R8 Revolver Reboot.png", rarity: "mil-spec", price: 2.50 },
            { name: "AUG Aristocrat", image: "img/Gamma Case/item Gamma Case/AUG Aristocrat.png", rarity: "restricted", price: 5.50 },
            { name: "P2000 Imperial Dragon", image: "img/Gamma Case/item Gamma Case/P2000 Imperial Dragon.png", rarity: "restricted", price: 7.00 },
            { name: "AWP Phobos", image: "img/Gamma Case/item Gamma Case/AWP Phobos.png", rarity: "restricted", price: 8.50 },
            { name: "SCAR-20 Bloodsport", image: "img/Gamma Case/item Gamma Case/SCAR-20 Bloodsport.png", rarity: "classified", price: 15.00 },
            { name: "Glock-18 Wasteland Rebel", image: "img/Gamma Case/item Gamma Case/Glock-18 Wasteland Rebel.png", rarity: "classified", price: 22.00 },
            { name: "M4A1-S Mecha Industries", image: "img/Gamma Case/item Gamma Case/M4A1-S Mecha Industries.png", rarity: "covert", price: 65.00 },
            { name: "M4A4 Desolate Space", image: "img/Gamma Case/item Gamma Case/M4A4 Desolate Space.png", rarity: "covert", price: 55.00 },
            { name: "★ Karambit Gamma Doppler Emerald", image: "img/Gamma Case/item Gamma Case/★ Karambit Gamma Doppler Emerald.png", rarity: "rare", price: 55000.00 }
        ]
    },
    "Kilowatt Case": {
        name: "Кейс «Киловатт»",
        price: 3.99,
        image: "img/Kilowatt Case/Kilowatt Case.png",
        items: [
            { name: "MAC-10 Light Box", image: "img/Kilowatt Case/item Kilowatt Case/MAC-10 Light Box.png", rarity: "consumer", price: 0.024 },
            { name: "Nova Dark Sigil", image: "img/Kilowatt Case/item Kilowatt Case/Nova Dark Sigil.png", rarity: "consumer", price: 0.95 },
            { name: "SSG 08 Dezastre", image: "img/Kilowatt Case/item Kilowatt Case/SSG 08 Dezastre.png", rarity: "consumer", price: 0.85 },
            { name: "Tec-9 Slag", image: "img/Kilowatt Case/item Kilowatt Case/Tec-9 Slag.png", rarity: "industrial", price: 1.80 },
            { name: "Sawed-Off Analog Input", image: "img/Kilowatt Case/item Kilowatt Case/Sawed-Off Analog Input.png", rarity: "industrial", price: 1.50 },
            { name: "Five-SeveN Hybrid", image: "img/Kilowatt Case/item Kilowatt Case/Five-SeveN Hybrid.png", rarity: "industrial", price: 1.65 },
            { name: "UMP-45 Motorized", image: "img/Kilowatt Case/item Kilowatt Case/UMP-45 Motorized.png", rarity: "mil-spec", price: 3.50 },
            { name: "MP7 Just Smile", image: "img/Kilowatt Case/item Kilowatt Case/MP7 Just Smile.png", rarity: "mil-spec", price: 4.20 },
            { name: "XM1014 Irezumi", image: "img/Kilowatt Case/item Kilowatt Case/XM1014 Irezumi.png", rarity: "mil-spec", price: 3.20 },
            { name: "Zeus x27 Olympus", image: "img/Kilowatt Case/item Kilowatt Case/Zeus x27 Olympus.png", rarity: "mil-spec", price: 4.80 },
            { name: "USP-S Jawbreaker", image: "img/Kilowatt Case/item Kilowatt Case/USP-S Jawbreaker.png", rarity: "restricted", price: 9.50 },
            { name: "M4A4 Etch Lord", image: "img/Kilowatt Case/item Kilowatt Case/M4A4 Etch Lord.png", rarity: "restricted", price: 12.00 },
            { name: "Glock-18 Block-18", image: "img/Kilowatt Case/item Kilowatt Case/Glock-18 Block-18.png", rarity: "restricted", price: 10.50 },
            { name: "AWP Chrome Cannon", image: "img/Kilowatt Case/item Kilowatt Case/AWP Chrome Cannon.png", rarity: "classified", price: 35.00 },
            { name: "M4A1-S Black Lotus", image: "img/Kilowatt Case/item Kilowatt Case/M4A1-S Black Lotus.png", rarity: "classified", price: 48.00 },
            { name: "AK-47 Inheritance", image: "img/Kilowatt Case/item Kilowatt Case/AK-47 Inheritance.png", rarity: "covert", price: 150.00 },
            { name: "★ Kukri Knife Fade", image: "img/Kilowatt Case/item Kilowatt Case/★ Kukri Knife Fade.png", rarity: "rare", price: 1800.00 }
        ]
    },
    "Revolution Case": {
        name: "Кейс «Революция»",
        price: 2.99,
        image: "img/Revolution Case/Revolution Case.png",
        items: [
            { name: "MP9 Featherweight", image: "img/Revolution Case/item Revolution Case/MP9 Featherweight.png", rarity: "consumer", price: 0.024 },
            { name: "MAG-7 Insomnia", image: "img/Revolution Case/item Revolution Case/MAG-7 Insomnia.png", rarity: "consumer", price: 0.024 },
            { name: "MP5-SD Liquidation", image: "img/Revolution Case/item Revolution Case/MP5-SD Liquidation.png", rarity: "consumer", price: 0.024 },
            { name: "Tec-9 Rebel", image: "img/Revolution Case/item Revolution Case/Tec-9 Rebel.png", rarity: "industrial", price: 0.08 },
            { name: "P250 Re.built", image: "img/Revolution Case/item Revolution Case/P250 Re.built.png", rarity: "industrial", price: 0.08 },
            { name: "SCAR-20 Fragments", image: "img/Revolution Case/item Revolution Case/SCAR-20 Fragments.png", rarity: "industrial", price: 0.08 },
            { name: "SG 553 Cyberforce", image: "img/Revolution Case/item Revolution Case/SG 553 Cyberforce.png", rarity: "mil-spec", price: 0.15 },
            { name: "MAC-10 Sakkaku", image: "img/Revolution Case/item Revolution Case/MAC-10 Sakkaku.png", rarity: "mil-spec", price: 0.15 },
            { name: "UMP-45 Wild Child", image: "img/Revolution Case/item Revolution Case/UMP-45 Wild Child.png", rarity: "mil-spec", price: 0.15 },
            { name: "R8 Revolver Banana Cannon", image: "img/Revolution Case/item Revolution Case/R8 Revolver Banana Cannon.png", rarity: "mil-spec", price: 0.15 },
            { name: "P2000 Wicked Sick", image: "img/Revolution Case/item Revolution Case/P2000 Wicked Sick.png", rarity: "restricted", price: 0.5 },
            { name: "Glock-18 Umbral Rabbit", image: "img/Revolution Case/item Revolution Case/Glock-18 Umbral Rabbit.png", rarity: "restricted", price: 0.5 },
            { name: "P90 Neoqueen", image: "img/Revolution Case/item Revolution Case/P90 Neoqueen.png", rarity: "restricted", price: 0.5 },
            { name: "M4A4 Temukau", image: "img/Revolution Case/item Revolution Case/M4A4 Temukau.png", rarity: "classified", price: 4.5 },
            { name: "M4A1-S Emphorosaur-S", image: "img/Revolution Case/item Revolution Case/M4A1-S Emphorosaur-S.png", rarity: "classified", price: 5 },
            { name: "AK-47 Head Shot", image: "img/Revolution Case/item Revolution Case/AK-47 Head Shot.png", rarity: "covert", price: 30 },
            { name: "AWP Duality", image: "img/Revolution Case/item Revolution Case/AWP Duality.png", rarity: "covert", price: 40 },
            { name: "★ Sport Gloves Amphibious", image: "img/Revolution Case/item Revolution Case/★ Sport Gloves Amphibious.png", rarity: "rare", price: 250 }
        ]
    },
    "eSports Сase": {
        name: "Кейс «eSports 2013»",
        price: 15.45,
        image: "img/eSports 2013 Case/eSports Сase.png",
        items: [
            { name: "MP9 Featherweight", image: "img/Revolution Case/item Revolution Case/MP9 Featherweight.png", rarity: "consumer", price: 0.75 },
            { name: "MAG-7 Insomnia", image: "img/Revolution Case/item Revolution Case/MAG-7 Insomnia.png", rarity: "consumer", price: 0.60 },
            { name: "MP5-SD Liquidation", image: "img/Revolution Case/item Revolution Case/MP5-SD Liquidation.png", rarity: "consumer", price: 0.85 },
            { name: "Tec-9 Rebel", image: "img/Revolution Case/item Revolution Case/Tec-9 Rebel.png", rarity: "industrial", price: 1.40 },
            { name: "AWP Duality", image: "img/Revolution Case/item Revolution Case/AWP Duality.png", rarity: "covert", price: 125.00 },
            { name: "★ Karambit  Stained", image: "img/eSports 2013 Case/item eSports Case/★ Karambit  Stained.png", rarity: "rare", price: 37955.22 },
            { name: "★ Karambit Gamma Doppler Emerald", image: "img/Gamma Case/item Gamma Case/★ Karambit Gamma Doppler Emerald.png", rarity: "rare", price: 55000.00 },
            { name: "★ Karambit Gamma Doppler Emerald", image: "img/Gamma Case/item Gamma Case/★ Karambit Gamma Doppler Emerald.png", rarity: "rare", price: 55000.00 }
        ]
    }
};

// ==================== НАСТРОЙКИ ВАЛЮТ ====================

const currencies = {
    USD: { symbol: '$', rate: 1, name: 'USD' },
    EUR: { symbol: '€', rate: 0.86, name: 'EUR' },
    UAH: { symbol: '₴', rate: 43.13, name: 'UAH' },
    JPY: { symbol: '¥', rate: 158.36, name: 'JPY' },
    CNY: { symbol: '¥', rate: 6.96, name: 'CNY' }
};

// По умолчанию гривны
let currentCurrency = localStorage.getItem('cs2_currency') || 'UAH';

// ==================== СТАТИСТИКА ====================

let stats = JSON.parse(localStorage.getItem('cs2_stats')) || {
    casesOpened: 0,
    moneySpent: 0,
    itemsSold: 0,
    moneyEarned: 0,
    rarityDrops: {
        consumer: 0,
        industrial: 0,
        'mil-spec': 0,
        restricted: 0,
        classified: 0,
        covert: 0,
        rare: 0
    }
};

// ==================== СОСТОЯНИЕ ПРИЛОЖЕНИЯ ====================

const INITIAL_BALANCE_USD = 23;
let balance = parseFloat(localStorage.getItem('cs2_balance')) || INITIAL_BALANCE_USD;
let inventory = JSON.parse(localStorage.getItem('cs2_inventory')) || [];
let currentCase = null;
let wonItem = null;
let isSpinning = false;
let soundEnabled = localStorage.getItem('cs2_sound') !== 'false';

// ==================== ИНИЦИАЛИЗАЦИЯ ====================

document.addEventListener('DOMContentLoaded', () => {
    updateCurrencyDisplay();
    updateBalance();
    updateInventory();
    renderCases();
    initSoundToggle();
    
    // Закрытие меню валюты при клике вне его
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.currency-selector')) {
            document.getElementById('currencyMenu').classList.remove('show');
        }
    });
});

// ==================== ВАЛЮТА ====================

function formatPrice(priceUSD) {
    const currency = currencies[currentCurrency];
    const converted = priceUSD * currency.rate;
    
    // Форматируем число с сокращением
    const formattedNumber = formatLargeNumber(converted);
    
    if (currentCurrency === 'UAH' || currentCurrency === 'JPY' || currentCurrency === 'CNY') {
        
        return formattedNumber + currency.symbol;
    }
    return currency.symbol + formattedNumber;
}

function formatPriceNumber(priceUSD) {
    const currency = currencies[currentCurrency];
    const converted = priceUSD * currency.rate;
    
    if (currentCurrency === 'UAH' || currentCurrency === 'JPY' || currentCurrency === 'CNY') {
        
        return formatLargeNumber(converted, false);
    }
    return formatLargeNumber(converted, true);
}

// НОВАЯ ФУНКЦИЯ: Форматирование больших чисел с сокращениями
// НОВАЯ ФУНКЦИЯ: Форматирование больших чисел с сокращениями (K, M, B, T)
function formatLargeNumber(num, showDecimals = true) {
    // Если число меньше 1000, показываем как есть
    if (num < 1000) {
        if (showDecimals) {
            return num.toFixed(2);
        }
        return Math.round(num).toString();
    }
    
    // Определяем префикс
    let divisor, suffix;
    
    if (num < 1000000) {
        // Тысячи (1K - 999K)
        divisor = 1000;
        suffix = 'K';
    } else if (num < 1000000000) {
        // Миллионы (1M - 999M)
        divisor = 1000000;
        suffix = 'M';
    } else if (num < 1000000000000) {
        // Миллиарды (1B - 999B)
        divisor = 1000000000;
        suffix = 'B';
    } else {
        // Триллионы и больше
        divisor = 1000000000000;
        suffix = 'T';
    }
    
    const divided = num / divisor;
    
    // Определяем сколько знаков показывать после запятой
    if (divided >= 100) {
        // Для чисел >= 100 показываем без десятичных
        return Math.round(divided) + suffix;
    } else if (divided >= 10) {
        // Для чисел 10-99 показываем 1 знак после запятой
        return divided.toFixed(1) + suffix;
    } else {
        // Для чисел <10 показываем 2 знака после запятой
        return divided.toFixed(2) + suffix;
    }
}

function toggleCurrencyMenu() {
    document.getElementById('currencyMenu').classList.toggle('show');
}

function setCurrency(currency) {
    currentCurrency = currency;
    localStorage.setItem('cs2_currency', currency);
    updateCurrencyDisplay();
    updateBalance();
    renderCases();
    renderInventory();
    updateStats();
    document.getElementById('currencyMenu').classList.remove('show');
    playSound('click');
}

function updateCurrencyDisplay() {
    const currency = currencies[currentCurrency];
    document.getElementById('currencySymbol').textContent = currency.symbol;
    document.getElementById('currentCurrency').textContent = currency.name;
}

// ==================== РЕНДЕРИНГ ====================

function renderCases() {
    const grid = document.getElementById('casesGrid');
    grid.innerHTML = '';

    Object.keys(casesData).forEach(caseKey => {
        const caseData = casesData[caseKey];
        const card = document.createElement('div');
        card.className = 'case-card';
        card.onclick = () => openCaseModal(caseKey);
        card.innerHTML = `
            <img src="${caseData.image}" alt="${caseData.name}">
            <h3>${caseData.name}</h3>
            <p class="price">${formatPrice(caseData.price)}</p>
            <span class="open-text">Открыть кейс</span>
        `;
        grid.appendChild(card);
    });
}

function renderInventory() {
    const grid = document.getElementById('inventoryGrid');
    const empty = document.getElementById('emptyInventory');
    const countEl = document.getElementById('inventoryCount');
    const valueEl = document.getElementById('inventoryValue');

    countEl.textContent = inventory.length;

    if (inventory.length === 0) {
        grid.innerHTML = '';
        empty.classList.add('show');
        valueEl.textContent = formatPrice(0);
        return;
    }

    empty.classList.remove('show');
    
    let totalValue = 0;
    grid.innerHTML = '';

    inventory.forEach((item, index) => {
        totalValue += item.price;
        const div = document.createElement('div');
        div.className = `inventory-item ${item.rarity}`;
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h4 title="${item.name}">${item.name}</h4>
            <p class="item-price">${formatPrice(item.price)}</p>
            <button class="sell-item-btn" onclick="sellItem(${index})">Продать</button>
        `;
        grid.appendChild(div);
    });

    valueEl.textContent = formatPrice(totalValue);
}

// ==================== НАВИГАЦИЯ ====================

function showSection(section) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

    if (section === 'cases') {
        document.getElementById('casesSection').classList.add('active');
        document.querySelectorAll('.nav-btn')[0].classList.add('active');
    } else if (section === 'inventory') {
        document.getElementById('inventorySection').classList.add('active');
        document.querySelectorAll('.nav-btn')[1].classList.add('active');
        renderInventory();
    } else if (section === 'stats') {
        document.getElementById('statsSection').classList.add('active');
        document.querySelectorAll('.nav-btn')[2].classList.add('active');
        updateStats();
    }

    playSound('click');
}

// ==================== МОДАЛЬНОЕ ОКНО ====================

function openCaseModal(caseKey) {
    currentCase = casesData[caseKey];
    currentCase.key = caseKey; // Сохраняем ключ для статистики
    
    const currency = currencies[currentCurrency];
    document.getElementById('modalCaseImage').src = currentCase.image;
    document.getElementById('modalCaseName').textContent = currentCase.name;
    document.getElementById('modalCasePrice').textContent = formatPriceNumber(currentCase.price);
    document.getElementById('modalCurrencySymbol').textContent = currency.symbol;

    // Рендер содержимого кейса
    const contentsGrid = document.getElementById('contentsGrid');
    contentsGrid.innerHTML = '';
    
    // Сортируем по редкости
    const rarityOrder = ['consumer', 'industrial', 'mil-spec', 'restricted', 'classified', 'covert', 'rare'];
    const sortedItems = [...currentCase.items].sort((a, b) => 
        rarityOrder.indexOf(a.rarity) - rarityOrder.indexOf(b.rarity)
    );

    sortedItems.forEach(item => {
        const div = document.createElement('div');
        div.className = `content-item ${item.rarity}`;
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <span class="item-name" title="${item.name}">${item.name}</span>
            <span class="item-price">${formatPrice(item.price)}</span>
        `;
        contentsGrid.appendChild(div);
    });

    // Сброс состояния
    document.getElementById('rouletteContainer').classList.remove('show');
    document.getElementById('winDisplay').classList.remove('show');
    document.getElementById('caseContents').style.display = 'block';
    document.getElementById('openCaseBtn').disabled = false;
    document.getElementById('openCaseBtn').style.display = 'flex';
    document.getElementById('openCaseFastBtn').disabled = false;
    document.getElementById('openCaseFastBtn').style.display = 'flex';

    document.getElementById('caseModal').classList.add('show');
    playSound('click');
}

function closeModal() {
    if (isSpinning) return;
    
    // Если есть выигранный предмет и он ещё не обработан - сохраняем в инвентарь
    if (wonItem) {
        inventory.push({...wonItem, id: Date.now()});
        saveData();
        updateInventory();
        showNotification(`${wonItem.name} добавлен в инвентарь!`, 'success');
    }
    
    document.getElementById('caseModal').classList.remove('show');
    currentCase = null;
    wonItem = null;
    playSound('click');
}

// ==================== ОТКРЫТИЕ КЕЙСА ====================

function openCase() {
    if (!currentCase || isSpinning) return;
    
    if (balance < currentCase.price) {
        showNotification('Недостаточно средств!', 'error');
        return;
    }

    // Списываем стоимость
    balance -= currentCase.price;
    updateBalance();
    
    // Обновляем статистику
    stats.casesOpened++;
    stats.moneySpent += currentCase.price;
    saveData();

    isSpinning = true;
    document.getElementById('openCaseBtn').disabled = true;
    document.getElementById('openCaseFastBtn').disabled = true;
    document.getElementById('caseContents').style.display = 'none';

    // Определяем выигрыш
    wonItem = determineWin();
    
    // Обновляем статистику редкости
    stats.rarityDrops[wonItem.rarity]++;
    saveData();

    // Генерируем рулетку
    generateRoulette();

    // Показываем рулетку
    document.getElementById('rouletteContainer').classList.add('show');

    // Запускаем тикающий звук
    startSpinSound();

    // Запускаем анимацию
    setTimeout(() => {
        spinRoulette();
    }, 100);
}

// Быстрое открытие без анимации
function openCaseFast() {
    if (!currentCase || isSpinning) return;
    
    if (balance < currentCase.price) {
        showNotification('Недостаточно средств!', 'error');
        return;
    }

    // Списываем стоимость
    balance -= currentCase.price;
    updateBalance();
    
    // Обновляем статистику
    stats.casesOpened++;
    stats.moneySpent += currentCase.price;

    // Определяем выигрыш
    wonItem = determineWin();
    
    // Обновляем статистику редкости
    stats.rarityDrops[wonItem.rarity]++;
    saveData();

    // Скрываем содержимое кейса
    document.getElementById('caseContents').style.display = 'none';
    document.getElementById('openCaseBtn').style.display = 'none';
    document.getElementById('openCaseFastBtn').style.display = 'none';

    // Сразу показываем результат
    showWinResult();
    playSound('win');
}

function determineWin() {
    // Улучшенные шансы на редкость (более щедрые, чем в оригинале)
    const chances = {
        consumer: 0.25,      // 25% (было 40%)
        industrial: 0.28,    // 28% (было 30%)
        'mil-spec': 0.25,    // 25% (было 18%)
        restricted: 0.12,    // 12% (было 8%)
        classified: 0.06,    // 6% (было 3%)
        covert: 0.025,       // 2.5% (было 0.64%)
        rare: 0.015          // 1.5% (было 0.26%)
    };

    const random = Math.random();
    let cumulative = 0;
    let selectedRarity = 'consumer';

    for (const [rarity, chance] of Object.entries(chances)) {
        cumulative += chance;
        if (random < cumulative) {
            selectedRarity = rarity;
            break;
        }
    }

    // Выбираем случайный предмет данной редкости
    const itemsOfRarity = currentCase.items.filter(item => item.rarity === selectedRarity);
    
    if (itemsOfRarity.length === 0) {
        // Если нет предметов данной редкости, берём consumer
        const fallback = currentCase.items.filter(item => item.rarity === 'consumer');
        return fallback[Math.floor(Math.random() * fallback.length)];
    }

    return itemsOfRarity[Math.floor(Math.random() * itemsOfRarity.length)];
}

// Константы рулетки
const ITEM_WIDTH = 160; // 150px ширина + 10px отступы
const TOTAL_ITEMS = 70; // Общее количество предметов
const WIN_POSITION = 50; // Позиция выигрышного предмета

function generateRoulette() {
    const track = document.getElementById('rouletteTrack');
    track.innerHTML = '';
    track.style.transition = 'none';
    track.style.transform = 'translateY(-50%) translateX(0px)';

    for (let i = 0; i < TOTAL_ITEMS; i++) {
        let item;
        if (i === WIN_POSITION) {
            item = wonItem;
        } else {
            // Случайный предмет с учётом шансов
            item = getRandomItemForRoulette();
        }

        const div = document.createElement('div');
        div.className = `roulette-item ${item.rarity}`;
        if (i === WIN_POSITION) {
            div.setAttribute('data-winner', 'true');
        }
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <span>${item.name}</span>
        `;
        track.appendChild(div);
    }
}

function getRandomItemForRoulette() {
    // Визуально показываем разнообразие предметов
    const random = Math.random();
    let selectedRarity;
    
    if (random < 0.35) selectedRarity = 'consumer';
    else if (random < 0.60) selectedRarity = 'industrial';
    else if (random < 0.80) selectedRarity = 'mil-spec';
    else if (random < 0.92) selectedRarity = 'restricted';
    else if (random < 0.97) selectedRarity = 'classified';
    else if (random < 0.995) selectedRarity = 'covert';
    else selectedRarity = 'rare';

    const items = currentCase.items.filter(item => item.rarity === selectedRarity);
    if (items.length === 0) {
        return currentCase.items[Math.floor(Math.random() * currentCase.items.length)];
    }
    return items[Math.floor(Math.random() * items.length)];
}

function spinRoulette() {
    const track = document.getElementById('rouletteTrack');
    const container = document.getElementById('rouletteContainer');
    const containerWidth = container.offsetWidth;
    
    // Вычисляем точное смещение до центра выигрышного предмета
    // Центр контейнера - это containerWidth / 2
    // Центр предмета на позиции WIN_POSITION = WIN_POSITION * ITEM_WIDTH + ITEM_WIDTH / 2
    const itemCenter = WIN_POSITION * ITEM_WIDTH + ITEM_WIDTH / 2;
    const containerCenter = containerWidth / 2;
    
    // Смещение чтобы центр предмета был в центре контейнера
    // Добавляем небольшое случайное смещение в пределах предмета (но не выходя за его границы)
    const randomOffset = (Math.random() - 0.5) * (ITEM_WIDTH * 0.6); // ±48px максимум
    const targetOffset = itemCenter - containerCenter + randomOffset;

    // Применяем анимацию
    track.style.transition = 'transform 5s cubic-bezier(0.15, 0.8, 0.3, 1)';
    track.style.transform = `translateY(-50%) translateX(-${targetOffset}px)`;

    // После анимации
    setTimeout(() => {
        stopSpinSound();
        isSpinning = false;
        showWinResult();
    }, 5200);
}

function showWinResult() {
    document.getElementById('rouletteContainer').classList.remove('show');
    
    const winDisplay = document.getElementById('winDisplay');
    const winGlow = document.getElementById('winGlow');
    const currency = currencies[currentCurrency];
    
    document.getElementById('winImage').src = wonItem.image;
    document.getElementById('winName').textContent = wonItem.name;
    document.getElementById('winPrice').textContent = formatPriceNumber(wonItem.price);
    document.getElementById('winCurrencySymbol').textContent = currency.symbol;
    
    winGlow.className = `win-glow ${wonItem.rarity}`;
    
    winDisplay.classList.add('show');
    document.getElementById('openCaseBtn').style.display = 'none';

    // Звук победы
    if (wonItem.rarity === 'rare' || wonItem.rarity === 'covert') {
        playSound('rareWin');
    } else {
        playSound('win');
    }
}

function keepItem() {
    if (!wonItem) return;
    
    inventory.push({...wonItem, id: Date.now()});
    saveData();
    updateInventory();
    
    showNotification(`${wonItem.name} добавлен в инвентарь!`, 'success');
    playSound('sell');
    
    // Сбрасываем состояние
    wonItem = null;
    document.getElementById('caseModal').classList.remove('show');
    currentCase = null;
}

function sellWonItem() {
    if (!wonItem) return;
    
    balance += wonItem.price;
    stats.itemsSold++;
    stats.moneyEarned += wonItem.price;
    
    updateBalance();
    saveData();
    updateStats(); // Добавьте эту строку
    
    showNotification(`Продано за ${formatPrice(wonItem.price)}`, 'success');
    playSound('sell');
    
    // Сбрасываем состояние
    wonItem = null;
    document.getElementById('caseModal').classList.remove('show');
    currentCase = null;
}

// ==================== ИНВЕНТАРЬ ====================

function sellItem(index) {
    const item = inventory[index];
    if (!item) return;

    balance += item.price;
    stats.itemsSold++;
    stats.moneyEarned += item.price;
    inventory.splice(index, 1);
    
    updateBalance();
    saveData();
    renderInventory();
    
    showNotification(`Продано за ${formatPrice(item.price)}`, 'success');
    playSound('sell');
}

function sellAll() {
    if (inventory.length === 0) {
        showNotification('Инвентарь пуст!', 'error');
        return;
    }

    const total = inventory.reduce((sum, item) => sum + item.price, 0);
    const count = inventory.length;
    balance += total;
    stats.itemsSold += count;
    stats.moneyEarned += total;
    inventory = [];
    
    updateBalance();
    saveData();
    renderInventory();
    
    showNotification(`Продано ${count} предметов за ${formatPrice(total)}`, 'success');
    playSound('sell');
}

function updateInventory() {
    document.getElementById('inventoryCount').textContent = inventory.length;
}

// ==================== БАЛАНС ====================

function updateBalance() {
    document.getElementById('balance').textContent = formatPriceNumber(balance);
}

function addBalance() {
    const amountToAddUSD = 2.3;
    balance += amountToAddUSD;
    updateBalance();
    saveData();
    showNotification(`+${formatPrice(amountToAddUSD)} добавлено!`, 'success');
    playSound('sell');
}

// ==================== ЗВУКИ (Web Audio API) ====================

let audioContext = null;
const soundBuffers = {};

function initAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        generateAllSounds();
    }
}

function generateAllSounds() {
    // Click sound
    soundBuffers.click = generateClickSound();
    // Spin/tick sound
    soundBuffers.spin = generateSpinSound();
    // Win sound
    soundBuffers.win = generateWinSound();
    // Rare win sound
    soundBuffers.rareWin = generateRareWinSound();
    // Sell sound
    soundBuffers.sell = generateSellSound();
}

function generateClickSound() {
    const duration = 0.08;
    const buffer = audioContext.createBuffer(1, audioContext.sampleRate * duration, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < buffer.length; i++) {
        const t = i / audioContext.sampleRate;
        data[i] = (Math.random() * 2 - 1) * Math.exp(-t * 50);
    }
    return buffer;
}

function generateSpinSound() {
    const duration = 0.06;
    const buffer = audioContext.createBuffer(1, audioContext.sampleRate * duration, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < buffer.length; i++) {
        const t = i / audioContext.sampleRate;
        data[i] = Math.sin(2 * Math.PI * 1200 * t) * Math.exp(-t * 40);
    }
    return buffer;
}

function generateWinSound() {
    const duration = 1.2;
    const buffer = audioContext.createBuffer(1, audioContext.sampleRate * duration, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < buffer.length; i++) {
        const t = i / audioContext.sampleRate;
        // Мажорный аккорд (C E G)
        data[i] = (
            Math.sin(2 * Math.PI * 523.25 * t) * 0.4 +
            Math.sin(2 * Math.PI * 659.25 * t) * 0.3 +
            Math.sin(2 * Math.PI * 783.99 * t) * 0.3
        ) * Math.exp(-t * 1.5);
    }
    return buffer;
}

function generateRareWinSound() {
    const duration = 2.0;
    const buffer = audioContext.createBuffer(1, audioContext.sampleRate * duration, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < buffer.length; i++) {
        const t = i / audioContext.sampleRate;
        // Эпический аккорд с гармониками
        const freq1 = 261.63; // C4
        const freq2 = 329.63; // E4
        const freq3 = 392.00; // G4
        const freq4 = 523.25; // C5
        
        data[i] = (
            Math.sin(2 * Math.PI * freq1 * t) * 0.25 +
            Math.sin(2 * Math.PI * freq2 * t) * 0.25 +
            Math.sin(2 * Math.PI * freq3 * t) * 0.25 +
            Math.sin(2 * Math.PI * freq4 * t) * 0.25 +
            Math.sin(2 * Math.PI * freq4 * 2 * t) * 0.1
        ) * Math.exp(-t * 0.8) * (1 + Math.sin(t * 10) * 0.1);
    }
    return buffer;
}

function generateSellSound() {
    const duration = 0.4;
    const buffer = audioContext.createBuffer(1, audioContext.sampleRate * duration, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < buffer.length; i++) {
        const t = i / audioContext.sampleRate;
        // Звук монет
        data[i] = (
            Math.sin(2 * Math.PI * 2000 * t) * 0.3 +
            Math.sin(2 * Math.PI * 3000 * t) * 0.2 +
            Math.sin(2 * Math.PI * 4000 * t) * 0.1 +
            (Math.random() * 2 - 1) * 0.1
        ) * Math.exp(-t * 8);
    }
    return buffer;
}

function initSoundToggle() {
    updateSoundIcon();
    // Инициализируем аудио при первом взаимодействии
    document.addEventListener('click', () => {
        if (!audioContext) initAudio();
    }, { once: true });
}

function toggleSound() {
    soundEnabled = !soundEnabled;
    localStorage.setItem('cs2_sound', soundEnabled);
    updateSoundIcon();
    
    if (soundEnabled) {
        initAudio();
        playSound('click');
    }
}

function updateSoundIcon() {
    document.getElementById('soundIcon').textContent = soundEnabled ? '🔊' : '🔇';
}

function playSound(type) {
    if (!soundEnabled || !audioContext) return;

    const buffer = soundBuffers[type];
    if (!buffer) return;

    const source = audioContext.createBufferSource();
    const gainNode = audioContext.createGain();
    
    source.buffer = buffer;
    source.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Громкость
    const volumes = {
        click: 0.3,
        spin: 0.4,
        win: 0.5,
        rareWin: 0.6,
        sell: 0.4
    };
    
    gainNode.gain.value = volumes[type] || 0.5;
    source.start(0);
}

// Специальная функция для звука рулетки (тикающий звук)
let spinInterval = null;

function startSpinSound() {
    if (!soundEnabled || !audioContext) return;
    
    let delay = 50;
    const maxDelay = 300;
    const increment = 5;
    
    function tick() {
        playSound('spin');
        delay = Math.min(delay + increment, maxDelay);
        spinInterval = setTimeout(tick, delay);
    }
    
    tick();
}

function stopSpinSound() {
    if (spinInterval) {
        clearTimeout(spinInterval);
        spinInterval = null;
    }
}

// ==================== УВЕДОМЛЕНИЯ ====================

function showNotification(message, type = 'info') {
    const container = document.getElementById('notifications');
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span>
        <span>${message}</span>
    `;
    container.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100px)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ==================== СОХРАНЕНИЕ ====================

function saveData() {
    localStorage.setItem('cs2_balance', balance.toString());
    localStorage.setItem('cs2_inventory', JSON.stringify(inventory));
    localStorage.setItem('cs2_stats', JSON.stringify(stats));
}

// ==================== СТАТИСТИКА ====================

function updateStats() {
    const totalDrops = Object.values(stats.rarityDrops).reduce((a, b) => a + b, 0);
    const inventoryValue = inventory.reduce((sum, item) => sum + item.price, 0);
    const profit = stats.moneyEarned + inventoryValue - stats.moneySpent;
    
    document.getElementById('statCasesOpened').textContent = stats.casesOpened;
    document.getElementById('statMoneySpent').textContent = formatPrice(stats.moneySpent);
    document.getElementById('statItemsSold').textContent = stats.itemsSold;
    document.getElementById('statMoneyEarned').textContent = formatPrice(stats.moneyEarned);
    document.getElementById('statItemsKept').textContent = inventory.length;
    
    const profitEl = document.getElementById('statProfit');
    profitEl.textContent = (profit >= 0 ? '+' : '') + formatPrice(profit);
    profitEl.style.color = profit >= 0 ? '#4CAF50' : '#f44336';
    
    // Обновляем полоски редкости
    const rarities = ['consumer', 'industrial', 'mil-spec', 'restricted', 'classified', 'covert', 'rare'];
    const maxDrops = Math.max(...Object.values(stats.rarityDrops), 1);
    
    rarities.forEach(rarity => {
        const count = stats.rarityDrops[rarity] || 0;
        const percentage = (count / maxDrops) * 100;
        const fillId = 'rarity' + rarity.charAt(0).toUpperCase() + rarity.slice(1).replace('-', '');
        const fillEl = document.getElementById(fillId);
        if (fillEl) {
            fillEl.style.width = percentage + '%';
        }
        
        const countId = 'count' + rarity.charAt(0).toUpperCase() + rarity.slice(1).replace('-', '');
        const countEl = document.getElementById(countId);
        if (countEl) {
            countEl.textContent = count;
        }
    });
    
    // Специальные ID для mil-spec
    const milSpecFill = document.getElementById('rarityMilSpec');
    if (milSpecFill) {
        milSpecFill.style.width = ((stats.rarityDrops['mil-spec'] || 0) / maxDrops * 100) + '%';
    }
    document.getElementById('countMilSpec').textContent = stats.rarityDrops['mil-spec'] || 0;
}

function resetStats() {
    if (confirm('Вы уверены, что хотите сбросить всю статистику?')) {
        stats = {
            casesOpened: 0,
            moneySpent: 0,
            itemsSold: 0,
            moneyEarned: 0,
            rarityDrops: {
                consumer: 0,
                industrial: 0,
                'mil-spec': 0,
                restricted: 0,
                classified: 0,
                covert: 0,
                rare: 0
            }
        };
        saveData();
        updateStats();
        showNotification('Статистика сброшена!', 'success');
        playSound('click');
    }
}

// ==================== ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА ПО ESC ====================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Закрытие по клику вне модального окна
document.getElementById('caseModal').addEventListener('click', (e) => {
    if (e.target.id === 'caseModal') {
        closeModal();
    }
});



