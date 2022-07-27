import useTableSort from '../hooks/useTableSort';
import SortSelector from '../components/SortSelector/SortSelector';
import Table from '../components/Table/Table';

const TableView = () => {

    const { sortOptions, onSortOrderChange, sortOrder, expenses } = useTableSort();

    return (
        <>
            <SortSelector 
                options={sortOptions}
                onChange={onSortOrderChange}
                value={sortOrder}
            />

            <Table items={expenses} />  
        </>
    );
};

export default TableView;