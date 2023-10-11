import Link from "next/link";

const NavTitle = () => {
  return (
    <div className="col-start-1 col-end-2 flex items-center">
      <Link href="/">
        <a>
          <img className="h-8 w-auto" src="/basket-color-icon.png" alt="logo" />
        </a>
      </Link>
    </div>
  );
};

export default NavTitle;
