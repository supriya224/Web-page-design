import React from "react";

const Space = () => {
  return (
    <section className="w-full bg-orange-100 ">
      <div className="grid grid-cols-2 py-8 container mx-auto">
        <div>
          <h4 className="text-8xl">create your space.</h4>
          <p className="mt-48"> Tell your story way- with different ways to write style, and brand your work </p>
          <button className="bg-white">Start Writing</button>
        </div>
        <div>
          <img
            src="https://dianapps.com/blog/wp-content/uploads/2023/04/Untitled-design-2023-04-06T182220.784.png"
            alt=""
            className="w-full"
          />
        </div>
      </div>
      <div className=" grid grid-cols-2 border border-black border-3">
        <div className=" border-r border-black">
          <h3>Start a blog</h3>
          <p>
            Create a blog for free to have a personalized home for your writing.
            brand your space and share your writing with readers on any device
          </p>
        </div>
        <div>
          <h3>Start a Publication</h3>
          <p>
            Collaborate with others or publish under a brand name. Use our story
            submission system and expressive customization options
          </p>
        </div>
      </div>
    </section>
  );
};

export default Space;
