describe('GET /posts', () => {
  it('Deve validar o schema de uma lista de posts', done => {
    const postsList = Joi.array().items(Joi.object().keys({
      userId: Joi.number(),
      id: Joi.number(),
      title: Joi.string(),
      body: Joi.string()
    }));

    request
      .get("/posts")
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        joiAssert(res.body, postsList);
        done(err);
      });
  });

  it('Deve validar o schema de um posts único', done => {
    const postsList = Joi.object().keys({
      userId: Joi.number(),
      id: Joi.number(),
      title: Joi.string(),
      body: Joi.string()
    });

    request
      .get("/posts/1")
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        joiAssert(res.body, postsList);
        done(err);
      });
  });
});