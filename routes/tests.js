const express = require('express');
const router = express.Router();
const testValidator = require('../midleware/validators/testValidator')
const {validationResult} = require('express-validator');
const connection = require('../database/mysqlConnection');
const Tests = require('../model/Tests');

/**
 * @GET
 * testsのレコードをすべて取得
 */
router.get('/', testValidator, (req, res, next) => {

    //レコードをすべて取得
    Tests.all()
        .then((data) => {
            console.log(data)
            //レコードを返す
            return res.send(data);
        })
        .catch((error) => {
            console.log(error);
            res.status(500);
            return res.send({'error': 'サーバー側でエラーが発生しました'});
        });

});


module.exports = router;