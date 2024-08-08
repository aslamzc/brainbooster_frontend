const CheckBoxWhiteDot = ({ id }: { id: string }) => {
  return (
    <div className="round-white-dot">
      <input type="checkbox" id={id} />
      <label htmlFor={id}></label>
    </div>
  );
};

export default CheckBoxWhiteDot;
