import React from "react";

type Props = {
  imageUrl: string;
  children: React.ReactNode;
  altText: string;
};

const Parallax = ({ imageUrl, children, altText }: Props) => {
  return (
    <div className="flex flex-col items-center w-full  z-0">
      <div className="w-full overflow-hidden">
        <div
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
          className="relative min-h-screen w-full bg-fixed bg-center bg-no-repeat bg-cover"
        >
          <img src={imageUrl} alt={altText} className="sr-only" />
        </div>
        <div className="bg-[#F4E5C3] py-20">{children}</div>
      </div>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="relative min-h-screen w-full bg-fixed bg-center bg-no-repeat bg-cover"
      ></div>
    </div>
  );
};

export default Parallax;
