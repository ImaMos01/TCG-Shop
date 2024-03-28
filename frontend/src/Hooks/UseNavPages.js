import { useNavigate } from "react-router-dom";

export default function UseNavPages(name) {
  /*
  Navigates throw click actions
  Args:
    name =  path name
  
  return
    function where return a navigate function 
  */
  const navigate = useNavigate();
  const navigateToName = () => {
    navigate(`${name}`);
  };
  return navigateToName;
}
