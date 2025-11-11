import { Link } from "react-router-dom";
import HeartIcon from "./HeartIcon";

const Product = ({ product }) => {
  return (
    <div className="w-[30rem] ml-[2rem] p-3 relative group">
      {/* Wrap the entire product card in the Link */}
      <Link to={`/product/${product._id}`} className="block relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-[30rem] rounded transition-transform duration-200 group-hover:scale-105"
        />

        {/* Heart icon should be outside the Link or have pointerEvents disabled */}
        <div className="absolute top-2 right-2 z-10">
          <HeartIcon product={product} />
        </div>

        <div className="p-4">
          <h2 className="flex justify-between items-center">
            <div className="text-lg font-medium">{product.name}</div>
            <span className="bg-pink-100 text-pink-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300">
              $ {product.price}
            </span>
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default Product;
