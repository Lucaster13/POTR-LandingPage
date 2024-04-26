import Link from "next/link";

type IconCardLinkProps = {
  text: string;
  href: string;
};

function IconCardLink({ text, href }: IconCardLinkProps) {
  return (
    <Link
      href={href}
      className="text-gradient-primary text-nowrap inline w-fit"
    >
      {text}
    </Link>
  );
}

export const $POTRLink = <IconCardLink href="" text="$POTR" />;
export const $POTRLearnMoreLink = <IconCardLink href="" text="Learn More" />;
export const PotrAppLink = <IconCardLink href="" text="The Rand Kingdom" />;
