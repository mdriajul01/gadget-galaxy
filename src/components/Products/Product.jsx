// @flow strict

import * as React from "react";
import { useLoaderData } from "react-router";
import products from "../../../public/jsonFile/Product.json"
function Product() {
  const data = useLoaderData(null)
  console.log(data);

  return (
    <section className="">
          <h1 className="text-center font-bold text-4xl my-10 mt-16 mb-10">Abaileable Product</h1>
          <div className="flex">
              <div className="flex flex-wrap gap-10 justify-center">
                  {
                      products.map((e, idx) =>
                          <div key={idx} className="border-2 rounded-xl p-3 w-fit">
                              <img className="w-48 h-44" src={e?.photo} alt="" />
                              <h1>{e?.name}</h1>
                              <p>{e?.price}</p>
                              <button className="btn " > Add Cart</button>
                          </div>
                      )
                  }
                  
              </div>
          </div>
    </section>
  );
}

export default Product;
