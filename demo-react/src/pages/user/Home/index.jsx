import { Row, Col, Card } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";


const { Meta } = Card;
function HomePage({ productList }) {
    function renderProductList() {
        return productList.map((productItem, productIndex) => {
            return (
            <Col span={6} key={productIndex}>
              <Link to={`/product/${productItem.id}`}>
                <Card 
                    hoverable
                    style={{width: 250, height: 400}}
                    cover={
                    <img alt="example" src={productItem.image} />
                    }
                >
                  <Meta
                    title={productItem.name} 
                    description={productItem.price.toLocaleString()} />
                </Card>
              </Link>
            </Col>
        )});
    }
    return (
        <div>
            <div>Home Page</div>
            <div style={{ padding: 16 }}>
                <Row gutter={[16, 16]}>{renderProductList()}</Row>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    const { productList } = state.productReducer;
    return {
        productList: productList,
    }
}
export default connect(mapStateToProps, null)(HomePage);