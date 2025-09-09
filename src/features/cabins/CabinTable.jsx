import styled from "styled-components";
import Spinner from "./../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "./../../ui/Table";
import { useSearchParams } from "react-router-dom";
import Menus from "../../ui/Menus";
import Empty from "./../../ui/Empty";

const TableContainer = styled.div`
  overflow-x: auto;
  & > div {
    min-width: 70rem;
  }
  &::-webkit-scrollbar {
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    background: var(--color-grey-100);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-brand-600);
    border-radius: 5px;
  }
`;

const CabinTable = () => {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;
  if (!cabins.length) return <Empty resourceName="cabins" />;

  // 1)  Filter cabin based on discount
  const filterValue = searchParams.get("discount") || "all";
  let filteredCabins;
  if (filterValue === "all") filteredCabins = cabins;
  if (filterValue === "no-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === "with-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  // 2) Sort cabins based on sortBy value
  const sortBy = searchParams.get("sort") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins.sort((a, b) => {
    const valueA = a[field];
    const valueB = b[field];

    // If the values ​​are strings, we use localeCompare.
    if (typeof valueA === "string" && typeof valueB === "string") {
      return valueA.localeCompare(valueB) * modifier;
    }

    // Otherwise (numbers) → We subtract normally
    return (valueA - valueB) * modifier;
  });

  return (
    <TableContainer>
      <Menus>
        <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
          <Table.Header>
            <div>Image</div>
            <div>Cabin</div>
            <div>Capacity</div>
            <div>Price</div>
            <div>Discount</div>
            <div>Action</div>
          </Table.Header>
          <Table.Body
            data={sortedCabins}
            render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
          />
        </Table>
      </Menus>
    </TableContainer>
  );
};

export default CabinTable;
