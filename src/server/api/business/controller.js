import express from "express";
import fetch from "node-fetch";

const router = express.Router();
const YELP_HOST = process.env.RAZZLE_YELP_HOST;
const YELP_API_KEY = process.env.RAZZLE_YELP_API_KEY;

//TODO: implement actual unit tests

router.get("/search", async (req, res) => {
  try {
    const urlParams = new URLSearchParams({...req.query});
    const resp = await fetch(`${YELP_HOST}/v3/businesses/search?${urlParams}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${YELP_API_KEY}`
      }
    })
    const data = await resp.json();
    res.status(200).send(data);
  } catch(e) {
    console.log("ERROR: ", e);
  }
});

export default router;