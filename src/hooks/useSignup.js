import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { consultation } from "../api/fetch";
import { setUser } from "../store/slice/user/userSlice";
import { setUserLocal } from "../helpers/localStorage";
import { useDispatch } from "react-redux";

export const useSignup = () => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const singUp = async (body, provider) => {

    setLoading(true);

    let url = "https://h2ohback.onrender.com/api/v1/auth";
    if (provider) {
      url += `/${provider}`;
    
    } else {
      url += "/login";

    }
    try {

      const request = await consultation(url, 'POST', body)
      console.log(request)
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

  return { loading, error, singUp };
};
