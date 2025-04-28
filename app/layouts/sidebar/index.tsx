import { Form, Link, Outlet } from "react-router";
import type { Route } from "../../+types/root";
import type { ContactRecord } from "../../data";

const sidebar = ({ loaderData }: Route.ComponentProps) => {
    const { contacts } = loaderData;
    <>
        <div id="sidebar">
            <h1>React Router Contacts</h1>
            <h1>
                <Link to="about">React Router Contacts</Link>
            </h1>
            <div>
                <Form id="search-form" role="search">
                    <input
                        aria-label="Search contacts"
                        id="q"
                        name="q"
                        placeholder="Search"
                        type="search"
                    />
                    <div aria-hidden hidden={true} id="search-spinner" />
                </Form>
                <Form method="post">
                    <button type="submit">New</button>
                </Form>
            </div>
            <nav>
                {contacts.length ? (
                    <ul>
                        {contacts.map((contact) => (
                            <li key={contact.id}>
                                <Link to={`contacts/${contact.id}`}>
                                    {contact.first || contact.last ? (
                                        <>
                                            {contact.first} {contact.last}
                                        </>
                                    ) : (
                                        <i>No Name</i>
                                    )}
                                    {contact.favorite ? (
                                        <span>★</span>
                                    ) : null}
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>
                        <i>No contacts</i>
                    </p>
                )}
            </nav>
        </div>
        <div id="detail">
            <Outlet />
        </div></>
}
export default sidebar;