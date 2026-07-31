const stage = document.getElementById('stage');
const starsEl = document.getElementById('stars');
const rainEl = document.getElementById('rain');
const envelopeWrap = document.getElementById('envelopeWrap');
const headingWrap = document.getElementById('headingWrap');
const subline = document.getElementById('subline');
const floatWrap = document.getElementById('floatHearts');
const replayBtn = document.getElementById('replayBtn');
const muteBtn = document.getElementById('muteBtn');
const bgMusic = document.getElementById('bgMusic');
const gate = document.getElementById('gate');

const rainChars = ['&#10084;&#65039;', '&#128155;', '&#10024;'];

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
    const chars = ['&#10084;&#65039;', '&#128155;', '&#10024;'];
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
  bgMusic.play().catch(() => {});
}

function resetAll() {
  stage.classList.remove('opened');
  envelopeWrap.classList.remove('opened');
  subline.classList.remove('hide');
  floatWrap.innerHTML = '';
  buildStars();
  buildRain();
  bgMusic.pause();
  bgMusic.currentTime = 0;
}

function toggleMute() {
  bgMusic.muted = !bgMusic.muted;
  muteBtn.classList.toggle('muted', bgMusic.muted);
  muteBtn.innerHTML = bgMusic.muted ? '&#128263;' : '&#128266;';
}

function enterGate() {
  gate.classList.add('hide');
  bgMusic.play().catch(() => {});
}

envelopeWrap.addEventListener('click', openEnvelope);
replayBtn.addEventListener('click', resetAll);
muteBtn.addEventListener('click', toggleMute);
gate.addEventListener('click', enterGate);

buildStars();
buildRain();
