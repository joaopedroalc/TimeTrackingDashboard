const buttonsList = document.querySelector('.card-person-body-timeframelist');
const currWorkHours = document.querySelector('.work-hours-current');
const prevWorkHours = document.querySelector('.work-hours-previous');
const currPlayHours = document.querySelector('.play-hours-current');
const prevPlayHours = document.querySelector('.play-hours-previous');
const currStudyHours = document.querySelector('.study-hours-current');
const prevStudyHours = document.querySelector('.study-hours-previous');
const currExerciseHours = document.querySelector('.exercise-hours-current');
const prevExerciseHours = document.querySelector('.exercise-hours-previous');
const currSocialHours = document.querySelector('.social-hours-current');
const prevSocialHours = document.querySelector('.social-hours-previous');
const currSelfcareHours = document.querySelector('.self-care-hours-current');
const prevSelfcareHours = document.querySelector('.self-care-hours-previous');

const updateFigures = function (data) {};

const changeHandler = function (timeframe) {};

const fetchData = async function () {
  try {
    const res = await fetch('/data.json');
    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};

const init = async function () {
  try {
  } catch (err) {
    console.error(err);
  }
};

init();
