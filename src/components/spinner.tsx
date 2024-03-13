import SvgGradient from "./svg-gradient";

export default function Spinner() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="lg:scale-[200%] xl:scale-[250%] stroke-[url(#gradient-primary)]"
    >
      <SvgGradient />
      <g className="animate-spin origin-center duration-[4s]">
        <circle
          cx="12"
          cy="12"
          r="9.5"
          fill="none"
          strokeWidth="1"
          strokeLinecap="round"
          className="animate-spinner-stroke"
          strokeDasharray={0}
        />
      </g>
    </svg>
  );
}
