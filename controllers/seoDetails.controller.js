const axios = require("axios");

exports.seoDetails = async function (req, res) {
  try {
    const id = req.id;

    console.log("task id is ", id);
    // get all the onpage api results;

    axios({
      method: "get",
      url: "https://api.dataforseo.com/v3/on_page/summary/" + id,
      auth: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
      },
      headers: {
        "content-type": "application/json",
      },
    })
      .then(function (response) {
        const result = response["data"]["tasks"];
        // Result data
        console.log(result);
        res.json({
          message: "end point has been hitted",
          data: result,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
