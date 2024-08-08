const CheckBoxWhite = ({ id }: { id: string }) => {
  return (
    <div className="round-white">
      <input type="checkbox" id={id} />
      <label htmlFor={id}></label>
    </div>
  );
};

export default CheckBoxWhite;
