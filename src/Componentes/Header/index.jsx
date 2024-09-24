import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
      <ul>
		<li>
			<Link to='/'>Home</Link>
		</li>
    <li>
			<Link to='/lista'>Projetos</Link>
		</li>
		<li>
			<Link to='/apresentacao'>Sobre Mim</Link>
		</li>
    <li>
			<Link to='/contato'>Contato</Link>
		</li>
	<li>
			<Link to='/midias'>Redes Sociais</Link>
		</li>
	</ul>
        </nav>
    </header>
  );
}

export default Header;
