import express from "express"

import { createUser, getUsers, getUser, deleteUser, updateUser } from "../controllers/users.js"

const router = express.Router()

//all routes in here are starting with /users
router.get('/', getUsers)

router.post('/', createUser)

//users/177013 => req.params {id: 177013}
router.get('/:id', getUser)

router.delete('/:id', deleteUser)

router.patch('/:id', updateUser)

export default router