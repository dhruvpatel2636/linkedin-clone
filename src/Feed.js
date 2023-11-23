import React, { useEffect, useState } from "react";
import "./Feed.css";
import { IoMdCreate } from "react-icons/io";
import InputOption from "./InputOption";
import { FaRegImage } from "react-icons/fa6";
import { MdVideoLibrary } from "react-icons/md";
import { MdOutlineEventNote } from "react-icons/md";
import { TbArticle } from "react-icons/tb";
import Post from "./Post";
import { db } from "./Firebase";
import FlipMove from "react-flip-move";

import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Feed() {
const user=useSelector(selectUser);

  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  const getData = async () => {
    const collectionRef = collection(db, "posts");
    const q = query(collectionRef, orderBy("timestamp", "desc"));
    await getDocs(q).then((data) => {
      let feedData = data.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setPosts(feedData);
    });
  };
  useEffect(() => {
    getData();
  }, [posts]);

  const sendPost = async (e) => {
    e.preventDefault();
    try {
      const collectionRef = collection(db, "posts");
      await addDoc(collectionRef, {
        name:user.displayName,
        description:user.email,
        message: input,
        photoUrl: user.photoUrl || "",
        timestamp: serverTimestamp(),
      });
      setInput("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <IoMdCreate />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={sendPost}>Send</button>
          </form>
        </div>

        <div className="feed_inputOptions">
          <InputOption Icon={FaRegImage} title="Photo" color="#7085F9" />
          <InputOption Icon={MdVideoLibrary} title="Video" color="#E7A33E" />
          <InputOption
            Icon={MdOutlineEventNote}
            title="Event"
            color="#C0CBCD"
          />
          <InputOption Icon={TbArticle} title="Write article" color="#7FC15E" />
        </div>
      </div>

      {/* Posts */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
