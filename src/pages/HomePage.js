import { Container, Row, Col } from 'react-bootstrap';
// import student from '../images/student.svg';
import students from '../images/3.jpg';

const HomePage = () => {
  return (
    <>
      <Container>
        <section id='top'>
          <Row>
            <Col>
              <p className='headline'>
                Study abroad with the surest partners.{' '}
              </p>
            </Col>
            <Col>
              <img src={students} alt='students' className='picture' />
            </Col>
          </Row>
        </section>

        <section id='services'>
          <h2 className='text-center'>Our Services</h2>
          <Row>
            <Col>
              <div
                className='card border-primary mb-3'
                style={{ maxWidth: '20rem' }}>
                {/* <div classNameName='card-header'>Header</div> */}
                <div className='card-body'>
                  <h4 className='card-title'>Primary card title</h4>
                  <p className='card-text'>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};

export default HomePage;
