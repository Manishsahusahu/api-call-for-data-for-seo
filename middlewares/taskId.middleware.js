const axios = require("axios");

exports.taskId = async function (req, res, next) {
  try {
    const { targetUrl } = req.body;

    if (!targetUrl)
      res.status(400).json({
        success: false,
        message: "target url is missing",
      });

    //find task id;
    const post_array = [];
    post_array.push({
      target: targetUrl,
      max_crawl_pages: 5,
      load_resources: true,
      enable_javascript: true,
      custom_js: "meta = {}; meta.url = document.URL; meta;",
    });
    const response = await axios({
      method: "post",
      url: "https://api.dataforseo.com/v3/on_page/task_post",
      auth: {
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
      },
      data: post_array,
      headers: {
        "content-type": "application/json",
      },
    });
    const result = response["data"]["tasks"];
    // Result data
    const taskId = result[0].id;
    req.id = taskId;

    setTimeout(() => {
      next();
    }, 30000);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
