import React from 'react'
import Image from "next/image";

const imgComponent = () => {
  return (
    <div>
      {/* Image Tag saves a lot of bandwidth and load time as it loads image according to the screen size [for smaller screen - small size image will load] */}
      
      {/* By-default you have to give width and height to the Image tag */}
      {/* If you don't want to give width and height you can also set fill={true} but for that you have to make it's position also eg - position:relative [In this case only fill works] */}
      <Image src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" width={500} height={500} />
      {/* <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt="" /> */}
    </div>
  )
}

export default imgComponent