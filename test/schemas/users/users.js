describe('GET /users', () => {
  it('Deve validar o schema de uma lista de usuários', done => {
    const userList = Joi.array().items(Joi.object().keys({
      id: Joi.number(),
      name: Joi.string(),
      username: Joi.string(),
      email: Joi.string(),
      address: Joi.object().keys({
        street: Joi.string(),
        suite: Joi.string(),
        city: Joi.string(),
        zipcode: Joi.string(),
        geo: Joi.object().keys({
          lat: Joi.string(),
          lng: Joi.string() 
        })
      }),
      phone: Joi.string(),
      website: Joi.string(),
      company: Joi.object().keys({
        name: Joi.string(),
        catchPhrase: Joi.string(),
        bs: Joi.string()
      })
    }));

    request
      .get("/users")
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        joiAssert(res.body, userList);
        done(err);
      });
  });
});