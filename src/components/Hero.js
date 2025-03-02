import hello  from '../assets/img2.png'
import { CiInstagram } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Hero(){
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
         <div className='w-1/2 flex flex-col'><h1 className=' text-white text-4xl font-hero-font'>Hi,<br/> Welcome to my Portfolio
        <p className='text-3xl'>
        Pavan Sai H V<br/><div className='text-sm px-1 text-black'>Data Scientist</div>
        </p>
        </h1>
        <div className='flex flex-row py-5'>
            <a className='p-2 hover:text-white'href="#"><CiInstagram size={40} /></a>
            <a className='p-2  hover:text-white'href="#"><FaGithub size={40} /></a>
            <a className='p-2  hover:text-white'href="#"><FaLinkedin size={40} /></a>
        </div>
        </div>
        <img className='w-1/2'src={hello}/>
    </section>
}