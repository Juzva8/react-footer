import React from 'react'
import './Footer.css'


const Footer = () => (
  <div className="footer-dark">
  <footer>
      <div className="container">
          <div className="row">
              <div className="col-sm-6 col-md-3 item">
                  <h3>Services</h3>
                  <ul> 
                      <li><a href="#">Coding</a></li>
                      <li><a href="#">Trouble shooting</a></li>
                      <li><a href="#">Design</a></li>

                  </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                  <h3>Contact Info</h3>
                  <ul>
                      <li><a href="mailto:boss@gmail.com" target="_blank" rel="noopener noreferrer" >boss@gmail.com</a></li>
                      <li><a href="facetime:12024561111" target="_blank" rel="noopener noreferrer" >(202) 456-1111</a></li>
                      <li><a href="https://goo.gl/maps/SbJjQM47WKTW5LNN7" target="_blank" rel="noopener noreferrer" >1600 Pennsylvania Avenue NW, Washington, DC 20500</a></li>
                  </ul>
              </div>
              <div className="col-md-6 item text">
                  <h3>Company Name</h3>
                  <p>
                  The Boring Company is an American infrastructure and tunnel construction services company founded by Elon Musk. 
                  Its ongoing and proposed projects are designed for intra-city transit systems. TBC has completed two tunnels in Las Vegas for loop travel.
                  </p>
              </div>
              <div className="col item social">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" >  <i className="fab fa-facebook-f "></i></a>
                <a href="mailto:@gmail.com" target="_blank" rel="noopener noreferrer" ><i className="fa fa-envelope " ></i></a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" ><i className="fab fa-instagram "></i></a>
                <a href="https://goo.gl/maps/SbJjQM47WKTW5LNN7" target="_blank" rel="noopener noreferrer" ><i className="fab fa-google "></i></a>
                </div>
          </div>
          <p className="copyright">Company Name LLC © 2022</p>
      </div>
  </footer>
</div>
  );

export default Footer
