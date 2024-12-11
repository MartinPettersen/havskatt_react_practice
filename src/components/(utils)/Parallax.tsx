type Props = {
  imageUrl: string;
  children: React.ReactNode;
  altText: string;
};

const Parallax = ({ imageUrl, children, altText }: Props) => {
  return (
    <section className="flex flex-col items-center w-full  z-0">
      <div className="w-full overflow-hidden">
        <div
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
          className="relative min-h-screen w-full bg-fixed bg-center bg-no-repeat bg-cover"
          role="presentation"
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
        role="presentation"
      ></div>
    </section>
  );
};

export default Parallax;
