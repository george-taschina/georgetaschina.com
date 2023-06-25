import BrandCarousel from "@/components/BrandCarousel";

const Home = () => {
    type CarouselItem = {
        src: string;
        alt: string;
    };

    const brands: CarouselItem[] = [
        { src: '/c-sharp.png', alt: 'C-sharp' },
        { src: '/gcp.png', alt: 'GCP' },
        { src: '/k8s.png', alt: 'K8s' },
        { src: '/react.png', alt: 'React' },
        { src: '/kafka.webp', alt: 'Kafka' },
        { src: '/laravel.png', alt: 'Laravel' },
        { src: '/mysql.png', alt: 'MySQL' },
      ];

    return (
        <main>
            <div className="h-screen">
                <div className="parallax"></div>
                <div className="grid grid-cols-2 gap-4 h-1/2">
                    <div className="flex justify-center items-center">                
                        <h1 className="text-2xl md:text-5xl font-bold text-special">Rivelo Platform</h1>
                    </div>
                    <div className="flex justify-center items-center flex-col container">
                        <p className="font-bold text-xl md:text-2xl">Revolutionizing the Digital Landscape: My Journey with Rivelo Platform</p>
                        <p className="text-md md:text-xl text-special mt-3">Throughout my time at Rivelo, I've undertaken several vital projects that have significantly contributed to the overall performance, security, and efficiency of our digital environment. Let's delve deeper into the specifics of my role and the impact of my contributions.</p>
                    </div>
                </div>
            </div>
            <BrandCarousel items={brands} className={"my-7"}/>
        </main>
    )
}

export default Home
