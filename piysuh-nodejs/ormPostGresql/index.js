require('dotenv/config');
const db = require('./db');
const { userTable } = require('./drizzle/schema');
async function getAllUsers() {
    const users = await db.select().from(userTable);
    console.log(`Users in db`, users);
    return users;
}
async function createUser({ id, name, email }) {
    await db.insert(userTable).values({
        id,
        name,
        email
    })
}
// createUser({ id: 1, name: 'asif', email: 'sass@gmail.com' });
// createUser({ id: 2, name: 'haniya', email: '123@gmail.com' });
// createUser({ id: 3, name: 'adam', email: '9000@live.com' });
getAllUsers();