export default function Badge({ className, type }) {
  const firstLetter = type.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = type.slice(1);
  const capitalizedType = firstLetterCap + remainingLetters;

  let backGround = "bg-[#E17654]";

  switch (type) {
    case "simple":
      backGround = "bg-[#E17654]";

      break;

    case "rugged":
      backGround = "bg-[#115E59]";
      break;

    case "luxury":
      backGround = "bg-[#161616]";
      break;
  }

  return (
    <i className={`rounded-md px-3 py-1 text-white ${className} ${backGround}`}>
      {capitalizedType}
    </i>
  );
}
