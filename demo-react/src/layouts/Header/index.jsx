import { Button, Space } from 'antd';
import { Link } from 'react-router-dom';
import { Images } from '../../assets/constants/images';
import * as Style from './styles';

function Header() {
    return (
        <Style.HeaderContainer>
            <div className="branch">
                <img src={Images.cgvLogo} alt=""/>
            </div>
            <Space>
                <Link to="/">
                    <Style.NavButton type="link" size="large">Phim</Style.NavButton>
                </Link>
                <Link to="/theater">
                    <Style.NavButton type="link" size="large">Cụm Rạp</Style.NavButton>
                </Link>
                <Link to="/member">
                    <Style.NavButton type="link" size="large">Thành Viên</Style.NavButton>
                </Link>
                <Link to="/contact">
                    <Style.NavButton type="link" size="large">Liên Hệ</Style.NavButton>
                </Link>
            </Space>
            <div style={{ textAlign: "center"}}>
                <h3 style={{ color: "black" }}>Bạn đã có tài khoản chưa ?</h3>
                <Link to="/login">
                    <Button type="danger">Đăng nhập</Button>
                </Link>
            </div>
        </Style.HeaderContainer>
    );
}
export default Header;