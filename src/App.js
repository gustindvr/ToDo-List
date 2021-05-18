import {useState} from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import FormTodo from './components/Form/FormTodo';

function App() {

  //States
  const [dataTask, setDataTask] = useState([])

  return (
    <Container>
      <h2 className='text-center m-3 p-2 bg-warning'>Todo list</h2>
      <Row>
        <Col sm={8}>
          <FormTodo
            setDataTask={setDataTask}
            dataTask={dataTask}
          />
        </Col>
        <Col sm={4}>
          2
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <h3>Contador</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
