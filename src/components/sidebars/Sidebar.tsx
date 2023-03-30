import { useState } from "react";

import Open from "./Open";
import Closed from "./Closed";

const Sidebar = () => {
  const [isShown, setIsShown] = useState(false);
  const sidebarWidth = isShown ? "w-64" : "w-36";

  return (
    <>
      <div
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        className="w-80"
      >
        <div className={`h-screen ${sidebarWidth} border-r-2 border-black`}>
          {isShown ? <Open /> : <Closed />}
        </div>
      </div>
    </>
  );
};

{
}

export default Sidebar;
