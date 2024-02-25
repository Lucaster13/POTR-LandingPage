import React from "react";
import * as nfts from "../../assets/nfts";

export default function Carousel() {
  return (
    <div className="overflow-x-clip">
      <div
        className="luxy-el flex gap-4 translate-x-[-70rem] translate-y-[0rem] rotate-[-10deg] md:gap-6 2xl:gap-10"
        data-horizontal="1"
        data-speed-x="20"
      >
        {Object.keys(nfts).map((key) => (
          <img
            src={nfts[key]}
            alt={key}
            key={key}
            className="h-28 w-28 rounded-md
                            object-scale-down md:h-36 md:w-36 lg:h-44
                             lg:w-44 xl:h-52 xl:w-52 2xl:h-64 2xl:w-64"
          />
        ))}
      </div>
    </div>
  );
}
