import TodoIteemi from './TodoIteemi.js';

function TodoLista(props) {
    // props.iteemit
    return (
        <div>
            {props.iteemit.map(
                (x) => <TodoIteemi otsikko={x.otsikko} />
            )}

            {/* <TodoIteemi otsikko="Eka" />
            <TodoIteemi otsikko="Toka" /> */}
        </div>
    );
}

export default TodoLista;




