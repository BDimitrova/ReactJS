import { useEffect, useState } from "react";

export default function ControlledForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [formValues, setFormValues] = useState({
        username: "",
        password: "",
        email: "",
        age: "",
        bio: "",
        occupation: "ai",
        genre: "Female",
        sports: "",
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
        console.log(e.target.name);
        console.log(e.target.checked);

        setFormValues((oldValues) => ({
            ...oldValues,
            [e.target.name]:
                e.target.type === "checkbox"
                    ? e.target.checked
                    : e.target.value,
        }));
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
                    <label htmlFor="bio">Bio:</label>
                    <textarea
                        name="bio"
                        id="bio"
                        value={formValues.bio}
                        onChange={changeValues}
                    />
                </div>

                <div>
                    <label htmlFor="occupation">Occupation:</label>
                    <select
                        name="occupation"
                        id="occupation"
                        value={formValues.occupation}
                        onChange={changeValues}
                    >
                        <option value="it">IT</option>
                        <option value="bi">BI</option>
                        <option value="ai">AI</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="genre">Female:</label>
                    <input
                        type="radio"
                        name="genre"
                        id="genre-f"
                        value="Female"
                        checked={formValues.genre === "Female"}
                        onChange={changeValues}
                    />

                    <label htmlFor="genre">Male:</label>
                    <input
                        type="radio"
                        name="genre"
                        id="genre-m"
                        value="Male"
                        checked={formValues.genre === "Male"}
                        onChange={changeValues}
                    />

                    <label htmlFor="genre">Other:</label>
                    <input
                        type="radio"
                        name="genre"
                        id="genre-o"
                        value="Ohter"
                        checked={formValues.genre === "Other"}
                        onChange={changeValues}
                    />
                </div>

                <div>
                    <label htmlFor="swimming">Swimming:</label>
                    <input
                        type="checkbox"
                        name="swimming"
                        id="fitness"
                        value={formValues.fitness}
                        onChange={changeValues}
                    />

                    <label htmlFor="fitness">Fitness:</label>
                    <input
                        type="checkbox"
                        name="fitness"
                        id="fitness"
                        value={formValues.fitness}
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
