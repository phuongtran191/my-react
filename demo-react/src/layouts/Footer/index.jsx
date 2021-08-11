import * as Style from './styles';
import { FacebookOutlined, GooglePlusOutlined,
    InstagramOutlined, YoutubeOutlined,
} from '@ant-design/icons';
import { Space } from 'antd';
import { Images } from '../../assets/constants/images';

function Footer() {
    return (
        <Style.FooterContainer>
            <div className="office-address">
                <img src={Images.cgvLogo} 
                    alt="logoFooter" 
                    style={{float: "left", marginRight: "1.2rem" }} 
                />
                <h3>CÔNG TY TNHH PTN CINEMA</h3>
                <p><em>Trụ sở: </em> 15 Ngô Quyền, Tây Hồ, Hà Nội</p>
                <p><em>Chi nhánh miền Trung: </em> 356 Hàm Nghi, Hải Châu, Đà Nẵng</p>
                <p><em>Chi nhánh miền Nam: </em> 810 Xô Viết Nghệ Tĩnh, quận 1, TP. Hồ Chí Minh</p>
                <p>Hotline: 1900.3434 hoặc 1900.6868 để được hỗ trợ chi tiết.</p>
                <p>&copy; COPYRIGHT 2021.</p>
            </div>
            <Style.FooterContact>
                <h3>Liên hệ với chúng tôi qua: </h3>
                <Space>
                    <Style.ContactLink
                        target="_blank"
                        href="https://www.facebook.com/phuongtran191/"
                        rel="noopener noreferrer"
                    >
                        <FacebookOutlined />
                    </Style.ContactLink>
                    <Style.ContactLink>
                        <GooglePlusOutlined />
                    </Style.ContactLink>
                    <Style.ContactLink>
                        <InstagramOutlined />
                    </Style.ContactLink>
                    <Style.ContactLink
                        target="_blank"
                        href="https://www.youtube.com/channel/UCw0b2G3Qs219qDAEEzNhidQ"
                        rel="noopener noreferrer"
                    >
                        <YoutubeOutlined />
                    </Style.ContactLink>
                </Space>
            </Style.FooterContact>
        </Style.FooterContainer>
    );
}
export default Footer;