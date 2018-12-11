Section 4: Styling & Layout

Task 1. flexDirection as row
Locate the file "src/components/EventCard.js"
Find and replace the Keyword: TODO 01 with below code

content: {
  flexDirection: "row",
  marginBottom: sizeWidth(1.5)
},

Task 2. borderColor, borderRadius, borderWidth
Locate the file "src/components/EventCard.js"
Find and replace the Keyword: TODO 02 with below code

dateCountDown: {
  borderColor: COLORS.GRAYISH_BLUE,
  borderRadius: 4,
  borderWidth: 1,
  alignItems: "center"
},

Task 3. justifyContent, paddingTop, borderTopColor
Locate the file "src/components/EventCard.js"
Find and replace the Keyword: TODO 03 with below code

bottom: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: sizeWidth(1.5),
  borderTopColor: "#F3F3F3",
  borderTopWidth: 1
},

Task 4. color, fontSize, marginBottom
Locate the file "src/components/EventCard.js"
Find and replace the Keyword: TODO 04 with below code

eventTitle: {
  color: COLORS.GREEN_PET_ICT, 
  fontSize: fontSize.f14,
  lineHeight: fontSize.f16,
  ...fontMaker({ weight: "500" }),
  marginBottom: sizeWidth(0.7)
},

Task 5. color, fontSize, lineHeight
Locate the file "src/components/EventCard.js"
Find and replace the Keyword: TODO 05 with below code

eventDescription: {
  color: COLORS.GRAYISH_BLUE,
  fontSize: fontSize.f11,
  lineHeight: fontSize.f12
}

Task 6. color, fontSize, lineHeight
Locate the file "src/components/EventCard.js"
Find and replace the Keyword: TODO 06 with below code

borderRadius: sizeWidth(4),
borderWidth: 1,
borderColor: COLORS.LIGHT_BORDER,