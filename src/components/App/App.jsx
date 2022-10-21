import React from "react";
import "../App/App.scss"
import NotFoundPage from "../../Pages/NotFoundPage/NotFoundPage";
import { Routes, Route } from "react-router-dom";
import MainPage from "../../Pages/MainPage/MainPage";
import SkillsPage from "../../Pages/SkillsPage/SkillsPage";
import Layout from "../../Pages/Layout/Layout";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="skills" element={<SkillsPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </>
    )
}
export default App;