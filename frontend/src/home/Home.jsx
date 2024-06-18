import React from "react";
import Logo from "../assets/img_header_logo.png"
import "./Home.css"
import { Link } from "react-router-dom";
function Home () {


    return (
        <>
  <header>
    <div className="icon">
        <img src={Logo}/>
    </div>
    <div className="mainoptions">
        <ul>
            <Link to="/fur/home">
            <li>Home</li></Link>
            <Link to= "/fur/test">
            <li>Shop
                <ul className="sublist">
                    <li>title 1</li>
                    <li>title 2</li>
                    <li>title 3</li>
                    <li>title 4</li>
                </ul>
            </li></Link>
            <li>Offers</li>
            <li>Contact Us</li>
            <li>Blog</li>
        </ul>
    </div>
    <div className="searchbar">
        <div className="search">
            <img src="https://dhws-production.s3.ap-south-1.amazonaws.com/60d476bc92d3a3001575d2ee/60d47a1992d5640016253693/663209c306dafd001b8a34d5/appSource/images/img_contrast.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPSYFWYAO2%2F20240616%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240616T033101Z&X-Amz-Expires=25200&X-Amz-Signature=5e7fc4d47f92f866cff2a8ac99c51331ae1e07d324c7b3478f8f8711a890fafd&X-Amz-SignedHeaders=host" alt="" />
            <input type="text" placeholder="Search for poduct" />
        </div>
        <a href=""> <img src="https://dhws-production.s3.ap-south-1.amazonaws.com/60d476bc92d3a3001575d2ee/60d47a1992d5640016253693/663209c306dafd001b8a34d5/appSource/images/img_thumbs_up.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPSYFWYAO2%2F20240616%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240616T033101Z&X-Amz-Expires=25200&X-Amz-Signature=f059de7f3988b17242d1b272b8cecdc999cbafcf1cbae35e06b108c4e60d9044&X-Amz-SignedHeaders=host" /></a>
        <a href=""><img src="https://dhws-production.s3.ap-south-1.amazonaws.com/60d476bc92d3a3001575d2ee/60d47a1992d5640016253693/663209c306dafd001b8a34d5/appSource/images/img_lock.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPSYFWYAO2%2F20240616%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240616T033101Z&X-Amz-Expires=25200&X-Amz-Signature=df9feb7e4589748fbd79e69d2e4a9031594fd80de0a6fe5a44a90577dfd19b63&X-Amz-SignedHeaders=host" alt="" /></a>
    </div>
  </header>
  <div className="path"></div>
  <div className="imagescroller"> 
    <img src="" alt="" />
  </div>
  </>
    )
}

export default Home;