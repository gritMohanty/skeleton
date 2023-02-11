import "./Skeleton.css";

const SkeletonElement = ({ type, style }) => {
  const classes = `skeleton ${type}`;
  return <div className={classes} style={style ? style : null}></div>;
};

export default SkeletonElement;
