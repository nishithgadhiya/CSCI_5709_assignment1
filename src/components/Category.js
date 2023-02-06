import React from "react";
import Box from "@mui/material/Box";
import {
  SoupKitchen,
  LaptopTwoTone,
  Construction,
  AcUnit,
  CheckroomTwoTone,
  MedicationLiquidTwoTone,
  DesignServicesTwoTone,
  ChairTwoTone,
  CelebrationTwoTone,
  CardGiftcardTwoTone,
  BreakfastDiningTwoTone,
  ToysTwoTone,
} from "@mui/icons-material";

function Category() {
  const primaryColor = "#8c7353";
  const handle = () => {};
  const categories = [
    {
      id: 1,
      title: "Electronics",
      icon: LaptopTwoTone,
    },
    {
      id: 2,
      title: "Kitchen",
      icon: SoupKitchen,
    },
    {
      id: 3,
      title: "Hardware & Tools",
      icon: Construction,
    },
    {
      id: 4,
      title: "Seasonal",
      icon: AcUnit,
    },
    {
      id: 5,
      title: "Clothes & Accessories",
      icon: CheckroomTwoTone,
    },
    {
      id: 6,
      title: "Health & Beauty",
      icon: MedicationLiquidTwoTone,
    },
    {
      id: 7,
      title: "Stationary & Craft",
      icon: DesignServicesTwoTone,
    },
    {
      id: 8,
      title: "Home Decor",
      icon: ChairTwoTone,
    },
    {
      id: 9,
      title: "Celebration",
      icon: CelebrationTwoTone,
    },
    {
      id: 10,
      title: "Cards",
      icon: CardGiftcardTwoTone,
    },
    {
      id: 11,
      title: "Food",
      icon: BreakfastDiningTwoTone,
    },
    {
      id: 12,
      title: "Toys",
      icon: ToysTwoTone,
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        height: "90vh",
        padding: "0rem 4rem 0rem 4rem",
        flexWrap: "wrap",
        paddingTop: "2rem",
      }}
    >
      {categories.map((category, index) => {
        return (
          <Box
            sx={{
              flex: "1 0 18%",
              margin: "2rem",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
              height: "20%",
              width: "80%",
            }}
          >
            <Box
              sx={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin: "0",
                padding: "0",
              }}
            >
              <fieldset
                aria-label={category.title}
                onClick={handle()}
                style={{
                  cursor: "pointer",
                  width: "95%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <legend>{category.title}</legend>
                <category.icon
                  sx={{
                    fontSize: "7rem",
                    color: primaryColor,
                  }}
                />
              </fieldset>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default Category;
