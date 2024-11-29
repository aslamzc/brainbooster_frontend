"use client";
import { useTranslation } from "react-i18next";
import ButtonRounded from "../button/ButtonRounded";

const SearchBarPrimary = ({
  placeholder = "Search",
  className = "bg-white border-neutral-40",
  handleSearch,
}: {
  placeholder?: string;
  className?: string;
  handleSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={`flex items-center justify-between rounded-60px border   py-2 pe-2 ps-5 lg:ps-8 ${className}`}
    >
      <input
        type="text"
        placeholder={t('text_8')}
        className="me-3 w-full bg-inherit placeholder:text-neutral-300 focus:outline-none "
        onChange={handleSearch}
      />
      <ButtonRounded iconName="Search" />
    </div>
  );
};

export default SearchBarPrimary;
