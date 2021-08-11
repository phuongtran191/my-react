import { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import * as Style2 from '../DefaultLayout/styles';
import Header from "../Header";
import Sidebar from "../Sidebar";
import * as Style from './styles';

function AdminLayout({exact, path, component: Component}) {
    const [isShowSidebar, setIsShowSidebar] = useState(true);

    const userRegister = JSON.parse(localStorage.getItem("userRegister"));

    if ( !userRegister) {
        return <Redirect to="/admin" />;
    } else {
        if (userRegister.role === "user") {
            return <Redirect to="/" />;
        } else {
            return (
                <Route exact={exact} path={path} render={(routeProps) => {
                    return (
                        <>
                            <Style2.MainContainer>
                                <Sidebar {...routeProps} isShowSidebar={isShowSidebar} />
                                <Style.AdminContent show={isShowSidebar}>
                                    <Header />
                                    <Component {...routeProps} />
                                </Style.AdminContent>
                            </Style2.MainContainer>
                        </>
                    );
                }}
                />
            );
        }
    }
    
}
export default AdminLayout;