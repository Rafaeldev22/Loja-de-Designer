import Dropdown from 'react-bootstrap/Dropdown';
import "./nav.css"

export default function Nav(){
    return (
      <header className="cabecario">
        <nav className="nav">
          <a href="/" title="Home">
            <img
              src="https://i.imgur.com/BocKEAI.png"
              alt="logo"
              className="logo"
            />
          </a>

          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className="bg-transparent custom-button"
            >
              Menu
            </Dropdown.Toggle>

            <Dropdown.Menu className="custom-drop bg-transparent">
              <Dropdown.Item href="/duvidas" className="custom">
                Duvidas
              </Dropdown.Item>
              <Dropdown.Item href="/faleconosco" className="custom">
                Fale com a gente
              </Dropdown.Item>
              <Dropdown.Item href="/pagamento" className="custom">
                Efetue seu pagamento
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </nav>
      </header>
    );
};
