import { RotatingLines } from "react-loader-spinner";

export default function Loader() {
  return (
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <RotatingLines
        visible={true}
        height="40"
        width="40"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
