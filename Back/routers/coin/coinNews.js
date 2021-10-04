const Main = require("./newsCrawl")

let  main  = async (req, res) => {
    const data = await Main();
    console.log(data)
    res.send({
        data,
    });
};

module.exports = {
    main
}