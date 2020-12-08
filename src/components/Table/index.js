import React from 'react';

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    console.log(sortableItems)
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const Table = ({ results }) => {
  const { items, requestSort, sortConfig } = useSortableData(results);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  return (
    <table>
      <caption>EMPLOYEES</caption>
      <thead>
        <tr>
          <th>Photo</th>
          <th>
            <button type="button" 
            onClick={() => requestSort('name')}
            className={getClassNamesFor('name')}            >
              Last Name
            </button></th>
          <th>First Name</th>
          <th>Cell</th>
          <th>
            <button type="button" 
            onClick={() => requestSort('name')}
            className={getClassNamesFor('name')}            >
              Email
            </button>
          </th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {(items.length > 0) ? items.map((item, index) => {
          return (
            <tr key={index}>
              <td><img src={item.picture.thumbnail} alt="" /></td>
              <td id="lastName">{item.name.last}</td>
              <td>{item.name.first}</td>
              <td>{item.cell}</td>
              <td>{item.email}</td>
              <td>{item.location.city}, {item.location.state}</td>
            </tr>
          )
        }) : <tr><td colSpan="5">Loading...</td></tr>}
      </tbody>
    </table>
  );
}

export default Table;
