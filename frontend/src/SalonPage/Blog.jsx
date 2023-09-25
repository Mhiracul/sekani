import React, { useEffect, useState } from "react";
import { blog } from "../data/blog";
import { femaleHairstyle } from "../data/femaledata";

function Blog() {
  const [counter, setCounter] = useState(0);

  const popular = femaleHairstyle.filter(
    (hairstyle) => hairstyle.popular === true
  );

  useEffect(() => {
    setTimeout(() => {
      setCounter((oldCount) => {
        let newCount = oldCount + 1;
        if (newCount > popular.length - 1) {
          newCount = 0;
        }
        return newCount;
      });
    }, 6000);
  }, [counter]);

  const { image } = popular[counter];
  return (
    <section className="blog-section w-full h-auto mx-auto py-10 bg-gradient-to-b from-[#FC7BE9] to-transparent">
      <div className="blog-container grid grid-cols-2 items-start justify-center max-w-[1240px] gap-4 m-auto px-10">
        <div className="recent text-white" data-aos="fade-right">
          <h3 className="text-2xl mt-2">Recent Blog</h3>
          {blog.map(({ image, title, id, text }) => {
            return (
              <div key={id} className="recent-content">
                <div className="recent-image h-[100px] w-[100px] border-[4px] border-black aspect-auto">
                  <img src={image} alt="image" className="w-full h-full" />
                </div>
                <div className="recent-info">
                  <h4 className="text-xl mt-2">{title}</h4>
                  <p className="text-sm  mb-2">{text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="popular" data-aos="fade-left">
          <h3 className="text-2xl mb-2 text-white">Popular Hairstyles</h3>
          <div className="popular-container w-[100%] h-[500px]">
            <img src={image} alt="" className="w-[100%] h-[100%] " />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
