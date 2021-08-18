import React from 'react';
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

import Banner from "components/Banner";
import Images from "constants/images";


function MainPage(props) {
    return (
        <div className="photo-main">
            <Banner title="Main Page" backgroundUrl={Images.NO_1} />
            <Container className="text-center">
                <Link to="/photos/add">Add new photo here</Link>
            </Container>
        </div>
    );
};
export default MainPage;