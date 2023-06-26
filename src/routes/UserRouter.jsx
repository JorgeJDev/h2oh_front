import { Routes, Route, Navigate } from "react-router-dom";
import {
  HomePage,
  AssistantPage,
  UserProfilePage,
  SignupPage,
  MapPage,
} from "../ui/pages";
import {
  QuestionPage,
  FeedbackPage,
  FinalResultPage,
} from "../questions/pages";
import { GraphicPage } from "../graphic/components/pages/GraphicPage";

export const UserRouter = () => {
  const user = localStorage.getItem("id");

  return (
    <Routes>
      
      <Route path="/" element={<HomePage />} />
      <Route path="/welcome" element={<AssistantPage />} />
      <Route path="/*" element={<Navigate to={"/"} />} />
      <Route path="/graphic" element={<GraphicPage />} />
      <Route path="/profile" element={<UserProfilePage />} />
      <Route path="/quiz/:questionNumber" element={<QuestionPage />} />
      <Route path="/result/:number" element={<FeedbackPage />} />
      <Route path="/final" element={<FinalResultPage />} />
      <Route path="/viewmap" element={<MapPage />} />
      <Route path="/signup" element={<SignupPage />} />{" "}
    </Routes>
  );
};