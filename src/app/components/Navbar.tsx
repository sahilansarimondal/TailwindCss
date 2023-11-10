export function Navbar() {
   return (
      <div className="flex sticky top-0 justify-between bg-white px-3 py-2 ">
         <div className="flex items-center">
            <div className=" hover:bg-slate-200 p-2 mx-2 rounded-full">
               <img className="  h-4 " src="menu.png" alt="menu" />
            </div>

            <img className="h-7" src="logo.png" alt="YouTube" />
         </div>
         <div className="hidden md:flex items-center">
            <div className="flex items-center px-4 border-2  rounded-full ">
               <input
                  className="outline-none h-8"
                  type="text"
                  placeholder="Search"
               />
               <img
                  className="h-4 border-l-2 border-slate-400 pl-3 "
                  src="searchIcon.png"
                  alt="Search"
               />
            </div>
            <div className="bg-slate-100 hover:bg-slate-200 ml-4  p-2 rounded-full">
               <img className="h-4" src="microphone.png" alt="microphone" />
            </div>
         </div>

         <div className="flex items-center">
            <div className="hover:bg-slate-200 ml-4  p-2 rounded-full md:hidden">
               <img className="h-4  " src="searchIcon.png" alt="Search" />
            </div>
            <div className="hover:bg-slate-200 ml-4  p-2 rounded-full md:hidden">
               <img className="h-4" src="microphone.png" alt="microphone" />
            </div>
            <div className="hover:bg-slate-200  mx-3 p-2 rounded-full">
               <img className="h-4" src="add-photo.png" alt="bell" />
            </div>
            <div className="hover:bg-slate-200  mx-1 p-2 rounded-full">
               <img className="h-4" src="bell.png" alt="bell" />
            </div>

            <img
               className="w-8 h-8 rounded-full  mx-3"
               src="catProfile.avif"
               alt="Profile"
            />
         </div>
      </div>
   );
}
