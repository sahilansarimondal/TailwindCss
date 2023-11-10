export function Video(props: any) {
   return (
      <div>
         <img className="rounded-lg" src={props.thumbnail} alt="video thumbnail" />
         <div className="flex p-3">
            <div className="basis-1/6">
               <img
                  className="w-8 h-8 rounded-full"
                  src={props.channelImage}
                  alt="channel Image"
               />
            </div>
            <div className="basis-5/6">
               <h3 className="flex font-bold ">
                  {props.title}
               </h3>
               <p className="text-slate-500 text-sm">{props.channel}</p>
               <div className="flex text-sm text-slate-600">
                  {props.views} | {props.tiemstamp}
               </div>
            </div>
         </div>
      </div>
   );
}


