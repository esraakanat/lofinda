import React, { useEffect, useState } from "react";
import Container from "../../../ui/Container";
import { BiCartDownload } from "react-icons/bi";
import Header from "../../../ui/Header";
import ProductCard from "../../Perfumes/components/ProductCard";
import userApiReq from "../../../utils/userApiWithAuth";
import { getCookie } from "../../../utils/cookies";

export default function WishList() {
  const dum = [1, 2, 3, 4, 5, 1, 2, 2, 3];
  const [IDs, setIDs] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleGetWishlist();
  }, []);

  const handleGetWishlist = () => {
    const getWishlister =
      getCookie("wishlist") && JSON.parse(getCookie("wishlist"));

    setIDs(!getWishlister ? [] : getWishlister);
    getWishlist(getWishlister);
  };

  const getWishlist = async (IDs) => {
    setLoading(true);
    console.log(IDs);
    try {
      const response = await userApiReq("/api/user/wishlist", "POST", IDs);
      console.log(response);
      setWishlist(response.message);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wrap mt-[130px]">
      <Header black={true} />
      <Container>
        <div className="header flex flex-wrap gap-5 justify-between items-center mb-10 border-t border-b py-5">
          <h1 className="text-2xl font-bold text-primary">
            Wishlist ({wishlist.length})
          </h1>

          <div className="filter-wrap flex gap-4">
            <button className="flex gap-2 items-center border p-3 rounded-lg hover:bg-primary hover:text-white transition-all">
              <BiCartDownload /> <span>Add all to Cart</span>
            </button>
          </div>
        </div>

        <div className="wrap">
          <div className="grid lg:grid-cols-4 gap-10">
            {wishlist?.map((i, index) => (
              <ProductCard
                _id={i._id}
                img={i.imageUrl}
                name={i.name}
                description={i.description}
                price={i.price}
                key={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
