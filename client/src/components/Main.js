
import { Routes, Route, } from "react-router-dom"

import "../assets/css/style.css"
// import "../assets/css/test.css"


import Home from "./Home";
// import About from "./IndividualRegister";
import IndividualRegister from "./IndividualRegister";
import SignIn from "./SignIn";
import Blog from "./Blog";
import BlogSingle from "./BlogSingle";
import Career from "./Career";
import CareerSingle from "./CareerSingle";
import InstitutionRegister from "./InstitutionRegister";
import ForgetPass from "./ForgetPass";
import Team from "./Team";
import NotFound from "./NotFound";
// import Testing from "./Header";






const Main = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/individualregister" element={<IndividualRegister/>}></Route>
                <Route path="/login" element={<SignIn/>}></Route>
                <Route path="/forgetpassword" element={<ForgetPass/>}></Route>
                <Route path="/blog" element={<Blog/>}></Route>
                <Route path="/blogsingle" element={<BlogSingle/>}></Route>
                <Route path="/careers" element={<Career/>}></Route>
                <Route path="/career-single" element={<CareerSingle/>}></Route>
                <Route path="/institutionregister" element={<InstitutionRegister/>}></Route>
                <Route path="/team" element={<Team/>}></Route>
                <Route path="/error" element={<NotFound/>}></Route>
                
            </Routes>

           

        </>
    );
}

export default Main;