import {useState} from 'react';

export default function LoginForm() {

    const [form,setState] = useState(
        { 
            username: "",
            password: ""
        }
    );

    const printValues = (event) => {
        event.preventDefault();
        console.log(`username: ${form.username} -- password: ${form.password}` );
    }

    const updateField = (event) => {
        setState(
            {
                ...form,
                [event.target.name]: event.target.value
            }
        )
    }

    return (
        <>
            <form onSubmit={printValues}>
                <label>
                    User Name:
                    <input
                        value={form.username}
                        type="text"
                        name="usernzame"
                        onChange={updateField}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        value={form.password}
                        type="password"
                        name="password"
                        onChange={updateField}
                    />
                </label>
                <br />
                <button>GO</button>
            </form>
        </>
    )
}