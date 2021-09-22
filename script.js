 const requestApi = async () => {
  try{
  const request = await fetch('./data.json')
  const json = await request.json()
  return json;
}
  catch(err){
    console.log(err)
  }
}

const buttonsLists = document.querySelector(".card-person-body-timeframelist")

const setActiveButton = (btn) => {
  const buttons = buttonsLists.querySelectorAll('button');
  let values = [].map.call(buttons, function(btn) {
    btn.classList.remove('btn-active')
  });
  btn.classList.add('btn-active')
  return values;
}
const updateCards = (data, timeframe) => {
  let season;
  // eslint-disable-next-line default-case
  switch(timeframe){
    case 'daily':
      season="Yesterday";
      break;
    case 'weekly':
      season="Last Week";
      break;
    case 'monthly':
      season="Last Month";
  }
  data.forEach(dat => {
    const markup = `
    <h2>${dat.title}</h2>
    
    <h3>${dat.timeframes[timeframe].current}hrs</h3>
    <p class="work-hours-previous">${season} - ${dat.timeframes[timeframe].previous}hrs</p>
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
}

const updateFigures = async (timeframe = 'weekly') => {
  try{
    const data = await requestApi();
    updateCards(data, timeframe)
  }
  catch(err){
    console.error(err)
  }
}
const changeTime = () => {
  buttonsLists.addEventListener('click', e => {
    let btn = e.target.closest('button')
    if(!btn) return;
    const time = btn.dataset.time;
    updateFigures(time)
    setActiveButton(btn)
  })
}

const init = () => {
  updateFigures();
  changeTime();
};

init();