// import React from 'react'
// import styled from 'styled-components'


// const Slider = ({data}) => {
//     const length=( (data.length+5)*17.8)
//     const[state,setState]=React.useState(length)

// //   setState()
// const Box = styled.div`
//   font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
//   color: black;
//   text-align: justify;
//   width: 95vw;
//   margin: auto;
//   border: 1px solid teal;
//   border-radius: 1vw;
//   padding: 1vw;
//   display:grid;
//   grid-template-columns: repeat( ${({length})=> length },1fr) ;
//   gap:1vw;
// overflow:hidden;
// transform: translateX(${state}vw);
// transition:1s;
// `;

// const ImageBox = styled.div`
// width: 18vw;
// `;



//   return (
//     <>
//     <div >
//         <button className='leftButton' >left</button>
//         <button className='rightButton'> right </button>
//      <Box length={data.length}>

//      {
//          data.map(({Image})=>{
//            return(
//             <div className='ImageBox'>
//             <img src={Image} alt="" className='Image_of_Slider'/>
//            </div>
//            )
//         }) 
//      }
     
//      </Box>

//     </div>
//     </>
//   )
// }

// export default Slider


import React, { useState } from "react";
import ReactDOM from "react-dom";
import ItemsCarousel from "react-items-carousel";


function Slider({data}) {
  const [active, setaAtive] = useState(0);
  console.log(data)
  return (
    <div className="sliderBox">
       <div>
      <ItemsCarousel
        autoPlay
        infiniteLoop={true}
        gutter={12}
        timeout={1}
        activePosition={"center"}
        chevronWidth={60}
        disableSwipe={false}
        alwaysShowChevrons={false}
        numberOfCards={2}
        slidesToScroll={2}
        outsideChevron={true}
        showSlither={false}
        firstAndLastGutter={false}
        activeItemIndex={active}
        requestToChangeActive={(value) => setaAtive(value)}
        rightChevron={">"}
        leftChevron={"<"}
      >

           {data.map(({Image}, i) => (
          <div 
            key={i}
            style={{
              height: 200,
              width:10,
              background: `url(${Image})`
            }}
          />
          ))}
         </ItemsCarousel>
         </div>
    </div>
  );
}

export default Slider;