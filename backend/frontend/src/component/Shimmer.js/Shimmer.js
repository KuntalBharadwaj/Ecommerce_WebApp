import React from "react";

function Shimmer() {
  return (
    <div className=" bg-white m-1 ml-3 rounded-md shadow-lg shadow-slate-400">
      <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          
          {[1,1,1,1,1,1,1,1].map((e, i) => (
            <div key={i} className="rounded-sm pb-2 shadow-lg shadow-slate-300">
              {/* edit */}
                <div className="aspect-h-1 h-[200px] sm:h-[340px] aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"></div>
                <h3 className="mt-3 ml-3 text-sm text-gray-700">{e.title}</h3>
                <div className="mt-1 ml-3 w-[100px] h-[20px]"></div>
                <div className="mt-1 ml-3 w-[100px] h-[20px]"></div>
                <div className="mt-1 ml-3 w-[100px] h-[20px]"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shimmer;
