import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="p-8 pb-8 mb-8  bg-white rounded-lg shadow-md">
      <h3 className="text-xl mb-2 font-semibold pb-1">Categories</h3>
      {categories.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span
            className={`cursor-pointer block ${
              index === categories.length - 1
            } mb-2  text-light text-md`}
          >
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
