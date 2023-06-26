import { consultation } from "../api/fetch";
import { useNavigate } from "react-router-dom";

export const useProfileForm = (id) => {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        const updatedUser = {
            username: e.target.name.value,
            userlastname: e.target.surname.value,
            ccaa: e.target.ccaa.value,
            city: e.target.city.value
        };
   
        try {

            const url = `https://h2ohback.onrender.com/api/v1/auth/${id}`;
            const method = "PUT";
            const response = await consultation(url, method, updatedUser);
            console.log(response)
            if (!response.ok) {
                throw new Error("Error al actualizar el usuario");
            }
            navigate('/')

        } catch (error) {
            console.error("Error al actualizar el usuario:", error);
        }
    };

    return {

        handleSubmit,

    }
}
