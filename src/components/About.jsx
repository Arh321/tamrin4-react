import image from '../assets/images/adana-kebab-served-with-flatbread-grilled-pepper-tomato-caramelized-onion.jpg'



export const About = () =>{

    return(
        <div className='w-full min-h-screen p-28 flex flex-col items-center justify-center'>
            <div className="w-4/5 mt-14 h-[500px] border rounded-lg  flex flex-row">
                <img className="w-1/2 rounded-tl-lg rounded-bl-lg " src={image} alt="" />
                <div className='w-1/2 flex flex-col gap-12 pt-4 pb-8'>
                    <h1 className="pr-20 text-right text-6xl font-mono font-bold">درباره ما</h1>
                    <p className="pr-20 pl-20 text-right text-2xl leading-loose font-mono font-semibold">در این مجموعه بسیار سعی شده است تا طمع و مزه غذای ایرانی و اصیل را به مشتری عای خود ارائه دهد. ما دارای یکی از بهترین  تجهیزات روز دنیا برای آشپزی و همچنین دارای پرسنلی با تجربه هستیم که می‌توانند تجربه ای لذت بخش را به مشتریان ما ارائه دهند.</p>
                </div>
                </div>
        </div>
    )
}