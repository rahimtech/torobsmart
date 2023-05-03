// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function signin(req, res) {
  if (!req.body.email || !req.body.pass) {
    res.send("You Have Problem to Register");
    return;
  }
  const user = users.find((u) => {
    return u.email == req.body.email && u.pass == req.body.pass;
  });
  if (!user) {
    res.send("User Not Found !");
  }
  const token = jwt.sign(
    {
      sub: user.id,
      username: user.email,
    },
    "mysupersecretkey",
    { expiresIn: "3 hours" }
  );
  res.status(200).send({ access_token: token });
}

export default signin;
