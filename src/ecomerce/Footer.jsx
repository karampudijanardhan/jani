import React from 'react'

export const Footer = () => {
  return (
    <footer className="footer">
         <div className="footer-details-cont">
            <div className="social-logos-cont">
                <p>Design outstanding interfaces with
                    advanced Figma features in a matter of minites.
                </p>
                <i class='bx bxl-facebook-circle'></i>
                <i class='bx bxl-google'></i>
                <i class='bx bxl-apple'></i>
                <i class='bx bxl-instagram'></i>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:'20px',flexWrap:'wrap'}}>
                <div style={{display:'flex',gap:'50px',flexWrap:'wrap'}}>
                    <div>
                        <h2>START A BUSINESS</h2>
                        <ul>
                            <li>Features</li>
                            <li>Solutions</li>
                            <li>Integration</li>
                            <li>Enterprise</li>
                            <li>Prizes</li>
                        </ul>
                    </div>
                    <div>
                        <h2>GOVERNMENT REGISTRATION</h2>
                        <ol>
                            <li>Partners</li>
                            <li>Community</li>
                            <li>Developers</li>
                            <li>App</li>
                            <li>Blog</li>
                        </ol>
                    </div>
                </div>
                <div style={{display:'flex',gap:'50px',flexWrap:'wrap'}}>
                    <div>
                        <h2>COMPLIANCE & TAX</h2>
                        <ul>
                        <li><a href="">Channels</a></li>
                        <li><a href="">Scale</a></li>
                        <li><a href="">Watch the Demo</a></li>
                        <li><a href="">Our Competition</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2>BIS & CDSCO</h2>
                        <ol>
                            <li><a href="">About Us</a></li>
                            <li><a href="">News</a></li>
                            <li><a href="">Leadership</a></li>
                            <li><a href="">Media Kit</a></li>
                        </ol>
                    </div>
                </div>
            </div>
         </div>
         <div className="copyright-cont">
            <i class='bx bx-down-arrow-alt'></i>
            <p>@2025 Amazon.All rights Reserved</p>
         </div>
        </footer>
  )
}
