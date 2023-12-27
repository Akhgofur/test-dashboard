import { Box, Grid } from "@mui/material";
import { ChangeEvent } from "react";

export interface IImage {
  id: number;
  image: File | string;
  isOld ?: boolean
}

interface IMultipleImageInputProps {
  files: IImage[];
  setFiles: (arg: IImage[]) => void;
}

export const MultipleImageInput = ({
  files,
  setFiles,
}: IMultipleImageInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const targetFiles = e.target?.files as FileList;

    const img = [...targetFiles]?.map((item: File) => ({
      id: Math.floor(Math.random() * 99999),
      image: item
    }));

    setFiles([...files, ...img]);
  };

  const handleDeleteImage = (el: IImage) => {
    const confirmation = confirm("Are you sure to delete image")
    if(confirmation) {
      setFiles(files.filter((item) => item.id != el.id));
    }
  };

  return (
    <Box sx={{ py: 1 }}>
      <Grid container spacing={2}>
        {files?.map((item) => { 
            const imgUrl = item?.isOld ? item?.image : URL.createObjectURL(item?.image as Blob);
          return (
            <Grid item xs={3}>
              <Image onClick={() => handleDeleteImage(item)} image={imgUrl as string} />
            </Grid>
          );
        })}
        <Grid  item xs={3}>
          <Image isAdd onChange={handleChange} image="/img/add-image.svg" />
        </Grid>
      </Grid>
    </Box>
  );
};

interface IImageProps {
  onClick?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  image: string;
  isAdd?: boolean;
}

export const Image = ({ onClick, image, isAdd, onChange }: IImageProps) => {
  return isAdd ? (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        width: "100%",
        height: "130px",
        backgroundColor: "#F8FAFC",
        borderRadius: "12px",
        padding: "10px",
      }}
    >
      <img src={image} alt="" className="" />
      <input
        style={{ width: 0, height: 0, overflow: "hidden", margin: "-1px" }}
        multiple
        type="file"
        accept="image/*"
        onChange={onChange}
      />
    </label>
  ) : (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        width: "100%",
        height: "130px",
        backgroundColor: "#F8FAFC",
        borderRadius: "12px",
        padding: "10px",
      }}
      onClick={onClick}
    >
      <img src={image} alt="" className="" />
    </Box>
  );
};
