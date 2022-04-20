import React from 'react';

const GroupList = ({clearFilter, category, onItemSelect, selectedProf}) => {
    if (category){
       return (
        <div className="d-flex flex-column flex-shrink-0 p-3 shadow">
            <h1>Grouplist</h1>
        <ul className="list-group">
          {category.map((item) => (
            <li
              className={
                "list-group-item" +
                (JSON.stringify(item) === JSON.stringify(selectedProf) ? " active" : "")
              }
              key={item.id}
              onClick={() => onItemSelect(item)}
              role="button"
            >
              {item.name}
            </li>
          ))}
        </ul>
        <button className="btn btn-secondary mt-2" onClick={clearFilter}>Сброс</button>
      </div>
    ); 
    } else {
        return (<h4>Loading...</h4>)
    }
    
}
 
export default GroupList;