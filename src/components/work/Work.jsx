import React from "react";
import "./work.css";
import demo1 from "../../assets/demo1.avif";
import demo2 from "../../assets/demo2.avif";
import demo3 from "../../assets/demo3.avif";
import demo4 from "../../assets/demo4.avif";
import demo5 from "../../assets/demo5.avif";
import demo6 from "../../assets/demo6.avif";
import demo7 from "../../assets/demo7.avif";

const Work = () => {
  return (
    <div className="work__container">
      <h2 className="number-heading">
        <span>03.</span>Some Things I've Built
      </h2>
      <ul>
        <li className="work__item">
          <div className=" work__content">
            <div className="work__image-container">
              <div className="work__image-content">
                <div className="work__image">
                  <img src={demo1} alt="demo1" />
                </div>
              </div>
            </div>
            <div className="work__description-right des1">
              <p className="name-p">Featured Project</p>
              <h3 className="name-h3">Chowbus</h3>
              <div>
                <p className="des-p">
                  This project was developed with Next.js. Chowbus is a food
                  delivery platform providing high-quality authentic Asian food,
                  empowering local independent restaurants and stores through
                  the technology.
                </p>
              </div>
              <ul>
                <li>Next.js</li>
                <li>React.js</li>
              </ul>
              <div className="work__icon">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </div>
            </div>
          </div>
        </li>
        <li className="work__item">
          <div className=" work__content">
            <div className="work__image-container-right">
              <div className="work__image-content">
                <div className="work__image">
                  <img src={demo2} alt="demo2" />
                </div>
              </div>
            </div>
            <div className="work__description-left des2">
              <p className="name-p">Featured Project</p>
              <h3 className="name-h3">Doctor Client</h3>
              <div>
                <p className="des-p">
                  This project was developed with Next.js and BootStrap. A video
                  consultation allows you to consult a healthcare professional
                  from home, via your smartphone or your computer.Lorem Ipsum
                  has been the industry standard dummy text ever since 1500 when
                  an unknown printer took a galley of type and scrambled it to
                  make a type specimen book.
                </p>
              </div>
              <ul>
                <li>Next.js</li>
                <li>Note.js</li>
                <li>BootStrap</li>
                <li>Font Awesome</li>
              </ul>
              <div className="work__icon">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </div>
            </div>
          </div>
        </li>
        <li className="work__item">
          <div className=" work__content">
            <div className="work__image-container">
              <div className="work__image-content">
                <div className="work__image">
                  <img src={demo3} alt="demo3" />
                </div>
              </div>
            </div>
            <div className="work__description-right des3">
              <p className="name-p">Featured Project</p>
              <h3 className="name-h3">LucaMail</h3>
              <div>
                <p className="des-p">
                  LucaMail is an Open Source, Cross-Platform Email Client.
                  LucaMail is developed to provide a cross-platform alternative
                  to Email Clients that already exists.
                </p>
              </div>
              <ul>
                <li>Note.js</li>
                <li>ElectronsJs</li>
                <li>ImapFlow</li>
                <li>NoteMailer</li>
              </ul>
              <div className="work__icon">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </div>
            </div>
          </div>
        </li>
        {/* <li className="work__item">
          <div className=" work__content">
            <div className="work__image-container">
              <div className="work__image-content">
                <div className="work__image">
                  <img src={demo4} alt="demo4" />
                </div>
              </div>
            </div>
            <div className="work__description">
              <p className="name-p">Featured Project</p>
              <h3 className="name-h3">Uniclix</h3>
              <div>
                <p className="des-p">
                  This project was developed with PHP and Bootstrap.
                </p>
              </div>
              <ul>
                <li>PHP</li>
                <li>Bootstrap</li>
              </ul>
              <div className="work__icon">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </div>
            </div>
          </div>
        </li> */}
        <li className="work__item">
          <div className=" work__content">
            <div className="work__image-container-right">
              <div className="work__image-content">
                <div className="work__image">
                  <img src={demo5} alt="demo5" />
                </div>
              </div>
            </div>

            <div className="work__description-left des4">
              <p className="name-p">Featured Project</p>
              <h3 className="name-h3">Solve problem with dlops</h3>
              <div>
                <p className="des-p">
                  We are a network of designers, software engineers, data
                  scientists and marketers whose passion for digital
                  technologies binds us together to form this network of talents
                  with abundant and diverse capabilities to tackle the most
                  complex applications.
                </p>
              </div>
              <ul>
                <li>React</li>
                <li>Node</li>
                <li>Next.js</li>
              </ul>
              <div className="work__icon">
                <i class="fa-brands fa-github"></i>
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </div>
            </div>
          </div>
        </li>
        <li className="work__item item5">
          <div className=" work__content">
            <div className="work__image-container">
              <div className="work__image-content">
                <div className="work__image">
                  <img src={demo6} alt="demo6" />
                </div>
              </div>
            </div>

            <div className="work__description-right des5">
              <p className="name-p">Featured Project</p>
              <h3 className="name-h3">Safari Trek Beach</h3>
              <div>
                <p className="des-p">
                  This project was developed with Laravel and Vue. Safari Trek
                  Beach is the biggest marketplace for Tanzania tour packages.
                  This platform help travelers find the best Tour Operators with
                  the tour packages of their choice, to suit their budget and
                  standard. This platform is the platform when it involves Tours
                  and Holidays in Tanzania. Safari Trek Beach enables you to
                  compare different tour operators on different categories such
                  as Luxury, Lodge, Camping safaris, or Mountain Climbing tours
                  as well as Beach Holidays.
                </p>
              </div>
              <ul>
                <li>Laravel</li>
                <li>PHP</li>
                <li>Vue.js</li>
                <li>Node.js</li>
              </ul>
              <div className="work__icon">
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </div>
            </div>
          </div>
        </li>
        <li className="work__item">
          <div className=" work__content">
            <div className="work__image-container-right">
              <div className="work__image-content">
                <div className="work__image">
                  <img src={demo7} alt="demo7" />
                </div>
              </div>
            </div>
            <div className="work__description-left des6">
              <p className="name-p">Featured Project</p>
              <h3 className="name-h3">Web3 Crypto App</h3>
              <div>
                <p className="des-p">
                  This project demonstrates a basic Hardhat use case. It comes
                  with a sample contract, a test for that contract, a sample
                  script that deploys that contract, and an example of a task
                  implementation, which simply lists the available accounts.
                </p>
              </div>
              <ul>
                <li>React</li>
                <li>Solidity</li>
                <li>Blockchain</li>
                <li>Ethers</li>
                <li>Hardhat</li>
              </ul>
              <div className="work__icon">
                <i class="fa-brands fa-github"></i>
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="work__title">
        <div className="work__name">
          <h2>Other Noteworthy Projects</h2>
          <span>view the archive</span>
        </div>
        <div>
          <div class="grid-container">
            <div class="grid-item">
              <div className="grid__icon">
                <ul>
                  <li>
                    <i class="fa-solid fa-folder"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-github"></i>
                  </li>
                </ul>
              </div>
              <div className="grid__content">
                <h3>
                  Large Laravel - how to build large and maintainable projects
                  with Laravel framework
                </h3>
                <p>
                  Building a custom multisite compatible WordPress plugin to
                  build global search with Algolia
                </p>
              </div>
              
                <div className="grid__list1">
                  <ul>
                    <li>Laravel</li>
                    <li>PHP</li>
                  </ul>
                </div>
            
            </div>
            <div class="grid-item">
              <div className="grid__icon">
                <ul>
                  <li>
                    <i class="fa-solid fa-folder"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-github"></i>
                  </li>
                </ul>
              </div>
              <div className="grid__content">
                <h3>Build a Portfolio Using Bootstrap</h3>
                <p>
                  Welcome to the Bootstrap Portfolio Project! For this project,
                  you'll be creating a personal web page to show off your work.
                  We will test your HTML knowledge and then it will be up to you
                  to use CSS to style your own page and make it unique.
                </p>
              </div>
              <div className="grid__list2">
                <ul>
                  <li>HTML</li>
                  <li>BootStrap</li>
                  <li>Node</li>
                  <li>CSS</li>
                </ul>
              </div>
            </div>
            <div class="grid-item">
              <div className="grid__icon">
                <ul>
                  <li>
                    <i class="fa-solid fa-folder"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-github"></i>
                  </li>
                </ul>
              </div>
              <div className="grid__content">
                <h3>Smolrunners</h3>
                <p>
                  Building a custom multisite compatible WordPress plugin to
                  build global search with Algolia
                </p>
              </div>
              <div className="grid__list3">
                <ul>
                  <li>Algolia</li>
                  <li>WordPress</li>
                  <li>PHP</li>
                </ul>
              </div>
            </div>
            <div class="grid-item">
              <div className="grid__icon">
                <ul>
                  <li>
                    <i class="fa-solid fa-folder"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-github"></i>
                  </li>
                </ul>
              </div>
              <div className="grid__content">
                <h3>Solve problem with dlops</h3>
                <p>
                  We are a network of designers, software engineers, data
                  scientists and marketers whose passion for digital
                  technologies binds us together to form this network of talents
                  with abundant and diverse capabilities to tackle the most
                  complex applications.
                </p>
              </div>
              <div className="grid__list4">
                <ul>
                  <li>React</li>
                  <li>Node</li>
                  <li>Next.js</li>
                </ul>
              </div>
            </div>
            <div class="grid-item">
              <div className="grid__icon">
                <ul>
                  <li>
                    <i class="fa-solid fa-folder"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-github"></i>
                  </li>
                </ul>
              </div>
              <div className="grid__content">
                <h3>Web3 Crypto App</h3>
                <p>
                  This project demonstrates a basic Hardhat use case. It comes
                  with a sample contract, a test for that contract, a sample
                  script that deploys that contract, and an example of a task
                  implementation, which simply lists the available accounts.
                </p>
              </div>
              <div className="grid__list5">
                <ul>
                  <li>React</li>
                  <li>Solidity</li>
                  <li>Blockchain</li>
                </ul>
                <ul>
                  <li>Ethers</li>
                  <li>Hardhat</li>
                </ul>            
              </div>
            </div>
            <div class="grid-item">
              <div className="grid__icon">
                <ul>
                  <li>
                    <i class="fa-solid fa-folder"></i>
                  </li>
                  <li>
                    <i class="fa-brands fa-github"></i>
                  </li>
                </ul>
              </div>
              <div className="grid__content">
                <h3>Chat application with React and socket.io</h3>
                <p>
                  This app was basic chat application dose not incluse database,
                  it was fucus on React and socket.io.
                </p>
              </div>
              <div className="grid__list6">
                <ul>
                  <li>MusicKit.js</li>
                  <li>JS</li>
                  <li>SCSS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="work__show">
          <button className="btn">Show More</button>
        </div>
      </div>
    </div>
  );
};

export default Work;
