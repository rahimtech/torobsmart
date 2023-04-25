// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function signin(req, res) {
  // res.status(200).json({ name: "John Doe" });
  db.query(
    "SELECT * FROM users WHERE email=?",
    [req.body.email],
    (err, result) => {
      if (result.length > 0) {
        res.status(204).send();
        return;
      } else {
        const token = jwt.sign(
          {
            username: req.body.email,
          },
          "mysupersecretkey",
          { expiresIn: "6 hours" }
        );
        db.query(
          "INSERT INTO users(id,name,email,pass,token) VALUES(?,?,?,?,?)",
          [, req.body.name, req.body.email, req.body.pass, token],
          (err, result) => {
            if (err) {
              console.log("err: ", err);
            } else {
              res.status(200).send({ access_token: token });

              return;
            }
          }
        );
      }
    }
  );
}

export default signin;
