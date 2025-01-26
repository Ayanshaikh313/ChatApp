import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="color2 w-screen h-auto flex flex-col md:flex-row">
        <div className="flex-col flex-wrap p-10 md:p-20 mx-5 md:mx-20 my-10 items-center">
          <h1 className="font-bold text-2xl md:text-3xl">ChatSync-Chat With</h1>
          <h1 className="font-bold text-2xl md:text-3xl">your Friends And More!</h1>
          <span className="md:flex">
            Welcome to ChatSync, the ultimate chat application for connecting with your friends and family in real-time. Enjoy seamless conversations, share moments, and stay connected like never before.
          </span>
        </div>
        <div className="flex-col flex-wrap p-10 md:p-20 gap-3 w-full md:w-fit">
          <img className="w-full md:w-fit" src="/Arrow.jpg" width={200} height={200} alt="a goal means an arrow to achieve goal we have to work hard" />
        </div>
      </div>
      
      {/* Key Features Section */}
      <div className="p-10 md:p-20 bg-white shadow-lg w-full">
        <h2 className="font-bold text-xl md:text-2xl mb-10 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-blue-100 p-4 rounded-lg flex-col items-center justify-center shadow-md transition-transform transform hover:scale-105 hover:shadow-xl">
              <img className="rounded-full mb-4" width={55} height={55} src={feature.imgSrc} alt={feature.alt} />
              <h3 className="font-semibold text-lg text-center">{feature.title}</h3>
              <p className="text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    imgSrc: "/Real.jpg",
    title: "Real-time Messaging",
    description: "Connect with friends and family instantly.",
    alt: "Real-time Messaging"
  },
  {
    imgSrc: "/group.png",
    title: "Group Chats",
    description: "Seamless communication with multiple people.",
    alt: "Group Chats"
  },
  {
    imgSrc: "/media.png",
    title: "Media Sharing",
    description: "Share photos, videos, and documents effortlessly.",
    alt: "Media Sharing"
  },
  {
    imgSrc: "/customize.png",
    title: "Customizable Themes",
    description: "Personalize your chat experience with themes.",
    alt: "Customizable Themes"
  },
  {
    imgSrc: "/encrypt.png",
    title: "End-to-End Encryption",
    description: "Secure conversations with top-notch encryption.",
    alt: "End-to-End Encryption"
  },
  {
    imgSrc: "/earthconnect.png",
    title: "Earth Connect",
    description: "Connect with users around the globe and share experiences in real-time.",
    alt: "Earth Connect"
  },
  {
    imgSrc: "/doubt.png",
    title: "Clear Your Doubts",
    description: "Make high-quality voice and video calls with your contacts.",
    alt: "Clear Your Doubts"
  },
  {
    imgSrc: "/chatbot.png",
    title: "Chat Bots",
    description: "Interact with AI-powered chatbots for instant assistance.",
    alt: "Chat Bots"
  },
];

export const metadata = {
  title: 'Home-ChatSync',
  description: 'ChatSync is a chat application that allows you to chat with your friends and family in real-time.',
}
