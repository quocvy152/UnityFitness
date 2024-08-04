import chaiModule from "chai";
import chaiHttp from "chai-http";
import app from './index.js';

const chai = chaiModule.use(chaiHttp);
const should = chai.should();

describe('API Tests', () => {
  it('should return JSON with message', (done) => {
    chai.request.execute(app)
      .get('/ci-cd-demo')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message').eql('This is CI/CD demo old!');
        done();
      });
  });
});
