import React from 'react';
import Menu from '../Menu/Menu';
import styles from './Header.module.scss';

const Header = () => (
  <div className={styles.Header}>
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <img src="../images/logo.png" alt=""></img>
          </a>

          <Menu />

          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">Вхід</button>
            <button type="button" className="btn btn-warning">Зареєструватись</button>
          </div>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
