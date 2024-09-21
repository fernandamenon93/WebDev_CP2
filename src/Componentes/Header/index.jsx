import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Meu Portifólio</h1>
      <nav>
      <ul>
		<li>
			<Link to='/'>Home</Link>
		</li>
    <li>
			<Link to='/lista'>Lista de projetos</Link>
		</li>
		<li>
			<Link to='/apresentacao'>Apresentação pessoal</Link>
		</li>
    <li>
			<Link to='/contato'>Formulário de contato</Link>
		</li>
	<li>
			<Link to='/midias'>Mídias sociais</Link>
		</li>
	</ul>
        </nav>
    </header>
  );
}

export default Header;
