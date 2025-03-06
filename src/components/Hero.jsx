import { useRef } from "react";
import { useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasCLicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 3;

  const nextVideoRef = useRef(null);

  const handleVideoloaded = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const upcomingVIdeoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVDClick = () => {
    setHasCLicked(true);

    setCurrentIndex(upcomingVIdeoIndex);
  };
  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <>
      <div className="relative h-dvh w-screen overflow-x-hidden">
        <div
          id="video-frame"
          className="relative z-10 h-dvh w-screen
          overflow-hidden rounded-lg bg-blue-75"
        >
          <div
            className="mask-clip-path absolute-center
             absolute z-50 size-64 cursor-pointer
              overflow-hidden rounded-lg"
            onClick={handleMiniVDClick}
          >
            <div
              className="origin-center scale-50 opacity-0 transition-all
              duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVideoRef}
                src={getVideoSrc(currentIndex + 1)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center 
                scale-150 object-cover object-center"
                onLoadedData={handleVideoloaded}
              />
            </div>
          </div>

          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 
            size-64 opject-cover object-center"
            onLoadedData={handleVideoloaded}
          />

          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            // autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover
            object-center"
            onLoadedData={handleVideoloaded}
          />
        </div>
        <h1
          className="special-font hero-heading absolute 
        bottom-5 right-5 z-40 text-blue-75"
        >
          G<b>a</b>ming
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full ">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="spacial-font hero-heading text-blue-100">
              redefi<b>n</b>
              <b>e</b>
            </h1>

            <p
              className="mb-5 max-w-64 font-robert-regular
               text-blue-100"
            >
              Enter the Merafame Later <br /> Ulnlesh the play Economy
            </p>

            <Button
              id="watch-trailer"
              title="Watch trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
