import { Footer, Header } from "antd/lib/layout/layout";
import { Route, Redirect } from "react-router-dom";


function AdminLayout(props) {
    const {exact, path, component: Component} = props;
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (! userInfo) {
        return <Redirect to="/login" />;
    } else {
        if (userInfo.role === "user") {
            return <Redirect to="/" />;
        } else {
            return (
                <Route exact={exact} path={path} render={(routeProps) => {
                    return (
                        <>
                            <Header/>
                            <div className="main-container">
                                <div className="main-content">
                                    ADMIN PAGE
                                    <Component {...routeProps} />
                                </div>
                            </div>
                            <Footer/>
                        </>
                    );
                }}
                />
            );
        }
    }
    
}
export default AdminLayout;