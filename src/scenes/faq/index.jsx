import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

            <Accordion defaultExpanded>
                <AccordionSummary
                
                    expandIcon={<ExpandMoreIcon/>}
                >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An important Question
                    </Typography>

                </AccordionSummary>

                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptates repudiandae, alias odio quisquam earum porro ipsam fuga sunt, quasi perferendis deserunt ratione libero autem! Ut vel incidunt voluptates mollitia.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary
                
                    expandIcon={<ExpandMoreIcon/>}
                >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An important Question
                    </Typography>

                </AccordionSummary>

                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptates repudiandae, alias odio quisquam earum porro ipsam fuga sunt, quasi perferendis deserunt ratione libero autem! Ut vel incidunt voluptates mollitia.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary
                
                    expandIcon={<ExpandMoreIcon/>}
                >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        question 2
                    </Typography>

                </AccordionSummary>

                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptates repudiandae, alias odio quisquam earum porro ipsam fuga sunt, quasi perferendis deserunt ratione libero autem! Ut vel incidunt voluptates mollitia.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary
                
                    expandIcon={<ExpandMoreIcon/>}
                >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Common Question
                    </Typography>

                </AccordionSummary>

                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptates repudiandae, alias odio quisquam earum porro ipsam fuga sunt, quasi perferendis deserunt ratione libero autem! Ut vel incidunt voluptates mollitia.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary
                
                    expandIcon={<ExpandMoreIcon/>}
                >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        An important Question 2
                    </Typography>

                </AccordionSummary>

                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptates repudiandae, alias odio quisquam earum porro ipsam fuga sunt, quasi perferendis deserunt ratione libero autem! Ut vel incidunt voluptates mollitia.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
                <AccordionSummary
                
                    expandIcon={<ExpandMoreIcon/>}
                >
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Another important Question
                    </Typography>

                </AccordionSummary>

                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptates repudiandae, alias odio quisquam earum porro ipsam fuga sunt, quasi perferendis deserunt ratione libero autem! Ut vel incidunt voluptates mollitia.
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Box>
    )
};

export default FAQ;
