import { Route } from "react-router-dom";
import Footer from '../Footer';
import Header from '../Header';
import * as Style from './styles';


function DefaultLayout(props) {
    const {exact, path, component: Component} = props;
    return (
        <Route exact={exact} path={path} render={(routeProps) => {
            return (
                <>
                    <Header type="user" />
                    <Style.MainContainer>
                        <Style.MainContent>
                            <Component {...routeProps} />
                        </Style.MainContent>
                    </Style.MainContainer>
                    <Footer/>
                </>
            );
        }}
        />
    );
}
export default DefaultLayout;