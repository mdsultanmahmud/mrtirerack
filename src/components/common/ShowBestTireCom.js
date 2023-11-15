import Image from "next/image";
import React from "react";

const ShowBestTireCom = ({ blog }) => {
  const {
    mainHeading,
    shortDetails,
    mainImgUrl,
    inputList,
    date,
    authorName,
    _id,
    comments,
    tireCate,
  } = blog;
  return (
    <div>
      <h1 className="text-[1.5rem] md:text-[2rem]  uppercase font-semibold mt-8">
        {mainHeading}
      </h1>
      <p className="text-lg text-gray-700 font-semibold">
        By <span className="text-green-500">{authorName}</span>
      </p>
      <div className="my-12 text-justify text-lg">
        <strong>Details:</strong>
        {shortDetails.split("\n").map((paragraph, index) => (
          <p key={index} className="mt-2">
            {paragraph.includes("Pros:") ? (
              <span className="font-bold text-red-500">{paragraph}</span>
            ) : (
              paragraph
            )}
          </p>
        ))}
      </div>
      {inputList?.map((item, index) => (
        <div className="mb-12" key={index}>
          <h2 className="text-center text-2xl md:text-3xl font-semibold mb-4">
            {index + 1}. {item.title}
          </h2>
          <Image
            src={item.img}
            width={500}
            height={500}
            alt="img of the tires"
            className="mx-auto w-full md:w-4/5 rounded-lg h-[300px] md:h-[500px] my-8"
          />
          <div className="my-12 text-justify text-lg">
            <strong>Details:</strong>
            {item.details.split("\n").map((paragraph, index) => (
              <p key={index} className="mt-2">
                {paragraph.match(/Pros:|Cons:/) ? (
                  <span
                    className={
                      paragraph.includes("Pros:")
                        ? "text-green-500 font-bold text-lg"
                        : "text-red-500 font-bold text-lg"
                    }
                  >
                    {paragraph}
                  </span>
                ) : (
                  paragraph
                )}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowBestTireCom;
