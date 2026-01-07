const ImageTextSection = ({
  title,
  imageSrc,
  imageAlt = "",
  description,
  wrapperClassName = "",
}) => {
  return (
    <section>
      <div className={`mx-auto py-[100px] space-y-10 ${wrapperClassName}`}>
        {title && (
          <h2 className="text-center text-[#00273A] capitalize tracking-[0.02em] leading-none font-primary font-medium text-[48px]">
            {title}
          </h2>
        )}

        <div className="w-full rounded-3xl overflow-hidden">
          <img className="w-full" src={imageSrc} alt={imageAlt} />
        </div>

        <p className="font-secondary text-center text-[#1E1E1E] font-medium lg:text-[20px] text-[18] leading-[1.4] tracking-[0.04em]">
          {description}
        </p>
      </div>
    </section>
  );
};

export default ImageTextSection;
