class UI {

  static handleHeaderBackgroundOnScroll() {
    window.addEventListener('scroll', function () {
      const mainHeader = document.getElementById('main-header');
      const logoImg = mainHeader.querySelector('.logo img');
      if (window.scrollY > 10) {
        mainHeader.classList.add('with-bg');
        if (mainHeader.dataset.page === "about") {
          logoImg.setAttribute('src', './images/logo.png')
        }
      } else {
        mainHeader.classList.remove('with-bg');
        if (mainHeader.dataset.page === "about") {
          logoImg.setAttribute('src', './images/logo-dark.png')
        }
      }
    });
  }

  static addWhiteBGHeaderOnMobile() {
    const mainHeader = document.getElementById('main-header');
    const logoImg = mainHeader.querySelector('.logo img');
    mainHeader.classList.add('with-bg');
    if (mainHeader.dataset.page === "about") {
      logoImg.setAttribute('src', './images/logo.png');
    }
  }

  static handleHeader() {
    if (window.innerWidth <= 992) {
      UI.addWhiteBGHeaderOnMobile();
    } else {
      UI.handleHeaderBackgroundOnScroll();
    }
  }

  static mobileHeaderShowAndHide() {
    const navBarBtn = document.querySelector('#main-header .nav-bars');
    const closeBtn = document.querySelector('#main-header .close-btn');
    const menu = document.querySelector('#main-header .menu');

    navBarBtn.addEventListener('click', () => menu.classList.add('show'));
    closeBtn.addEventListener('click', () => menu.classList.remove('show'));

    document.body.addEventListener('click', function (e) {
      if (navBarBtn.contains(e.target)) {
        return;
      }

      menu.contains(e.target) || menu.classList.remove('show');
    });
  }

  static changeImageOnMobile() {
    if (window.innerWidth > 992) return;

    const digitalDivideImage = document.querySelector('#why-nextschool img');
    digitalDivideImage.setAttribute('src', './images/school-ecosystem-mobile.png');
  }

}

function main() {
  UI.handleHeader();
  UI.mobileHeaderShowAndHide();
  UI.changeImageOnMobile();
}

main();