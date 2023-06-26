import { useState } from "react"

export const useForm = (initialState) => {

    const [form, setForm] = useState(initialState);
    const [enviado, setEnviado] = useState(false)

    const serializeForm = (form) => {

        const formData = new FormData(form)
        const data = {}

        for (let [key, value] of formData) {
            data[key] = value
        }

        return data

    }

    const handleSubmit = (ev) => {

        ev.preventDefault()
        const data = serializeForm(ev.target)

        setForm(data)
        setEnviado(true)
    }

    const handleChange = ({ target }) => {

        const { name, value } = target
        if (form == '') return

        setForm({
            ...form,
            [name]: value
        })
    }

    return {
        form,
        handleChange,
        handleSubmit,
        enviado
    }
}