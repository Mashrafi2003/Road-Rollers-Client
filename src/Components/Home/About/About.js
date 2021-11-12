import { Box } from '@mui/system';
import React from 'react';
import './About.css'

const Aboutus = () => {
    return (
        <Box sx={{marginTop:'40px'}}>
            <div className='about mt-5 text-warning mb-4'>
            
            <section>
            <div class = "image">
               <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3ljbGluZ3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
            </div>

            <div class = "content">
                <h2>About Us</h2>
                
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis aspernatur voluptas inventore ab voluptates nostrum minus illo laborum harum laudantium earum ut, temporibus fugiat sequi explicabo facilis unde quos corporis!</p>
                <ul class = "links">
                    <li><a href = "#">We will Provide You the Best experience of the Journey</a>
                    <p>Hello</p>
                    </li>
                    <div class = "vertical-line"></div>
                    <li><a href = "#">We will provide proper accomodation and Call Service</a></li>
                    <div class = "vertical-line"></div>
                    <li><a href = "#"><button className='btn btn-outline-danger'>Contact Now</button></a></li>
                </ul>
                <ul class = "icons">
                    <li>
                        <i class = "fa fa-twitter"></i>
                    </li>
                    <li>
                        <i class = "fa fa-facebook"></i>
                    </li>
                    <li>
                        <i class = "fa fa-github"></i>
                    </li>
                    <li>
                        <i class = "fa fa-pinterest"></i>
                    </li>
                </ul>
            </div>
        </section>
        </div>
        </Box>
    );
};

export default Aboutus;