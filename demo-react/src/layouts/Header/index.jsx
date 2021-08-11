import { Button, Space, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Images } from '../../assets/constants/images';
import * as Style from './styles';

function Header({type, isShowSidebar}) {
    return (
        <Style.HeaderContainer>
            {type ==="user" ? (
                <div className="branch">
                    <img src={Images.cgvLogo} alt=""/>
                </div>
            )
            : (
                <Input placeholder="Search ..."
                    allowClear
                    style={{ width: 400, marginTop: "2.5rem" }} 
                    prefix={<SearchOutlined />}
                />
            )}
            {type ==="user" && (
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
            )}
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