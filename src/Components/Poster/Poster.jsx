

import Posterimg from '/src/assets/Banner/poster.jpg';

const Poster = () => {
  return (
    <div className="w-full overflow-hidden rounded-xl">
      <img
        src={Posterimg}
        alt="Banner"
        className="w-full h-auto sm:h-96 md:h-48 lg:h-80 xl:h-[700px] object-cover object-center"
      />
    </div>
  );
};

export default Poster;



// import Posterimg from '/src/assets/Banner/poster.jpg';

// const Poster = () => {
//   return (
//     <div className="w-full overflow-hidden rounded-xl aspect-[16/9] md:aspect-auto">
//       <img
//         src={Posterimg}
//         alt="Banner"
//         className="w-full h-full object-cover object-center md:h-48 lg:h-80 xl:h-[700px]"
//       />
//     </div>
//   );
// };

export default Poster
