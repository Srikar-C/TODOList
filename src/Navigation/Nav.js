import { Link } from "react-router-dom";
import "./nav.css";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import Button from "@mui/material/Button";

export default function Nav() {
  return (
    <nav className="navigation">
      <Link to="/" style={{ textDecoration: "none" }}>
        Home
      </Link>
      <Link className="info" to="/info" style={{ textDecoration: "none" }}>
        Info
      </Link>
      <Link className="add" to="/adding" style={{ textDecoration: "none" }}>
        Add Items
      </Link>
      <div className="drop drop2">
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <Button
                style={{
                  margin: "0px 30px",
                  backgroundColor: "transparent",
                  border: "none",
                  boxShadow: "none",
                  fontSize: "20px",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                variant="contained"
                {...bindTrigger(popupState)}
              >
                Menu
              </Button>
              <Menu {...bindMenu(popupState)}>
                <Link to="/info">
                  <MenuItem onClick={popupState.close} className="menu-item">
                    Info
                  </MenuItem>{" "}
                </Link>
                <Link to="/adding">
                  <MenuItem onClick={popupState.close} className="menu-item">
                    Add Items
                  </MenuItem>
                </Link>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      </div>
    </nav>
  );
}
