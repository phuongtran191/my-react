import { Row, Col } from 'reactstrap';
import PhotoCard from '../PhotoCard';

function PhotoList({
  photoList, handleEditPhoto, handleRemovePhoto
}) {

  return (
    <Row>
      {photoList.map(photo => (
        <Col key={photo.title} xs="12" md="6" lg="3">
          <PhotoCard
            photo={photo}
            handleEditPhoto={handleEditPhoto}
            handleRemovePhoto={handleRemovePhoto}
          />
        </Col>
      ))}
    </Row>
  );
};
export default PhotoList;