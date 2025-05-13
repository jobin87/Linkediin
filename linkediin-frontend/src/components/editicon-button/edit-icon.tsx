// components/EditIconButton.tsx
import React from "react";
import IconButton from "@mui/material/IconButton";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
interface ImageUploadIconButtonProps {
    sx?: object;
    icon?: React.ReactNode;
    onClick?: () => void; // ✅ Add this
    enableFileUpload?: boolean; // Optional: if you want to toggle between file upload or just a button
    onFileChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  export const EditIconButton: React.FC<ImageUploadIconButtonProps> = ({
    sx = {},
    icon = <EditOutlinedIcon />,
    onClick,
    enableFileUpload = false,
    onFileChange,
  }) => {
    return (
      <IconButton
        color="primary"
        component={enableFileUpload ? "label" : "button"}
        onClick={enableFileUpload ? undefined : onClick} // prevent file dialog if not uploading
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          bgcolor: "white",
          borderRadius: "50%",
          ...sx,
        }}
      >
        {icon}
        {enableFileUpload && (
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={onFileChange}
          />
        )}
      </IconButton>
    );
  };
  