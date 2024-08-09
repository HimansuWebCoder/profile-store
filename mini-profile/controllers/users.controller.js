
// delete users
// function deleteUser(req, res, db) {
//     // const { id } = req.body;
//     const { id } = req.params;
//      console.log('ID parameter:', id);
//     db('users')
//         .where({ id })
//         .del()
//         .then(() => res.status(200).send('User deleted successfully')) 
//         .catch(error => res.status(500).json({ error }));
// }

// // get users 
// function getUsers(req, res, db) {
//     db.select('*').from('users')
//         .then(users => {
//             res.status(200).json(users);
//         })
//         .catch(error => {
//             console.error(error);
//             res.status(500).json({ error: 'Internal Server Error' });
//         });
// }

// get users 
function getUsers(req, res, db) {
    res.send(db);
}

function deleteUser(req, res, db) {
    const { id } = req.params;
     console.log('ID parameter:', id);
     console.log(db)
     for (let i = 0; i < db.length; i++) {
        if (db[i].id === Number(id)) {
            db[i] = {};
            return res.send(db[i]);
        }
        console.log(db);
     }
}

module.exports = {
    deleteUser,
    getUsers
};
