import React, { useState } from "react";
import Modal from "react-modal";
import Button from "./button";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <header className="header">
      <div className="header__brand">
        <figure className="">
          <img src="/bar.png" className="" alt="logo" />
        </figure>
        <div className="">FITNESXIA</div>
      </div>
      {/* navbar */}
      <nav className="navbar">
        <div className="navbar__menu" id="navmenu">
          <ul className="">
            <li className="nav-item">
              <a href="home.html" className="smalleyebrow nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="about.html" className="smalleyebrow nav-link">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="blog-listing.html" className="smalleyebrow nav-link">
                Program
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="smalleyebrow nav-link">
                Membership
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="smalleyebrow nav-link">
                Career
              </a>
            </li>
            <li className="nav-item">
              <a href="contact.html" className="smalleyebrow nav-link">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <Button text="Sign up" />
            </li>
          </ul>
        </div>
        {/* bar */}
        <div className="navbar__smaller">
          <div onClick={openModal}> 
          <IoIosMenu />
          </div>
          <Modal
            className="modal"
            ariaHideApp={false}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
          >
            <form className="modal--form">
              <div>Home</div>
              <div>Services</div>
              <div>Carrerr</div>
              <div>Blogs</div>
              <div className="modal--button" onClick={closeModal}>
                <button className="card__button caption">XXX</button>
              </div>
            </form>
          </Modal>
        </div>
      </nav>
    </header>
  );
};

export default Header;
