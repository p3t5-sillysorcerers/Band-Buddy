import React from 'react';
import "./style.css"


const Footer = () => (


    <div class="footer">
        <div class="container footermargin">
            <div class="row">
                <div class="col-lg-5 col-xs-12 about-company">
                    {/* <h2>Band Buddy</h2> */}
                    <img src="https://i.imgur.com/Psb5bVc.png" id="footerimage"></img>
                    <p class="footer-maintext pr-5 text-white-50">Get connected with your musicians in your area!</p>
                    <p><a href="#"><i class="fa fa-facebook-square mr-1"></i></a><a href="#"><i class="fa fa-linkedin-square"></i></a></p>
                </div>
                <div class="col-lg-3 col-xs-12">
                    <h4 class="mt-lg-0 mt-sm-3 links">Links</h4>
                    <ul class="m-0 p-0">
                        <li class="footer-links"><a href="/about">About</a></li>
                        <li class="footer-links"><a href="/profile">Your profile</a></li>
                        <li class="footer-links"><a href="/activeusers">Search</a></li>
                        <li class="footer-links"><a href="/contact">Contact Us</a></li>
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