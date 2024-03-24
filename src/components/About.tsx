import { Avatar, Button } from "./ui";
import { Lucide, Simple } from "./icons";

export default () => {
  return (
    <div className="flex flex-col items-start gap-6 lg:gap-8 px-3 lg:px-6 py-4">
      <div className="flex flex-row items-center gap-4">
        <Avatar src="/favicon.svg" alt="profile-picture">
          <Lucide.IconUser className="size-2/3" />
        </Avatar>

        <div className="flex flex-col items-start gap-2">
          <h1 className="font-medium text-lg lg:text-xl">flamrdevs</h1>
          {/* <h2 className="font-medium text-2xl lg:text-3xl">UI/UX designer</h2> */}
        </div>
      </div>

      {/* <div>
         简介
       </div> */}
    </div>
  );
};
