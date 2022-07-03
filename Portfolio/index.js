const sectionList = document.querySelectorAll('.projects section');
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
  scrollTo(0, 1266);
};
