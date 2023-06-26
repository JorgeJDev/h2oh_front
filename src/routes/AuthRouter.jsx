import { Routes, Route, Navigate } from "react-router-dom";
import {
  IntroPage,
  LoginPage,
  SignupPage,
} from "../ui/pages";
import { TermsPage } from "../terms/pages/TermsPage";

export const AuthRouter = () => {
  const user = localStorage.getItem("id");
  console.log(user);
  return (
    <Routes>
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/" element={<IntroPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};