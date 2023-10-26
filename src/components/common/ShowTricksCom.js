import Image from 'next/image';
const ShowTricksCom = ({ blog }) => {
    const { mainHeading, content, mainImgUrl, shortDetails, authorName } = blog
    return (
        <div>
            <h1 className="text-[1.5rem] md:text-[2rem]  uppercase font-semibold mt-8">{mainHeading}</h1>
            <p className="text-lg text-gray-700 font-semibold">By <span className="text-green-500">{authorName}</span></p>
            <div className="my-12 text-justify text-lg"><strong>Details:</strong>
                {
                    shortDetails?.split('\n').map((paragraph, index) => <p key={index} className="mt-2">{paragraph}</p>)
                }
            </div>
            <Image src={mainImgUrl} width={800} height={500} alt='tire of learn and how to details page' className='h-[300px] md:h-[400px] lg:h-[500px] w-full md:w-4/5 mx-auto my-8' />
            <div className="my-12 text-justify text-lg"><strong>Content:</strong>
                {
                    content?.split('\n').map((paragraph, index) => <p key={index} className="mt-2">{paragraph}</p>)
                }
            </div>

        </div>
    );
};

export default ShowTricksCom;