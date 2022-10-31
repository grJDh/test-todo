type Props = {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  category: string;
};

const RadioButton = ({ name, value, onChange, category }: Props) => {
  return (
    <label className={`cursor-pointer mx-2 border-black ${category === value ? "border" : ""}`}>
      {value}
      <input
        className="hidden"
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default RadioButton;
