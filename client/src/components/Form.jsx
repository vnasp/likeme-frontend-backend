function Form({ setTitulo, setImgSRC, setDescripcion, setMessage, agregarPost }) {
  return (
    <>
    <div className="form rounded">
      <div className="mb-2">
        <h6>Agrega una Fotografía</h6>
        <label>Título</label>
        <input
          onChange={(event) => setTitulo(event.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-2">
        <label>URL de la Fotografía</label>
        <input
          onChange={(event) => setImgSRC(event.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label>Descripción</label> <br />
        <textarea
          onChange={(event) => setDescripcion(event.target.value)}
          className="form-control"
        ></textarea>
      </div>
      <div className="d-flex mb-3">
        <button onClick={agregarPost} className="btn border-0 m-auto">
          Agregar
        </button>
      </div>
      <div>{setMessage}</div>
    </div>
    
    </>
  );
}

export default Form
