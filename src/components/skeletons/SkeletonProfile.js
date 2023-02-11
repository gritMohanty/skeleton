import Shimmer from "./Shimmer";
import { useRef, useEffect } from "react";
import SkeletonElement from "./SkeletonElement";

const SkeletonCard = ({ lines = 1, width = 500, height = 600 }) => {
  const skeletonRef = useRef(null);
  let linesArray = [];
  for (let i = 0; i < lines; i++)
    linesArray.push({ id: Number(Math.random() * 100).toFixed(1) });

  useEffect(() => {
    skeletonRef.current.style.width = `${width}px`;
    skeletonRef.current.style.height = `${height}px`;
  }, []);

  return (
    <div className="skeleton-wrapper" ref={skeletonRef}>
      <div className="skeleton-profile">
        <SkeletonElement type="avatar" />
        <div className="skeleton-profile-content">
          <SkeletonElement type="title" />
          {linesArray.map((l) => (
            <SkeletonElement key={l.id} type="text" />
          ))}
        </div>
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonCard;
