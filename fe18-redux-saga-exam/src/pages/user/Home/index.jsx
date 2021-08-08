import { useState, useEffect } from "react";
import { Space, Row, Col, Card, Tag, Input, Slider } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import { getProductListAction, getCategoryListAction, } from '../../../redux/actions';

const marks = {
  0: {
    style: {
      fontSize: "0.85rem",
      textAlign: "left"
    },
    label: <strong>0</strong>,
  },
  50000000: {
    style: {
      fontSize: "0.85rem",
      textAlign: "left"
    },
    label: <strong>50tr</strong>,
  },
};

function HomePage() {
  const [categorySelected, setCategorySelect] = useState(undefined);
  const [searchKey, setSearchKey] = useState('');
  const [filterPrice, setFilterPrice] = useState(undefined);

  const { productList } = useSelector((state) => state.productReducer);
  const { categoryList } = useSelector((state) => state.categoryReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryListAction());
    dispatch(getProductListAction());
  }, []);

  function handleFilterCategory(categoryId) {
    setCategorySelect(categoryId);
    dispatch(getProductListAction({
      categoryId,
      searchKey,
      filterPrice
    }));
  }

  function handleSearchProduct(value) {
    setSearchKey(value);
    dispatch(getProductListAction({
      searchKey: value,
      categoryId: categorySelected,
      filterPrice: filterPrice
    }));
  }

  function handleFilterPrice(value) {
    setFilterPrice(value);
    dispatch(getProductListAction({
      categoryId: categorySelected,
      searchKey: searchKey,
      filterPrice: value,
    }));
  }

  function renderFilterStatus() {
    const categorySelectedData = categoryList.data.find((item) => item.id === categorySelected);
    if (!categorySelected && !searchKey && !filterPrice) return null;
    return (
      <Space style={{ marginBottom: 16 }}>
        Đang filter theo:
        {categorySelected && (
          <Tag
            closable
            onClose={() => {
              setCategorySelect(undefined);
              dispatch(getProductListAction({
                categoryId: undefined,
                searchKey: searchKey
              }));
            }}>
            {categorySelectedData.name}
          </Tag>
        )}
        {searchKey && (
          <Tag
            closable
            onClose={() => {
              setSearchKey('');
              dispatch(getProductListAction({
                categoryId: categorySelected,
                searchKey: undefined
              }));
            }}>
            {`Tìm theo từ khóa: ${searchKey}`}
          </Tag>
        )}
        {filterPrice && (
          <Tag
            closable
            onClose={() => {
              setFilterPrice(undefined);
              dispatch(getProductListAction({
                categoryId: categorySelected,
                searchKey: searchKey,
                filterPrice: undefined
              }));
            }}>
            {`Tìm theo giá từ: ${filterPrice[0].toLocaleString()} đến ${filterPrice[1].toLocaleString()} triệu`}
          </Tag>
        )}
      </Space>
    )
  }

  function renderCategoryList() {
    return categoryList.data.map((categoryItem, categoryIndex) => {
      return (
        <p
          key={`category-item-${categoryItem.id}`}
          onClick={() => handleFilterCategory(categoryItem.id)}
          style={{
            color: categorySelected === categoryItem.id ? 'red' : 'black',
            cursor: 'pointer',
          }}
        >
          {categoryItem.name}
        </p>
      )
    })
  }

  function renderProductList() {
    if (!filterPrice)
    return productList.data.map((productItem, productIndex) => {
      return (
        <Col span={6} key={`product-item-${productItem.id}`}>
          <Link to={`/product/${productItem.id}`}>
            <Card
              size="small"
              title={productItem.name}
            >
              <div>{productItem.price.toLocaleString()}</div>
            </Card>
          </Link>
        </Col>
      )
    });
    else {
      const productListFilterPrice = productList.data.filter((productItem) => {
        return productItem.price >= filterPrice[0] && productItem.price <= filterPrice[1];
      });
      return productListFilterPrice.map((productItem, productIndex) => {
        return (
          <Col span={6} key={`product-item-${productItem.id}`}>
            <Link to={`/product/${productItem.id}`}>
              <Card
                size="small"
                title={productItem.name}
              >
                <div>{productItem.price.toLocaleString()}</div>
              </Card>
            </Link>
          </Col>
        )
      });
    };
  }

  return (
    <div>
      <div>Home Page</div>
      <div style={{ padding: 16 }}>
        <Row gutter={16}>
          <Col span={4}>
            <Card title="Category Filter" size="small">
              {renderCategoryList()}
            </Card>
            <Card title="Filter by price" size="small">
              <Slider 
                range
                defaultValue={[0, 50000000]}
                min={0} max={50000000}
                marks={marks} step={500000}
                included={true}
                value={filterPrice}
                onChange={(value) => handleFilterPrice(value)}
              />
              {filterPrice && (
                <p>Từ {filterPrice[0].toLocaleString()} triệu - {filterPrice[1].toLocaleString()} triệu</p>
              )}
            </Card>
          </Col>
          <Col span={20}>
            <Input
              placeholder="Search..."
              onChange={(e) => handleSearchProduct(e.target.value)}
              value={searchKey}
              suffix={<SearchOutlined />}
              style={{ marginBottom: 16 }}
            />
            {renderFilterStatus()}
            <Row gutter={[16, 16]}>
              {renderProductList()}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default HomePage;
