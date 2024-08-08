const PasswordMustContain = ({ text }: { text: string }) => {
  return (
    <li className="flex items-center gap-2">
      <span className="h-1 w-1 rounded-full bg-secondaryColorTwo"></span>{" "}
      <span className="text-sText text-neutral-500">{text}</span>
    </li>
  );
};

export default PasswordMustContain;
