import React from 'react'
import Slider from './Slider';
import Recent from './RecentStory';
 import FeaturedPost from './FeaturedPost';
import Holiday from './Holiday';
let FrontPage = () => {
     return (
               <div>
                <Slider />
                <Recent />
                <FeaturedPost />
                <Holiday />
                </div>
     );
    
}
export default FrontPage;
