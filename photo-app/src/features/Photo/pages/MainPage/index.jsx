import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { Container } from "reactstrap";

import Banner from "components/Banner";
import Images from "constants/images";
import { useDispatch, useSelector } from 'react-redux';
import PhotoList from 'features/Photo/components/PhotoList';
import { removePhoto } from 'features/Photo/photoSlice';


function MainPage(props) {

    const photoList = useSelector(state => state.photoReducer);
    const dispatch = useDispatch();
    const history = useHistory();
    const handleEditPhoto = (photo) => {
        const editUrl = `/photos/${photo.id}`;
        history.push(editUrl);

        
    };
    const handleRemovePhoto = (photo) => {
        const photoId = photo.id;
        const action = removePhoto(photoId);
        dispatch(action);
    };

    return (
        <div className="photo-main">
            <Banner title="Main Page" backgroundUrl={Images.NO_1} />

            <Container className="text-center">
                <div className="py-3">
                    <Link to="/photos/add"
                        style={{fontSize: "1.2rem"}}
                    >Add new photo here</Link>
                </div>

                <PhotoList 
                    photoList={photoList}
                    handleEditPhoto={handleEditPhoto}
                    handleRemovePhoto={handleRemovePhoto}
                />
            </Container>
        </div>
    );
};
export default MainPage;