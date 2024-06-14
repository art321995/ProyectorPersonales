import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    nombre: Yup.string().min(2,"El nombre es muy corto").max(50,"El nombre es muy largo").required("Campo Obligatorio"),
    apellido: Yup.string().min(3,"El nombre es muy corto").max(50,"El nombre es muy largo").required("Campo Obligatorio"),
    email: Yup.string().email("Email invalido").required("Compo Obligatorio"),
    telefono: Yup.number().min(8,"Telefono incorrecto").max(14, "Telefono incorrecto").required("Compo Obligatorio"),
    comentario: Yup.string().min(5,"Mensaje corto").max(1000,"Llegaste al maximo permitido").required("Compo Obligatorio")
})


const Contacto = () => {

  const formik = useFormik({
    initialValues: {
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      comentario: ""
    },
    validationSchema,
    onSubmit: values =>{
      console.log(values)
    }
  })
  return (
    <div className="contacto">
      <h1>Contacto</h1>

      <form onSubmit={formik.handleSubmit} className="formulario">
        <div className="form-group">
          <label htmlFor="nombre">Nombre(s)</label>
          <input type="text" id="nombre" name="nombre" value={formik.values.nombre} onChange={formik.handleChange} />
          <div className="error">{formik.errors.nombre && formik.touched.nombre ? formik.errors.nombre: "" }</div>
        </div>
        <div className="form-group">
          <label htmlFor="apellido">Apellidos</label>
          <input type="text" id="apellido" name="apellido" value={formik.values.apellido} onChange={formik.handleChange} />
          <div className="error">{formik.errors.apellido && formik.touched.apellido ? formik.errors.apellido: "" }</div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formik.values.email} onChange={formik.handleChange} />
          <div className="error">{formik.errors.email && formik.touched.email ? formik.errors.email: "" }</div>
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Telefono</label>
          <input type="text" id="telefono" name="telefono" value={formik.values.telefono} onChange={formik.handleChange} />
          <div className="error">{formik.errors.telefono && formik.touched.telefono ? formik.errors.telefono: "" }</div>
        </div>
        <div className="form-group">
          <label htmlFor="comentario">Comentarios</label>
          <input type="textarea" id="comentario" name="comentario" value={formik.values.comentario} onChange={formik.handleChange} />
          <div className="error">{formik.errors.comentario && formik.touched.comentario ? formik.errors.comentario: "" }</div>
        </div>

        <button type="submit" className="btnEnviarF" value="Enviar" >Enviar</button>

      </form>
    </div>
  )
}

export default Contacto;