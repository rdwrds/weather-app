import { SyncLoader } from "react-spinners";

const Loading = () => {
  const override = {
    margin: "auto",
  };

  return (
    <div class="debug align-center flex flex-col justify-center gap-2 py-2">
      <h1 class="w-full">Loading Local Forecast...</h1>
      <SyncLoader color={"#00ccFF"} cssOverride={override} />
    </div>
  );
  0;
};
export default Loading;
