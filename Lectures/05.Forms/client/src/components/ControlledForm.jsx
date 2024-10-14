import { useEffect, useState } from "react";

export default function ControlledForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [formValues, setFormValues] = useState({
        username: "",
        password: "",
        email: "",
        age: ""
    });

    useEffect(() => {
        (async () => {
            const response = await fetch(
                "http://localhost:3030/jsonstore/advanced/profiles/fb352199-bcbc-4e1d-a1dc-ed346a6fb49a"
            );
            const profile = await response.json();

            setUsername(profile.username);
        })();
    }, []);

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log("Form Submitted!");
    };

    // const usernameChangeHandler = (e) => {
    //     setUsername(e.target.value);
    // };

    const changeValues = (e) => {
        setFormValues(oldValues => ({...oldValues, [e.target.name]: e.target.value}));
    };

    return (
        <>
            <h1>Controlled Form:</h1>

            <form onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        name="username"
                        id="usename"
                        placeholder="John"
                        value={formValues.username}
                        onChange={changeValues}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="******"
                        value={formValues.password}
                        onChange={changeValues}
                    />
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="john@gmail.com"
                        value={formValues.email}
                        onChange={changeValues}
                    />
                </div>


                <div>
                    <label htmlFor="age">Email:</label>
                    <input
                        type="number"
                        name="age"
                        id="age"
                        placeholder="20"
                        value={formValues.age}
                        onChange={changeValues}
                    />
                </div>

                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </>
    );
}
