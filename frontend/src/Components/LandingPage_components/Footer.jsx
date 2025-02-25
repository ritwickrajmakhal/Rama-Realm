import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
const links = [
         {href:'https://discord.com', icon: <FaDiscord />},
         {href:'https://twitter.com', icon: <FaTwitter/>},
         {href:'https://github.com', icon: <FaGithub/>},
]
const Footer = () => {
  return (
    <footer className='w-screen bg-violet-300 py-4 text-white'>
      <div className='container mx-auto flex flex-col items-center justify-evenly gap-4 px-4 md:flex-row'>
         <p className='text-center text-sm md:text-left'>
            &copy; Rama Realm 2024. All rigths reserved
         </p>
         <div className='flex justify-center gap-4 md:justify-start'>
           {links.map((link)=>(
              <a key={link} href={link.href} target='_blank' rel='noopener noreferrer' className='text-white'>
                  {link.icon}
              </a>    
           ))}
         </div>
         <a href='#privacy-policy' className=' hover:text-white text-center text-sm hover:underline md:text-right'>
            Privacy Policy
         </a>
      </div>
    </footer>
  )
}

export default Footer