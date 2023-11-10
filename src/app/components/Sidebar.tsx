export function Sidebar() {
   return (
      <div className="flex flex-col  items-center text-[0.6rem]">
         <div className="flex flex-col items-center justify-center rounded-lg h-20 w-16 hover:bg-gray-200">
            <img src="homeIcon.png" alt="Home Icon" />
            <p>Home</p>
         </div>
         <div className="flex flex-col items-center justify-center rounded-lg h-20 w-16 hover:bg-gray-200">
            <img src="shortsIcon.png" alt="Shorts Icon" />
            <p>Shorts</p>
         </div>
         <div className="flex flex-col items-center justify-center rounded-lg h-20 w-16 hover:bg-gray-200">
            <img src="subscriptionIcon.png" alt="Subscription Icon" />
            <p>Subscription</p>
         </div>
         <div className="flex flex-col items-center justify-center rounded-lg h-20 w-16 hover:bg-gray-200">
            <img src="youIcon.png" alt="You Icon" />
            <p>You</p>
         </div>
      </div>
   );
}
