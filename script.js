// 1. Главная страница с промо-видео центра
const pages = {
    home: `
        <div class="hero">
            <h1>Добро пожаловать в "IT-куб"!</h1>
            <p>Центр цифрового образования — место, где дети создают будущее своими руками.</p>
            <div style="margin-top:35px; width:100%; display:flex; justify-content:center;">
                <video autoplay loop muted playsinline width="100%" style="max-width:720px; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.15); border:1px solid #e0e4ec;">
                    <source src="media/promo.mp4" type="video/mp4">
                </video>
            </div>
        </div>
    `,
    about: `
        <div class="page-placeholder">
            <h2>О центре</h2>
            <p>Центр цифрового образования детей «IT-куб» — это современная площадка дополнительного образования, направленная на популяризацию информационных технологий и программирования.</p>
        </div>
    `,
    teachers: `<div class="schedule-container" style="text-align:center;"><h2>Наши педагоги</h2><p class="schedule-subtitle">Опытные специалисты и практикующие IT-инженеры</p><div id="teachers-list-grid" style="display:grid; grid-template-columns:repeat(auto-fit,minmax(450px,1fr)); gap:25px; text-align:left; margin-top:30px;"></div></div>`,
    schedule: `
        <div class="schedule-container">
            <h2>Расписание занятий</h2>
            <p class="schedule-subtitle">Выберите направление обучения для просмотра расписания групп:</p>
            <div class="courses-grid">
                <button class="course-btn" data-course="python">Основы программирования на языке Python</button>
                <button class="course-btn" data-course="java">Разработка мобильных приложений на языке Java</button>
                <button class="course-btn" data-course="scratch">Программирование роботов / Основы алгоритмики и логики (Scratch)</button>
                <button class="course-btn" data-course="vrar">Разработка VR/AR приложений</button>
                <button class="course-btn" data-course="cyber">Системное администрирование и кибергигиена</button>
                <button class="course-btn" data-course="art">Цифровое рисование</button>
                <button class="course-btn" data-course="drones">Школа дронов</button>
            </div>
            <div id="course-table-container" class="table-container"><div class="table-placeholder">Нажмите на интересующий курс выше, чтобы увидеть расписание.</div></div>
        </div>
    `
};
// 2. Список преподавателей для автоматического вывода на сайт
const teachersData = [
    { name: "Попов Н. Ю.", sub: "Python / Яндекс", bg: "#3776ab", img: "media/teacher1.jpg", text: "Преподаватель высшей категории. Специализируется на изучении алгоритмов и промышленного программирования." },
    { name: "Бушенев И. В.", sub: "Python / ВЕБ", bg: "#1b263b", img: "media/teacher2.jpg", text: "Ведущий наставник направления «Код Будущего». Помогает ребятам создавать первые веб-сервисы." },
    { name: "Войт Е. И.", sub: "Java / Дроны", bg: "#e41f23", img: "media/teacher3.jpg", text: "Помогает создавать приложения на языке Java. Обучает объектно-ориентированному программированию." },
    { name: "Попов А. О.", sub: "Scratch", bg: "#f5a623", img: "media/teacher4.jpg", text: "Специалист по детской визуальной робототехнике. Развивает у младших школьников логическое мышление." },
    { name: "Брант В. Е.", sub: "VR/AR / Рисование", bg: "#ff007f", img: "media/teacher5.jpg", text: "Преподаватель цифрового рисунка и 3D-моделирования. Обучает созданию виртуальных миров." },
    { name: "Конов А. Б.", sub: "VR/AR приложения", bg: "#7209b7", img: "media/teacher6.jpg", text: "Наставник по разработке на движках игровых сред и Varwin. Курирует проектную деятельность." },
    { name: "Ананин Д. И.", sub: "Сис. администрирование", bg: "#00b4d8", img: "media/teacher7.jpg", text: "Эксперт в области сетевых технологий и информационной безопасности. Ведет группы уровня ПРО." },
    { name: "Ананин Н. И.", sub: "Кибергигиена / Графика", bg: "#4caf50", img: "media/teacher8.jpg", text: "Преподаватель курсов по работе с ОС Astra Linux и компьютерной анимации. Обучает кибербезопасности." }
];

