import { useState } from "react";

export default function UncontrolledForm() {
    const [user, setUser] = useState({});
    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log(e);

        const formData = new FormData(e.currentTarget);

        console.log(formData.get("username"));
        setUser({
            username: formData.get("username"),
        });
    };

    const onLogoutHandler = (e) => {
        e.preventDefault();
        setUser({});
    };
    return (
        <>
            <h1>Uncontrolled Form:</h1>

            {user.username ? (
                <p>
                    Hello {user.username}!{" "}
                    <button onClick={onLogoutHandler}>Logout</button>
                </p>
            ) : (
                <form onSubmit={formSubmitHandler}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            name="username"
                            id="usename"
                            placeholder="Username"
                        />
                    </div>

                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="text"
                            name="password"
                            id="password"
                            placeholder="Password"
                        />
                    </div>

                    <div>
                        <input type="submit" value="Login" />
                    </div>
                </form>
            )}
        </>
    );
}
