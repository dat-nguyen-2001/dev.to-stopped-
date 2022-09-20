"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = exports.Post = exports.User = void 0;
const user_entity_1 = require("./user.entity");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return user_entity_1.User; } });
const post_entity_1 = require("./post.entity");
Object.defineProperty(exports, "Post", { enumerable: true, get: function () { return post_entity_1.Post; } });
const comment_entity_1 = require("./comment.entity");
Object.defineProperty(exports, "Comment", { enumerable: true, get: function () { return comment_entity_1.Comment; } });
const entities = [user_entity_1.User, post_entity_1.Post, comment_entity_1.Comment];
exports.default = entities;
//# sourceMappingURL=index.js.map