//Dom Elements
const buttonsList = document.querySelector('.card-person-body-timeframelist');

//Get data from API/file (async)
const fetchData = async function () {
  try {
    const res = await fetch('/data.json');
    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};
//Time highlight change
const setActiveBtn = function (btn) {
  buttonsList.querySelectorAll('button').forEach(btn => btn.classList.remove('btn-active'));
  btn.classList.add('btn-active');
};
//Update card elements
const updateDOM = function (data, timeframe) {
  let time;
  if (timeframe === 'daily') time = 'Yesterday';
  if (timeframe === 'weekly') time = 'Last Week';
  if (timeframe === 'monthly') time = 'Last Month';

  data.forEach(dat => {
    const markup = `
    <h2>${dat.title}</h2>
    
    <h3>${dat.timeframes[timeframe].current}hrs</h3>
    <p class="work-hours-previous">${time} - ${dat.timeframes[timeframe].previous}hrs</p>
    `;
    document.querySelector(`.card-body-${dat.title.toLowerCase().replace(' ', '')}`).innerHTML = '';
    document.querySelector(`.card-body-${dat.title.toLowerCase().replace(' ', '')}`).animate(
      [
        // keyframes
        { opacity: '0' },
        { opacity: '1' },
      ],
      {
        // timing options
        duration: 300,
        easing: 'ease-in-out',
      }
    );
    document
      .querySelector(`.card-body-${dat.title.toLowerCase().replace(' ', '')}`)
      .insertAdjacentHTML('afterbegin', markup);
  });
};

//Update DOM with data
const updateFigures = async function (timeframe = 'weekly') {
  try {
    const data = await fetchData();
    updateDOM(data, timeframe);
  } catch (err) {
    console.error(err);
  }
};
//Eventlistener on time change
const changeHandler = function () {
  buttonsList.addEventListener('click', function (e) {
    btn = e.target.closest('button');
    if (!btn) return;
    const time = btn.dataset.time;
    updateFigures(time);
    setActiveBtn(btn);
  });
};
// Program start
const init = function () {
  updateFigures();
  changeHandler();
};

init();

/*
<svg class="card-svg" width="21" height="5" xmlns="http://www.w3.org/2000/svg">
    <path
    class="card-svg-color"
    d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
    fill="#BBC0FF"
    fill-rule="evenodd"
    />
    </svg>

    */
