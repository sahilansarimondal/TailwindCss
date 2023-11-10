import { Sidebar } from "./components/Sidebar";
import { Video } from "./components/Video";

const videos = [
   {
      id: 1,
      title: "Which is the best apple Selecon ever..",
      views: "330K viesw",
      channel: "freecodecamp",
      tiemstamp: "9 Months ago",
      channelImage: "catProfile.avif",
      thumbnail: "thumbnail.jpg",
   },
   {
      id: 2,
      title: "Which is the best apple Selecon ever..",
      views: "330K viesw",
      channel: "freecodecamp",
      tiemstamp: "2 Months ago",
      channelImage: "catProfile.avif",
      thumbnail: "thumbnail.jpg",
   },
   {
      id: 3,
      title: "Which is the best apple Selecon ever..",
      views: "330K viesw",
      channel: "freecodecamp",
      tiemstamp: "9 Months ago",
      channelImage: "catProfile.avif",
      thumbnail: "thumbnail.jpg",
   },
   {
      id: 4,
      title: "Which is the best apple Selecon ever..",
      views: "330K viesw",
      channel: "freecodecamp",
      tiemstamp: "9 Months ago",
      channelImage: "catProfile.avif",
      thumbnail: "thumbnail.jpg",
   },
   {
      id: 5,
      title: "Which is the best apple Selecon ever..",
      views: "330K viesw",
      channel: "freecodecamp",
      tiemstamp: "9 Months ago",
      channelImage: "catProfile.avif",
      thumbnail: "thumbnail.jpg",
   },
   {
      id: 6,
      title: "Which is the best apple Selecon ever..",
      views: "330K viesw",
      channel: "freecodecamp",
      tiemstamp: "9 Months ago",
      channelImage: "catProfile.avif",
      thumbnail: "thumbnail.jpg",
   },
   {
      id: 7,
      title: "Which is the best apple Selecon ever..",
      views: "330K viesw",
      channel: "freecodecamp",
      tiemstamp: "9 Months ago",
      channelImage: "catProfile.avif",
      thumbnail: "thumbnail.jpg",
   },
   {
      id: 8,
      title: "Which is the best apple Selecon ever..",
      views: "330K viesw",
      channel: "freecodecamp",
      tiemstamp: "9 Months ago",
      channelImage: "catProfile.avif",
      thumbnail: "thumbnail.jpg",
   },
   {
      id: 9,
      title: "Which is the best apple Selecon ever..",
      views: "330K viesw",
      channel: "freecodecamp",
      tiemstamp: "9 Months ago",
      channelImage: "catProfile.avif",
      thumbnail: "thumbnail.jpg",
   },
   {
      id: 10,
      title: "Which is the best apple Selecon ever..",
      views: "330K viesw",
      channel: "freecodecamp",
      tiemstamp: "9 Months ago",
      channelImage: "catProfile.avif",
      thumbnail: "thumbnail.jpg",
   },
   {
      id: 11,
      title: "Which is the best apple Selecon ever..",
      views: "330K viesw",
      channel: "freecodecamp",
      tiemstamp: "9 Months ago",
      channelImage: "catProfile.avif",
      thumbnail: "thumbnail.jpg",
   },
   {
      id: 12,
      title: "Which is the best apple Selecon ever..",
      views: "330K viesw",
      channel: "freecodecamp",
      tiemstamp: "9 Months ago",
      channelImage: "catProfile.avif",
      thumbnail: "thumbnail.jpg",
   },
   {
      id: 13,
      title: "Which is the best apple Selecon ever..",
      views: "330K viesw",
      channel: "freecodecamp",
      tiemstamp: "9 Months ago",
      channelImage: "catProfile.avif",
      thumbnail: "thumbnail.jpg",
   },
   {
      id: 14,
      title: "Which is the best apple Selecon ever..",
      views: "330K viesw",
      channel: "freecodecamp",
      tiemstamp: "9 Months ago",
      channelImage: "catProfile.avif",
      thumbnail: "thumbnail.jpg",
   },
   {
      id: 15,
      title: "Which is the best apple Selecon ever..",
      views: "330K viesw",
      channel: "freecodecamp",
      tiemstamp: "9 Months ago",
      channelImage: "catProfile.avif",
      thumbnail: "thumbnail.jpg",
   },
   {
      id: 16,
      title: "Which is the best apple Selecon ever..",
      views: "330K viesw",
      channel: "freecodecamp",
      tiemstamp: "9 Months ago",
      channelImage: "catProfile.avif",
      thumbnail: "thumbnail.jpg",
   },
];

export default function Home() {
   return (
      <div className="flex">
         <div className="fixed  p-2">
            <Sidebar />
         </div>
         <div className="grid pr-6 pl-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            {videos.map((video) => {
               return (
                  <div className="px-2 py-4">
                     <Video
                        key={video.id}
                        title={video.title}
                        views={video.views}
                        channel={video.channel}
                        tiemstamp={video.tiemstamp}
                        channelImage={video.channelImage}
                        thumbnail={video.thumbnail}
                     />
                  </div>
               );
            })}
         </div>
      </div>
   );
}
