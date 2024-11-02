const topbtn = document.getElementById('top');
topbtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
  });