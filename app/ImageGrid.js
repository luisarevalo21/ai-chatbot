"use client";
import { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import axios from "axios";

const fetchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/photos/random", {
    params: { query: "flowers", count: 9 },
    headers: {
      // Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
    },
  });
  return response.data;
};

export default function ImageGrid() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages().then(setImages);
  }, []);

  return (
    <ImageList cols={3} rowHeight={164}>
      {images.map(image => (
        <ImageListItem key={image.id}>
          <Image
            src={`${image.urls.small}?w=164&h=164&fit=crop&auto=format`}
            alt={"flowers"}
            width={164}
            height={164}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
