import logo from "../assets/Asset4@3x.png"

export default function  Footer(){
    return(
    <footer>
        <div>
            <img src={logo} alt="" height="20"/>
        </div>
        <div> 
            <small>&copy; Patricia Lorena Design and Development. All rights reserved 2023.  
            {/* <a href="#"> Privacy </a>
            <a href="#"> Help </a>
            <a href="#"> Terms </a> */}
        </small>
        </div>
    </footer>
    ) 
}