import React from 'react'
// import Posterimg from '/src/assets/Banner/poster.jpg';

// const Poster = () => {
//   return (
//     <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-xl">
//       <img
//         src={Posterimg}
//         alt="Banner"
//         className="w-full h-full object-cover"
//       />
//     </div>
//   )
// }

// export default Poster


import Posterimg from '/src/assets/Banner/poster.jpg';

const Poster = () => {
  return (
    <div className="w-full h-36 sm:h-48 md:h-64 lg:h-80 xl:h-[500px] overflow-hidden rounded-xl">
      <img
        src={Posterimg}
        alt="Banner"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

export default Poster;
