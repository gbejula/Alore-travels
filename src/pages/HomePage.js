import { Container, Row, Col } from 'react-bootstrap';
import student from '../images/student.svg';

const HomePage = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Lorem ipsum dolor sit amet.</h1>
          </Col>
          <Col>
            <img src={student} alt='study' className='picture' />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
