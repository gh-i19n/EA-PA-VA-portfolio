type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 108 48"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M20 2h3l18 41h5v3H27v-3h6l-5-12H12L7 43h6v3H0v-3h4L20 2Zm-6.5 25h13L20 11l-6.5 16Z"
      />
      <circle cx="52" cy="42.5" r="3.5" />
      <path
        fillRule="evenodd"
        d="M82 2h3l18 41h5v3H89v-3h6l-5-12H74l-5 12h6v3H62v-3h4L82 2Zm-6.5 25h13L82 11l-6.5 16Z"
      />
    </svg>
  );
}
