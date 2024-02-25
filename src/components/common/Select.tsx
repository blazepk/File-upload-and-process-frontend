interface IOption {
  value: string;
  displayValue: string;
}

type Props = {
  label: string;
  options: IOption[] | undefined;
};

function Select({ label, options }: Props) {
  return (
    <div>
      {/* <label
        htmlFor="fields"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label> */}
      <select
        // id="fields"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option selected>{label}</option>
        {options?.map((item: IOption) => {
          return <option value={item.value}>{item.displayValue}</option>;
        })}
      </select>
    </div>
  );
}

export default Select;
