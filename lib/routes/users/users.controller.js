const express = require('express');
const router = express.Router();
const userService = require('./users.service')
// routes
router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/', getAll);
router.get('/current', getCurrent);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;


function authenticate(req, res, next) {
  userService.authenticate(req.body)
    .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect'}))
}
function register(req, res, next) {
  userService.create(req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function getAll(req, res, next) {
  userService.getAll()
    .then(users => res.json(users))
    .catch(err => next(err));
}

function getCurrent(req, res, next) {
  userService.getById(req.user.sub)
    .then(user => user ? res.json(user) : res.sendStatus(404))
    .catch(err => next(err));
}

function getById(req, res, next) {
  userService.getById(req.params.id)
    .then(user => user ? res.json(user) : res.sendStatus(404))
    .catch(err => next(err));
}

function update(req, res, next) {
  userService.update(req.params.id, req.body)
    .then(() => res.json({}))
    .catch(err => next(err));
}

function _delete(req, res, next) {
  userService.delete(req.params.id)
    .then(() => res.json({}))
    .catch(err => next(err));
}
/*
usersController
    .post('/', async (req, res, next) => {
        try {
            const user = await User.create(req.body);
            res.status(201).send(user);
        } catch (error) {
            if (error.name === 'MongoError' && error.code === 11000) {
              res.status(500).send({message: 'User already exists!'})
            } else {
              errorHandler.badRequest(error.message, next);
            }
        }
    });

usersController
    .put('/:id', async (req, res, next) => {
        try {
            const user = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { $upsert: true, new: true });
            res.status(204).send(user);
        } catch (error) {
            errorHandler.badRequest(error.message, next);
        }
    });

usersController
    .get('/', async (req, res, next) => {
        let page = parseInt(req.query.page) || 1;
        const users = await User.paginate({}, {
            select: 'email firstName lastName birthday gender',
            page: page,
            limit: 5
        });
        res.status(200).send(users);
    });
usersController
  .post('/login', async (req, res, next) => {
    try {
      const user = await User.findOne({email: req.body.email});
      if (user && bcrypt.compareSync(req.body.password, user.hash)) {
        const { hash, ...userWithoutHash } = user.toObject();
        const token = jwt.sign({ sub: user.id }, config.secret);
        res.status(200).send(...userWithoutHash, token);
      }
    } catch (error) {
      errorHandler.badRequest(error.message, next);
    }
  });
usersController
    .get('/:id', async (req, res, next) => {
        try {
            const user = await User.findById(req.params.id);
            res.status(200).send(user);
        } catch (error) {
            errorHandler.notFound(error.message, next);
        }
    });
usersController
    .delete('/:id', async (req, res, next) => {
        try {
            const user = await User.deleteOne({ _id: req.params.id })
            res.status(204).send(user);
        } catch (error) {
            errorHandler.badRequest(error.message, next);
        }
    });*/
