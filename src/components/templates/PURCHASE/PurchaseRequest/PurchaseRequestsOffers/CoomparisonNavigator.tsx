import { useState } from "react";
import { Menu, MenuItem, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";

type Props = {};

const CoomparisonNavigator = (props: Props) => {
  const [anchorEl, setAnchorEl] = useState(null); // Anchor for the main menu
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null); // Anchor for the submenu

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSubMenuAnchorEl(null); // Close the submenu as well
  };

  const handleSubMenuOpen = (event: any) => {
    setSubMenuAnchorEl(event.currentTarget);
  };

  const handleSubMenuClose = () => {
    setSubMenuAnchorEl(null);
  };

  const navigate = useNavigate();

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        onClick={handleSubMenuOpen}
      >
        {t("Compare Price Offers")}
      </Button>{" "}
      {/* Submenu */}
      <Menu
        anchorEl={subMenuAnchorEl}
        open={Boolean(subMenuAnchorEl)}
        onClose={handleSubMenuClose}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <span
          className="pl-8 pr-2 pt-2 pb-1 border-b "
          style={{
            fontFamily: "Somar-Medium",
            fontSize: "14px",
            marginBottom: "16px",
          }}
        >
          {t("Choose Comparison Type")}
        </span>
        <MenuItem
          onClick={() => {
            handleMenuClose();
            navigate(`/purchase/PurchaseRequest/manual/:id`);
          }}
        >
          <Typography
            style={{
              fontFamily: "Somar-Medium",
              fontSize: "14px",
              margin: "4px 0",
            }}
          >
            {t("Manual Comparison")}
          </Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleMenuClose();
            navigate(`/purchase/PurchaseRequest/auto/:id`);
          }}
        >
          <Typography
            style={{
              fontFamily: "Somar-Medium",
              fontSize: "14px",
              margin: "4px 0",
            }}
          >
            {t("Auto Comparison")}
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default CoomparisonNavigator;
