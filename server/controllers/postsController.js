import { getPosts, addPost, updatePost, deletePost } from '../models/postsModel.js'

const getAllPosts = async (req, res) => {
  try {
    const posts = await getPosts()
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" })
    console.error("Error al procesar la solicitud:", error)
  }
}

const addPosts = async (req, res) => {
  try {
      const { titulo, url: imgSrc, descripcion } = req.body
      const newPost = await addPost(titulo, imgSrc, descripcion)
      res.status(201).json(newPost)
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" })
    console.error("Error al procesar la solicitud:", error)
  }
}

const updatePosts = async (req, res) => {
  try {
    const { id } = req.params
    const { likes } = req.query
    await updatePost(likes, id)
    res.status(201).send("Fotografía con nuevo like")
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" })
    console.error("Error al procesar la solicitud:", error)
  }
}

const deletePosts = async (req, res) => {
  try {
    const { id } = req.params
    await deletePost(id)
    res.status(201).send("Fotografía eliminada con éxito")
  } catch (error) {
    res.status(500).json({ error: "Error al procesar la solicitud" })
    console.error("Error al procesar la solicitud:", error)
  }
}

export { getAllPosts, addPosts, updatePosts, deletePosts }