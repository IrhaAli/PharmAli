const router = require("express").Router();
const { getDrug } = require("../db/queries/drug");

module.exports = db => {
  // Get drug by name or id
  router.get("/:name", (req, res) => {
    getDrug(db, req.url.substring(1))
      .then(({ rows: drugs }) => {
        res.json(drugs);
      });
  });

  return router;
};