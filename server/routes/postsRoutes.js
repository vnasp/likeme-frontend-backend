import express from 'express'
import {getAllPosts, addPosts, updatePosts, deletePosts} from '../controllers/postsController.js'

const router = express.Router()

router.get('/posts', getAllPosts)
router.post('/posts', addPosts)
router.put('/posts/like/:id', updatePosts)
router.delete('/posts/:id', deletePosts)

export default router