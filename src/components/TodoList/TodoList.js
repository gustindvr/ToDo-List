import {Button} from 'react-bootstrap';

import styled from '@emotion/styled';

const Container = styled.div ` 
  border: 2px solid #98e785;
  margin: 2vw;
  border-radius: 25px;
`;

const TodoList = ({dataTask, setDataTask, setContador, contador}) => {

  const deleteTask = id => {
    let dataTaskFilter = dataTask.filter(task => task.id !== id);
    setDataTask(dataTaskFilter);
    setContador(contador - 1);
  }

  return ( 
    <>
      <Container>
        <ul className='p-2 list-group list-unstyled'>
          {
             dataTask.length === 0 ? (
              <li className="p-3 ">No Hay Tareas</li>
            ) : (
              dataTask.map(task => (
                <li key={task.id} className='m-2'>
                  <h3 className='text-center rounded text-uppercase p-1'>{task.title}</h3>
                  <p>{task.description}</p>
                  <Button className='btn btn-danger' block onClick={() => deleteTask(task.id)}>Eliminar</Button>
                </li>
              ))
            )
          }
        </ul>
      </Container>
    </>  
   );
}
 
export default TodoList;