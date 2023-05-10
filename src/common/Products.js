import { useState } from 'react';
import _ from 'lodash';
import PRODUCTS from './productList';

const FilterProductList = ({ data }) => {
  let filteredProducts = data.products;
  const searchValue = data.searchValue.toLowerCase().trim();
  if (data.stocked === true) {
    filteredProducts = data.products.filter(product => product.stocked);
  }
  if (searchValue.length) {
    filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(searchValue));
  }

  return (
    <>
      <table border={1}>
        {
          filteredProducts.map(product => {
            return (
              <tr>
                <td><span style={{ color: (product.stocked) ? "blue" : "red" }}>{product.name}</span></td>
                <td><span>{product.price}</span></td>
              </tr>
            )
          })
        }
      </table>
    </>
  );
}

export default function Products() {
  const [searchValue, setSearchValue] = useState("");
  const [fetchStock, setFetchStock] = useState(false);
  const handleChecked = () => {
    setFetchStock(!fetchStock);
  }
  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  }
  const groupProductCategories = _.groupBy(PRODUCTS, "category");
  const totalCategories = _.keys(groupProductCategories);

  return (
    <>
      <table border={1}>
        <th>
          <td>Name</td>
          <td>Price</td>
        </th>
      </table>
      <form>
        <input type='text' placeholder='search....' value={searchValue} onChange={handleSearch}/>
        <input type="checkbox" checked={fetchStock} onChange={handleChecked} />
        Only show products in stock
      </form>
      {
        totalCategories.map(category => {
          return (<>
            <h4>{category}</h4>
            <FilterProductList data={{
              products: groupProductCategories[category],
              stocked: fetchStock,
              searchValue: searchValue
            }} />
          </>);
        })
      }
    </>
  );
}

