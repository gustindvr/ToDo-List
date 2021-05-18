import {Alert} from 'react-bootstrap';

const Error = ({title, message}) => {
  return ( 
    <Alert variant='danger' className='m-2 p-3 text-center'>
      <Alert.Heading>{title}</Alert.Heading>
      <p>{message}</p>
    </Alert>
   );
}
 
export default Error;