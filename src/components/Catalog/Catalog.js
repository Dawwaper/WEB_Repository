import React from 'react';
import styles from './Catalog.module.scss';
import CatalogItem from '../CatalogItem/CatalogItem';

const Catalog = () => {
  const productList =
    [
      {
        "id": 1,
        "name": "pan Tefal",
        "material": "steel",
        "price": 200,
        "brand": "Tefal",
        "form": "circle"
      },
      {
        "id": 2,
        "name": "pan Brisol",
        "material": "ceramic",
        "price": 150,
        "brand": "Brisol",
        "form": "square"
      },
      {
        "id": 3,
        "name": "pan Ardesto",
        "material": "marble",
        "price": 350,
        "brand": "Ardesto",
        "form": "triangle"
      }];

  return (
    <div className={styles.Catalog}>
      <div class="album py-5 bg-light">
        <div class="container">

          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {productList.map(item => {
              return (
                <div class="col">
                  <CatalogItem />
                </div>
              )
            })}

            {/* <CatalogItem name={productList[0].name}
                brand={productList[0].brand} price={productList[0].price} />
              <CatalogItem name={productList[0].name} brand={productList[1].brand} price={productList[1].price} /> */}


          </div>
        </div>
      </div>
    </div>

  )
};

Catalog.propTypes = {};

Catalog.defaultProps = {};

export default Catalog;
