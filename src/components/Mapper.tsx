import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import Select from "./common/Select";
import { TableContext } from "../context/TableDataContext";

type Props = {
  sharedHeaders: string[] | null;
};
interface IOption {
  value: string;
  displayValue: string;
}
type RowProps = {
  item: string;
  options: IOption[] | undefined;
  mapperOptions: IOption[] | undefined;
  setMappings: React.Dispatch<React.SetStateAction<TMapping[] | undefined>>;
};

type TMapping = {
  item: string;
  mapsTo: string;
  mapType: string;
};

const createMappings = (headers: string[] | null) => {
  return headers?.map((item: string) => ({
    item,
    mapsTo: "",
    mapType: "",
  }));
};

function Mapper({ sharedHeaders }: Props) {
  const [mappings, setMappings] = useState<TMapping[] | undefined>([]);
  const { uploadData } = useContext(TableContext) as any;
  console.log("mappings", mappings);

  useEffect(() => {
    setMappings(createMappings(sharedHeaders));
  }, [sharedHeaders]);

  const options = useMemo(
    () =>
      sharedHeaders?.map((item: string) => ({
        value: item,
        displayValue: item,
      })),
    [sharedHeaders]
  );
  const mapperOptions = useMemo(
    () => [
      {
        value: "single",
        displayValue: "Single",
      },
      {
        value: "multiple",
        displayValue: "Multiple",
      },
    ],
    []
  );
  const handleMapping = () => {};
  return (
    <div className="m-4">
      <div>
        {sharedHeaders?.map((item: string) => (
          <MapperRow
            key={item}
            item={item}
            mapperOptions={mapperOptions}
            options={options}
            setMappings={setMappings}
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

const MapperRow: React.FC<RowProps> = ({
  item,
  options,
  mapperOptions,
  setMappings,
}) => {
  //   const [mapping, setMapping] = useState<TMapping>({
  //     item,
  //     mapsTo: "",
  //     mapType: "",
  //   });
  const handleField = useCallback((e: React.ChangeEvent) => {
    setMappings((prev) => {
      return prev?.map((mapping) => {
        if (mapping.item === item) {
          const updatedMappedValue = mapping;
          updatedMappedValue.mapsTo = (e.target as HTMLSelectElement).value;
          return updatedMappedValue;
        }
        return mapping;
      });
    });
  }, []);
  const handleType = useCallback((e: React.ChangeEvent) => {
    setMappings((prev) => {
      return prev?.map((mapping) => {
        if (mapping.item === item) {
          const updatedMappedValue = mapping;
          updatedMappedValue.mapType = (e.target as HTMLSelectElement).value;
          return updatedMappedValue;
        }
        return mapping;
      });
    });
  }, []);
  return (
    <div className="p-2 grid grid-cols-3 gap-x-3">
      <div>{item}</div>
      <Select
        label={"Select a field"}
        options={options}
        handleChange={handleField}
      />
      <Select
        label={"Select a MapperType"}
        options={mapperOptions}
        handleChange={handleType}
      />
    </div>
  );
};

export default Mapper;
