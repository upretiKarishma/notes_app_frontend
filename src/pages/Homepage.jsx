import {Box,  Heading, Image, Text} from '@chakra-ui/react'
import { Navbar } from '../components/Homepage/Navbar'
import note from '../assets/notes_bg.png'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import './homepage.css'
export default function Homepage(){


    return <Box padding={8}>
  
    
    <Heading className='heading' mt={5} textAlign={"center"} ml={15} size={"2xl"}>notifyNote</Heading>
    <div className='note' >
    <p >Best note-taking app</p>

    <p>These Evernote alternatives are the best out there.</p>
    </div>
    <div className='social-links'>
        <a href="http://instagram.com"><FaInstagram /></a>
        <a href="http://twitter.com"><FaTwitter /></a>
        <a href="http://instagram.com"><FaFacebook /></a>
    </div>
    <Image className='home_image' src={note} alt="alt"/>
    <Text className='text'>
    A note-taking application is a digital platform designed to facilitate the efficient organization, storage, and retrieval of information. With the ubiquity of smartphones and other digital devices, note apps have become essential tools for individuals across various domains, from students and professionals to creatives and hobbyists.

The primary feature of a note app is its ability to capture and store a wide range of content, including text, images, audio recordings, and even handwritten notes. This versatility allows users to seamlessly transition between different mediums, capturing their thoughts and ideas in the most convenient format.

Moreover, note-taking apps often offer robust organization tools, such as categorization, tagging, and search functionality, enabling users to easily locate and access their notes when needed. These organizational features are crucial for maintaining productivity and staying on top of tasks in today's fast-paced world.

Additionally, note apps frequently incorporate synchronization capabilities across multiple devices, ensuring that users can access their notes anytime, anywhere, and from any device. This synchronization not only enhances accessibility but also promotes collaboration, as users can share and collaborate on notes with others in real-time.

Furthermore, many note-taking apps offer advanced features such as handwriting recognition, optical character recognition (OCR), and integration with other productivity tools, further enhancing their utility and versatility.

In summary, a note-taking application is a powerful tool that empowers users to capture, organize, and access information effectively, thereby enhancing productivity, creativity, and collaboration in both personal and professional contexts.





    </Text>
    </Box>
}