import { Button } from "@mui/material";

function Form({ setTitle, setImgSRC, setAbout, setMessage, addPost }) {
  return (
    <>
    <div className="form rounded">
      <div className="mb-2">
        <h6>Agrega una Fotografía</h6>
        <label>Título</label>
        <input
          onChange={(event) => setTitle(event.target.value)}
          className="form-control"
          required
        />
      </div>
      <div className="mb-2">
        <label>URL de la Fotografía</label>
        <input type="url" pattern="https?://.+" title="Include http:// or https://" required
          onChange={(event) => setImgSRC(event.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label>Descripción</label> <br />
        <textarea
          onChange={(event) => setAbout(event.target.value)}
          className="form-control"
          required
        ></textarea>
      </div>
      <div className="d-flex mb-3">
      <Button variant="contained" onClick={addPost}>
          Agregar
        </Button>
      </div>
      <div>{setMessage}</div>
    </div>
    
    </>
  );
}

export default Form
