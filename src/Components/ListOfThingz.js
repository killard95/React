import {useState} from 'react';

export default function ListOfThingz(){

    const [items, setItems] = useState([])
    const [itemName, setItemName] = useState("")
    const addItem = (event) => {
        event.preventDefault()
        setItems(
            [...items,
                {
                    id: items.length,
                    name: itemName
                }
            ]
            )
            setItemName("")
    }

    return(
        <>
            <form onSubmit={addItem}>
                <label>
                    <input 
                        name="item"
                        type="text"
                        value={itemName}
                        onChange={(event) => setItemName(event.target.value)}
                    />
                </label>
            </form>
            <ol>
                {items.map( item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ol>
        </>
    )
}