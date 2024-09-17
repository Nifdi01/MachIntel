const client = require('../config/db.js');


const createUser = async (user) => {
    const { company, name, surname, email, role } = user;
    const query = `
        INSERT INTO "User" (company, name, surname, email, role)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *;
    `;
    const values = [company, name, surname, email, role];

    try {
        const res = await client.query(query, values);
        return res.rows[0];
    } catch (err) {
        console.error('Error creating User: ', err);
        throw err;
    }
};


const getAllUsers = async () => {
    const query = `
        SELECT u.id, u.name, u.surname, u.email, r.role AS role, c.name AS company
        FROM "User" u
        JOIN "role" r ON u.role = r.id
        JOIN "Company" c ON u.company = c.id;
    `;

    try {
        const res = await client.query(query);
        return res.rows;
    } catch (err) {
        console.error("Failed to fetch Users: ", err);
        throw err;
    }
}


const getUserById = async (id) => {
    const query = `
        SELECT u.id, u.name, u.surname, u.email, r.role AS role, c.name AS company
        FROM "User" u
        JOIN "role" r ON u.role = r.id
        JOIN "Company" c ON u.company = c.id
        WHERE u.id = $1;
    `
    const values = [id];

    try {
        const res = await client.query(query, values);
        return res.rows[0];
    } catch (err) {
        console.error("Error Fetching User: ", err);
        throw err;
    }
};


const updateUser = async (id, updatedFields) => {
    const {name, surname, email, role} = updatedFields;
    const query = `
        UPDATE "USER"
        SET name=$1, surname=$2, email=$3, role=$4
        WHERE id=$5;
    `;
    const values = [name, surname, email, role, id];

    try {
        const res = await client.query(query, values);
        return res.rows[0];
    } catch (err) {
        console.error("Failed to update User");
        throw err;
    }
};


const deleteUser = async (id) => {
    const query = `
        DELETE FROM "User"
        WHERE id = $1
        RETURNING *;
    `
    const values = [id];
    try {
        const res = await client.query(query, id);
        return res.rows[0];
    } catch (err) {
        console.error("Error deleting user: ", err);
        throw err;
    }
};


module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
}