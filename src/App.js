import profile from "./profile.jpg";
import "./App.css";
import React, { useState } from "react";
// import {useState} from 'react';

function AccordionItem({ label, content }) {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`detail-item ${isActive ? "active" : ""}`}>
      <div className="detail-label" onClick={toggleAccordion}>
        {label}
        <span className={isActive ? "minus" : "plus"}>
          {isActive ? "-" : "+"}
        </span>
      </div>
      {isActive && <span className="detail-value">{content}</span>}
    </div>
  );
}

function App() {
  const [ubahFoto, setUbahFoto] = useState(false);

  const tombolUbahFoto = () => {
    setUbahFoto(!ubahFoto);
  };

  // const createElement = (type, props, children) =>
  //   React.createElement(type, props, children);

  // const image = createElement('img', {
  //   src: profile,
  //   className: `profile-photo ${ubahFoto ? 'fotoLingkaran' : ''}`,
  //   alt : 'avatar',
  // });

  // const profile = createElement(
  //   'div',
  //   {className: 'profile-image'},
  //   [image, createElement('li', null, 'Gender : Pria'), createElement('Alamat : Sungguminasa, Gowa')]
  // );

  // const profileDetails = createElement(
  //   'div',
  //   null,
  //   [
  //     createElement('p', {className: 'name'}, 'Dewa Anugrah Aljas Putra'),
  //     createElement()
  //   ]
  // )
  return (
    <div className="App">
      <header className="profile">
        <div className={"profile-image"}>
          <img
            src={profile}
            className={`profile-photo ${ubahFoto ? "fotoLingkaran" : ""}`}
            alt="Foto Profil"
          />
          <p>Gender : Male</p>
          <p>Alamat : Sungguminasa, Gowa</p>
          <div className="button-container">
            <button onClick={tombolUbahFoto}>Ubah Foto</button>
            <button onClick={tombolUbahFoto}>Ubah Bentuk Foto</button>
          </div>
        </div>
        <div className="profile-details">
          <div className="name">
            <h1>Dewa Anugrah Aljas Putra</h1>
          </div>
          <div className="details">
            <div className="detail-item">
              <AccordionItem label="Hobi :" content="Main Bulutangkis" />
              <AccordionItem label="Jalur Sukses" content="Corporate Entrepreneurship"/>
              <AccordionItem label="Jurusan :" content="Informatika" />
              <AccordionItem label="Cita-Cita :" content="Banyak Uang" />
            </div>
          </div>
        </div>
      </header>
      <div className="experience">
        <h1>Organization Experience</h1>
        <div className="experience-list">
          <div className="column">
            <div className="infinity">
              <h3>Infinity (2022 - until death)</h3>
              <p>
                Infinity adalah organisasi mahasiswa terbesar di UC Makassar.{" "}
              </p>
            </div>
            <br></br>
            <div className="oweek">
              <h3>O-Week 2023</h3>
              <p>
                O-Week adalah kepanitiaan Orientasi Mahasiswa di UC Makassar.{" "}
              </p>
            </div>
          </div>
          <div className="column">
            <div className="nplc">
              <h3>National Programming and Logic Competition 2023</h3>
              <p>
                National Programming and Logic Competition 2023 adalah sebuah
                event yang dimana meruapakan event IMT{" "}
              </p>
            </div>
            <br></br>
            <div className="Informatika Student Union">
              <h3>Informatika Student Union</h3>
              <p>
                Informatika Student Union merupakan organisasi mahasiswa di
                program studi Informatika
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
