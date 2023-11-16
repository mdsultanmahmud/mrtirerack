import Image from "next/image";
import React from "react";
import parse from "html-react-parser";
const ShowBestTireCom = ({ blog }) => {
  const { mainHeading, shortDetails, mainImgUrl, date, authorName, content } =
    blog;
  console.log(blog);
  return (
    <div>
      <h1 className="text-[1.5rem] md:text-[2rem]  uppercase font-semibold mt-8">
        {mainHeading}
      </h1>
      <p className="text-lg text-gray-700 font-semibold">
        By <span className="text-green-500">{authorName}</span>
        <span className="text-gray-500 ml-2">|| {date}</span>
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
      <Image
        src={mainImgUrl}
        width={800}
        height={500}
        alt="tire of learn and how to details page"
        className="h-[300px] md:h-[400px] lg:h-[550px] w-full md:w-4/5 mx-auto my-8 rounded-lg"
      />
      <div className="my-12 text-justify text-lg">
        <strong>Content:</strong>
        {parse(content)}
      </div>
    </div>
  );
};

export default ShowBestTireCom;
