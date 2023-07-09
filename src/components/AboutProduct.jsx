import { useParams,Link } from "react-router-dom"
import img1 from '../assets/images/top-view-lula-kebab-with-rice-tomato-green-pepper-grilled-with-slice-lemon-sauce.jpg'
import img2 from '../assets/images/Jowhareh_galleries_poster_70716ca0-ca24-4a1d-9de6-9698c5042f5f.jpeg'
import img3 from '../assets/images/nody-ادویه-مخصوص-جوجه-کباب-زعفرانی-1626483154.jpg'
import img4 from '../assets/images/poster_d5edec93-ad1e-4618-b5cc-1a030a260f10.jpeg'
import img5 from '../assets/images/tazeen-khoresht-gheimeh-4.jpg'
import img6 from '../assets/images/shevid-polo-mahiche.jpg'
import { useState } from "react"


const NextBUtts = ({params}) =>{
    
    const [id,setId] = useState(+params +1 < 6 ? +params+1 : +params)
    const [idd,setIdd] = useState(+params -1 > 0 ? +params-1 : +params)

    const handleNextItem = () =>{
        if(id < 6){
            setId(id+1)
        }
        if(idd < 5 ){
            setIdd(idd+1)
            
        }
        
    }
    const handlePervItem = () =>{
        
        if(idd > 1 ){
            setIdd(idd-1)
            
        }
        if(id > 2){
            setId(id-1)
        }
    }

    return(
            <div className="w-full mt-8 flex flex-row justify-center gap-[70%] pt-8 pb-4">
                <Link to={`/About/${idd}`}><button className="border rounded-md w-[80px] p-2 bg-slate-900 text-white text-2xl active:bg-slate-700 active:scale-95" onClick={handlePervItem}>قبلی</button></Link>
                <Link to={`/About/${id}`}><button className="border rounded-md w-[80px] p-2 bg-slate-900 text-white text-2xl active:bg-slate-700 active:scale-95" onClick={handleNextItem}>بعدی</button></Link>
            </div>
    )
}


