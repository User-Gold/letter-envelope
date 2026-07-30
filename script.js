const stage = document.getElementById('stage');
const starsEl = document.getElementById('stars');
const rainEl = document.getElementById('rain');
const envelopeWrap = document.getElementById('envelopeWrap');
const headingWrap = document.getElementById('headingWrap');
const subline = document.getElementById('subline');
const floatWrap = document.getElementById('floatHearts');
const replayBtn = document.getElementById('replayBtn');

const rainChars = ['&#10084;&#65039;', '&#128153;', '&#10024;'];

function buildStars() {
  starsEl.innerHTML = '';
  for (let i = 0; i < 26; i++) {
    const s = document.createElement('span');
    s.style.left = Math.random() * 100 + '%';
    s.style.top = Math.random() * 55 + '%';
    s.style.animationDelay = (Math.random() * 3) + 's';
    starsEl.appendChild(s);
  }
}

function buildRain() {
  rainEl.innerHTML = '';
  const count = 22;
  for (let i = 0; i < count; i++) {
    const d = document.createElement('div');
    d.className = 'drop';
    d.innerHTML = rainChars[Math.floor(Math.random() * rainChars.length)];
    d.style.left = Math.random() * 100 + '%';
    d.style.fontSize = (10 + Math.random() * 12) + 'px';
    d.style.setProperty('--drift', (Math.random() * 80 - 40) + 'px');
    const duration = 6 + Math.random() * 6;
    d.style.animationDuration = duration + 's';
    d.style.animationDelay = (Math.random() * duration) + 's';
    rainEl.appendChild(d);
  }
}

function burstHearts() {
  let count = 0;
  const timer = setInterval(() => {
    const h = document.createElement('div');
    h.className = 'fheart';
    const chars = ['&#10084;&#65039;', '&#128153;', '&#10024;'];
    h.innerHTML = chars[Math.floor(Math.random() * chars.length)];
    h.style.left = (30 + Math.random() * 40) + '%';
    h.style.setProperty('--drift', (Math.random() * 60 - 30) + 'px');
    h.style.animationDuration = (2.6 + Math.random() * 1.4) + 's';
    floatWrap.appendChild(h);
    setTimeout(() => h.remove(), 4200);
    count++;
    if (count > 16) clearInterval(timer);
  }, 180);
}

function openEnvelope() {
  if (envelopeWrap.classList.contains('opened')) return;
  stage.classList.add('opened');
  envelopeWrap.classList.add('opened');
  subline.classList.add('hide');
  setTimeout(burstHearts, 1900);
}

function resetAll() {
  stage.classList.remove('opened');
  envelopeWrap.classList.remove('opened');
  subline.classList.remove('hide');
  floatWrap.innerHTML = '';
  buildStars();
  buildRain();
}

envelopeWrap.addEventListener('click', openEnvelope);
replayBtn.addEventListener('click', resetAll);

buildStars();
buildRain();
