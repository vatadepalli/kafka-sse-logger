import * as express from "express";
require('es6-promise').polyfill();
let router = express.Router();

import { createTopic, deleteTopic, listTopics } from '../utils/kafka';

/**
 * @GET /logger/create - unprotected
*/
router.get('/create', async(req, res) => {
    await createTopic({
        topic: req.query.topic.toString(),
        partitions: 1,
        replicationFactor: 1
    }).then((topic) => res.status(200).json(topic))
    .catch((err) => res.status(400).json(err))
});

/**
 * @GET /logger/delete - unprotected
*/
router.get('/delete', async(req, res) => {
    await deleteTopic(req.query.topic.toString()).then((topic) => res.status(200).json(topic))
    .catch((err) => res.status(400).json(err))
});

/**
 * @GET /logger/list - unprotected
*/
router.get('/list', async(req, res) => {
    await listTopics().then((topics: string) => res.status(200).json(topics.split('\n').slice(0, topics.split('\n').length - 1)))
    .catch((err) => res.status(400).json(err))
});

/**
 * @GET /logger/log - unprotected
*/
router.post('/log', async(req, res) => {
    await listTopics().then((topics: string) => res.status(200).json(topics.split('\n').slice(0, topics.split('\n').length - 1)))
    .catch((err) => res.status(400).json(err))
});


export = router;
