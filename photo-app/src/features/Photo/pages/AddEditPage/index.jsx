import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Banner from "components/Banner";
import Images from "constants/images";
import PhotoForm from "features/Photo/components/PhotoForm";
import "./styles.scss";
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
import { useHistory, useParams } from 'react-router';
import { v4 as uuidv4 } from 'uuid';

function AddEditPage(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams(); // truyen o URL page addEdit
    const isAddMode = !id;

    const editedPhoto = useSelector(state => state.photoReducer.find(
        x => x.id.toString() === id
    ));
    const initialValues = isAddMode ? {
        title: "",
        categoryId: null,
        photo: "",
    } : editedPhoto;

    const handleSubmit = (values) => {
        return new Promise(resolve => {
            setTimeout(() => {
                if (isAddMode) {
                    const newPhoto = {
                        ...values,
                        id: uuidv4(),
                    };
    
                    const action = addPhoto(newPhoto);
                    dispatch(action);    
                } else {
                    // do something
                    const action = updatePhoto(values);
                    dispatch(action);
                }

                history.push("/photos");
                resolve(true);
            }, 2000);
        });
    }

    return (
        <div className="photo-edit">
            <Banner title="Add and Edit Page" backgroundUrl={Images.NO_2} />

            <div className="photo-edit__form">
                <PhotoForm 
                    onSubmit={handleSubmit}
                    initialValues={initialValues}
                    isAddMode={isAddMode}
                />
            </div>
        </div>
    );
};
export default AddEditPage;