import axios from "axios"
import { useEffect, useState } from "react"
import Form from "./components/Form"
import Post from "./components/Post"

const urlBaseServer = "http://localhost:3000"

function App() {
  const [titulo, setTitulo] = useState("")
  const [imgSrc, setImgSRC] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [posts, setPosts] = useState([])
  const [message, setMessage] = useState("")

  const getPosts = async () => {
    const { data: posts } = await axios.get(urlBaseServer + "/posts");
    setPosts([...posts]);
    };
    

  const agregarPost = async () => {
    if (titulo && imgSrc && descripcion) {
      const post = { titulo, url: imgSrc, descripcion }
      await axios.post(urlBaseServer + `/posts`, post)
      setMessage("Post agregado correctamente")
      getPosts()
    }
    else {
      setMessage("Todos los campos son requeridos")
    }
  }

  const like = async (id) => {
    await axios.put(urlBaseServer + `/posts/like/${id}`)
    getPosts()
  }

  const eliminarPost = async (id) => {
    await axios.delete(urlBaseServer + `/posts/${id}`)
    getPosts()
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div className="App">
      <div className="row m-auto px-5">
        <div className="col-12 col-sm-4 mb-3">
          <img src="./src/assets/img/logo.png" className="mb-3" />
          <Form
            setTitulo={setTitulo}
            setImgSRC={setImgSRC}
            setDescripcion={setDescripcion}
            agregarPost={agregarPost}
            setMessage={message}
          />
        </div>
        <div className="col-12 col-md-8 row posts align-items-start">
          <div className="text-end text-secondary fs-6 my-1">Ordenado por Likes, mayor a menor</div>
          {posts.map((post, i) => (
            <Post
              key={i}
              post={post}
              like={like}
              eliminarPost={eliminarPost}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
