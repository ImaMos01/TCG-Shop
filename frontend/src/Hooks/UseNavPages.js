import { useNavigate } from "react-router-dom";

export default function UseNavPages() {
  /*
  Navigates throw click actions
  Args:
    name =  path name
  
  return
    function where return a navigate function 
  */
  const navigate = useNavigate();
  const navigateToName = (name) => {
    navigate(`${name}`);
  };
  return navigateToName;
}
