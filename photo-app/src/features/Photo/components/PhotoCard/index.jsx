import React from 'react';
import { Button } from 'reactstrap';
import './styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function PhotoCard({ photo, handleEditPhoto, handleRemovePhoto }) {

  const onEditPhoto = () => {
    if (handleEditPhoto) handleEditPhoto(photo);
  }

  const onRemoveClick = () => {
    if (handleRemovePhoto) handleRemovePhoto(photo);
  }

  return (
    <div className="photo">
      <img src={photo.photo} alt={photo.title} />

      <div className="photo__overlay">
        <h3 className="photo__title">{photo.title}</h3>

        <div className="photo__actions">
          <div>
            <Button outline size="sm" color="light" onClick={onEditPhoto}>
              Edit
            </Button>
          </div>

          <div>
            <Button outline size="sm" color="danger" onClick={onRemoveClick}>
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;