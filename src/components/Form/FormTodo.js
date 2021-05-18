import {useState} from 'react';

import shortid from 'shortid';

import styled from '@emotion/styled';
import {Form, Button} from 'react-bootstrap';

const ContainerForm = styled.div ` 
  border: 2px solid #98e785;
  margin: 2vw;
  border-radius: 25px;
`;

const FormTodo = ({dataTask, setDataTask}) => {

  //States
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [values, setValues] = useState({});
  const [error, setError] = useState(false)

  //Function que envia la informacion validada
  const sendData = e => {
    e.preventDefault();

    if(title.trim() === '' || description.trim() === ''){
      setError(true);
      return;
    }

    setError(false);

    setValues({
      id: shortid.generate(),
      title: title,
      description: description
    })

    setDataTask([
      ...dataTask,
      values
    ])
  }


  return ( 
    <ContainerForm>
      <Form className='m-3 p-2' onSubmit={sendData}>
        <Form.Label>Ingrese el titulo de la tarea</Form.Label>
        <Form.Control 
          type='text' 
          placeholder='Componente FormTodo' 
          name='title'
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <Form.Label 
          className='mt-2'
        >Ingrese una descripción
        </Form.Label>
        <Form.Control 
          type='text' 
          placeholder='Agregar el css al titulo del label' 
          name='description'
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <Button type='submit' className='btn btn-warning mt-2 w-100 text-center'>Agregar</Button>
      </Form>
    </ContainerForm>
   );
}
 
export default FormTodo;