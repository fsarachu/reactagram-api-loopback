'use strict';

const {app, expect} = require('../common');

const Post = app.models.Post;

describe('It should resolve', function() {
  it('a Post.find', function() {
    return Post.find().then((res) => console.log(res));
  });
});
