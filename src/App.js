import {useState} from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import FormTodo from './components/Form/FormTodo';
import TodoList from './components/TodoList/TodoList';

function App() {

  //States
  const [dataTask, setDataTask] = useState([]);
  const [contador, setContador] = useState(0);

  return (
    <Container>
      <h2 className='text-center m-3 p-2 bg-warning'>Todo list</h2>
      <Row>
        <Col className='text-center '>
          <h3>Contador de tareas pendientes</h3>
          {contador}
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6} lg={4}>
          <FormTodo
            setDataTask={setDataTask}
            dataTask={dataTask}
            setContador={setContador}
            contador={contador}
          />
        </Col>
        <Col sm={12} md={6} lg={8} >
          <TodoList
            dataTask={dataTask}
            setDataTask={setDataTask}
            setContador={setContador}
            contador={contador}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
