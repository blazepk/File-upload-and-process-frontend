import { useState } from "react";
import Select from "./common/Select";

type Props = {
  sharedHeaders: any[] | null;
};

function Mapper({ sharedHeaders }: Props) {
  const options = sharedHeaders?.map((item: string) => ({
    value: item,
    displayValue: item,
  }));
  const mapperOptions = [
    {
      value: "single",
      displayValue: "Single",
    },
    {
      value: "multiple",
      displayValue: "Multiple",
    },
  ];

  const handleMapping = () => {};
  return (
    <div className="m-4">
      <div>
        {sharedHeaders?.map((item: string) => (
          <MapperRow
            item={item}
            mapperOptions={mapperOptions}
            options={options}
          />
        ))}
      </div>
      <button
        onClick={handleMapping}
        type="button"
        className="block w-40 ml-auto rounded-md bg-indigo-700 disabled:pointer-events-none disabled:opacity-50 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700"
      >
        Map Values
      </button>
    </div>
  );
}

type RowProps = {
  item: string;
  options: IOption[] | undefined;
  mapperOptions: IOption[] | undefined;
};
interface IOption {
  value: string;
  displayValue: string;
}

const MapperRow = ({ item, options, mapperOptions }: RowProps) => {
  const [mapping, setMapping] = useState<any>({
    item: "",
    mapsTo: "",
    mapType: "",
  });
  return (
    <div className="p-2 grid grid-cols-3 gap-x-3">
      <div>{item}</div>
      <Select label={"Select a field"} options={options} />
      <Select label={"Select a MapperType"} options={mapperOptions} />
    </div>
  );
};

export default Mapper;
