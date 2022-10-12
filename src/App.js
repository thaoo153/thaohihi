import logo from './logo.svg';
import './App.css';
import Form from './pages/Form/Form';
import BasicExample from './pages/Form/FormTest';
import FormLogin from './pages/Form/FormLogin';
import { Stack } from 'react-bootstrap';

function App() {
  return (
    <>
    <Stack sx={{
      background: 'black'
    }} 
    >
      <FormLogin/>
    </Stack>


    </>
  );
}

export default App;
