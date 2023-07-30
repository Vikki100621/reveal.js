function showParagraphsSequentially() {
  const statesDiv = document.querySelector('.state');
  const paragraphs = statesDiv.querySelectorAll('p');

  const order = [1, 0, 2];

  for (let i = 0; i < paragraphs.length; i++) {

    const index = order[i];
    setTimeout(() => {
      paragraphs[index].classList.add('show');
    }, i * 1000);
  }
}


document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    showParagraphsSequentially();
  }
});

function showMethods() {
  const statesDiv = document.querySelector('.methods');
  const paragraphs = statesDiv.querySelectorAll('p');

  for (let i = 0; i < paragraphs.length; i++) {

    setTimeout(() => {
      paragraphs[i].style.opacity = 1;
      paragraphs[i].classList.add('show')
    }, i * 1000);
  }
}


document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    showMethods();
  }
});

