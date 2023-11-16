import DashboardLayout from "@/components/layout/DashboardLayout";
import Head from "next/head";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { BsImageFill } from "react-icons/bs";
import dynamic from "next/dynamic";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
const BestTireDashboard = ({ allBestTires }) => {
  const [mainHeading, setMainHeading] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setmetaDescription] = useState("");
  const [shortDetails, setShortDetails] = useState("");
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleUploadBestTire = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const imageUrl = await imgUpload();
      const date = new Date(); // Assuming you want to format this specific date
      const options = { year: "numeric", month: "long", day: "numeric" };
      const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
        date
      );
      const uploededBestTire = {
        metaTitle,
        metaDescription,
        mainHeading,
        shortDetails,
        mainImgUrl: imageUrl,
        content,
        date: formattedDate,
        authorName: "Md. Ashikur Rahman",
        timeIndexing: date.getTime(),
        tireCate: "Best Tire",
        bloggerImg:
          "https://res.cloudinary.com/dtdlizh8h/image/upload/v1698240106/BloggerOne_s1j2lo.jpg",
      };
      console.log(uploededBestTire);
      if (!uploededBestTire) {
        return;
      }
      fetch("http://localhost:5000/api/v1/best_tire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(uploededBestTire),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log("data post successfully!");
          toast.success("Blog Posted successfully!!");
          setMainHeading("");
          setShortDetails("");
          setContent("");
          setMetaTitle("");
          setmetaDescription("");
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          toast.success("Blog is not Posted!!");
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const imgUpload = async () => {
    let img;
    if (!selectedImage) {
      return;
    }
    console.log("imag is uploading", selectedImage);
    try {
      const cloudName = "dtdlizh8h";
      const unsignedUploadPreset = "mrtirerack";
      const formData = new FormData();
      formData.append("file", selectedImage);
      formData.append("upload_preset", unsignedUploadPreset);
      // Make a POST request to Cloudinary's upload endpoint
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        const data = await response.json();
        img = data.secure_url;
        return img;
      } else {
        console.error("Image upload failed.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleDeleteItem = (id) => {
    const url = "http://localhost:5000/api/v1/best_tire";
    fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          alert("Item deleted successfully.");
        } else {
          alert("Failed to delete item.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <Head>
        <title>Best Tire Upload || MR Tire Rack</title>
        <meta name="Best-Tire-Upload" description="description of this page" />
      </Head>
      <div>
        <h1 className="text-center text-3xl mb-8 font-semibold capitalize">
          Upload Your Blog(best tire)
        </h1>
        <div className="mx-auto bg-white shadow-2xl rounded-lg p-8">
          <form onSubmit={handleUploadBestTire}>
            <div className="mb-4 flex flex-col gap-y-1">
              <label
                htmlFor="mainHeading"
                className="font-semibold text-green-600 text-lg"
              >
                Add a Main Heading <span className="text-red-500">*</span>
              </label>
              <input
                value={mainHeading}
                onChange={(e) => setMainHeading(e.target.value)}
                name="mainHeading"
                className=" px-4 py-2 border border-green-600 bg-transparent outline-none  rounded-lg"
                id="mainHeading"
                type="text"
                placeholder="add a main heading"
                required
              />
            </div>
            <div className="mb-4 flex flex-col gap-y-1">
              <label
                htmlFor="shortDetails"
                className="font-semibold text-green-600 text-lg"
              >
                Add a Short Details <span className="text-red-500">*</span>
              </label>
              <textarea
                value={shortDetails}
                onChange={(e) => setShortDetails(e.target.value)}
                name="shortDetails"
                className="min-h-[150px] px-4 py-2 border border-green-600 bg-transparent outline-none  rounded-lg"
                id="shortDetails"
                type="text"
                placeholder="add a short details"
                required
              />
            </div>
            <div className="mb-4 flex flex-col gap-y-1">
              <label
                htmlFor="shortDetails"
                className="font-semibold text-green-600 text-lg"
              >
                Content<span className="text-red-500">*</span>
              </label>
              <JoditEditor
                ref={editor}
                value={content}
                onChange={(newContent) => setContent(newContent)}
              />
            </div>
            <div className="mb-4 ">
              <div>
                <label
                  htmlFor="mainImage"
                  className=" text-sm flex gap-x-2 items-center  cursor-pointer mb-2 text-green-600 font-semibold text-lg"
                >
                  <span>Upload an Image</span>{" "}
                  <BsImageFill size={22} className="" />
                </label>
                <input
                  onChange={(e) => setSelectedImage(e.target.files[0])}
                  name="mainImage"
                  className=""
                  id="mainImage"
                  type="file"
                  placeholder="upload an image about this"
                  required
                />
              </div>
            </div>
            <div className="my-12">
              <h4 className=" font-semibold text-2xl mb-4">Meta Section</h4>
              <div className="mb-4 flex flex-col gap-y-1">
                <label
                  htmlFor="mainHeading"
                  className="font-semibold text-green-600 text-lg"
                >
                  Meta Title
                </label>
                <input
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  name="metaTitle"
                  className=" px-4 py-2 border border-green-600 bg-transparent outline-none  rounded-lg"
                  id="metaTitle"
                  type="text"
                  placeholder="meta title..."
                  required
                />
              </div>
              <div className="mb-4 flex flex-col gap-y-1">
                <label
                  htmlFor="mainHeading"
                  className="font-semibold text-green-600 text-lg"
                >
                  Meta Description
                </label>
                <input
                  value={metaDescription}
                  onChange={(e) => setmetaDescription(e.target.value)}
                  name="metaDescription"
                  className=" px-4 py-2 border border-green-600 bg-transparent outline-none  rounded-lg"
                  id="metaDescription"
                  type="text"
                  placeholder="meta description..."
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="block mx-auto px-4 py-2 bg-green-600 text-white font-semibold  hover:bg-red-500 transition duration-300 uppercase text-sm mt-5"
            >
              Upload Blog
            </button>
          </form>
        </div>
      </div>
      <div className="mt-12">
        <h4 className="font-semibold text-lg mt-8">Our All Best Tires</h4>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allBestTires?.map((blog) => (
                <tr key={blog?._id}>
                  <th>{blog?.mainHeading}</th>
                  <td>{blog?.tireCate}</td>
                  <td>{blog?.date}</td>
                  <td
                    className="cursor-pointer text-red-500"
                    onClick={() => handleDeleteItem(blog?._id)}
                  >
                    Delete
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BestTireDashboard;

BestTireDashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/api/v1/best_tire");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      allBestTires: data.data,
    },
    revalidate: 10,
  };
};
