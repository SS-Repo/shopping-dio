import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import Routes from './routes';
import { Container } from '@material-ui/core/'; 
import Header from './components/Header';


//Projeto Shopping DIO - CAP:Desenvolvendo as categorias dinamicamente - Part 1
const App = () => {

  return(
    <Provider store={store}>
      <Container maxWidth="xl">
        <Router>
          <Header />
          <Routes />
        </Router>
      </Container>
    </Provider>
  )
}

export default App;