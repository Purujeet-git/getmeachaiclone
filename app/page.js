import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex items-center text-white justify-center h-[44vh] flex-col gap-y-4">
        <p className="flex gap-4 justify-center items-center font-bold text-4xl">Buy Me a chai!! <img width={60} src="maker-happy-cup.gif"></img></p>
        <p>A CrowdFunding platform for creators. Get funded by your fans and followers.</p>
        <div>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Start here
            </span>
          </button>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Read More
            </span>
          </button></div>
      </div>
      <div className="bg-white h-0.5 opacity-10"></div>
      <p className="text-white text-xl font-bold flex items-center justify-center py-10">Your Fans can buy you a chai!!</p>
      <div className="flex justify-around py-10 ">
      <div className="text-white flex flex-col justify-center items-center"><img className="rounded-full" width={90} src="https://imgs.search.brave.com/meKV7CJXMvHSPZJAZ7Kjv9kX8HJlo5rOH4UWUcLJNEY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzQxLzkyLzA2/LzM2MF9GXzg0MTky/MDY4OV9Id29mU0N6/TmY2cWs2R1B5a0Zs/ZGdTb1R3UElGb1pW/RS5qcGc"></img><p className="text-white py-3">Fans Want to help </p>
      <p>Your fans are available to support you</p></div>
      <div className="text-white flex flex-col justify-center items-center"><img className="rounded-full" width={90} src="coin.gif"></img><p className="text-white py-3">Fans want to contribute</p>
      <p>Your Fans are willing to contribute financially</p></div>
      <div className="text-white flex flex-col justify-center items-center"><img className="rounded-full" width={90} src="group.gif"></img><p className="text-white py-3">Fans want to collaborate</p>
      <p>Your fans are ready to collaborate with you.</p></div>
      </div>
      <div className="bg-white h-0.5 opacity-10"></div>
      <div className="flex flex-col text-white items-center justify-center py-5">
        <p className="font-bold text-2xl py-6 ">Learn More About US</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/S8lZN5f8jhY?si=Df8ZiDccwyiuuCik" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

    </>
  );
}
