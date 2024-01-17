import { getPosts, addPost, updatePost, deletePost } from '../models/postsModel.js'

const getAllPosts = async (req, res) => {
  try {
    const posts = await getPosts()
    res.status(200).json(posts)
  } catch (error) {
    const { code } = error
    if (code == "23502") {
      res.status(400)
        .send("Se ha violado la restricción NOT NULL en uno de los campos de la tabla")
    } else if (code == "22P02") {
      res.status(400)
        .send("Bad Request: el servidor no puede procesar la solicitud debido a un error del cliente")
      } else {
      res.status(500).send(error)
    }
  }
}

const addPosts = async (req, res) => {
  try {
      const { titulo, url: imgSrc, descripcion } = req.body
      const newPost = await addPost(titulo, imgSrc, descripcion)
      res.status(201).json(newPost)
  } catch (error) {
    const { code } = error
    if (code == "23502") {
      res.status(400)
        .send("Se ha violado la restricción NOT NULL en uno de los campos de la tabla")
    } else if (code == "22P02") {
      res.status(400)
        .send("Bad Request: el servidor no puede procesar la solicitud debido a un error del cliente")
      } else {
      res.status(500).send(error)
    }
  }
}

const updatePosts = async (req, res) => {
  try {
    const { id } = req.params
    const { likes } = req.query
    await updatePost(likes, id)
    res.status(201).send("Fotografía con nuevo like")
  } catch (error) {
    const { code } = error
    if (code == "23502") {
      res.status(400)
        .send("Se ha violado la restricción NOT NULL en uno de los campos de la tabla")
    } else if (code == "22P02") {
      res.status(400)
        .send("Bad Request: el servidor no puede procesar la solicitud debido a un error del cliente")
      } else {
      res.status(500).send(error)
    }
  }
}

const deletePosts = async (req, res) => {
  try {
    const { id } = req.params
    await deletePost(id)
    res.status(201).send("Fotografía eliminada con éxito")
 } catch (error) {
    const { code } = error
    if (code == "23502") {
      res.status(400)
        .send("Se ha violado la restricción NOT NULL en uno de los campos de la tabla")
    } else if (code == "22P02") {
      res.status(400)
        .send("Bad Request: el servidor no puede procesar la solicitud debido a un error del cliente")
      } else {
      res.status(500).send(error)
    }
  }
}

export { getAllPosts, addPosts, updatePosts, deletePosts }
