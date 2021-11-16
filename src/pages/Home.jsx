import React from "react";
import '../assets/styles/Home.css';
class Home extends React.Component{

    constructor(props){
        super(props);
        this.state={
        }
        this.distritos=['Ancón','Ate','Barranco','Breña','Carabayllo','Chaclacayo','Chorrillos','Cieneguilla',
                       'Comas','El agustino','Independencia','Jesús maría','La molina','La victoria','Lima',
                       'Lince','Los olivos','Chosica','Lurín','Magdalena del mar','Miraflores','Pachacámac',
                       'Pucusana','Pueblo libre','Puente piedra','Punta hermosa','Punta negra','Rímac',
                       'San bartolo','San borja','San isidro','San Juan de Lurigancho','San Juan de Miraflores',
                       'San Luis','San Martin de Porres','San Miguel','Santa Anita','Santa María del Mar',
                       'Santa Rosa','Santiago de Surco','Surquillo','Villa el Salvador','Villa Maria del Triunfo'
        ];
    }
    removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    handleInput=(e)=>{
        this.setState({
            ...this.state,
            [e.target.name]:e.target.type==='checkbox'?e.target.checked:e.target.value,
        })
    }
    render(){
        return (
            <div className="home">
                <div className="home__container">
                    <div className="home__container--intro">
                        <h2 className="bold">Hola!</h2>
                        <p>
                            Buscas seguridad a donde vayas? Ingresa los siguientes datos para que podamos informarte acerca de las probabilidades que hay de que te veas expuesta a algun tipo de agresión y podamos ayudarte!
                        </p>
                    </div>
                    <form onSubmit={this.handleSubmit} className="home__container--form">

                        <div className="form__section--title">
                            <h2><span className="bold">Datos</span> por ingresar:</h2>
                        </div>

                        <div className="form__section--label">
                            <div className="text">Es peruana:</div>
                            <label className="switch input">
                                <input 
                                type="checkbox"
                                name="esPeruana"
                                onChange={this.handleInput}/>
                                <span className="slider round"></span>
                            </label>
                        </div>

                        <div className="form__section--label">
                            <label htmlFor="edad" className="text">Edad: </label>
                            <input type="number" className="input" name="edad" id="edad" min="0" max="100" onChange={this.handleInput}/>
                        </div>

                        <div className="form__section--label">
                            <div className="text">Esta embarazada:</div>
                            <label className="switch input">
                                <input 
                                type="checkbox"
                                name="estaEmbarazada"
                                onChange={this.handleInput}/>
                                <span className="slider round"></span>
                            </label>
                        </div>

                        <div className="form__section--label">
                            <div className="text">Esta casada:</div>
                            <label className="switch input">
                                <input 
                                type="checkbox"
                                name="estaCasada"
                                onChange={this.handleInput}/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className="form__section--label">
                            <div className="text">Tiene hijos:</div>
                            <label className="switch input">
                                <input 
                                type="checkbox"
                                name="tieneHijos"
                                onChange={this.handleInput}/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className="form__section--label">
                            <div className="text">Estudia:</div>
                            <label className="switch input">
                                <input 
                                type="checkbox"
                                name="estudia"
                                onChange={this.handleInput}/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className="form__section--label">
                            <div className="text">Trabaja:</div>
                            <label className="switch input">
                                <input 
                                type="checkbox"
                                name="trabaja"
                                onChange={this.handleInput}/>
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className="form__section--label">
                            <div className="text">Tiene seguro:</div>
                            <label className="switch input">
                                <input 
                                type="checkbox"
                                name="tieneSeguro"
                                onChange={this.handleInput}/>
                                <span className="slider round"></span>
                            </label>
                        </div>

               


                        <div className="form__section--button">
                            <button type="submit" className="button button--calcular">Calcular</button>
                            <button type="reset" className="button button--limpiar">Limpiar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Home;