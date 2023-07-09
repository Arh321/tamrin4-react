import image from '../assets/images/chef-cooking-spaghetti-kitchen.jpg'

export const Contact = () =>{

    return(
        <div className="w-full h-screen flex">
            <img className="w-1/2 h-full" src={image} alt="" />
            <form type='submit' className="w-1/2  pt-16 pl-10 pr-10 h-full flex flex-col gap-2 justify-center  bg-gray-800" action="">
                <label className=' font-sans text-3xl text-slate-300' htmlFor="name">Your name</label>
                <input className='p-4 mt-2 text-2xl font-sans text-slate-300 bg-transparent  border border-slate-400 rounded-md focus:outline-0' id='name' type="text" placeholder='Your name...'/>

                <label className=' font-sans text-3xl text-slate-300' htmlFor="number">Your number</label>
                <input className='p-4 mt-2 text-2xl font-sans text-slate-300  bg-transparent  border rounded-md border-slate-400 focus:outline-0' id='number' type="text" placeholder='Your number...'/>

                <label className=' font-sans text-3xl text-slate-300' htmlFor="email">Your email</label>
                <input className='p-4 mt-2 text-2xl font-sans text-slate-300  bg-transparent  border rounded-md border-slate-400 focus:outline-0' id='email' type="text" placeholder='Your email...'/>

                <label className=' font-sans text-3xl text-slate-300' htmlFor="subject">Your subject</label>
                <textarea className='p-4 mt-2 text-2xl font-sans text-slate-300  bg-transparent  border rounded-md border-slate-400 focus:outline-0' name="" id="subject" cols="30" rows="10" placeholder='Your subject...'></textarea>
                <button className='w-[96px] p-2 mt-4 text-slate-300 text-2xl border rounded-md active:scale-95'>submit</button>
            </form>
        </div>
    )
}