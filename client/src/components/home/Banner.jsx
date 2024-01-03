import Carousel from 'react-multi-carousel'; //03-01-2024

import 'react-multi-carousel/lib/styles.css'; // 03-01-2024 To edit css of Carousel

import {styled} from '@mui/material'; //03-01-2024

import { bannerData } from '../../constants/data';  // 03-01-2024

const Image =styled('img')
(
    { width: '100%',
    height: 280 // To give height to image of banner
}
    
)



//03-01-2024 giving responsiveness
const responsive = {
    
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Banner = () =>{
    return (
     <Carousel
      responsive={responsive}
      swipeable={false} // To avoid displaying image when swiping
      draggable={false}
      infinite={true}  // To display images continuosly in banner
      autoPlay ={true}
      autoPlaySpeed={3000} // Autoplay after 3 seconds
      keyBoardControl={true}
      slidesToSlide={1}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      
      containerClass="carousel-container"
     >
        {
            bannerData.map(data =>
                (
                    <Image src={data.url} alt="banner"/>
                ))
        }

     </Carousel>
    )
}

export default Banner;