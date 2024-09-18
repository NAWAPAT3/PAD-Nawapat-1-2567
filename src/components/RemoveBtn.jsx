//components\RemoveBtn.jsx
"use client";
import * as React from 'react';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useRouter } from "next/navigation";
import DeleteIcon from '@mui/icons-material/Delete';

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const removeProduct = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/Products?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    // <button onClick={removeProduct} className="btn btn-error ml-2">
    //   <Button variant="contained" color="success">
    //   Delete
    //   </Button>
    // </button>
    <Button variant="contained" color="success">
      <DeleteIcon/>
      </Button>
  );
}
