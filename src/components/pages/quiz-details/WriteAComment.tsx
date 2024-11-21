import BorderHorizontalN40 from "@/components/customBorder/BorderHorizontalN40";

const WriteAComment = ({ bg = "white" }: { bg?: "white" | "gray" }) => {
  return (
    <form
      className={`flex flex-col gap-6 rounded-lg ${
        bg === "gray" ? "bg-neutral-30" : "bg-white"
      }  p-10`}
    >
      <h2 className="h4 font-semibold">Write a Comments</h2>
      <BorderHorizontalN40 />
      <div>
        <label className="lText mb-3 block font-medium" htmlFor="name">
          Name
        </label>
        <input
          className={`w-full rounded-32px border border-neutral-40  px-6 py-3 focus:outline-none ${
            bg === "white" ? "bg-neutral-20" : "bg-white"
          }`}
          id="name"
          type="text"
          placeholder="Enter Name..."
        />
      </div>
      <div>
        <label className="lText mb-3 block font-medium" htmlFor="email">
          Email
        </label>
        <input
          className={`w-full rounded-32px border border-neutral-40  px-6 py-3 focus:outline-none ${
            bg === "white" ? "bg-neutral-20" : "bg-white"
          }`}
          id="email"
          type="email"
          placeholder="Enter Email..."
        />
      </div>
      <div>
        <label className="lText mb-3 block font-medium" htmlFor="question">
          Write a Comments
        </label>
        <textarea
          className={`w-full appearance-none rounded-32px border border-neutral-40  px-6 py-3 leading-tight focus:outline-none ${
            bg === "white" ? "bg-neutral-20" : "bg-white"
          }`}
          id="question"
          rows={8}
          placeholder="Write you comments..."
        ></textarea>
      </div>
      <div className="mt-4">
        <button className="py group theme-transition-3 flex w-fit items-center justify-center gap-2 rounded-32px bg-primaryColor px-5 py-3 text-base font-semibold capitalize text-neutral-700 shadow-five hover:bg-bgColorTwo hover:text-white hover:shadow-five-theme lg:px-8 lg:py-4 ">
          Submit Comments
        </button>
      </div>
    </form>
  );
};

export default WriteAComment;
