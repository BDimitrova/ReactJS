import { useEffect, useState } from "react";

export default function ControlledForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:3030/jsonstore/advanced/profiles/fb352199-bcbc-4e1d-a1dc-ed346a6fb49a");
            const profile = await response.json();

            setUsername(profile.username);
        })();
    }, []);

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log("Form Submitted!");
    };

    const usernameChangeHandler = (e) => {
        e.preventDefault();
        setUsername(e.target.value);

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
                        placeholder="Username"
                        value={username}
                        onChange={usernameChangeHandler}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="text"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </>
    );
}
