import {useState} from'react';
export default function MyForm(){

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [inputs, setInputs] = useState({nom:"", age:""});

    const handleChange = (evenement) => {
        const name = evenement.target.name;
        const value = evenement.target.value;
        setInputs(values => ({...values, [name]:value}))

        setName(value);
    }

    const handleSubmit = (evenement) => {
            evenement.preventDefault();
            console.log("nom : ", inputs.nom, ' ----- age : ', inputs.age);
        }

    return(
        <form onSubmit={handleSubmit}>
            <label>Entrez votre nom : </label>
            <input 
                type="text"
                name="nom"
                value={inputs.name}
                onChange={handleChange}
            /> 
               <label>Entrez votre age : </label>
            <input 
                type="text"
                name="age"
                value={inputs.age}
                onChange={handleChange}
            />
            <input type="submit" value="Envoyer" />
        </form>
    )
}

