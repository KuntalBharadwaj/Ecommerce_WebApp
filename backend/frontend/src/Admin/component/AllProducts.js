import React, { useState } from "react";

export default function AllProducts() {
  const ProductArray = [
    {
      id: 121,
      image:
        "https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70",
      brand: "Majestic Man",
      title: "Men Printed Pure Cotton Straight Kurta",
      color: "Green",
      selling_price: 499,
      price: 1499,
      disscount: "66% off",
      size: [
        {
          name: "S",
          quantity: 20,
        },
        {
          name: "M",
          quantity: 30,
        },
        {
          name: "L",
          quantity: 50,
        },
      ],
      quantity: 100,
      topLavelCategory: "Men",
      secondLavelCategory: "Clothing",
      thirdLavelCategory: "mens_kurta",
      description:
        "A traditional garment embodying elegance and grace. Crafted from fine fabrics, it features intricate embroidery and a relaxed fit, providing comfort and style.",
    },
    {
      id: 121,
      image:
        "https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70",
      brand: "Majestic Man",
      title: "Men Printed Pure Cotton Straight Kurta",
      color: "Green",
      selling_price: 499,
      price: 1499,
      disscount: "66% off",
      size: [
        {
          name: "S",
          quantity: 20,
        },
        {
          name: "M",
          quantity: 30,
        },
        {
          name: "L",
          quantity: 50,
        },
      ],
      quantity: 100,
      topLavelCategory: "Men",
      secondLavelCategory: "Clothing",
      thirdLavelCategory: "mens_kurta",
      description:
        "A traditional garment embodying elegance and grace. Crafted from fine fabrics, it features intricate embroidery and a relaxed fit, providing comfort and style.",
    },
    {
      id: 121,
      image:
        "https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70",
      brand: "Majestic Man",
      title: "Men Printed Pure Cotton Straight Kurta",
      color: "Green",
      selling_price: 499,
      price: 1499,
      disscount: "66% off",
      size: [
        {
          name: "S",
          quantity: 20,
        },
        {
          name: "M",
          quantity: 30,
        },
        {
          name: "L",
          quantity: 50,
        },
      ],
      quantity: 100,
      topLavelCategory: "Men",
      secondLavelCategory: "Clothing",
      thirdLavelCategory: "mens_kurta",
      description:
        "A traditional garment embodying elegance and grace. Crafted from fine fabrics, it features intricate embroidery and a relaxed fit, providing comfort and style.",
    },
    {
      id: 121,
      image:
        "https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70",
      brand: "Majestic Man",
      title: "Men Printed Pure Cotton Straight Kurta",
      color: "Green",
      selling_price: 499,
      price: 1499,
      disscount: "66% off",
      size: [
        {
          name: "S",
          quantity: 20,
        },
        {
          name: "M",
          quantity: 30,
        },
        {
          name: "L",
          quantity: 50,
        },
      ],
      quantity: 100,
      topLavelCategory: "Men",
      secondLavelCategory: "Clothing",
      thirdLavelCategory: "mens_kurta",
      description:
        "A traditional garment embodying elegance and grace. Crafted from fine fabrics, it features intricate embroidery and a relaxed fit, providing comfort and style.",
    },
  ];

  const [searchBarProduct, setsearchBarProduct] = useState("")

  const handleInputTag = (e)=>{
    e.preventDefault()
    console.log(searchBarProduct)
  }

  return (
    <div>
      <div className="">
        <form onSubmit={(e)=>{handleInputTag(e)}}>
        <input placeholder="Search the Product You want to update" value={searchBarProduct} onChange={(e)=>{setsearchBarProduct(e.target.value)}}></input>
        </form>
      </div>
      <div>
        {ProductArray.map((e,i) => {
          return (
            <div key={i}>
              <ul className="flex">
                <li className="mr-5">{e._id}</li>
                <li className="mr-5">{e.title}</li>
                <li className="mr-5">{e.selling_price}</li>
                {/* <li></li>
                        <li></li>
                        <li></li> */}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
