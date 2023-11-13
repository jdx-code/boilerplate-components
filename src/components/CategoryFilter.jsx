import React from "react";

const CategoryFilter = ({ categories, onCategoryChange }) => {
  return (
    <div className="bg-white w-full flex justify-center">
      {categories.map((category) => (
        <button 
            key={category} 
            onClick={() => onCategoryChange(category)}
            className='px-4 py-2'
        > 
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
