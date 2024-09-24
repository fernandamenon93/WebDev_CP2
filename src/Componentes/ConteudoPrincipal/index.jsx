import About from "../About";
import Skills from "../Skills";
import "./CP.css";

function ConteudoPrincipal(){
    return (
        <div className="mainInfo">
        <section id='info'>
            <About/> 
            <Skills />
        </section>
      </div>
    );
}

export default ConteudoPrincipal;