import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Database from "../Database.js";
import Category from "../Category.js";
import UserContext from "../context/userContext.jsx";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);
  const [ajax, setAjax] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const con = React.useContext(UserContext);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const search = (e) => {
    setAjax(e);
  };

  const checkHandler = (event) => {
    let temp = [];

    if (event.target.checked) {
      con.flag.push(event.target.value);
      for (let i = 0; con.flag.length > i; i++) {
        Database.find((item) => {
          if (item.seri === con.flag[i]) {
            temp.push(item);
          }
        });
      }
      con.setHandlerDatabase(temp);
    } else if (!event.target.checked) {
      //Find item was checked
      con.flag.find((item) => {
        if (event.target.value === item) {
          const index = con.flag.indexOf(item);
          if (index > -1) {
            con.flag.splice(index, 1);
          }
        }
      });

      //UnChecked item find
      if (con.flag.length < 1) {
        con.setHandlerDatabase(Database);
      } else {
        for (let i = 0; con.flag.length > i; i++) {
          Database.find((item) => {
            if (item.seri === con.flag[i]) {
              temp.push(item);
            }
          });
        }
        con.setHandlerDatabase(temp);
      }
    }
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className="rtl shadow-none "
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            className="font-extrabold"
            sx={{ width: "33%", flexShrink: 0 }}
          >
            دسته بندی
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <input
            className="border-2 border-solid rounded-md px-4 py-2"
            placeholder="جستجو کنید"
            onChange={(e) => search(e.target.value)}
          />
          <FormGroup>
            {Category.map((item, index) => {
              //if items that checked this algoritm STARTING ...
              if (con.flag.length > 0) {
                // if Searching items and its Not-checked
                if (
                  item.name.indexOf(ajax) > -1 &&
                  item.seri != con.flag[index]
                ) {
                  console.log("con.flag[index]: ", con.flag[index]);
                  return (
                    <FormControlLabel
                      key={index}
                      control={
                        <Checkbox
                          value={`${item.seri}`}
                          onChange={(e) => checkHandler(e)}
                          key={index}
                        />
                      }
                      label={`${item.name}`}
                    />
                  );
                  // if Searching items and its checked
                } else if (
                  item.name.indexOf(ajax) > -1 &&
                  item.seri === con.flag[index]
                ) {
                  return (
                    <FormControlLabel
                      key={index}
                      control={
                        <Checkbox
                          value={`${item.seri}`}
                          onChange={(e) => checkHandler(e)}
                          key={index}
                          checked={true}
                        />
                      }
                      label={`${item.name}`}
                    />
                  );
                }
              } else {
                //if items that Not-checked this algoritm STARTING ...
                if (con.flag.length < 1) {
                  if (item.name.indexOf(ajax) > -1) {
                    return (
                      <FormControlLabel
                        key={index}
                        control={
                          <Checkbox
                            value={`${item.seri}`}
                            onChange={(e) => checkHandler(e)}
                            key={index}
                          />
                        }
                        label={`${item.name}`}
                      />
                    );
                  }
                }
              }
            })}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
