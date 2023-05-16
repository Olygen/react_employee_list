import { Link } from 'react-router-dom';

export default function EmployeeListItem({
  name,
  position,
  img,
  id,
  handleClick,
  // color,
}) {
  return (
    <Link to={`/employee/${id}`} className="list-item" onClick={() => handleClick(id)}>
    <img className="pic" src={img} alt="employee" />
    <div className="">
      <h3>{name}</h3>
      <h6>{position}</h6>
    </div>
  </Link>
  );
}
