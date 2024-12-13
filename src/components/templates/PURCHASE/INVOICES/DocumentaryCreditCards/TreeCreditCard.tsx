import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import {
  TreeItem2Checkbox,
  TreeItem2Content,
  TreeItem2GroupTransition,
  TreeItem2IconContainer,
  TreeItem2Label,
  TreeItem2Root,
} from "@mui/x-tree-view/TreeItem2";
import { TreeItem2Icon } from "@mui/x-tree-view/TreeItem2Icon";
import { TreeItem2Provider } from "@mui/x-tree-view/TreeItem2Provider";
import {
  useTreeItem2,
  UseTreeItem2Parameters,
} from "@mui/x-tree-view/useTreeItem2";
import * as React from "react";
import FolderIcon from "../../../../atoms/icons/FolderIcon";
import FileIcon from "../../../../atoms/icons/FileIcon";

const CustomTreeItemContent = styled(TreeItem2Content)(({ theme }) => ({
  padding: theme.spacing(0.5, 1),
}));

interface CustomTreeItemProps
  extends Omit<UseTreeItem2Parameters, "rootRef">,
    Omit<React.HTMLAttributes<HTMLLIElement>, "onFocus"> {
  isParent: boolean; // Determines if the item is a parent
  hasChildren: boolean; // Determines if the item has children
  level: number; // Depth level in the tree
  setCardID: React.Dispatch<React.SetStateAction<string>>; // Function to set the card ID
}

const CustomTreeItem = React.forwardRef(function CustomTreeItem(
  props: CustomTreeItemProps,
  ref: React.Ref<HTMLLIElement>
) {
  const {
    id,
    itemId,
    label,
    isParent,
    hasChildren,
    level,
    disabled,
    children,
    setCardID,
    ...other
  } = props;

  const {
    getRootProps,
    getContentProps,
    getIconContainerProps,
    getCheckboxProps,
    getLabelProps,
    getGroupTransitionProps,
    status,
  } = useTreeItem2({ id, itemId, children, label, disabled, rootRef: ref });

  const handleClick = (event: React.MouseEvent) => {
    // Prevent interfering with expand/collapse by ignoring clicks on the arrow or container
    const target = event.target as HTMLElement;
    if (
      target.classList.contains("MuiTreeItem-iconContainer") || // Arrow container
      target.classList.contains("MuiTreeItem-content") // Tree item container
    ) {
      return;
    }
    setCardID(itemId); // Set the card ID when clicking a node
  };

  return (
    <TreeItem2Provider itemId={itemId}>
      <TreeItem2Root {...getRootProps(other)}>
        <CustomTreeItemContent
          {...getContentProps()}
          // onClick={handleClick} 
          
          sx={{
            marginRight: `${level * 20}px`, 
            cursor: "pointer", 
          }}
        >
          <TreeItem2IconContainer {...getIconContainerProps()}>
            {hasChildren && <TreeItem2Icon status={status} />}
          </TreeItem2IconContainer>
          <TreeItem2Checkbox {...getCheckboxProps()} />
          <Box
            sx={{ flexGrow: 1, display: "flex", gap: 1, alignItems: "center" }}
          >
            {isParent ? <FolderIcon /> : <FileIcon />}
            <TreeItem2Label
              {...getLabelProps()}
              className="!font-somarBold mt-2"
            />
          </Box>
        </CustomTreeItemContent>
        {children && (
          <TreeItem2GroupTransition {...getGroupTransitionProps()} />
        )}
      </TreeItem2Root>
    </TreeItem2Provider>
  );
});

export default function HeadlessAPI({ data, setCardID }: any) {
  const buildTree = (nodes: any[], parentId = 0, level = 0) => {
    return nodes
      .filter((node: { mainCardId: number }) => node.mainCardId === parentId)
      .map((node) => {
        const hasChildren = nodes.some((child) => child.mainCardId === node.id);
        const isParent = node.mainCardId === 0 || hasChildren;
        return (
          <CustomTreeItem
            key={node.id}
            itemId={String(node.id)}
            label={node.cardName}
            isParent={isParent}
            hasChildren={hasChildren}
            level={level}
            setCardID={setCardID} 
          >
            {buildTree(nodes, node.id, level + 1)} 
          </CustomTreeItem>
        );
      });
  };

  return (
    <Box sx={{ minHeight: 200, minWidth: 250 }}>
      <SimpleTreeView defaultExpandedItems={["1"]}>
        {buildTree(data?.data || [])}
      </SimpleTreeView>
    </Box>
  );
}
