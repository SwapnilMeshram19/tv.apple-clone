import React from 'react'
import { useSelector } from 'react-redux'
import './Home.css'
import Slider from './Slider'
const Home = () => {
    const {data}=useSelector((store)=>store)
    // console.log(data)
    const CreatureCritters=data.filter((ele)=>ele.type='Creature_&_Critters')
    // console.log(CreatureCritters)
  return (
   <>
   <div className="header_logo_div">
    <div><img src="https://is4-ssl.mzstatic.com/image/thumb/Features113/v4/88/79/7b/88797be4-8033-392e-5124-237d9677bcac/source/1200x675mf.jpg" alt="" /></div>
    <div>Log in</div>
   </div>
   <div className="home_page_poster">
    <div><img src="https://is2-ssl.mzstatic.com/image/thumb/Features112/v4/a1/fb/e7/a1fbe76c-a6b8-248b-e19a-63bc94588caf/0ab1a582-f500-4585-a68e-5c5c7c6e1b7c.png/999x562sr.jpg" alt="" /></div>
   </div>
   <Slider data={CreatureCritters}/>
   </>
  )
}

export default Home