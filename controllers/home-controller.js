module.exports.index = async (req, res) => {
    res.render("./pages/home/index", {
        pageTitle: "Home",
    });
}