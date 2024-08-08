import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";

function ButtonRoundedPrimary() {
  return (
    <div>
      <Link href="/">
        <span className="group/button block rounded-full bg-primaryColor p-3 ">
          <IconArrowUpRight
            size={20}
            className="theme-transition-3 group-hover/button:rotate-45"
          />
        </span>
      </Link>
    </div>
  );
}

export default ButtonRoundedPrimary;
