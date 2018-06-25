/* To Do:
  For view count:
  Keep track of UserIDs on post
*/
const uuidv4 = require('uuid/v4');

const knex = require('../../database/db.js');
const { _joinUser, httpCodes } = require('./helpers.js')

const {
  SUCCESS_CODE,
  CREATED_CODE,
  NOT_FOUND_ERROR,
  USER_ERROR,
  SERVER_ERRROR,
} = httpCodes;

const _responseHandler = async (response) => {
  const sent = [];
  for (let i = 0; i < response.length; i++) {
<<<<<<< HEAD
<<<<<<< HEAD
    const { id, userId } = response[i];
    const votes = await knex('votes').distinct('userId').select().where({ parentId: id });
    const [ user ] = await knex('user').where({ id: userId });
=======
    const { id } = response[i];
    const votes = await knex('votes').where({ parentId: response[i].id });
>>>>>>> c43dc0cc3312b65d6f977c07f9da252c1ddaf37b
=======
    const votes = await knex('votes')
      .where({ parentId: response[i].id });
>>>>>>> e49df1b385c232379e9bd37ebc713d3f12817e97

    sent.push({
      ...response[i],
      upvotes: votes.filter(v => v.voteType === 'INC').length,
      downvotes: votes.filter(v => v.voteType === 'DEC').length,
    });
  }
  return sent;
};

const getPosts = (req, res) => {
  const { page = 1, filter } = req.params;
  const limit = 20;

  const fetch = (() => {
    if (typeof filter === 'number') {
      return knex('post').where({ categoryId: filter });
    } else if (filter === 'newest') {
      return knex('post').orderBy('createdAt', 'desc');
    } else {
      return knex('post');
    }
  })();

  fetch
    .limit(limit)
    .offset((page - 1) * limit)
    .join( ..._joinUser('post') )
    .then(_responseHandler)
    .then(response => res.status(SUCCESS_CODE).json(response))
    .catch(err => res.status(SERVER_ERRROR).json({ err }));
};

const searchPosts = (req, res) => {
  const { query } = req.params;
  const rawQuery =  'SELECT * FROM post WHERE content LIKE "%' + query + '%"';

  knex.raw(rawQuery)
    .join( ..._joinUser('post') )
    .then(([response]) => {
      res.status(SUCCESS_CODE).json(response);
    })
    .catch((error) => {
      res.status(USER_ERROR).json(error);
    })
}

const getPostById = (req, res) => {
  const { id } = req.params;

  knex('post')
    .where({ id })
    .join( ..._joinUser('post') )
    .then(async ([ response ]) => {

      knex('post')
        .where({ id })
        .update({ viewCount: ++response.viewCount });
      
      // const [ user ] = await knex('user')
      //   .where({ id: response.userId });

      res.status(SUCCESS_CODE).json({ ...response });
    })
    .catch((error) => {
      res.status(NOT_FOUND_ERROR).json({
        message: "The post was not found or no longer exists.",
        database_error: error,
      });
    });
};

const createPost = (req, res) => {
  const id = uuidv4();
  const {
    title, content, userId, categoryId,
  } = req.body;

  if (!title || !content ) {
    return res.status(USER_ERROR).json({
      error: 'Posts MUST contain a title and content',
      title, content,
    });
  }
  
  knex.insert({
    id, title, content, userId, categoryId,
  }).into('post')
    .then((response) => {
      res.status(CREATED_CODE).json({ success: response });
    })
    .catch((error) => {
      res.status(USER_ERROR).json({ error });
    });
};

const editPost = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  const updatedAt = knex.fn.now();

  knex('post')
    .where({ id })
    .update({ title, content, updatedAt })
    .then((response) => {
      res.status(SUCCESS_CODE).json({ success: response });
    })
    .catch((error) => {
      res.status(USER_ERROR).json({ error });
    });
};

const deletePost = (req, res) => {
  const { id } = req.params;

  knex('post')
    .where({ id })
    .del()
    .then((response) => {
      res.status(SUCCESS_CODE).json({ success: response });
    })
    .catch((error) => {
      res.status(USER_ERROR).json({ error });
    });
};

module.exports = {
  getPosts,
  searchPosts,
  getPostById,
  createPost,
  editPost,
  deletePost,
};
