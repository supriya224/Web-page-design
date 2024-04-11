import React from "react";

const Audiance = () => {
  return (
    <section className="w-full">
      <div className="">
        <div className="container mx-auto text-center py-12 px-48 bg-red-400">
          <h3 className="text-6xl mx-32">Find and grow your audience</h3>
          <p>With simple tools and features, you have the chance to connect with over 100 million curious readers.</p>
        </div>
        <div className="grid grid-cols-2">
         <div className="bg-pink-400 48">Audience insights</div>
         <div>
            <div className="grid grid-cols-2">
            <div className="bg-teal-600">Social connectivity. </div>
         <div className="bg-yellow-500">Pwerful network</div>
                </div>
                

         <div className="bg-purple-500">Email subscription</div>
         <div className="bg-cyan-500">Interactive discussion</div>
         <div className="bg-neutral-500">Custom design</div>
         </div>
       
       
        </div>
      </div>
    </section>
  );
};

export default Audiance;
