function Slider2() {
  function makeSlideShow(slidesId) {
    // const slides = document.getElementById("slidesId");
    const slidesInner = document.querySelector('.slides-inner');
    const images = slidesInner.querySelectorAll('section');

    let index = 0;
    setInterval(function () {
      index += 1;
      if (index === images.length) {
        index = 0;
      }
      slidesInner.style.transform = `translate3d(${index * -80}%, 0, 0)`;
    }, 5000);
  }
  return (
    <div className="six-container all" id="examle">
      <h2>Portfolio</h2>
      <div onLoad={makeSlideShow} id="slides" className="slide-show">
        <div className="slides-inner">
          <section className="one-slide">
            <h3>ECommerce WebApp</h3>
            <a
              className="project-link"
              href="https://friendly-eds-14080.herokuapp.com"
            >
              <img
                className="example-img"
                src="img/ECommerce.jpeg"
                alt="screenshot of page"
              ></img>
            </a>
            <p className="slider-p">
              MERN ECommerce Website with React & Node.
            </p>
          </section>
          <section className="one-slide">
            <h3>My ToDo</h3>
            <a
              className="project-link"
              href="https://serene-shelf-59519.herokuapp.com"
            >
              <img
                className="example-img"
                src="img/MyToDo.jpeg"
                alt="screenshot of page"
              ></img>
            </a>
            <p className="slider-p">Usefull web app to orginize daily tasks.</p>
          </section>
          <section className="one-slide">
            <h3>Today's Goal App</h3>
            <a
              className="project-link"
              href="https://mysterious-wave-24537.herokuapp.com"
            >
              <img
                className="example-img"
                src="img/TodaysGoalApp.jpeg"
                alt="screenshot of page"
              ></img>
            </a>
            <p className="slider-p">Set a goal to achieve every day.</p>
          </section>
          <section className="one-slide">
            <h3>How Lucky</h3>
            <a
              className="project-link"
              href="https://happy-bhaskara-486e59.netlify.app"
            >
              <img
                className="example-img"
                src="img/HowLucky.jpeg"
                alt="screenshot of page"
              ></img>
            </a>
            <p className="slider-p">
              Fun page to find out randomly how lucky the day is.
            </p>
          </section>
          <section className="one-slide">
            <h3>Inspired Poem</h3>
            <a
              className="project-link"
              href="https://dry-fjord-52066.herokuapp.com"
            >
              <img
                className="example-img"
                src="img/InspiredPoem.jpeg"
                alt="screenshot of page"
              ></img>
            </a>
            <p className="slider-p">
              Page where beautigul images inspire to write poetry.
            </p>
          </section>
          <section className="one-slide">
            <h3>That London Pic</h3>
            <a
              className="project-link"
              href="https://gallant-bell-5b455b.netlify.app"
            >
              <img
                className="example-img"
                src="img/ThatLondonPic.jpeg"
                alt="screenshot of page"
              ></img>
            </a>
            <p className="slider-p">
              Page to susctibe to learn about London from beautiful pictures.
            </p>
          </section>
          <section className="one-slide">
            <h3>Daily Journal</h3>
            <a
              className="project-link"
              href="https://vast-refuge-90875.herokuapp.com"
            >
              <img
                className="example-img"
                src="img/DailyJournal.jpeg"
                alt="screenshot of page"
              ></img>
            </a>
            <p className="slider-p">
              Write your thoughts everyday and remember everything important.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Slider2;
