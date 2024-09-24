import Card from "../Card";

function Skills({ skills }) {

  const habilidades = [
    {
      titulo: "HTML",
      nivel: "Avançado",
      tempoxp: "6 meses",
      color: "#CAA8F5"
      
    },
    {
      titulo: "Node JS",
      nivel: "Noob",
      tempoxp: "1 meses",
      color: "#CAA8F5",
      imagemIcone: "/assets/curinthia.png"
    },
    {
      titulo: "Python",
      nivel: "Dó",
      tempoxp: "0 meses",
      color: "#CAA8F5"
    }
  ]

  return (
    <div className="skills">
      <h2>Habilidades</h2>
      <Card dados={habilidades} />
    </div>
  );
}

export default Skills;
