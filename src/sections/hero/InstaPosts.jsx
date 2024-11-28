import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import post1 from "../../images/post1.jpg";
import post2 from "../../images/post2.jpg";
import post3 from "../../images/post3.webp";
import post4 from "../../images/post4.jpg";
import post5 from "../../images/post5.jpg";
import post6 from "../../images/post6.webp";
import post7 from "../../images/post7.jpg";
import post8 from "../../images/post8.jpg";
import post9 from "../../images/post9.jpg";
import post10 from "../../images/post10.jpg";
import { LazyImage } from "../../utils/lazyImage";

// Add CSS to hide scrollbars while keeping functionality
const scrollbarHideStyles = {
   '-ms-overflow-style': 'none',  /* IE and Edge */
   'scrollbarWidth': 'none',      /* Firefox */
   '&::-webkit-scrollbar': {      /* Chrome, Safari and Opera */
      display: 'none'
   }
};

const posts = [
   { id: 1, image: post1, webp: post1 },
   { id: 2, image: post2, webp: post2 },
   { id: 3, image: post3, webp: post3 },
   { id: 4, image: post4, webp: post4 },
   { id: 5, image: post5, webp: post5 },
   { id: 6, image: post6, webp: post6 },
   { id: 7, image: post7, webp: post7 },
   { id: 8, image: post8, webp: post8 },
   { id: 9, image: post9, webp: post9 },
   { id: 10, image: post10, webp: post10 },
];

const InstaPosts = () => {
   const scrollRef = useRef(null);
   const [isDragging, setIsDragging] = useState(false);
   const [startX, setStartX] = useState(0);
   const [scrollLeft, setScrollLeft] = useState(0);
   const [selectedImage, setSelectedImage] = useState(null);

   // Handle body scroll lock when modal is open
   useEffect(() => {
      if (selectedImage) {
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "unset";
      }

      return () => {
         document.body.style.overflow = "unset";
      };
   }, [selectedImage]);

   const handleMouseDown = (e) => {
      if (selectedImage) return; // Prevent dragging when modal is open
      setIsDragging(true);
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
   };

   const handleMouseUp = () => {
      setIsDragging(false);
   };

   const handleMouseLeave = () => {
      setIsDragging(false);
   };

   const handleMouseMove = (e) => {
      if (!isDragging || selectedImage) return;
      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      scrollRef.current.scrollLeft = scrollLeft - walk;
   };

   const handleImageClick = (e, image) => {
      if (!isDragging) {
         setSelectedImage(image);
      }
   };

   const handleModalClick = (e) => {
      // Only close if clicking the backdrop (not the image)
      if (e.target === e.currentTarget) {
         setSelectedImage(null);
      }
   };

   return (
      <div className="w-full bg-[#1f1f27] py-8 sm:py-16 px-4 md:px-8">
         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-8 sm:mb-12">
            FOLLOW US ON INSTAGRAM
         </h1>

         {/* Touch-friendly scroll container with mouse drag support */}
         <div
            ref={scrollRef}
            className="w-full overflow-x-auto cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            style={scrollbarHideStyles}
         >
            <div
               className="flex gap-2 sm:gap-4 pb-4"
               style={{
                  WebkitOverflowScrolling: "touch",
                  userSelect: "none",
               }}
            >
               {posts.map((post) => (
                  <div
                     key={post.id}
                     className="flex-none w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] relative first:ml-[max(0px,calc((100%-1200px)/2))]"
                     onClick={(e) => handleImageClick(e, post.image)}
                  >
                     <LazyImage
                        src={post.image}
                        webpSrc={post.webp}
                        fallbackSrc="/images/placeholder.jpg"
                        alt={`Instagram Post ${post.id}`}
                        className="w-full h-full object-cover rounded-lg select-none cursor-pointer"
                     />
                     <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  </div>
               ))}
            </div>
         </div>

         {/* Current position indicator */}
         <div className="text-white/50 text-xs sm:text-sm text-center mt-4">
            Drag to scroll
         </div>

         {/* Modal for larger image view */}
         {selectedImage && (
            <div
               className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
               onClick={handleModalClick}
               style={scrollbarHideStyles}
            >
               <button
                  className="absolute top-2 sm:top-4 right-2 sm:right-4 text-white hover:text-gray-300 transition-colors"
                  onClick={() => setSelectedImage(null)}
               >
                  <X size={24} className="sm:w-8 sm:h-8" />
               </button>
               <div className="w-[90vw] h-[70vh] sm:w-[80vw] sm:h-[80vh] relative flex items-center justify-center">
                  <img
                     src={selectedImage}
                     alt="Selected post"
                     className="w-full h-full object-contain"
                     loading="lazy"
                     style={{
                        maxWidth: "1200px",
                        maxHeight: "800px",
                     }}
                  />
               </div>
            </div>
         )}
      </div>
   );
};

export default InstaPosts;
