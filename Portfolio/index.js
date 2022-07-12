const sectionList = document.querySelectorAll('.projects section .FirstLine');
const descList = document.querySelectorAll('.projects section .desc');
const arrowDownList = document.querySelectorAll('.FirstLine .fa-angle-down');
const arrowUpList = document.querySelectorAll('.FirstLine .fa-angle-up');
const headerMenuList = document.querySelectorAll('header ul li');

sectionList.forEach(function (section, idx) {
  section.addEventListener('click', function () {
    if (descList[idx].classList.contains('visible')) {
      descList[idx].classList.remove('visible');
      arrowDownList[idx].style.display = 'block';
      arrowUpList[idx].style.display = 'none';
    } else {
      descList[idx].classList.add('visible');
      arrowDownList[idx].style.display = 'none';
      arrowUpList[idx].style.display = 'block';
    }
  });
});

headerMenuList[1].onclick = function () {
  scrollTo(0, 600);
};
headerMenuList[2].onclick = function () {
  scrollTo(0, 1350);
};

const projects = document.querySelectorAll('section');

for (let i = 0; i < projects.length; i++) {
  let mainImg = projects[i].querySelector('.imgBox img');
  let smallPics = projects[i].querySelectorAll('.smallImgBox img');
  let smallPicsDiv = projects[i].querySelectorAll('.smallImgBox div');

  for (let i = 0; i < smallPics.length; i++) {
    smallPics[i].addEventListener('click', changePic);
  }

  function changePic() {
    let newPic = this.src;
    mainImg.setAttribute('src', newPic);
  }

  for (let i = 0; i < smallPicsDiv.length; i++) {
    smallPicsDiv[i].addEventListener('click', function () {
      if (i === 0) {
        smallPicsDiv[0].classList.add('selected');
        smallPicsDiv[1].classList.remove('selected');
      } else {
        smallPicsDiv[1].classList.add('selected');
        smallPicsDiv[0].classList.remove('selected');
      }
    });
  }
}
