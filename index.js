const form = document.querySelector('form');
const name = document.querySelector('#name');
const cost = document.querySelector('#points');
const error = document.querySelector('#error');

form.addEventListener('submit', e => {
  e.preventDefault();

  if (name.value && points.value) {
    const item = {
      name: name.value,
      points: parseInt(points.value)
    };
    db.collection('knicks')
      .add(item)
      .then(res => {
        error.textContent = '';
        name.value = '';
        points.value = '';
      });
  } else {
    error.textContent = 'Please enter values before submitting';
  }
});
