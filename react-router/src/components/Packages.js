import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/esm/Card'

export default function Packages(props) {
    const displayPackages = props.packages.map((eachItem,index) => <li key={index}>{eachItem}</li>)

    return (
        <div>
            <div className="packages">
                <Container>
                    <Card.Body>
                        <Card.Title>Our Packages</Card.Title>
                        <Card.Text>
                            Check out some of our packages! Every package is ethically sourced and organic!
                        </Card.Text>                    
                    </Card.Body>
                    <ListGroup>
                        {displayPackages}
                    </ListGroup>
                </Container>
            </div>
        </div>
    )
}