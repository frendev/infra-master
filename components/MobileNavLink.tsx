import Link from "next/link";
import React from "react";

type MobileNavLinkProps = {
  hrefAttr: string;
  linkText: string;
  mobileMenuHandler: () => void;
  children: React.ReactNode;
};

function MobileNavLink(props: MobileNavLinkProps) {
  const { children, mobileMenuHandler, hrefAttr, linkText } = props;

  return (
    <>
      <li onClick={mobileMenuHandler} className="flex items-center p-4">
        {children}
        <Link href={hrefAttr}>{linkText}</Link>
      </li>
    </>
  );
}

export default MobileNavLink;
