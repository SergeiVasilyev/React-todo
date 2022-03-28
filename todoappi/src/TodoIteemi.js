import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const laatikkoRastilla = <span>&#x2611;</span>
const laatikkoTyhja = <span>&#x2610;</span>

function TodoIteemi(props) {
    const laatikko = props.tehty ? laatikkoRastilla : laatikkoTyhja
    const otsikko = props.otsikko
    const otsikkoElementti = props.tehty ? <s>{props.otsikko}</s> : <>{otsikko}</>
    const reuna = props.tehty ? 'secondary' : 'primary'

    return (
        <Card className='mb-2' style={{ maxWidth: '26rem' }} border={reuna}>
        <Card.Header as="h5">{laatikko} Tehtävä {props.id}</Card.Header>
        <Card.Body>
            <Card.Title>{otsikkoElementti}</Card.Title>
            {/* <Card.Text>
            With supporting text below as a natural lead-in to additional content.
            </Card.Text> */}
            {props.tehty ? null : (
                <Button
                    variant="primary" 
                    onClick={props.merkitseTehdyksi}>Merkitse valmiiksi
                </Button>
            )}
        </Card.Body>
        </Card>
    )



    // if (props.tehty) {
    //     return (
    //         <div>
    //             <s>{props.otsikko}</s>
    //         </div>
    //     );
    // }
    // else {
    //     return (
    //         <div>
    //             {props.otsikko}
    //             <a href="#" onClick={props.merkitseTehdyksi}>Merkitse tehdyksi</a>
    //         </div>
    //     );
    // }
    
}

export default TodoIteemi;