import {
  Box,
  FormControl,
  MenuItem,
  Select as MuiSelect,
  SelectChangeEvent,
  SxProps,
} from "@mui/material";

interface ISelectProps {
  value ?: string | undefined,
  onChange ?: (e: SelectChangeEvent) => void ,
  data ?: any[] ,
  renderValue : (item: any) => any,
  renderLabel: (item: any) => any,
  defaultValue ?: string,
  sx ?: SxProps
}

export const Select = ({ value, onChange, data, renderValue, renderLabel, defaultValue, sx = {} }: ISelectProps) => {
  return (
    <Box sx={{width: "100%", maxWidth: "200px", ...sx}} >
        
      <FormControl fullWidth>
        <MuiSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          sx={{ borderRadius: "12px", borderColor: "#E2E8F0", px: 1, py: 0.5, minWidth: "150px" }}
          size="small"
          onChange={onChange}
        >
         {!!defaultValue && <MenuItem defaultChecked value={"default"} >{defaultValue}</MenuItem>}
          {
            data?.map((item) => <MenuItem value={renderValue(item)} >{renderLabel(item)}</MenuItem>)
          }
        </MuiSelect>
      </FormControl>
    </Box>
  );
};
