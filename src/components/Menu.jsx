
import img1 from '../assets/images/top-view-lula-kebab-with-rice-tomato-green-pepper-grilled-with-slice-lemon-sauce.jpg'
import img2 from '../assets/images/Jowhareh_galleries_poster_70716ca0-ca24-4a1d-9de6-9698c5042f5f.jpeg'
import img3 from '../assets/images/nody-ادویه-مخصوص-جوجه-کباب-زعفرانی-1626483154.jpg'
import img4 from '../assets/images/poster_d5edec93-ad1e-4618-b5cc-1a030a260f10.jpeg'
import img5 from '../assets/images/tazeen-khoresht-gheimeh-4.jpg'
import img6 from '../assets/images/shevid-polo-mahiche.jpg'
import './menu.css'
import { Link } from 'react-router-dom'



const Card = ({image,nameFood,price}) =>{

    return(
        <div className='card-container'>
            <div className='card-img-container'>
                <img src={image} alt={nameFood} />
            </div>
            <p className='card-title'>{nameFood}</p>
            <p className='card-price'>{`${price} ریال`}</p>
        </div>
    )
}

const Menu = () => {
    const spes = [
        {image:img1 , nameFood:'چلو کباب',price:'1350000',id:1},
        {image:img2 , nameFood:'زرشک پلو با مرغ',price:'1100000',id:2},
        {image:img3 , nameFood:'چلو جوجه زعفرانی',price:'1500000',id:3},
        {image:img4 , nameFood:'قرمه سبزی',price:'1400000',id:4},
        {image:img5 , nameFood:'قیمه با برنج',price:'1400000',id:5},
        {image:img6 , nameFood:'شوید پلو با ماهیچه',price:'3500000',id:6}
]

    return(
        <div className="menu__container">
            <h1>Our Menu</h1>
            <div className='menu-items__container'>
                {
                    spes.map((item) => {
                        return(
                            <Link className='link' to={`/About/${item.id}`}><Card key={item.id} image={item.image} nameFood={item.nameFood} price={item.price}/></Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Menu;