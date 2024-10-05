import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id, image, name, price}) => {

    const {currency}=useContext(ShopContext)
    const calc=(price*0.80).toFixed();

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium whitespace-pre'>{currency}{calc}{"   "}<span className='text-xs text-slate-700'><del>{currency}{price}</del></span></p>
    </Link>
  )
}

export default ProductItem