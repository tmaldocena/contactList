import logo from './paperplane.svg';
import './App.css';
import ContactListComponent from './components/container/contact_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='row'>
          <img src={logo} className="App-logo col-2" alt="logo" />
          <h2 className='text-muted col mt-5'>Welcome to your Contact List!</h2>
        </div>
        <ContactListComponent></ContactListComponent>
      </header>
    </div>

  );
}

export default App;


/**
*? En este ejercicio de React JS deberéis crear una lista, esta lista tendrá dentro distintos contactos y deberá cumplir con las siguientes funcionalidades:
**  - Mostrar contacto
**  - Crear contacto.
**  - Eliminar contacto.
**  - Cambiar el estado del contacto entre Conectado y Desconectado.
 */