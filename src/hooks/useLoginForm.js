import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { consultation } from "../api/fetch";
import { setUserLocal } from "../helpers/localStorage";
import { setUser } from "../store/slice/user/userSlice";
import { useDispatch } from "react-redux";
export const useLogin = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async (body, provider) => {

    setLoading(true);

    let url = "https://h2ohback.onrender.com/api/v1/auth";
    if (provider) {
      url += `/${provider}`;
      console.log(url);
    } else {
      url += "/login";
      console.log(url);
    }
    try {

      const request = await consultation(url, 'POST', body)
      const user = request.user
      setUserLocal(user._id)
      dispatch(setUser(user._id))
      navigate('/welcome')
    
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }

    setLoading(false);
   
  };

  return { loading, error, login };
};
