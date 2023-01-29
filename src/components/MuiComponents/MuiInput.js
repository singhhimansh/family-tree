import React from "react";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import FormControl from "@mui/joy/FormControl";

function MuiInput({id, name, label,type='text', onChange, value}) {
  return (
    <FormControl sx={{display:'flex'}}>
      <FormLabel htmlFor="name" >{label}</FormLabel>
      <Input
        sx={{borderColor:'#CBD5E1'}}
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        autoFocus
        required
      />
    </FormControl>
  );
}

export default MuiInput;
