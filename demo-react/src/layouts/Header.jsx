import {Button, Space} from 'antd';
import { Link } from 'react-router-dom';
import LogoHeader from '../assets/images/cgvlogo.png';

function Header() {
    return (
        <div className="header-container">
            <div className="branch">
                <img src={LogoHeader} alt=""/>
            </div>
            <Space>
                <Link to="/">
                    <Button type="primary" size="large">Phim</Button>
                </Link>
                <Link to="/theater">
                    <Button type="primary" size="large">Cụm Rạp</Button>
                </Link>
                <Link to="/member">
                    <Button type="primary" size="large">Thành Viên</Button>
                </Link>
                <Link to="/contact">
                    <Button type="primary" size="large">Liên Hệ</Button>
                </Link>
            </Space>
            <div style={{ textAlign: "center"}}>
                <h3 style={
                    { 
                        color: "black"
                    }
                }>Bạn đã có tài khoản chưa ?</h3>
                <Link to="/login">
                    <Button type="danger">Đăng nhập</Button>
                </Link>
            </div>
        </div>
    );
}
export default Header;