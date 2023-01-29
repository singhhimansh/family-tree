import { display } from "@mui/system";
import React, { useCallback, useEffect, useRef, useState } from "react";
// import FamilyAccordian from "./FamilyAccrodian";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import { useFamilyPreviewDetails } from "../../hooks/hooks";
import { getNestedFamilyNode } from "../../utils/utils";
import { Box } from "@mui/material";

const FamilyTreeAccordian = ({ familyNode, setPreview }) => {
  const initalref = useRef(null);
  const [isExpand, setIsExpand] = useState(false);

  const handleExpand = useCallback(
    (id) => {
      setIsExpand(!isExpand);
    },
    [isExpand, setIsExpand]
  );
  const handleFamilyPreview = (id) => {
    const clickedNode = getNestedFamilyNode(familyNode, id);
    setPreview(clickedNode);
  };

  return (
    <>
      {familyNode?.map((childNode) => {
        return (
          <div
            key={childNode.id}
            style={{ position: "relative", left: "10px", margin: "10px" }}
          >
            <div
              id={childNode.id}
              ref={initalref}
              style={{
                ...{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  margin: "5px",
                  cursor: "pointer",
                },
                ...{
                  ...(isExpand
                    ? { fontWeight: "bold", color: "#475569" }
                    : { fontWeight: "normal", color: "#475569" }),
                },
              }}
              onClick={() => {
                handleExpand(initalref.current.id);
                handleFamilyPreview(initalref.current.id);
              }}
            >
              {isExpand ? (
                <ExpandLessIcon fontSize="smaller" />
              ) : (
                <ExpandMoreIcon fontSize="smaller" />
              )}{" "}
              <FolderCopyIcon
                fontSize="small"
                sx={{ color: "#EAB308", paddingRight: "3px" }}
              />{" "}
              {childNode.name}
            </div>
            <div style={{ display: `${isExpand ? "block" : "none"}` }}>
              {childNode?.children &&
                childNode?.children?.map((subChildNode) => (
                  <div key={subChildNode.id}>
                    <FamilyTreeAccordian
                      setPreview={setPreview}
                      familyNode={[subChildNode]}
                    />
                  </div>
                ))}
            </div>
          </div>
        );
      })}
    </>
  );
};

const FamilyTree = ({ family, setPreview }) => {
  return (
    <Box sx={{ overflow: "auto", height: "250px" }}>
      {family?.map((childNode) => (
        <div key={childNode.id}>
          <FamilyTreeAccordian
            setPreview={setPreview}
            familyNode={[childNode]}
          />
        </div>
      ))}
    </Box>
  );
};

export default FamilyTree;
