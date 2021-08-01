import Header from './Header';
import Footer from './Footer';
import { Route } from "react-router-dom";


function DefaultLayout(props) {
    const {exact, path, component: Component} = props;
    return (
        <Route exact={exact} path={path} render={(routeProps) => {
            return (
                <>
                    <Header/>
                    <div className="main-container">
                        <div className="main-content">
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
export default DefaultLayout;