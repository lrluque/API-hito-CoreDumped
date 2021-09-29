import express from 'express';
const router = express.Router();
const users = [
    {
        firstName: "Lucas",
        lastName: "Luque",
        age: 18
    }
]
router.get('/', (req, res) => {
    res.send(users);
});
router.post('/', ((req, res) => {
    const user = req.body; //el req.body es lo que escribimos desde el post en postman
    users.push(user);
    res.send    (`User with username ${user.firstName} added to the database!`);
})); //Para crear usuarios
export default router;