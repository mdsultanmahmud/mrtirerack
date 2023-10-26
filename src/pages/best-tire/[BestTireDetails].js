import Comment from "@/components/common/Comment";
import ShowBestTireCom from "@/components/common/ShowBestTireCom";
import RootLayout from "@/components/layout/RootLayout";
import Head from "next/head";

const BestTireDetailsPage = ({ tire }) => {
    return (
        <div>
            <div className="mainContainer px-4">
                <Head>
                    <title>{tire?.mainHeading} - MR Tire Rack</title>
                    <meta name="description" content={`Details about ${tire?.mainHeading}. Read this informative article about ${tire?.mainHeading}.`} />
                </Head>
                {tire && <ShowBestTireCom blog = {tire}/>}
                {tire && <Comment blog = {tire}/>}
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
            tire: data.data,
        },
        revalidate: 10
    }
}

