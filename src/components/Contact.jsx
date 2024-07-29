import { CONTACT } from "../constants"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
        <h2 className="my-20 text-center text-4xl">Contacto</h2>
        <div className="text-center tracking-tighter">
            <p className="my-4">{CONTACT.address}</p>
            <p className="my-4">{CONTACT.phone}</p>
            <a href="#" className="border-b">{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact