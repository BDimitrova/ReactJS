import Table from "./Table";
import './Main.module.css';


export default function Main() {
    return (
        <main>
            <section className="todo-list-container">
                <h1>Todo List</h1>

                <div class="add-btn-container">
                    <button class="btn">+ Add new Todo</button>
                </div>

                <div className="table-wrapper">
                    
                    <Table/>
                </div>
            </section>
        </main>
    );
}
