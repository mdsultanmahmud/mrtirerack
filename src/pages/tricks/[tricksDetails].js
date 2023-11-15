import Comment from "@/components/common/Comment";
import ShowTricksCom from "@/components/common/ShowTricksCom";
import RootLayout from "@/components/layout/RootLayout";
import Head from "next/head";

const LearnAndHowBlogDetailsPage = ({ blog }) => {
  return (
    <div className="mainContainer px-4">
      <Head>
        <title>{blog?.metaTitle} - MR Tire Rack</title>
        <meta name="description" content={blog?.metaDescription} />
      </Head>
      {blog && <ShowTricksCom blog={blog} />}
      {blog && <Comment blog={blog} />}
    </div>
  );
};

export default LearnAndHowBlogDetailsPage;

LearnAndHowBlogDetailsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// dynamic data fetching

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/api/v1/learn_how");
  const blogs = await res.json();
  const paths = blogs?.data?.map((blog) => ({
    params: { tricksDetails: blog?._id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/api/v1/learn_how/${params.tricksDetails}`
  );
  const blog = await res.json();
  console.log(blog);

  return {
    props: {
      blog: blog.data,
    },
    revalidate: 10,
  };
};
