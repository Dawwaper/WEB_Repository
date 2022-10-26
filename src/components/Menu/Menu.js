import React from 'react';
import styles from './Menu.module.scss';

const Menu = () => {
  const menuList = ['ГОЛОВНА', 'ГАЛЕРЕЯ', 'ВИДИ ТОВАРІВ', 'FAQs', 'ПРО КОМПАНІЮ'];

  return (
    <div className={styles.Menu}>
      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        {
          menuList.map(item => {
            return (
              <li className="nav-link px-2 text-white">{item}</li>
            )
          })
        }
      </ul>
    </div>
  );
}
export default Menu;
