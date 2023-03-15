import ProductCard from "./ProductCard";
import bose from "../product_images/bose/bose_4.jpg";
import dot from "../product_images/dot/dot_4.jpg";
import gta from "../product_images/gta/gta_1.jpg";
import helmet from "../product_images/helmet/helmet_1.jpg";
import laptop from "../product_images/laptop/lenovo_1.jpg";
import tv from "../product_images/tv/tv_1.jpg";
export const PRODUCTS = [
    {   id:1,
        productName : 'Bose Headphones',
        productImageURL: bose,
        price: 25999,
        description:'Bose Quietcomfort 45 Bluetooth Wireless Over Ear Headphones with Mic Noise Cancelling - Triple Black'
    },
    {   id:2,
        productName : 'Amazon dot',
        productImageURL: dot,
        price: 4999,
        description:'Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Black)'
    },
    {   id:3,
        productName : 'Grand Theft Auto',
        productImageURL: gta,
        price: 999,
        description:'Grand Theft Auto V - Premium Edition (PS4) Brand: ROCKSTAR GAMES Platform : PlayStation 4|Rated: Ages 18 and Over '
    },
    {   id:4,
        productName : 'Helmet',
        productImageURL: helmet,
        price: 1899,
        description:'Steelbird SBH-17 Terminator ISI Certified Full Face Graphic Helmet in Matt Finish'
    },
    {   id:5,
        productName : 'Lenovo Laptop',
        productImageURL: laptop,
        price: 78999,
        description:'Lenovo Legion 5 Intel Core i5 10th Gen - 10500H 15.6" (39.62cm) FHD IPS Gaming Laptop (8GB/512GB SSD/4GB NVIDIA RTX 3050/120Hz/Windows 11/Backlit/3months Game Pass/Phantom Black/2.3Kg), 82NL00APIN'
    }, 
    {   id:6,
        productName : 'TV',
        productImageURL: tv,
        price: 52999,
        description:'MI Xiaomi 138.8 cm (55 inches) 4K Ultra HD Smart Android OLED Vision TV O55M7-Z2IN (Black)'
    }
];
export default function Products(){
    return(
        <>
        <h3 className="shop-title">My Shop</h3>
        <div className="products">
           {PRODUCTS.map((product)=>{
            return(
                <ProductCard  key={product.id} product={product}/>
            )
           })}
        </div>
        </>
        
    )
}