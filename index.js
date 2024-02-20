import express from "express";
import axios from "axios";
import ejs from "ejs";

const port = 3000;
const app = express();
const catImgURL = 'https://api.thecatapi.com/v1/images/search';
const catFactsURL = 'https://cat-fact.herokuapp.com/facts';

app.get("/", async (req, res) => {
    try {
        const catImageResult = await axios.get(catImgURL);
        const catImageUrl = catImageResult.data[0].url;

        const catFactResult = await axios.get(catFactsURL);
        const catFactText = catFactResult.data[0].text;

        res.render("index.ejs", { catImg: catImageUrl, catFact: catFactText });
    } catch (error) {
        res.status(404).send(error.message);
    }
});


app.listen(port, () => {
    console.log(`${port} running`)
});