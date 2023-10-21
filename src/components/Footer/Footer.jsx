import { BiSolidHappyHeartEyes } from 'react-icons/bi';
import { CiFacebook, CiTwitter} from 'react-icons/ci';
import { AiOutlineInstagram} from 'react-icons/ai';
import { RiYoutubeLine} from 'react-icons/ri';

const Footer = () => {
    return (
<footer className="footer footer-center mt-10 p-5 bg-red-700 text-base-content rounded">
<p className="text-3xl text-white flex font-bold">Welcome Our Site <BiSolidHappyHeartEyes></BiSolidHappyHeartEyes> </p>
<div className='flex' >
    <img className='w-[60px]' src="/public/images/Logo.jpg" alt="" />
    <h1 className='text-xl text-white font-semibold'>WEDDING <br/> SEASON</h1>
</div>
  <nav className="grid grid-flow-col gap-5 text-white">
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Service</a> 
    <a className="link link-hover">Our Blog</a> 
  </nav> 
  <nav>
    <div className="grid grid-flow-col gap-4 text-white text-3xl ">
    <CiFacebook></CiFacebook>
    <CiTwitter></CiTwitter>
    <AiOutlineInstagram></AiOutlineInstagram>
    <RiYoutubeLine></RiYoutubeLine>
    </div>
  </nav> 
</footer>
    );
};

export default Footer;