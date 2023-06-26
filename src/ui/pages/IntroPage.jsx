import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import newlogo from "../../assets/newlogo.png";
export const IntroPage = () => {
  const navigate = useNavigate();
  const start = () => {
    navigate("/login");
  };
  useEffect(() => {
    setTimeout(start, 1000);
  }, []);

  return (
    <>
      <div className="bg-backgroundPrimary min-h-screen">
        <article className="flex flex-col items-center justify-center min-h-screen">
          <div className="flex justify-center transform rotate-10">
            <img src={newlogo} alt="gotaInformadora" srcSet="" />
          </div>
        </article>
      </div>
    </>
  );
};
