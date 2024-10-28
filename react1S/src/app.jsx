import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'

import { FaTimes, FaThumbsUp, FaComment, FaShare } from 'react-icons/fa';
import './app.css';

const Post = ({ profilePic, username, time, content, postImage, onDelete }) => {
  return (
    <div class="bg-white rounded-lg shadow-md p-4 mt-4 relative">
      <button onClick={onDelete} class="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
        <FaTimes />
      </button>
      <div class="flex items-center">
        <img src={profilePic} alt="Profile Pic" class="w-10 h-10 rounded-full mr-2" />
        <div>
          <p class="font-bold">{username}</p>
          <p class="text-gray-500 text-sm">{time} · 🌎</p>
        </div>
      </div>
      <div class="mt-3">
        <p class="text-gray-900">{content}</p>
      </div>
      {postImage && (
        <div class="mt-3">
          <img src={postImage} alt="Post" class="w-full rounded-lg" />
        </div>
      )}
      <div class="flex justify-between mt-3">
        <div class="flex items-center">
          <FaThumbsUp />
          <p class="ml-1 text-gray-500">Like</p>
        </div>
        <div class="flex items-center">
          <FaComment />
          <p class="ml-1 text-gray-500">Comment</p>
        </div>
        <div class="flex items-center">
          <FaShare />
          <p class="ml-1 text-gray-500">Share</p>
        </div>
      </div>
    </div>
  );
};

export function App() {
  const [posts, setPosts] = useState([
    {
      profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYezR0s-bfaXPzMuzL_miHMUVmIKgnuHhMnQ&s",
      username: "lamborghini ",
      time: "22h",
      content: "We have all vehicles covered from the cheapest Lamborghini model (Lamborghini Jalpa priced from $52,580) to the most expensive 🎉",
      postImage: "https://external-preview.redd.it/unveiling-the-most-expensive-lamborghini-concept-cars-v0-h0QMkRurgr4ysNaA3RcaLtKFT5Phxs2IZEkh8mu8ohw.jpg?width=1080&crop=smart&auto=webp&s=f3c2b44fcd5f569251741c29749cc718c1b9cf64"
    },
    {
      profilePic: "https://t20caribbeanusa.com/wp-content/uploads/2024/03/ICC_T20_World_Cup_2024.webp",
      username: "Cricket Fanatic",
      time: "1d",
      content: "What a thrilling finish! Can't believe we won in the last over! ",
      postImage: "https://www.mlive.com/resizer/v2/JVGQ3XVIFFGIJJKOMLXSBD4QSI.jpeg?auth=0f7f703bf85d5ea7e9f21d8cd6786c844b7e7fd0067a9ffdf935c431c85649a2&width=1280&quality=90"
    },
    {
      profilePic: "https://www.instituteforgovernment.org.uk/sites/default/files/styles/16_9_desktop/public/2023-03/premier-league-football-1504x846px.webp?h=dd1b06b1&itok=3dihrnpr",
      username: "Sports Guru",
      time: "3d",
      content: "Analyzing the team's performance this season. What do you think?⚾",
      postImage: "https://i.pinimg.com/736x/6c/f6/43/6cf643a0e1ac88779c797fe07c0bfbfb.jpg"
    },
    {
      profilePic: "https://cdn.vectorstock.com/i/2000v/93/28/palestine-flag-button-vector-1759328.avif",
      username: "Support Palestine",
      time: "5d",
      content: "The Palestinian people are Arabs who live—and have lived throughout history—in a certain geographical region in the Middle East. Generally, Palestine is used to refer to the geographic region spanning from the Mediterranean Sea in the east to the Jordan River in the west. ",
      postImage: "https://cdn2.opendemocracy.net/media/images/GettyImages-1857273694.max-760x504.jpg"
    },
    {
      profilePic: "https://scontent.fkhi5-2.fna.fbcdn.net/v/t39.30808-6/409008321_122094513620153270_4706994950135841760_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFKhb-W1ah4wuHe7Fq3sEX9WIqZJ5DbZG5YipknkNtkbi-orTpDvw3CltE5zFBYL75s_UchLk0L3TJ5F4nsLBab&_nc_ohc=QIjgQhN6MfYQ7kNvgFyXC-n&_nc_zt=23&_nc_ht=scontent.fkhi5-2.fna&_nc_gid=ASLb_Un1o19QI6p5SuBmInZ&oh=00_AYDAlzh_lFUSdLaZBcv9Y9Tx1SmKC-VwyGaCW416oYOJcw&oe=67255C74",
      username: "Saylani SMIT",
      time: "1w",
      content: "Saylani Mass IT Training program is an institute delivering Latest IT education free of cost.!",
      postImage: "https://scontent.fkhi5-2.fna.fbcdn.net/v/t31.18172-8/12829309_1360865667272706_2142070370632607323_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0327a3&_nc_eui2=AeE7U2hCW_B_jrqstTaI0u_NQl_8RfYhrZtCX_xF9iGtm11xguefPAmpGCoGCfbps0Gk6oGCqCtPRGAmtAXHppfA&_nc_ohc=-jvdw0MNBwYQ7kNvgGrQ-ek&_nc_zt=23&_nc_ht=scontent.fkhi5-2.fna&_nc_gid=AjhPNhnfTNDH0nkUL1Wz8Iy&oh=00_AYCPzdkdLOtNmSEUXgZ8bun9V_eZZlLd8g2AUMnZNvySFA&oe=6746FDAD"
    },
  ]);

  const handleDeletePost = (index) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  return (
    <>
      {posts.map((post, index) => (
        <Post
          key={index}
          profilePic={post.profilePic}
          username={post.username}
          time={post.time}
          content={post.content}
          postImage={post.postImage}
          onDelete={() => handleDeletePost(index)}
        />
      ))}
    </>
  );
}