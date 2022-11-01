type Props = {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  category: string;
};

const RadioButton = ({ name, value, onChange, category }: Props) => {
  return (
    <label
      className={`cursor-pointer mx-2 hover:underline border-red-200 px-2 box-border flex justify-center items-center
                  ${category === value ? "border rounded-[3px]" : ""}`}
      data-testid="radioLabel"
    >
      <p className="box-border"></p>
      {value}
      <input
        className="hidden box-border"
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default RadioButton;
