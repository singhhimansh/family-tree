import { Alert, Box, Button, ButtonBase, Snackbar } from "@mui/material";
import React, { useState, useCallback } from "react";
import {
  addNodeInfamilyData,
  printNode,
  validateJson,
} from "../../utils/utils";
import { MuiButton } from "../MuiComponents/MuiButton";
import AddFamilyModal from "./AddFamily";
import { jsPDF } from "jspdf";
import MuiSnackbar from "../MuiComponents/MuiSnackbar";

const Events = ({ family, setFamily, PreviewNode }) => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [alartToastOpen, setAlartToastOpen] = useState(false);
  const [invalidJSON, setInvalidJSON] = useState(false);
  const [invalidFileFormat, setInvalidFileFormat] = useState(false);
  const [addNodeSuccess, setAddNodeSuccess] = useState(false);
  const [jsonImported, setJsonImported] = useState(false);

  // console.log(PreviewNode)

  const validateNodeSelection = () => {
    if (!PreviewNode?.id) {
      setAlartToastOpen(true);
      return;
    }
    setAddModalOpen(true);
  };

  const handleAddFamily = (values) => {
    const newFamilyData = addNodeInfamilyData(values, PreviewNode, family);
    setFamily(newFamilyData);
    setAddNodeSuccess(true);
  };

  const handleImportJson = (e) => {
    if (e.target.files[0].type != "application/json") {
      setInvalidFileFormat(true);
      return;
    }
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      console.log(JSON.parse(e.target.result));
      let isValidJson = validateJson([JSON.parse(e.target.result)]);
      console.log(isValidJson);
      if (isValidJson) {
        setFamily([JSON.parse(e.target.result)]);
        setJsonImported(true);
      } else setInvalidJSON(true);
    };
  };

  const handleExportJson = () => {
    if (!PreviewNode?.id) {
      setAlartToastOpen(true);
      return;
    }
    let jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(PreviewNode)
    )}`;

    const link = document.createElement("a");
    link.href = jsonString;
    link.download = `${PreviewNode?.name}.json`;
    link.click();
  };

  const handlePrint = () => {
    if (!PreviewNode?.id) {
      setAlartToastOpen(true);
      return;
    }
    const doc = new jsPDF({
      orientation: "p",
      unit: "in",
      format: "a4",
      compress: true,
    });
    console.log(doc);
    doc.setFontSize(10);
    doc.setLineHeightFactor(1 / 72);
    printNode(doc, PreviewNode);
    doc.save(`${PreviewNode?.name}.pdf`);
  };

  return (
    <Box
      sx={{
        bgcolor: "#F0FDFA",
        padding: "15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        border: "1px solid #14B8A6",
        borderRadius: "10px",
        height: "20%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
        }}
      >
        <Button
          sx={{
            color: "#64748B",
            width: "120px",
            bgcolor: "white",
            "&:hover": {
              bgcolor: "rgb(228, 165, 11,0.5)",
              color: "#475569",
            },
            border: "1px solid #D1D5DB",
            margin: "4px",
            padding: "4px",
            fontSize: "0.8rem",
            textTransform: "capitalize",
          }}
          variant="contained"
          component="label"
          label={"Import Json"}
          onChange={(e) => handleImportJson(e)}
        >
          Import JSON
          <input type="file" hidden />
        </Button>
        <MuiButton label={"Export JSON"} onClick={handleExportJson} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
        }}
      >
        <MuiButton
          label={"Add Family"}
          onClick={() => validateNodeSelection()}
        />
        <MuiButton label={"Print Family Tree"} onClick={handlePrint} />
      </Box>
      {
        <MuiSnackbar
          message={"No node selected. Please select a family node first."}
          severity={"error"}
          open={alartToastOpen}
          setOpen={setAlartToastOpen}
        />
      }
      {
        <MuiSnackbar
          message={"Family node added successfully."}
          severity={"success"}
          open={addNodeSuccess}
          setOpen={setAddNodeSuccess}
        />
      }
      {
        <MuiSnackbar
          message={"Invalid file format. Please upload a JSON File."}
          severity={"error"}
          open={invalidFileFormat}
          setOpen={setInvalidFileFormat}
        />
      }
      {
        <MuiSnackbar
          message={"Invalid JSON format."}
          severity={"error"}
          open={invalidJSON}
          setOpen={setInvalidJSON}
        />
      }
      {
        <MuiSnackbar
          message={"Family tree added successfully"}
          severity={"success"}
          open={jsonImported}
          setOpen={setJsonImported}
        />
      }
      {addModalOpen && Boolean(PreviewNode?.id) && (
        <AddFamilyModal
          open={addModalOpen}
          setOpen={setAddModalOpen}
          onSubmit={handleAddFamily}
        />
      )}
    </Box>
  );
};

export default Events;
