import React, { useState } from "react";

export const getNestedFamilyNode = (family, id) => {
  let requiredNode = {};
  const helper = (obj) => {
    if (obj.id == id) {
      requiredNode = { ...obj };
      return;
    }
    if (!obj?.children) return;
    obj?.children?.map((childNode) => helper(childNode));
  };

  family?.map((childNode) => helper(childNode));

  return requiredNode;
};

export const addNodeInfamilyData = (newNode, selectedNode, family) => {
  let newfamily = [...family];
  let helper = (obj) => {
    if (obj?.id == selectedNode?.id) {
      if (obj?.children == undefined) {
        obj.children = [
          {
            ...newNode,
            id: Math.random(),
            children: [],
          },
        ];
      } else {
        obj?.children.push({
          ...newNode,
          id: Math.random(),
          children: [],
        });
      }
      return;
    }
    if (!obj?.children) return;
    for (let j = 0; j < obj?.children.length; j++) {
      helper(obj?.children?.[j]);
    }
  };

  for (let i = 0; i < newfamily.length; i++) {
    helper(newfamily[i]);
  }
  return newfamily;
};

export const getNestedFamilyNodeByName = (family, value) => {
  let requiredNode = [];
  const helper = (obj) => {
    if (obj.name.toLowerCase().includes(value.toLowerCase())) {
      requiredNode.push({ ...obj });
      // return;
    }
    if (!obj?.children) return;
    obj?.children?.map((childNode) => helper(childNode));
  };

  family?.map((childNode) => helper(childNode));

  return requiredNode;
};

export const printNode = (doc, selectedNode) => {
  //yskip => offset from top after each node is printed
  let yskip = 0.2;

  const helper = (childNode, xindent) => {
    for (let i = 0; i < childNode.length; i++) {
      printObjectNode(childNode[i], xindent, yskip);
    }
    return;
  };

  let printObjectNode = (node, xoffset, yoffset) => {
    Object.keys(node).map((key, idx) => {
      if (key == "children") {
        doc.text("children : ", xoffset, yskip + 0.2);
        yskip += 0.4;
        if (node[key]) helper(node.children, xoffset + 0.4);
        return;
      }
      yskip = yoffset + idx * 0.2;
      doc.text(key + " : " + node[key], xoffset, yskip);
    });
    yskip += 0.2;
    return;
  };

  printObjectNode(selectedNode, 0.2, yskip);
};




export const validateJson = (data) => {
  let isValid = true;
  let hasID = true;
  let hasName= true;
  if (!Array.isArray(data)) return Array.isArray(data);
  if (!ischildsObject(data)) return ischildsObject(data);

  data?.map((obj) => {
    if (obj.hasOwnProperty("children")){
       isValid= Array.isArray(obj.children);
       if(isValid) validateJson(obj.children);
    }
     hasID= obj.hasOwnProperty('id');
     hasName= obj.hasOwnProperty('name');
  });
  return isValid && hasID && hasName;
};

const ischildsObject = (arr) => {
  let filteredArray = arr.filter(
    (item) => typeof item !== "object" || Array.isArray(item)
  );
  return filteredArray.length ? false : true;
};
