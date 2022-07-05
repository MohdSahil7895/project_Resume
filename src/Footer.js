import React from 'react'


export const Footer = () => { 
    let footerStyle = {
        position:"absolute",
left:"0",
bottom:"0",
right:"0",
    }
    
    return (
        <footer class="container p-3  bg-dark text-white" style={footerStyle}>
            <p className="text-center">
            Copyright &copy; ReactApp.com
            </p>
        </footer>
    )
}
// className="bg-dark text-light py-3" style={footerStyle}