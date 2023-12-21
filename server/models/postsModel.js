import pool from "../db/connectionDB.js"

const getPosts = async () => {
  const SQLquery = { text: "SELECT * FROM posts ORDER BY likes DESC;" }
  try {
    const response = await pool.query(SQLquery)
    return response.rows
  } catch (error) {
    console.log(error)
  }
}

const addPost = async (titulo, imgSrc, descripcion, likes=0) => {
  const SQLquery = {
    text: "INSERT INTO posts (titulo, img, descripcion,likes) VALUES ($1, $2, $3,$4) RETURNING *;",
    values: [titulo, imgSrc, descripcion,likes]
  }
  try {
    const response = await pool.query(SQLquery)
    return response.rows
  } catch (error) {
    console.log(error)
  }
}
const updatePost = async (likes,id) => {
  const SQLquery = {
    text: "UPDATE posts SET likes=(likes+1) WHERE id = $1",
    values: [id]
  }
  try {
    const response = await pool.query(SQLquery)
  } catch (error) {
    console.log(error)
  }
}

const deletePost = async (id) => {
  const SQLquery = {
    text: "DELETE FROM posts WHERE id = $1",
    values: [id]
  }
  try {
    const response = await pool.query(SQLquery)
  } catch (error) {
    console.log(error)
  }
}

export { getPosts, addPost, updatePost, deletePost }