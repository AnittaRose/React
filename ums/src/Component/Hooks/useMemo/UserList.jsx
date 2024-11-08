import { useState } from "react";

const users = [
    { id: 1, name: "John Doe", role: "Admin" },
    { id: 2, name: "Jane Smith", role: "User" },
    { id: 3, name: "Alice Johnson", role: "Admin" },
    { id: 4, name: "Bob Brown", role: "User" },
    { id: 5, name: "Charlie Lee", role: "Admin" },
    { id: 6, name: "Diana Doe", role: "User" }
];

function Userlist() {
    console.log("Component rendering......");

    const [searchTerm, setSearchTerm] = useState('');
    const [roleFilter, setRoleFilter] = useState('All');

    const filteredUsers = users.filter((user) => {
        console.log("Filtering users...");
        let matchSearchTerm = user.name.toLowerCase().includes(searchTerm.toLowerCase());
        console.log("matchSearchTerm", matchSearchTerm);

        let matchesRole = roleFilter === 'All' || user.role === roleFilter;
        console.log("matchesRole", matchesRole);

        console.log("matchSearchTerm && matchesRole :", matchSearchTerm && matchesRole);
        return matchSearchTerm && matchesRole;
    });

    return (
        <>
            <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)}>
                <option value="All">All</option>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
            </select>

            <ul>
                {filteredUsers.map((user) => (
                    <li key={user.id}>{user.name} - {user.role}</li>
                ))}
            </ul>
        </>
    );
}

export default Userlist;
