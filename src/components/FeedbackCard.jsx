

const FeedbackCard = ({ content, name, img, link }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <div className="flex flex-col items-center">
        <a href={link}><img src={img} alt={name} className="cursor-pointer rounded-[20px] w-[300px] h-[150px]" /></a>
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
      </div>
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p>
    </div>
  </div>
);


export default FeedbackCard;
