import Search from "../search/Search";
import UserList from "./user-list/UserList";
import PaginationComponent from "../pagination/PaginationComponent";
import { useState, useEffect } from "react";
import UserAdd from "./user-add/UserAdd";

const baseUrl = "http://localhost:3030/jsonstore";

export default function UserSection(props) {
    const [users, setUsers] = useState([]);
    const [showAddUser, setShowAddUser] = useState(false);

    useEffect(() => {
        (async function getUsers() {
            try {
                const response = await fetch(`${baseUrl}/users`);
                const result = await response.json();
                const users = Object.values(result);
                setUsers(users);
            } catch (error) {
                alert(error.message);
            }
        })();
    }, []);

    const addUserClickHandler = () => {
        setShowAddUser(true);
    };

    const addUserCloseHandler = () => {
        setShowAddUser(false);
    }

    return (
        <section className="card users-container">
            <Search />

            <UserList users={users} />

            {showAddUser && <UserAdd onClose={addUserCloseHandler}/>}

            <button className="btn-add btn" onClick={addUserClickHandler}>
                Add new user
            </button>

            <PaginationComponent />
        </section>
    );
}