export const AboutProduct = () => {

    const params = useParams();
    const [data,setData] = useState([{
        id:1 , image:img1 , title:'چلوکباب کوبیده' , explain:'امروزه چلو کباب کوبیده در سراسر ایران سرو می‌شود. با این حال، این غذا از نظر تاریخی در شمال کشور بیشتر رایج بوده است. در حالی که مناطق دیگر کشور به طور سنتی کباب کوبیده را با نان نوش جان می‌کردند. خطوط میخی مربوط به دوره بین النهرین نیز به کمتر از سی نوع نان، بیست نوع پنیر و صد نوع غذای گوشتی اشاره دارد که می‌خواهند میراث آشپزی غنی این منطقه را از قدیم اثبات کنند. ایران که در قلب جاده ابریشم واقع شده است، از تجارت مداوم مواد غذایی با هند، چین و مغولستان سود می‌برد. برنج باسماتی از هند که بسیار نزدیک به انواع برنج ایرانی بود، در سراسر کشور گسترش یافته است. سپس ایرانیان درک کردند که ترکیب گوشت کباب شده با برنج می‌تواند غذایی خوشمزه و مقوی باشد. این چنین بود که این غذا در عصر قاجار به شکل کوبیده برای خاندان پادشاهی طبخ شد.'
    },{
        id:2 , image:img2 , title:'زرشک پلو با مرغ' , explain:'زرشک پلو یکی از پلو های معروف ایرانی است که برای تهیه آن به برنج، زرشک و زعفران نیاز است و با انواع گوشت مانند گوشت مرغ، بوقلمون، گوشت گوسفندی و... سرو می شود که افراد معمولا برای سرو این غذا از مرغ استفاده می نمایند.زرشک پلو با مرغ یکی از غذاهای اصیل ایرانی است که طرفداران بسیاری دارد. این غذا جزو غذاهای مجلسی به شمار می رود که اغلب در مجالس و مهمانی ها طبخ می گرد.'
    },{
        id:3 , image:img3 , title:'چلو جوجه کباب' , explain:'یش از ۶۰ سال پیش در منطقه ای به نام گلوگاه۱ جوانی مازنی به نام علی اکبر کلبادی (که به اشتباه گلبادی هم گفته می شود) با جثه نحیف و لاغر،به همراه همسرش (صنمبر عظیمی) در سال ۱۳۲۳ در ملکی اجاره ای ، قهوه خانه ای بر پا کردند.معروفترین غذایی که در این قهوه خانه عرضه می شد،چلو جوجه مخصوص رانندگان بود و بقیه غذاها برای افرادی با درآمد کم وشاگرد شوفرها بود که مقدار عرضه ی غذا به حدی بود که کارگران را به راحتی سیر می کرد. گاهی هم به دلیل سرمای هوا در زمستان مش اکبر با کمبود جوجه مواجه می شد و به اجبار کبک را جایگزین می کرد. در این میان همسر حاج اکبر با پخت نان محلی و رب انار و فروش آنها به مشتریها کم رونق بودن کار و کاسبی را جبران می کرد. کیفیت چلو جوجه ها هم که به دلیل عشق اکبر آقا به مشتریان و استفاده از رب انار مخصوص محلی و غلظت و مزه و استفاده از جوجه رسمی و کره محلی زبانزد خاص و عام بود(تخم مرغ و به اصطلاح نیمرو هم اگر با عشق و علاقه پخت شود خوشمزه می شود). '
    },{
        id:4 , image:img4 , title:'قرمه سبزی' , explain:'تاریخچه قورمه سبزی در ایران زمین به ۲۰۰۰ تا ۵۰۰۰ سال پیش باز می‌گردد. به عبارت دیگر خورشت قورمه سبزی غذای ملی ما ایرانیان به شمار می‌رود. البته در شهرهای مختلف ایران زیبا نوع ترکیباتی که در پخت این خورشت ملی مورد استفاده قرار می‌گیرد اندکی تفاوت را نشان می‌دهد. اما این تفاوت ظریف در اصل غذا تغییری ایجاد نمی‌کند. '
    },{
        id:5 , image:img5 , title:'خورشت قیمه با برنج' , explain:'یکی از غذاهای بسیار اصل ایرانی، خورشت قیمه است که بدون شک حداقل هر ایرانی یا چندین بار این غذا را خورده و یا آن را پخته است. با بررسی تاریخچه ی خورشت قیمه و کمی اطلاعات و شناخت درباره ی این غذای خوشمزه و سنتی ایرانی می توانیم این نکته را دریابیم که این غذا در نواحی مختلف ایران به اشکال مختلفی پخته می شود و به عبارتی دیگر تبدیل به نوعی غذای بومی و شاخص در مناطق مختلف ایران شده است.از آن جایی که طعم و مزه ی خورشت قیمه با ذائقه ی بیشتر افراد جور در می آید و دستور پخت ساده تری نسبت به خیلی از دیگر غذاهای رسمی دارد، از گذشته های دور این خورشت تبدیل به یکی از غذاهای مناسبتی در ایران و حتی کشورهای همسایه ی ایران همچون کشور عراق شده است. در بررسی تاریخچه ی خورشت قیمه باید بگوییم که در نقاط مختلف ایران، قیمه را با اسامی همچون: قیمه نثار، خورشت قیمه ی رشتی، خورشت قیمه یزدی، خورشت قیمه آلو با مرغ، خورشت قیمه بادمجان، قیمه مرغ، قیمه سیب‌ درختی، قیمه هویج، قیمه بامیه و بسیاری از انواع دیگر قیمه های دیگر نیز می توانیم پیدا نماییم. البته در ادامه ی این مطلب، درباره ی این قیمه های مختلف و متنوع بیشتر توضیح خواهیم داد.'
    },{
        id:6 , image:img6 , title:'شوید پلو با ماهیچه' , explain:'این غذا از کجا و چه کسی دستور طبخ شو درست کرده و تاریخچه آن مطلب زیادی در دسترس نیست ولی در دوره صفویه پخته و میل می شده است .  اینکه از دوران صفوی شروع شده یا قبل از آن خیلی مهم نیست به هر حال  باقالی پلو در دوران صفویه، تبدیل به غذای اصلی مجالس ایان آن زمان تبدیل شد بود . این غذا از وعده های خوراکی پادشاهان صفویه نیز  بود. از آن زمان تاکنون، باقالی پلو به عنوان یک غذای پر طرفدار ایرانی، هم عروسی ها را مزین می کند و هم یک وعده هفتگی دربرنامه غذایی خانواده هاست.        '
    }])

    return(
        <div className="w-full min-h-screen p-28 flex flex-col items-center justify-center">
            {
                data.filter((item) => item.id == params.id).map((item) => {
                    return(
                       <div className="w-4/5 mt-14 h-[500px] border rounded-lg  flex flex-row">
                        <img className="w-1/2 rounded-tl-lg rounded-bl-lg " src={item.image} alt="" />
                        <div className="w-1/2 flex flex-col gap-12 pt-4 pb-8">
                        <h1 className="pr-20 text-right text-6xl">{item.title}</h1>
                        <p className="pr-20 pl-20 text-right text-xl leading-loose font-Vazir font-medium">{item.explain}</p>
                        </div>
                       </div>
                        
                    )
                })
            }

            <NextBUtts params = {params.id}/>

        </div>
    )
}
