import RootLayout from "@/components/layout/RootLayout";
import Image from "next/image";

const BestTireDetailsPage = ({ tire }) => {
    const { mainHeading, shortDetails, mainImgUrl, inputList, date, authorName } = tire
    console.log(tire)
    return (
        <div>
            <div className="mainContainer px-4">
                <h1 className="text-[1rem] md:text-[2rem]  uppercase font-semibold mt-8">{mainHeading}</h1>
                <p className="text-lg text-gray-700 font-semibold">By <span className="text-green-500">{authorName}</span></p>
                <p className="my-12 text-justify text-lg">{shortDetails}</p>
                {inputList?.map((item, index) => <div className="mb-12" key={index}>
                    <h2 className="text-center text-3xl font-semibold mb-4">{index + 1} {item.title}</h2>
                    <Image src={item.img} width={500} height={500} alt="img of the tires" className="mx-auto w-full md:w-4/5 rounded-lg h-[300px] md:h-[500px] my-8" />
                    <p className="my-12 text-justify text-lg"><strong>Details: </strong>{item.details}</p>
                </div>)
                }
            </div>
        </div>
    );
};
export default BestTireDetailsPage;

BestTireDetailsPage.getLayout = function getLayout(page) {
    return (
        <RootLayout>{page}</RootLayout>
    )
}


export const getStaticPaths = async () => {
    const res = await fetch(`http://localhost:5000/api/v1/best_tire`)
    const tires = await res.json()
    console.log(tires)
    const paths = tires?.data?.map((tire) => ({
        params: { BestTireDetails: tire?._id },
    }))
    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const { params } = context
    const res = await fetch(`http://localhost:5000/api/v1/best_tire/${params.BestTireDetails}`)
    const data = await res.json()
    return {
        props: {
            tire: data.data
        }
    }
}

