import './pokecard.css';

const Pokecard = (props) => {
    const {id, name, type, base_experience} = props;
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
        <div className = "pokecard">
            <p className = "pokecard-name">{name}</p>
            <img src={img}/>
            <p className = "pokecard-type">Type: {type}</p>
            <p className = "pokecard-exp">EXP: {base_experience}</p>
        </div>
    );

}

export default Pokecard;