const courseSchedules = {
    python: `<h3>Python (Лицей Академии Яндекса)</h3><table class="schedule-table"><tr><th>Время</th><th>Понедельник</th><th>Вторник</th><th>Среда</th><th>Четверг</th><th>Пятница</th><th>Суббота</th></tr><tr><td><strong>09:00-11:20</strong></td><td>—</td><td style="background:#e2f0cb">Попов Н.Ю.<br>Бюджет, 1й год (каб.1)</td><td>—</td><td style="background:#e2f0cb">Попов Н.Ю.<br>Бюджет, 1й год (каб.1)</td><td>—</td><td>—</td></tr><tr><td><strong>15:30-17:50</strong></td><td style="background:#ffdeea">Бушенев И.В.<br>ЯЛ, 1й год (каб.1)</td><td style="background:#fff1cc">Бушенев И.В.<br>КОД БУДУЩЕГО (каб.1)</td><td>—</td><td style="background:#ffdeea">Бушенев И.В.<br>ЯЛ, 1й год (каб.1)</td><td style="background:#fff1cc">Бушенев И.В.<br>КОД БУДУЩЕГО (каб.1)</td><td>—</td></tr><tr><td><strong>18:00-20:20</strong></td><td style="background:#ffe5cc">Бушенев И.В.<br>ЯЛ, 2й год (каб.1)</td><td>—</td><td>—</td><td style="background:#d1ecf1">Бушенев И.В.<br>ПРО, 1й год (каб.1)</td><td style="background:#ffe5cc">Бушенев И.В.<br>ЯЛ, 2й год (каб.1)</td><td style="background:#d1ecf1">Бушенев И.В.<br>ПРО, 1й год (каб.1)</td></tr></table>`,
    java: `<h3>Java (IT-ШКОЛА SAMSUNG)</h3><table class="schedule-table"><tr><th>Время</th><th>Понедельник</th><th>Вторник</th><th>Среда</th><th>Четверг</th><th>Пятница</th><th>Суббота</th></tr><tr><td><strong>09:00-11:20</strong></td><td>—</td><td style="background:#cbffce">Войт Е.И.<br>Java, Гр.1.1 (каб.2)</td><td style="background:#e2f0cb">Попов Н.Ю.<br>Python, Гр.1.2 (каб.2)</td><td style="background:#cbffce">Войт Е.И.<br>Java, Гр.1.1 (каб.2)</td><td>—</td><td style="background:#e2f0cb">Попов Н.Ю.<br>Python, Гр.1.2 (каб.2)</td></tr><tr><td><strong>15:30-17:50</strong></td><td style="background:#d1ecf1">Volit E.I.<br>Java, Гр.2.1 (каб.2)</td><td style="background:#ffdeea">Войт Е.И.<br>Java, Гр.1.2 (каб.2)</td><td style="background:#fff1cc">Попов Н.Ю.<br>ЯНДЕКС, Гр.1.2 (каб.2)</td><td style="background:#ffdeea">Войт Е.И.<br>Java, Гр.1.2 (каб.2)</td><td style="background:#d1ecf1">Войт Е.И.<br>Java, Гр.2.1 (каб.2)</td><td style="background:#fff1cc">Попов Н.Ю.<br>ЯНДЕКС, Гр.1.2 (каб.2)</td></tr><tr><td><strong>18:00-20:20</strong></td><td style="background:#f1daf7">Войт Е.И.<br>Школа дронов (каб.2)</td><td style="background:#f7e6cb">Попов Н.Ю.<br>Python+VarWin (каб.2)</td><td style="background:#ffe5cc">Попов Н.Ю.<br>ЯНДЕКС, Гр.1.2 (каб.2)</td><td style="background:#f7e6cb">Попов Н.Ю.<br>Python+VarWin (каб.2)</td><td style="background:#f1daf7">Войт Е.И.<br>Школа дронов (каб.2)</td><td style="background:#ffe5cc">Попов Н.Ю.<br>ЯНДЕКС, Гр.1.2 (каб.2)</td></tr></table>`,
    scratch: `<h3>Scratch (Школа будущего программиста)</h3><table class="schedule-table"><tr><th>Время</th><th>Понедельник</th><th>Вторник</th><th>Среда</th><th>Четверг</th><th>Пятница</th><th>Суббота</th></tr><tr><td><strong>09:00-11:20</strong></td><td>—</td><td style="background:#ffdeea">Попов А.О.<br>Scratch, Гр.1.1 (каб.3)</td><td>—</td><td style="background:#ffdeea">Попов А.О.<br>Scratch, Гр.1.1 (каб.3)</td><td>—</td><td>—</td></tr><tr><td><strong>14:40-17:20</strong></td><td style="background:#ffe5cc">Попов А.О.<br>Юные прогр. [16:10] (каб.3)</td><td style="background:#d1ecf1">Попов Н.Ю.<br>Школа буд. прогр. (каб.3)</td><td style="background:#e2f0cb">Попов А.О.<br>Scratch, Гр.1.2 (каб.3)</td><td style="background:#d1ecf1">Попов Н.Ю.<br>Школа буд. прогр. (каб.3)</td><td style="background:#e2f0cb">Попов А.О.<br>Scratch, Гр.1.2 (каб.3)</td><td style="background:#fff1cc">Бушенев И.В.<br>ВЕБ, Гр.1.1 (каб.3)</td></tr><tr><td><strong>16:10-20:20</strong></td><td style="background:#cbffce">Попов А.О.<br>Scratch, Гр.2.1 [18:00]</td><td style="background:#fff1cc">Бушенев И.В.<br>ВЕБ, Гр.1.1 [18:00]</td><td style="background:#fff3cd">Попов А.О.<br>Scratch, Гр.1.3 [17:30]</td><td style="background:#cbffce">Попов А.О.<br>Scratch, Гр.2.1 [18:00]</td><td style="background:#fff3cd">Попов А.О.<br>Scratch, Гр.1.3 [17:30]</td><td>—</td></tr></table>`,
    vrar: `<h3>Разработка VR/AR приложений</h3><table class="schedule-table"><tr><th>Время</th><th>Понедельник</th><th>Вторник</th><th>Среда</th><th>Четверг</th><th>Пятница</th><th>Суббота</th></tr><tr><td><strong>09:00-11:20</strong></td><td style="background:#e2f0cb">Брант В.Е.<br>VR/AR, Гр.2.2 (каб.4)</td><td style="background:#fff1cc">Брант В.Е.<br>VR/AR, Гр.1.1 (каб.4)</td><td style="background:#ffdeea">Конов А.Б.<br>VR/AR, Гр.1.3 (каб.4)</td><td style="background:#e2f0cb">Брант В.Е.<br>VR/AR, Гр.2.2 (каб.4)</td><td style="background:#ffdeea">Конов А.Б.<br>VR/AR, Гр.1.3 (каб.4)</td><td style="background:#fff1cc">Брант В.Е.<br>VR/AR, Гр.1.1 (каб.4)</td></tr><tr><td><strong>12:00-13:30</strong></td><td>—</td><td>—</td><td style="background:#ffe5cc">Конов А.Б.<br>ФМЛИ, 9 класс (каб.9)</td><td>—</td><td>—</td><td>—</td></tr><tr><td><strong>15:00-17:20</strong></td><td style="background:#f1daf7">Конов А.Б.<br>Varwin, Гр.1.1 (каб.4)</td><td style="background:#d1ecf1">Конов А.Б.<br>VR/AR, Гр.1.2 (каб.4)</td><td style="background:#ffe5cc">Брант В.Е.<br>VR/AR, Гр.1.4 (каб.4)</td><td style="background:#d1ecf1">Конов А.Б.<br>VR/AR, Гр.1.2 (каб.4)</td><td style="background:#f1daf7">Конов А.Б.<br>Varwin, Гр.1.1 (каб.4)</td><td style="background:#ffe5cc">Брант В.Е.<br>VR/AR, Гр.1.4 (каб.4)</td></tr><tr><td><strong>17:00-19:50</strong></td><td style="background:#cbffce">Конов А.Б.<br>VR/AR, Гр.2.1 (каб.4)</td><td style="background:#ffccd5">Конов А.Б.<br>VR/AR PRO (каб.4)</td><td style="background:#f7bfff">Брант В.Е.<br>Иллюстрация (каб.4)</td><td style="background:#ffccd5">Конов А.Б.<br>VR/AR PRO (каб.4)</td><td style="background:#cbffce">Конов А.Б.<br>VR/AR, Гр.2.1 (каб.4)</td><td style="background:#f7bfff">Брант В.Е.<br>Иллюстрация (каб.4)</td></tr></table>`,
    cyber: `<h3>Системное администрирование</h3><table class="schedule-table"><tr><th>Время</th><th>Понедельник</th><th>Вторник</th><th>Среда</th><th>Четверг</th><th>Пятница</th><th>Суббота</th></tr><tr><td><strong>09:00-11:30</strong></td><td style="background:#d1ecf1">Ананин Д.И.<br>С.А. 1й год (каб.9)</td><td>—</td><td style="background:#ffe5cc">Ананин Н.И.<br>Комп. графика (каб.9)</td><td>—</td><td style="background:#d1ecf1">Ананин Д.И.<br>С.А. 1й год (каб.9)</td><td style="background:#ffe5cc">Ананин Н.И.<br>Комп. графика (каб.9)</td></tr><tr><td><strong>12:00-13:30</strong></td><td>—</td><td>—</td><td style="background:#fff1cc">Ананин Н.И.<br>ФМЛИ, 9 класс (каб.9)</td><td>—</td><td>—</td><td>—</td></tr><tr><td><strong>15:00-17:50</strong></td><td style="background:#cbffce">Ананин Д.И.<br>Цифр. Лаб. (каб.9)</td><td style="background:#ffdeea">Ананин Н.И.<br>Бюджет, 1й год (каб.9)</td><td style="background:#f1daf7">Ананин Н.И.<br>Астра, 1й год (каб.9)</td><td style="background:#cbffce">Ананин Д.И.<br>Цифр. Лаб. (каб.9)</td><td style="background:#ffdeea">Ананин Н.И.<br>Бюджет, 1й год (каб.9)</td><td style="background:#f1daf7">Ананин Н.И.<br>Астра, 1й год (каб.9)</td></tr><tr><td><strong>17:30-20:20</strong></td><td style="background:#fff3cd">Ананин Д.И.<br>Бюджет, Про (каб.9)</td><td style="background:#e2f0cb">Ананин Н.И.<br>Бюджет, 2й год (каб.9)</td><td>—</td><td style="background:#fff3cd">Ананин Д.И.<br>Бюджет, Про (каб.9)</td><td style="background:#e2f0cb">Ананин Н.И.<br>Бюджет, 2й год (каб.9)</td><td>—</td></tr></table>`,
    art: `<h3>Цифровое рисование</h3><table class="schedule-table"><tr><th>Время</th><th>Понедельник</th><th>Вторник</th><th>Среда</th><th>Четверг</th><th>Пятница</th><th>Суббота</th></tr><tr><td><strong>17:30-19:50</strong></td><td style="background:#cbffce">Брант В.Е.<br>Рисование, Гр.1.1 (каб.7)</td><td style="background:#cbffce">Брант В.Е.<br>Рисование, Гр.1.1 (каб.7)</td><td style="background:#f7bfff">Брант В.Е.<br>Иллюстрация (каб.4)</td><td style="background:#cbffce">Брант В.Е.<br>Рисование, Гр.1.1 (каб.7)</td><td>—</td><td style="background:#f7bfff">Брант В.Е.<br>Иллюстрация (каб.4)</td></tr></table>`,
    drones: `<h3>Школа дронов</h3><table class="schedule-table"><tr><th>Время</th><th>Понедельник</th><th>Вторник</th><th>Среда</th><th>Четверг</th><th>Пятница</th><th>Суббота</th></tr><tr><td><strong>18:00-20:20</strong></td><td style="background:#ffdeea">Войт Е.И.<br>Бюджет, 1й год (каб.2)</td><td>—</td><td>—</td><td>—</td><td style="background:#ffdeea">Войт Е.И.<br>Бюджет, 1й год (каб.2)</td><td>—</td></tr></table>`
};
// 3. Программный движок сайта (логика переключения и сохранения страниц)
const contentDiv = document.getElementById('content');
const navButtons = document.querySelectorAll('.nav-btn');
const logoButton = document.getElementById('logo-btn');

