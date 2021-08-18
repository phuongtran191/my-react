import React from 'react';
import Banner from "components/Banner";
import Images from "constants/images";
import PhotoForm from "features/Photo/components/PhotoForm";
import "./styles.scss";

function AddEditPage(props) {
    return (
        <div className="photo-edit">
            <Banner title="Add and Edit Page" backgroundUrl={Images.NO_2} />

            <div className="photo-edit__form">
                <PhotoForm onSubmit={() => null} />
            </div>
        </div>
    );
};
export default AddEditPage;