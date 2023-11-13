import React, { useState, useEffect } from "react";

function ToyCard() {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    async function fetchToys() {
      const response = await fetch("http://localhost:3001/toys");
      const toys = await response.json();
      setToys(toys);
    }

    fetchToys(); // Call the function to fetch toys
  }, []);

  return (
    <div>
      {toys.map((toy, index) => (
        <div className="card" key={index}>
          <h2>{toy.name}</h2>
          <img
            src={toy.image}
            alt={toy.name}
            className="toy-avatar"
          />
          <p>{toy.likes} Likes </p>
          <button className="like-btn">Like {"<3"}</button>
          <button className="del-btn">Donate to GoodWill</button>
        </div>
      ))}
    </div>
  );
}

export default ToyCard;