function renderPage(pageKey) {
    if (!pages[pageKey]) return;
    contentDiv.innerHTML = pages[pageKey];
    
    // Сохраняем страницу в адресную строку, чтобы не терять её при обновлении
    window.location.hash = pageKey;
    
    // Автоматическая сборка карточек преподавателей с круглыми фото
    if (pageKey === 'teachers') {
        const grid = document.getElementById('teachers-list-grid');
        teachersData.forEach((t) => {
            grid.innerHTML += `
                <div style="display:flex; background:#fff; border:1px solid #e0e4ec; padding:20px; border-radius:16px; box-shadow:0 4px 12px rgba(13,27,42,0.03); align-items:center; gap:20px;">
                    <img src="${t.img}" alt="${t.name}" style="width:120px; height:120px; border-radius:50%; object-fit:cover; flex-shrink:0; border:3px solid #0d1b2a;">
                    <div>
                        <h4 style="font-size:18px; color:#0d1b2a; margin-bottom:5px;">${t.name}</h4>
                        <div style="display:inline-block; background:${t.bg}; color:#fff; font-size:12px; font-weight:700; padding:4px 12px; border-radius:20px; margin-bottom:10px;">${t.sub}</div>
                        <p style="font-size:14px; color:#778da9; line-height:1.4;">${t.text}</p>
                    </div>
                </div>`;
        });
    }
    if (pageKey === 'schedule') initScheduleButtons();
}

function initScheduleButtons() {
    const courseButtons = document.querySelectorAll('.course-btn');
    const tableContainer = document.getElementById('course-table-container');
    courseButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            courseButtons.forEach(btn => btn.classList.remove('active-course'));
            event.target.classList.add('active-course');
            const courseKey = event.target.getAttribute('data-course');
            if (courseSchedules[courseKey]) tableContainer.innerHTML = courseSchedules[courseKey];
        });
    });
}

// Слушаем клики по кнопкам навигации
navButtons.forEach(btn => btn.addEventListener('click', (e) => renderPage(e.target.getAttribute('data-page'))));
logoButton.addEventListener('click', () => renderPage('home'));

// Умная загрузка при обновлении страницы
document.addEventListener('DOMContentLoaded', () => {
    // Проверяем, есть ли уже сохраненная страница в адресе (например, #schedule)
    const savedPage = window.location.hash.replace('#', '');
    
    // Если страница сохранена и она существует — открываем её, иначе открываем главную (home)
    if (savedPage && pages[savedPage]) {
        renderPage(savedPage);
    } else {
        renderPage('home');
    }
});
