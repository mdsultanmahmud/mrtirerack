import React from "react";
import ShowBlog from "../common/ShowBlog";
import Link from "next/link";
const LearnAndHow = ({ blogs }) => {
  return (
    <div>
      <div className="mainContainer">
        <div className={`py-[4rem] px-[2rem]`}>
          <h1 className="text-4xl mb-6 capitalize font-semibold tracking-wide">
            Learn & How To
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogs.slice(0, 8).map((blogItem, index) => (
              <ShowBlog key={index} blogItem={blogItem} />
            ))}
          </div>
          <div className="text-center py-8">
            <Link href={"/tricks"}>
              <buttton className="globalBtn">See all tips & tricks</buttton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnAndHow;
