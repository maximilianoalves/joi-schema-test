import supertest from 'supertest';
import chai from 'chai';
import Joi from 'joi';
import joiAssert from 'joi-assert';
import request from 'request';

global.expect = chai.expect;
global.Joi = Joi;
global.joiAssert = joiAssert;
global.request = supertest("https://jsonplaceholder.typicode.com");
