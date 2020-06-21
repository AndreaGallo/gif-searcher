import React  from "react";
import useUser from "hooks/useUser";
import { useLocation } from "wouter";

import "./index.css";

export default function Fav({ id }) {
  const { addFav, deleteFav, favs, isLogged } = useUser();
  const [, navigate] = useLocation();

  const isFaved = favs.some(favId => favId === id)

  const [label, emoji] = isFaved
    ? ["Remove Gif from favourites", "❌"]
    : ["Add Gif to favourites", "🧡"];

  const handleOnClick = () => {
    if (!isLogged) return navigate("/login");
    isFaved ? deleteFav() : addFav({ id });
  };

  return (
    <button className="gf-Fav" onClick={handleOnClick}>
      <span aria-label={label} role="img">
        {emoji}
      </span>
    </button>
  );
}
