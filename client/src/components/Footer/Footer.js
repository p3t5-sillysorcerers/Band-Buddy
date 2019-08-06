import React from 'react';
import "./style.css"


const Footer = () => (


    <div class="mt-5 pt-5 pb-5 footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-xs-12 about-company">
                    {/* <h2>Band Buddy</h2> */}
                    <img src="https://i.imgur.com/Psb5bVc.png" class="footerimage"></img>
                    <p class="footer-maintext pr-5 text-white-50">Get connected with your musicians in your area!</p>
                    <p><a href="#"><i class="fa fa-facebook-square mr-1"></i></a><a href="#"><i class="fa fa-linkedin-square"></i></a></p>
                </div>
                <div class="col-lg-3 col-xs-12 links">
                    <h4 class="mt-lg-0 mt-sm-3">Links</h4>
                    <ul class="m-0 p-0">
                        <li>- <a href="#">About</a></li>
                        <li>- <a href="#">Create Account/Log In</a></li>
                        <li>- <a href="#">Your profile</a></li>
                        <li>- <a href="#">Search</a></li>
                        <li>- <a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div class="col-lg-4 col-xs-12 location">
                    <h4 class="mt-lg-0 mt-sm-4 pl-4">Location</h4>
                    <p>339 E Chicago Ave, Chicago IL, 60640</p>
                    <p class="mb-0"><i class="fa fa-phone mr-3"></i>(773) 754-3010</p>
                    <p><i class="fa fa-envelope-o mr-3"></i>info@musiciansapp.com</p>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col copyright">
                    <p class=""><small class="text-white-50">© 2019. All Rights Reserved.</small></p>
                </div>
            </div>
        </div>
    </div>

);

export default Footer;