import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'

import TodoIteemi from './TodoIteemi.js';

function TodoLista(props) {
    // props.iteemit
    return (
        <Stack gap={1} direction='vertical'>
            {props.iteemit.map(
                (x) => (<TodoIteemi
                            id={x.id}
                            otsikko={x.otsikko} 
                            tehty={x.tehty} 
                            merkitseTehdyksi={
                                () => props.merkitseTehtavaTehdyksi(x.id)
                            }
                        />
                        )
            )}

            {/* <TodoIteemi otsikko="Eka" />
            <TodoIteemi otsikko="Toka" /> */}
        </Stack>
    );
}

export default TodoLista;




