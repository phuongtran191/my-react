import { LeftSquareOutlined, RightSquareOutlined,
    AppstoreOutlined, BuildOutlined, SettingOutlined,
    TeamOutlined, DollarCircleOutlined
} from '@ant-design/icons';
import { Button } from 'antd';

import { Link } from 'react-router-dom';
import history from '../../utils/history';
import * as Style from './styles';

const SIDEBAR_MENU = [
    {
        title: "Dash Board",
        path: "/admin",
        icon: <AppstoreOutlined />
    },
    {
        title: "Product Manager",
        path: "/admin/products",
        icon: <BuildOutlined />
    },
    {
        title: "User Manager",
        path: "/admin/users",
        icon: <TeamOutlined />
    },
    {
        title: "Revenue Manager",
        path: "/admin/revenues",
        icon: <DollarCircleOutlined />
    },
    {
        title: "Settings",
        path: "/admin/settings",
        icon: <SettingOutlined />
    },
];

function Sidebar({location, isShowSidebar, setIsShowSidebar}) {
    function renderSideBarMenu() {
        return SIDEBAR_MENU.map((sidebarItem, sidebarIndex) => {
            return (
                <Style.SidebarMenuItem
                    key={`sidebar-${sidebarIndex}`}
                    active={location.pathname === sidebarItem.path}
                    onClick={() => history.push(sidebarItem.path)}
                >
                    <span>{sidebarItem.icon}</span>
                    {isShowSidebar && (
                        <span>{sidebarItem.title}</span>
                    )}
                </Style.SidebarMenuItem>
            );
        });
    }
    return (
        <>
            <Style.SidebarContainer show={isShowSidebar}>
                <Style.SidebarHeader>
                    <span className="brand">ChuDu Admin</span>
                    <Button
                        type="text"
                        icon={isShowSidebar
                        ? <LeftSquareOutlined style={{color: "white"}} />
                        : <RightSquareOutlined style={{color: "white"}} />
                        }
                        onClick={() => setIsShowSidebar(!isShowSidebar)}
                    >
                    </Button>
                </Style.SidebarHeader>

                <Style.SidebarMenu>
                    {renderSideBarMenu()}
                </Style.SidebarMenu>
            </Style.SidebarContainer>
        </>
    );
}
export default Sidebar;