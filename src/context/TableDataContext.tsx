import React from "react";

export const TableContext = React.createContext<any>(null);
type Props = {
  children: React.ReactNode;
};

function TableDataContext({ children }: Props) {
  const [uploadData, setUploadData] = React.useState<any>();
  return (
    <TableContext.Provider value={{ uploadData, setUploadData }}>
      {children}
    </TableContext.Provider>
  );
}

export default TableDataContext;
