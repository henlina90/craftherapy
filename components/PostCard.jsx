import React from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import { BiCalendarHeart } from "react-icons/bi";

import { grpahCMSImageLoader } from "../util";

const PostCard = ({ post }) => (
  <div className="p-0 lg:p-6 pb-12 mb-8 shadow-md bg-neutral-50 rounded-lg text-center">
    <div className="relative overflow-hidden shadow-md pb-80 mb-6">
      <img
        src={post.featuredImage.url}
        alt=""
        className="object-top absolute h-80 w-full object-cover shadow-md rounded-t-lg lg:rounded-lg"
      />
    </div>

    <div className="text-center block lg:flex mb-8 w-full">
      <div className="flex justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-4">
        <Image
          unoptimized
          loader={grpahCMSImageLoader}
          alt={post.author.name}
          height="25px"
          width="25px"
          className="align-middle rounded-full"
          src={post.author.photo.url}
        />
        <p className="inline align-middle ml-1">{post.author.name}</p>
      </div>
      <div className="flex justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
        <BiCalendarHeart className="align-middle text-2xl text-neutral-700" />{" "}
        <p className="inline align-middle ml-1">
          {moment(post.createdAt).format("MMM DD, YYYY")}
        </p>
      </div>
    </div>

    <h1 className="transition duration-700 mb-4 text-center cursor-pointer hover:text-neutral-600 text-2xl font-semibold">
      <Link href={`/post/${post.slug}`}>{post.title}</Link>
    </h1>

    <p className="text-md text-neutral-700 text-center mb-8">{post.excerpt}</p>
    <div className="text-center">
      <Link href={`/post/${post.slug}`}>
        <span className="mb-3 transition duration-500 ease transform hover:-translate-y-1 hover:bg-neutral-800 inline-block bg-neutral-900 text-md font-medium rounded-full text-white px-8 py-3 cursor-pointer">
          Continue Reading
        </span>
      </Link>
    </div>
  </div>
);

export default PostCard;
