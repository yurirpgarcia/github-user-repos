import './BannerStyles.scss'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

const Banner = ({ title, children, colors }) => {

  const gradient = `linear-gradient(to right, ${colors.join(',')})`

  return (
    <div className='Y-banner' style={{ background: gradient }}>

      <h1
        className='Y-banner__title'
      >
        {title}
      </h1>

      <div className='Y-banner__children'>
        <Container>
          <Row className='justify-content-md-center'>
            <Col  lg={7} md={8}>{children}</Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export { Banner }