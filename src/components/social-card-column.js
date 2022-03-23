/** @jsx jsx */
import { jsx, Image, Box, Heading, Text, Card, Progress, Flex } from "theme-ui"

import Group from "assets/group.png"
import Calendar from "assets/calendar.png"

export default function SocialCardColumn({
  data: { type, title, imgSrc, altText, process, raised, days, user },
}) {
  return (
    <Card sx={styles.CardBox}>
      <>
        <Image src={imgSrc} alt={altText} sx={{ width: "100%" }} />
      </>
      <Box sx={styles.CardBox.card}>
        <Text as="p" sx={styles.CardBox.type}>
          {type}
        </Text>
        <Heading as="p" sx={styles.CardBox.heading}>
          {title}{" "}
        </Heading>
        <Progress
          sx={styles.CardBox.progress}
          max={100}
          value={process}
        ></Progress>
        <Box sx={styles.CardBox.wrapper}>
          <Flex>
            <Image src={Group} />
            <Text as="p">Total Raised $ {raised}</Text>
          </Flex>
          <Flex>
            <Image src={Calendar} />
            <Text as="p">{days} Days left</Text>
          </Flex>
        </Box>
      </Box>
    </Card>
  )
}

const styles = {
  CardBox: {
    background: "white",
    borderRadius: 10,
    ml: [0, null, null, 0],
    position: "relative",
    mt: ["40px", null, null, 0],
    p: 0,
    "@media screen and (min-width: 420px) and (max-width: 767px)": {
      margin: "auto",
    },
    card: {
      display: "flex",
      flexDirection: "column",
      px: "1rem",
      pb: "20px",
    },
    type: {
      fontFamily: "mazzard-h-bold",
      color: "#1B8271",
      fontSize: "18px",
      margin: "10px 0",
    },
    heading: {
      color: "text",
      fontFamily: "mazzard-h-bold",
      fontSize: "22px",
      mb: 1,
      marginBottom: "15px",
    },
    progress: {
      height: "12px",
      color: "#8485FF",
      backgroundColor: "#EEEEEE",
      border: "1px solid #D7D7D7",
      boxSizing: "border-box",
      mt: 2,
    },
    wrapper: {
      mt: 2,
      "> div": {
        mt: 2,
        alignItems: "center",
      },
      "> div > img": {
        width: "32px",
        height: "25px",
      },
      "> div > p": {
        fontSize: "18px",
        fontStyle: "normal",
        fontWeight: "500",
        ml: 4,
      },
    },
    boxShadow: "0px 6px 47px rgba(38, 78, 118, 0.1)",
    "&:hover": {
      boxShadow: "0px 6px 47px rgba(38, 78, 118, 0.3)",
    },
    transition: "all 0.3s",
  },

  img: {
    mx: "auto",
    mb: [3, null, 4, null, null, 5],
    width: ["80px", "90px", null, null, null, "100px", "auto"],
  },
}
