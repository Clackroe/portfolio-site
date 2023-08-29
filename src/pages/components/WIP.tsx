/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from "next/image";
import axios from "axios";
export default function WIP() {
  const getLatestRepos = async () => {
    // console.log("data", data);
    try {
      //   const username = data.githubUsername;

      const res = await axios.get(
        `https://api.github.com/search/repositories?q=user:clackroe+sort:author-date-asc`,
      );

      const repos = res.data.items;
      const latestSixRepos = repos.splice(0, 6);
      return latestSixRepos;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <h1 className="text-6xl font-bold">Work in Progress</h1>
        <p className="mt-3 pb-3 text-2xl">
          This page is still under construction.
        </p>
        <div className="w-screen border-t-2 py-4 "></div>
        <div className="">
          <Image
            className="rounded-full"
            alt={"My Image"}
            src={"/ProfilePic.png"}
            width={300}
            height={300}
          ></Image>
          <div className="flex items-center justify-center pt-2 text-2xl font-bold">
            Xander Cole
          </div>
        </div>
        <div className="flex items-center justify-center pb-4 pt-3">
          <a
            // href={userData.socialLinks.linkedin}
            href="https://www.linkedin.com/in/xander-cole/"
            target="_blank"
            className="text-base font-normal text-gray-600 hover:animate-spin dark:text-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-linkedin h-5 w-5"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </a>
          <div className="px-2">·</div>
          <a
            href={"https://github.com/Clackroe"}
            target="_blank"
            className="hover:animate-spin "
          >
            <svg
              className="bi bi-linkedin h-5 w-5"
              aria-describedby="desc"
              aria-labelledby="title"
              role="img"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <title>Github</title>
              <desc>A solid styled icon from Orion Icon Library.</desc>
              <path
                d="M32 0a32.021 32.021 0 0 0-10.1 62.4c1.6.3 2.2-.7 2.2-1.5v-6c-8.9 1.9-10.8-3.8-10.8-3.8-1.5-3.7-3.6-4.7-3.6-4.7-2.9-2 .2-1.9.2-1.9 3.2.2 4.9 3.3 4.9 3.3 2.9 4.9 7.5 3.5 9.3 2.7a6.93 6.93 0 0 1 2-4.3c-7.1-.8-14.6-3.6-14.6-15.8a12.27 12.27 0 0 1 3.3-8.6 11.965 11.965 0 0 1 .3-8.5s2.7-.9 8.8 3.3a30.873 30.873 0 0 1 8-1.1 30.292 30.292 0 0 1 8 1.1c6.1-4.1 8.8-3.3 8.8-3.3a11.965 11.965 0 0 1 .3 8.5 12.1 12.1 0 0 1 3.3 8.6c0 12.3-7.5 15-14.6 15.8a7.746 7.746 0 0 1 2.2 5.9v8.8c0 .9.6 1.8 2.2 1.5A32.021 32.021 0 0 0 32 0z"
                data-name="layer2"
                fill="currentColor"
              />
              <path
                d="M12.1 45.9c-.1.2-.3.2-.5.1s-.4-.3-.3-.5.3-.2.6-.1c.2.2.3.4.2.5zm1.3 1.5a.589.589 0 0 1-.8-.8.631.631 0 0 1 .7.1.494.494 0 0 1 .1.7zm1.3 1.8a.585.585 0 0 1-.7-.3.6.6 0 0 1 0-.8.585.585 0 0 1 .7.3c.2.3.2.7 0 .8zm1.7 1.8c-.2.2-.5.1-.8-.1-.3-.3-.4-.6-.2-.8a.619.619 0 0 1 .8.1.554.554 0 0 1 .2.8zm2.4 1c-.1.3-.4.4-.8.3s-.6-.4-.5-.7.4-.4.8-.3c.3.2.6.5.5.7zm2.6.2c0 .3-.3.5-.7.5s-.7-.2-.7-.5.3-.5.7-.5c.4.1.7.3.7.5zm2.4-.4q0 .45-.6.6a.691.691 0 0 1-.8-.3q0-.45.6-.6c.5-.1.8.1.8.3z"
                data-name="layer1"
                fill="#202020"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
