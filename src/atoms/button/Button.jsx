// import { Button as ButtonMui } from "@mui/material";
import { IconButton } from "@mui/material";

// export const Button = (props) => {
//   const { children, onClick, variant="contained", endIcon, size} = props;

//   return (<ButtonMui variant={variant} onClick={onClick} endIcon={endIcon} size={size}>
//     {children}
//   </ButtonMui>);
// };

export const Button = (props) => {
  const { children, onClick, ariaLabel, size} = props;

  return (<IconButton aria-label={ariaLabel} onClick={onClick} size={size}>
    {children}
  </IconButton>);
};