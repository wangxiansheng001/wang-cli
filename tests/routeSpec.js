'use strict';
var supertest = require('supertest');
var app = require('../build/server.js');
var request = supertest(app.listen(8001));

describe('【测试路由】', function () {
    describe('测试 /index/getdata', function () {
        it('测试data.title为一灯学堂 学员学习系统', function (done) {
            request.get('/index/getdata')
                .expect(200)
                .end(function (err, res) {
                    if (res.body.data.title == "一灯学堂 学员学习系统") {
                        done();
                    } else {
                        done(err)
                    }
                });
        });
    });
    describe('测试 /bookDesk/getData', function () {
        it('测试data.booknamelist 是数组', function (done) {
            request.get('/bookDesk/getData')
                .expect(200)
                .end(function (err, res) {
                    if (Array.isArray(res.body.booknamelist)) {
                        done();
                    } else {
                        done(err)
                    }
                });
        });
    })
    describe('测试 /student/getData', function () {
        it('测试data.city 是长度为4', function (done) {
            request.get('/student/getData')
                .expect(200)
                .end(function (err, res) {
                    if (res.body.city.length == 4) {
                        done();
                    } else {
                        done(err)
                    }
                });
        });
    })
});