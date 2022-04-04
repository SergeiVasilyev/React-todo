import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"


export default function KirjautumisDialogi(props) {
    function handleSubmit(event){
        event.preventDefault()
        // console.log(document.forms[0])
        const {tunnus, passu} = document.forms[0]
        // console.log(tunnus.value)
        // console.log(passu.value)
        props.kirjaudu(tunnus.value, passu.value)
    }


    return (
        <Form onSubmit={handleSubmit}>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Kirjaudu sisään</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Käyttäjätunnus</Form.Label>
                        <Form.Control name="tunnus" placeholder="login" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Salasana</Form.Label>
                        <Form.Control name="passu" type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Button variant="primary" type="submit">Kirjaudu</Button>
                    </Form.Group>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="primary" type="submit">Kirjaudu</Button>
                </Modal.Footer> */}
            </Modal.Dialog>
        </Form>
    )
}






