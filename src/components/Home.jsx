import {NavLink} from 'react-router-dom'
import bgImage from '../assets/images/falafel-hummus-pita-middle-eastern-arabic-dishes.jpg'
const Button = () =>{

    return(
        <div className='home-button--container'>
            <NavLink className='home-button--Link' to='/Menu'><button className='home-button'>ORDER NOW</button></NavLink>
        </div>
    )
}



export const Home = () =>{

    return(
        <div className="home__container">
            <div className='home-shadow'></div>
            <img src={bgImage} alt="" />
            <p className='home-text--bold'>Food Corner</p>
            <p className='home-text--semi'>PERSIAN FOOD AT A CLICK</p>
            <Button/>
        </div>
    )
}