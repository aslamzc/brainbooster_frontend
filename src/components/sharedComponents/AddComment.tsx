import ButtonRounded from "../button/ButtonRounded";

const AddComment = () => {
  return (
    <div className="flex w-full items-center justify-between rounded-60px bg-neutral-20 py-2 pe-2 ps-5 lg:ps-8 ">
      <input
        type="text"
        placeholder="Add a comment"
        className="me-3 w-full bg-inherit placeholder:text-neutral-300 focus:outline-none "
      />
      <ButtonRounded iconName="Send" />
    </div>
  );
};

export default AddComment;
