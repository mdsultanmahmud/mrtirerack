import RootLayout from '@/components/layout/RootLayout';
import Image from 'next/image';
import Link from 'next/link';
const BestTiresPage = (props) => {
    const { allBestTires, count } = props
    return (
        <div>
            <div className='mainContainer'>
                <div className='px-8'>
                    <h1 className='text-[2rem] md:text-[3rem] my-8 uppercase font-semibold'>Best Tire</h1>
                    {
                        allBestTires?.map(blog => <div key={blog?._id} className='mb-20 grid grid-cols-1 md:grid-cols-2 gap-8 border p-4 items-center hover:drop-shadow-2xl'>
                            <div>
                                <Image src={blog?.mainImgUrl} width={1000} height={500} alt='image of the blog' className="w-full mx-auto my-8 rounded-lg h-[300px] md:h-[350px] object-cover" />
                            </div>
                            <div className='p-4'>
                                <h2 className='text-[2rem] font-semibold'>{blog?.mainHeading}</h2>
                                <p className='mb-4 text-gray-800 text-lg'>{blog?.date} by <span className='text-green-500 font-semibold'>{blog?.authorName}</span></p>
                                <p className='text-lg text-gray-800 text-justify'>{blog?.shortDetails?.slice(0,400)}...</p>
                                <Link href={`/best-tire/${blog?._id}`}><button className='text-green-500 text-xl mt-2'>Details</button></Link>
                            </div>  
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BestTiresPage;

BestTiresPage.getLayout = function getLayout(page) {
    return (
        <RootLayout>{page}</RootLayout>
    )
}


// data fetching  
export const getStaticProps = async () => {
    const res = await fetch("http://localhost:5000/api/v1/best_tire")
    const data = await res.json()
    return {
        props: {
            allBestTires: data.data,
            count: data.count
        },
        revalidate: 10
    }
}
