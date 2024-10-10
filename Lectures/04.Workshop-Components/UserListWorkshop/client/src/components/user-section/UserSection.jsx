import Search from "../search/Search";
import PaginationList from "./pagination-component/PaginationList";
import UserList from "./user-list/UserList";

export default function UserSection() {
    return (
        <section className="card users-container">
            <Search />
            <UserList />

            <button className="btn-add btn">Add new user</button>

            <PaginationList/>            
        </section>
    );
}
